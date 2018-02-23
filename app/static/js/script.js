
(function () {
    'use strict';
    const app = {
        init() {
            sections.toggle('home')
            routes.init()
        }
    }

    // API to request data from meme generator
    const api = {
        apiKey: '893dfe6c-e0e7-4693-8a9e-5df5de998357',
        pageNumberByDay: new Date().getDay(),
        requestApi(name) {
            const reqSettings = new Request('http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageIndex=' + this.pageNumberByDay + '&pageSize=12&days=&apiKey=' + this.apiKey, {
                method: 'get',
                headers: new Headers({
                    'Content-Type': 'text/plain'
                })
            });

            const request = async () => {
                helpers.htmlElement('.loader').classList.add('active')
                try {
                    const response = await fetch(reqSettings);
                    const data = await response.json();

                    collections.all = data.result;
                    helpers.htmlElement('.loader').classList.remove('active')

                    if (helpers.htmlElement('.error').classList.contains('active')) {
                        helpers.htmlElement('.error').classList.remove('active')
                    }

                    if (name) {
                        content.detailPage(name)
                    }

                    else {
                        content.listPage()
                    }

                } catch (err) {
                    helpers.htmlElement('.loader').classList.remove('active')
                    helpers.htmlElement('.error').classList.add('active')
                }

            }

            request();
        }
    }

// Checks the hash location of the website
    const routes = {
        init() {
            routie({
                '': function () {
                    sections.toggle('home')
                },
                'memes': function () {
                    if (collections.all.length === 0) {
                        api.requestApi()
                    } else {
                        content.listPage()
                    }
                    // collections.all.length === 0 ? api.requestApi() : null;
                    sections.toggle('memes')
                },
                'memes/:name': function (name) {
                    if (collections.all.length === 0) {
                        api.requestApi(name)
                    } else {
                        content.detailPage(name);
                    }
                    sections.toggle('details')
                }
            })
        }
    }

    const sections = {
        // Shows the section that matches with the route
        toggle(hash) {
            helpers.htmlElements('section').forEach(function (el) {
                el.classList.add('hidden')
                if (el.id === hash) {
                    el.classList.remove('hidden')
                }
            })
        }
    }

    const content = {
        listPage() {
            const directives = {
                displayName: {
                    // Some names have a space at the end. The replace removes that space so the won't be an extra - at the end of the string when the spaces are replaced with -
                    href(params) {
                        return "#memes/" + this.href;
                    }
                }
            }

            Transparency.render(document.getElementById('memeslist'), collections.map(), directives);
        },
        detailPage(name) {
            const directives = {
                image: {
                    src(params) {
                        return this.imageUrl
                    }
                }
            }
            Transparency.render(document.getElementById('details'), collections.filter(name), directives);

        }


    }

    const collections = {
        all: [],
        map() {
            const memeData = this.all.map((obj) => {
                return {
                    displayName: obj.displayName,
                    imageUrl: obj.imageUrl,
                    href: obj.displayName.toLowerCase().replace(/ $/, "").split(' ').join('-')
                }
            })
            return memeData
        },
        filter(name) {
            const memeData = this.map()
            const selectedMeme = memeData.filter((obj) => {
                return obj.href === name;
            })
            return selectedMeme
        }
    }

    const helpers = {
        htmlElement(element) {
            return document.querySelector(element)
        },
        htmlElements(elements) {
            return document.querySelectorAll(elements)
        }
    }

    app.init()
})()