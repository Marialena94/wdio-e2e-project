import { TUIElement } from "../../../utils/ui-common.actions";

export class LoginPagePom {
    // Login dialog selectors
    private usernameInput = '//input[@data-test="username"]'
    private passwordInput = '//input[@data-test="password"]'
    private loginButton = '//input[@data-test="login-button"]'

    public get usernameInputElement(): TUIElement {
        return $(this.usernameInput);
    }

    public get passwordInputElement(): TUIElement {
        return $(this.passwordInput);
    }

    public get loginButtonElement(): TUIElement {
        return $(this.loginButton);
    }

    //Error message validation selector
    public get loginErrorMessage(): TUIElement {
        const xpath = '//h3[@data-test="error"]';
        return $(xpath)
    }

}

export default new LoginPagePom();