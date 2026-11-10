import { Given } from '@wdio/cucumber-framework';
import cartPageActions from '../../pages/page-features/cart-page/cart-page.actions';
import checkoutInfoPageValidations from '../../pages/page-features/checkout-information-page/checkoutInfo-page.validations';

Given('the user succeeds in proceeding to checkout page', async () => {
    await cartPageActions.clickCheckoutButton()
    await checkoutInfoPageValidations.validateCheckOutInfoPageDisplayed()
});