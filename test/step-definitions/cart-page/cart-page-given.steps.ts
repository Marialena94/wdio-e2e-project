import { Given } from '@wdio/cucumber-framework';
import productPageActions from '../../pages/page-features/product-page/product-page.actions';
import cartPageValidations from '../../pages/page-features/cart-page/cart-page.validations';

Given('the user is successfully navigated to the cart page', async () => {

    await productPageActions.clickCartIcon();

    await cartPageValidations.validateCartPageDisplayed();

});