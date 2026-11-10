import { Then } from '@wdio/cucumber-framework';
import cartPageValidations from '../../pages/page-features/cart-page/cart-page.validations';
import type { IProduct } from '../../pages/page-features/product-page/product-page.actions';
import { World } from '../../utils/world';

Then(
    'all selected products are displayed with correct names and prices on the cart page',
    async function (this: World) {
        const selectedProducts =
            this.getTestData<IProduct[]>('selectedProducts');

        if (!selectedProducts) {
            throw new Error('Selected products were not found in World test data.');
        }

        await cartPageValidations.validateCartProducts(selectedProducts);
    }
);

