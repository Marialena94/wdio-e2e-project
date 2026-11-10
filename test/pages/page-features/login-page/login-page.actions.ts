import { UICommonActions } from '../../../utils/ui-common.actions';
import { TIMEOUT } from '../../../utils/ui-common.constants';
import loginPagePom from './login-page.pom';

class LoginPageActions extends UICommonActions {

    async loginUser(username: string, password: string): Promise<void> {
        await this.setUsername(username);
        await this.setPassword(password);
        console.log('USERNAME BEING USED:', username);
        console.log('Password being passed:', password ? 'Loaded' : 'Missing');

        await this.clickLoginButton();
    }

    async setUsername(username: string): Promise<void> {
        const usernameInput = loginPagePom.usernameInputElement;
        await this.waitForDisplayed(usernameInput, 5000, 'Username input');
        await usernameInput.setValue(username);
    }

    async setPassword(password: string): Promise<void> {
        const passwordInput = loginPagePom.passwordInputElement;
        await this.waitForDisplayed(passwordInput, 5000, 'Password input');
        await passwordInput.setValue(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.click(loginPagePom.loginButtonElement, TIMEOUT.ELEMENT_MS, 500, 'loginButtonElement');
    }
}

export default new LoginPageActions();