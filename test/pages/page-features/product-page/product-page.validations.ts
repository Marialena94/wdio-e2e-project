


import { TIMEOUT } from '../../../utils/ui-common.constants';
import { UICommonValidations } from '../../../utils/ui-common.validations';
import productPagePom from './product-page.pom';


class ProductPageValidations extends UICommonValidations {

    async validateProductPageDisplayed(): Promise<void> {
        await this.waitForUrltoContain(
            productPagePom.getProductPageUrl(),
            TIMEOUT.NAVIGATION_MS,
            'productPageUrl'
        );

        await this.expectElementDisplayed(
            productPagePom.productPageTitleElement,
            'productPageTitleElement',
            TIMEOUT.ELEMENT_MS
        );
    }

    async validateProductCount(expectedCount: number): Promise<void> {
        await this.expectValueToBe(
            async () => (await productPagePom.productItemElements).length.toString(),
            expectedCount.toString(),
            'Product Count'
        );
    }

    async validateFirstProductIsCheapest(): Promise<void> {

        const priceElements = await productPagePom.productPriceElements;

        const prices: number[] = [];

        for (const element of priceElements) {
            const priceText = await element.getText();
            const price = Number(priceText.replace('$', ''));
            prices.push(price);
        }

        if (prices.length === 0) {
            throw new Error('No product prices were found.');
        }

        const firstProductPrice = prices[0];

        for (const price of prices.slice(1)) {
            await expect(firstProductPrice).toBeLessThanOrEqual(price);
        }
    }

    async validateCartBadgeCount(expectedCount: number): Promise<void> {
        const badgeElement = productPagePom.cartBadgeElement;

        await this.expectElementDisplayed(
            badgeElement,
            'Cart badge',
            TIMEOUT.ELEMENT_MS
        );

        const actualCount = await badgeElement.getText();

        await expect(actualCount).toBe(expectedCount.toString());
    }
}
export default new ProductPageValidations();