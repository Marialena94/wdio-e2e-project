import { When } from '@wdio/cucumber-framework';
import productPageActions from '../../pages/page-features/product-page/product-page.actions';
import { World } from '../../utils/world';

When('the user attempts to sort the products by "Price (low to high)" on the product page', async () => {
    await productPageActions.sortByPriceLowToHigh();
});

When(
    'the user attempts to add the {int} cheapest products to the cart on the product page',
    async function (this: World, productCount: number) {
        const selectedProducts =
            await productPageActions.addCheapestProductsToCart(productCount);

        this.setTestData('selectedProducts', selectedProducts);
    }
);