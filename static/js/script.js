import {sections} from "./modules/sections";
import {routes} from "./modules/routes";

(function () {
    'use strict';
    const app = {
        init() {
            routes.init()
        }
    }

    app.init()
})()