import {sections} from "./sections";
import {routes} from "./modules/routes";

(function () {
    'use strict';
    const app = {
        init() {
            sections.toggle('home')
            routes.init()
        }
    }

    app.init()
})()