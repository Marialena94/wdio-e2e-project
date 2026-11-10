import { TIMEOUT } from './ui-common.constants';
import UICommonActions, { TUIElement } from './ui-common.actions';

export class UICommonValidations {

    async expectElementDisplayed(
        element: TUIElement,
        elementName?: string,
        timeout: number = TIMEOUT.ELEMENT_MS,
    ): Promise<void> {
        await UICommonActions.waitForDisplayed(element, timeout, {
            elementName,
        });

        await expect(element).toBeDisplayed();
    }

    async expectValueToBe(
        valueGetter: () => Promise<string>,
        expectedValue: string,
        valueLabel: string = 'Element',
        timeout = TIMEOUT.ELEMENT_MS,
    ): Promise<void> {
        let lastValue = ''

        const timeoutSeconds = Math.round(timeout / 1000)
        await browser.waitUntil(
            async () => {
                try {
                    lastValue = await valueGetter();
                } catch {
                    return false;
                }

                return lastValue.trim() === expectedValue.trim()
            },
            {
                timeout, timeoutMsg: `${valueLabel} value did not match expected value after ${timeoutSeconds} seconds."`
            },
        )
        await expect(lastValue.trim()).toBe(expectedValue.trim());
    }

    async waitForUrltoContain(
        expectedUrl: string | TUIElement,
        timeoutMs: number = TIMEOUT.NAVIGATION_MS,
        timeoutMsg?: string
    ): Promise<void> {

        let expectedUrlString: string;

        if (typeof expectedUrl === 'string') {
            expectedUrlString = expectedUrl;
        } else {
            const element = $(await expectedUrl.selector);
            const href = await element.getAttribute('href');

            if (!href) {
                throw new Error(
                    `Element does not have an href attribute`
                );
            }

            expectedUrlString = href;
        }

        await browser.waitUntil(
            async () => {
                const currentUrl = await browser.getUrl();
                return currentUrl.includes(expectedUrlString);
            },
            {
                timeout: timeoutMs,
                timeoutMsg: timeoutMsg ??
                    `URL did not contain expected value after ${Math.round(timeoutMs / 1000)} seconds.`
            }
        );
    }
}

export default new UICommonValidations();