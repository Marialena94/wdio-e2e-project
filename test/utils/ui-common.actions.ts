import type { ChainablePromiseElement } from 'webdriverio';
import { TIMEOUT } from './ui-common.constants';
import logger from '../utils/logger.ts';

export type TUIElement = ChainablePromiseElement;

export class UICommonActions {

    /**
    * Performs a click action with visibility, enabled and clickability checks.
    * Includes a recovery mechanism for intercepted clicks and an optional wait after clicking.
    */

    async click(
        element: TUIElement,
        timeout = TIMEOUT.ELEMENT_MS,
        waitAfterClickMs = 0,
        elementName = 'Element',
    ): Promise<void> {
        await this.waitForDisplayed(element, timeout, elementName);
        await this.waitForEnabled(element, timeout, elementName);
        await this.waitForClickable(element, timeout, elementName);

        await element.click();

        if (waitAfterClickMs > 0) {
            await new Promise(resolve => setTimeout(resolve, waitAfterClickMs));
        }
    }

    async waitForDisplayed(
        element: TUIElement,
        timeout = TIMEOUT.ELEMENT_MS,
        elementNameOrOptions?:
            | string
            | {
                elementName?: string;
                timeoutMsg?: string;
            },
        timeoutMsg?: string,
    ): Promise<boolean> {
        let elementName: string | undefined;
        let customTimeoutMsg: string | undefined;

        if (typeof elementNameOrOptions === 'string') {
            elementName = elementNameOrOptions;
            customTimeoutMsg = timeoutMsg;
        } else if (
            typeof elementNameOrOptions === 'object' &&
            elementNameOrOptions !== null
        ) {
            elementName = elementNameOrOptions.elementName;
            customTimeoutMsg = elementNameOrOptions.timeoutMsg;
        }

        const name = elementName ?? 'Element';

        await element.waitForDisplayed({
            timeout,
            timeoutMsg:
                customTimeoutMsg ||
                `${name} was not displayed after ${timeout / 1000} seconds`,
        })
        return true;
    }

    async waitForEnabled(
        element: TUIElement,
        timeout: number = TIMEOUT.ELEMENT_MS,
        elementName?: string
    ): Promise<boolean> {
        const name = elementName ?? 'Element';
        await element.waitForEnabled({
            timeout,
            timeoutMsg: `${name} was not enabled after ${timeout / 1000} seconds`,
        });
        return true;
    }

    async waitForClickable(
        element: TUIElement,
        timeout: number = TIMEOUT.ELEMENT_MS,
        elementName?: string
    ): Promise<boolean> {
        const name = elementName ?? 'Element';
        await element.waitForClickable({
            timeout,
            timeoutMsg: `${name} was not clickable after ${timeout / 1000} seconds`,
        });
        return true;
    }

}
export default new UICommonActions();