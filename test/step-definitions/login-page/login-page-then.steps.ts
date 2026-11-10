import { Then } from '@wdio/cucumber-framework';
import loginPageValidations from '../../pages/page-features/login-page/login-page.validations';

Then('the login error message should be displayed', async () => {
    await loginPageValidations.validateLoginErrorMessage();
});
