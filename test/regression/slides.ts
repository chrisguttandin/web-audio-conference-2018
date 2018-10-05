import { browser, by } from 'protractor';
import { elementShotMatchers, expectElementShot, resembleElementShot } from 'element-shot';

const IS_SMOKE_TEST = !!process.env.IS_SMOKE_TEST;

const navigateTo = (path: string) => {
    return browser.get((IS_SMOKE_TEST) ? `https://chrisguttandin.github.io/web-audio-conference-2018${ path }` : path);
}

describe('slides', () => {

    let defaultTimeout: number;

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = defaultTimeout;
    });

    beforeEach(() => {
        defaultTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;
        jasmine.addMatchers(elementShotMatchers);
    });

    describe('first slide', () => {

        it('should look the same', async () => {
            navigateTo('/');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.3, 2.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

        it('should look the same', async () => {
            navigateTo('/slides/1');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.3, 2.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('second slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/2');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-2');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(3.1, 3.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('third slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/3');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-3');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.7, 2.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('fourth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/4');

            await new Promise((resolve) => setTimeout(resolve, 100000));

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-4');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(1.8, 2.0);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('fifth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/5');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-5');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(1.7, 1.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('sixth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/6');

            await new Promise((resolve) => setTimeout(resolve, 100000));

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-6');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(1.7, 1.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('seventh slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/7');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-7');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.9, 3.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('eighth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/8');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-8');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.9, 3.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('nineth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/9');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-9');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(3.4, 3.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('tenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/10');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-10');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(8.5, 8.7);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('eleventh slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/11');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-11');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(6.1, 6.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twelveth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/12');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-12');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(13.2, 13.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/13');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-13');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(3.6, 3.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    // @todo This test currently fails on Travis with an undebuggable 'RangeError: Index out of range' thrown deep inside of pngjs.
    if (!process.env.TRAVIS) {

        describe('fourteenth slide', () => {

            it('should look the same', async () => {
                navigateTo('/slides/14');

                const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-14');

                expectElementShot(result).toBeRegressionFree();
            });

        });

    }

    describe('fifteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/15');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-15');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(3.3, 3.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('sixteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/16');

            await new Promise((resolve) => setTimeout(resolve, 100000));

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-16');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(4.1, 4.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('seventeenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/17');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-17');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(3.6, 3.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('eighteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/18');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-18');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(7.6, 7.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('nineteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/19');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-19');

            if (process.env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(6.9, 7.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

});
