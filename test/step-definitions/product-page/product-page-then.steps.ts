import { Then } from '@wdio/cucumber-framework';
import productPageValidations from '../../pages/page-features/product-page/product-page.validations';

Then('exactly "{int}" products are displayed on the product page', async (productCount: number) => {
    if (productCount === 6) {
        await productPageValidations.validateProductCount(productCount);
    } else {
        throw new Error(`Expected product count to be 6, but got ${productCount}`);
    }
})

Then('the first product displayed is the cheapest on the product page', async () => {
    await productPageValidations.validateFirstProductIsCheapest();
});

Then(
    'the cart badge with {int} is displayed on the product page',
    async (expectedCount: number) => {
        await productPageValidations.validateCartBadgeCount(expectedCount);
    }
);