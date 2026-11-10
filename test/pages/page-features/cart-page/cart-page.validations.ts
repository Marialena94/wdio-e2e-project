import { TIMEOUT } from '../../../utils/ui-common.constants';
import { UICommonValidations } from '../../../utils/ui-common.validations';
import cartPagePom from './cart-page.pom';
import type { IProduct } from '../product-page/product-page.actions';

class CartPageValidations extends UICommonValidations {

    async validateCartPageDisplayed(): Promise<void> {
        await this.expectElementDisplayed(
            cartPagePom.cartPageTitleElement,
            'Cart Page Title',
            TIMEOUT.ELEMENT_MS
        );

        const title = await cartPagePom.cartPageTitleElement.getText();

        await expect(title).toBe('Your Cart');
    }

    async validateCartProducts(expectedProducts: IProduct[]): Promise<void> {

        const nameElements = await cartPagePom.cartItemNameElements;
        const priceElements = await cartPagePom.cartItemPriceElements;

        const actualProducts: IProduct[] = [];

        for (let i = 0; i < nameElements.length; i++) {
            actualProducts.push({
                name: await nameElements[i].getText(),
                price: await priceElements[i].getText()
            });
        }

        await expect(actualProducts).toEqual(expectedProducts);
    }

}
export default new CartPageValidations();