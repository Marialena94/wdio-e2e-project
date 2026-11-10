import { Then } from '@wdio/cucumber-framework';
import checkoutCompletePageValidations from '../../pages/page-features/checkout-complete-page/checkoutComplete-page.validations';

Then('the order confirmation message should be displayed on checkout page', async () => {
    await checkoutCompletePageValidations.validateOrderConfirmationMessage(
        'Thank you for your order!'
    );
});