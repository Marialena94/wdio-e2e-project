
import { UICommonActions } from '../../../utils/ui-common.actions';
import { TIMEOUT } from '../../../utils/ui-common.constants';
import productPagePom from './product-page.pom';

export interface IProduct {
    name: string;
    price: string;
}

class ProductPageActions extends UICommonActions {

    async clickCartIcon(): Promise<void> {
        await this.click(productPagePom.cartIconElement, TIMEOUT.ELEMENT_MS, 500, 'cartIconElement');
    }

    async sortByPriceLowToHigh(): Promise<void> {
        const sortDropdown = productPagePom.sortPriceElement;

        await this.waitForDisplayed(sortDropdown, 5000, 'Sort Dropdown');

        await sortDropdown.selectByAttribute('value', 'lohi');
    }

    async addCheapestProductsToCart(productCount: number): Promise<IProduct[]> {

        const productNames = await productPagePom.productNameElements;
        const productPrices = await productPagePom.productPriceElements;
        const addToCartButtons = await productPagePom.addToCartButtonElements;

        if (productCount > productNames.length) {
            throw new Error('Not enough products available.');
        }

        const selectedProducts: IProduct[] = [];

        for (let i = 0; i < productCount; i++) {

            const name = await productNames[i].getText();
            const price = await productPrices[i].getText();

            selectedProducts.push({ name, price });

            await addToCartButtons[i].click();
        }

        return selectedProducts;
    }
}
export default new ProductPageActions();