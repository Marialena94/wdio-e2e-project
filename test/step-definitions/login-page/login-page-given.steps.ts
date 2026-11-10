import { Given } from '@wdio/cucumber-framework';

import basePage from '../../pages/base-page';
import productPageValidations from '../../pages/page-features/product-page/product-page.validations';
import loginPageActions from '../../pages/page-features/login-page/login-page.actions';

Given('the user succeeds in login to the website', async () => {

    const baseUrl = process.env.BASE_URL;
    const username = process.env.SAUCE_USERNAME;
    const password = process.env.SAUCE_PASSWORD;

    if (!baseUrl || !username || !password) {
        throw new Error('BASE_URL, SAUCE_USERNAME or SAUCE_PASSWORD is missing from environment variables');
    }

    await basePage.open(baseUrl);
    await loginPageActions.loginUser(username, password);
    await productPageValidations.validateProductPageDisplayed();

});

Given('the user is on the login page', async () => {
    await basePage.open('/');
});