import {helpers} from "./helpers";
import routie from "../vendors/route";
import {content} from "./content";
import {api} from "./api";
import {sections} from "../sections";
import {collections} from "./collections";

// Checks the hash location of the website
export const routes = {
    init() {
        routie({
            '': function () {
                sections.toggle('home')
            },
            'memes': function () {
                // Checks if data is already there and if not, do API request
                if (collections.all.length === 0) {
                    api.requestApi()
                } else {
                    content.listPage()
                }

                helpers.htmlElement('.sort input').addEventListener('change', content.listPage)
                sections.toggle('memes')
            },
            'memes/:name': function (name) {
                // Checks if data is already there and if not, do API request
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