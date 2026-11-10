import { When } from '@wdio/cucumber-framework';
import loginPageActions from '../../pages/page-features/login-page/login-page.actions';

When('the user attempts to login with a locked user to the website', async () => {
    const username = process.env.SAUCE_USERNAME2;
    const password = process.env.SAUCE_PASSWORD;

    if (!username || !password) {
        throw new Error('SAUCE_USERNAME2 or SAUCE_PASSWORD is missing from .env');
    }

    await loginPageActions.loginUser(username, password);
});
