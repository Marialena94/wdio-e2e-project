import { UICommonActions } from '../../../utils/ui-common.actions';
import loginPagePom from './login-page.pom';

class LoginPageValidations extends UICommonActions {

    async validateLoginErrorMessage(): Promise<void> {
        await expect(loginPagePom.loginErrorMessage)
            .toHaveText('Epic sadface: Sorry, this user has been locked out.');
    }
}

export default new LoginPageValidations();