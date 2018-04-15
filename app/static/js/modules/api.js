import { helpers } from "./helpers";
import { collections } from "./collections";
import { content } from "./content";

// API to request data from meme generator
export const api = {
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
            try {
                // Success handler
                const response = await fetch(reqSettings);
                const data = await response.json();

                collections.all = data.result;
                helpers.htmlElement('.loader').classList.remove('active')

                if (helpers.htmlElement('.error').classList.contains('active')) {
                    helpers.htmlElement('.error').classList.remove('active')
                }

                // If name is true, a detail page is requested and will be filled with the content of the API
                if (name) {
                    content.detailPage(name)
                }

                // If name is false, the overview page is requested and will be filled with the content of the API
                else {
                    content.listPage()
                }

            } catch (err) {
                // Error handler shows message in the DOM that the API request failed
                helpers.htmlElement('.loader').classList.remove('active')
                helpers.htmlElement('.error').classList.add('active')

            }

        }

        request();
    }
}