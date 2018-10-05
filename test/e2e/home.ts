import { Key, browser, by, element } from 'protractor';
import { HomePage } from './home.po';

describe('/', () => {

    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it('should display the correct headline', () => {
        page.navigateTo();

        expect(page.getHeadline()).toEqual('The Timing Object');
    });

    it('should go to the next slide', () => {
        page.navigateTo();

        element(by.tagName('body')).sendKeys(Key.ARROW_RIGHT);

        /*
         * @todo Unfortunately an arbitrary call browser.sleep() is used here as both element(by.tagName('body')).allowAnimations(false)
         * and browser.waitForAngular() have no effect.
         */
        browser.sleep(1000);

        expect(page.getSubHeadline()).toEqual('About me');
    });

});
