// /**
//  * App for PWA drwaer.
//  * @param {button} button  for hamburger button.
//  * @param {drawer} drawer inside drawer there is navigation.
//  * @param {content} to hide drawer.
//  * @returns {}

import DrawerInitiator from '../utils/drawer-iniator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });
        // kita bisa menginisiasikan komponen lain bila ada
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
};

export default App;