import { env } from 'process';
import { browser, by } from 'protractor';
import { elementShotMatchers, expectElementShot, resembleElementShot } from 'element-shot';

const navigateTo = (path: string) => {
    return browser.get(`${browser.baseUrl}${path}`);
};

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
            await navigateTo('/');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(6.4, 6.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

        it('should look the same', async () => {
            await navigateTo('/slides/1');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(6.4, 6.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('second slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/2');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-2');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.2, 3.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('third slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/3');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-3');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.8, 3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fourth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/4');

            await new Promise((resolve) => setTimeout(resolve, 100000));

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-4');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(21.8, 22);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fifth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/5');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-5');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(5.6, 5.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('sixth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/6');

            await new Promise((resolve) => setTimeout(resolve, 100000));

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-6');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(21.9, 22.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('seventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/7');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-7');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(26.8, 27);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eighth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/8');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-8');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(26.8, 27);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('nineth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/9');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-9');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.5, 3.7);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('tenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/10');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-10');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(8.4, 8.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eleventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/11');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-11');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(6.2, 6.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twelveth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/12');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-12');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(12.8, 13);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/13');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-13');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.8, 4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fourteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/14');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-14');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(7.7, 7.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fifteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/15');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-15');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.4, 3.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('sixteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/16');

            await new Promise((resolve) => setTimeout(resolve, 100000));

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-16');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(27.8, 28);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('seventeenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/17');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-17');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.7, 3.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eighteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/18');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-18');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(7.5, 7.7);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('nineteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/19');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-19');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(6.7, 6.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });
});
