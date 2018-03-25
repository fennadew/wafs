import Transparency from "../vendors/transparency.min";
import {helpers} from "./helpers";
import { collections } from "./collections";

export const content = {
    //  Fills the overview page with content recieved from the API
    listPage() {
        let data;
        if (helpers.htmlElement('.sort input').checked) {
            data = collections.sort()
        } else {
            data = collections.map()
        }

        const directives = {
            displayName: {
                // Some names have a space at the end. The replace removes that space so the won't be an extra - at the end of the string when the spaces are replaced with -
                href(params) {
                    return "#memes/" + this.href;
                }
            }
        }

        Transparency.render(document.getElementById('memeslist'), data, directives);
    },
    //  Fills the detail page with content recieved from the API
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