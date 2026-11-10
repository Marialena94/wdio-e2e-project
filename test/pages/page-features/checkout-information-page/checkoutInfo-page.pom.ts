import { TUIElement } from "../../../utils/ui-common.actions";

export class CheckoutInfoPagePom {
    private checkOutInformationTitle = '//span[@data-test="title"]';
    private firstNameInput = '//input[@data-test="firstName"]'
    private lastNameInput = '//input[@data-test="lastName"]'
    private postalCodeInput = '//input[@data-test="postalCode"]'
    private continueButton = '//input[@data-test="continue"]'

    public get firstNameElement(): TUIElement {
        return $(this.firstNameInput);
    }

    public get lastNameElement(): TUIElement {
        return $(this.lastNameInput);
    }

    public get postalCodeElement(): TUIElement {
        return $(this.postalCodeInput);
    }

    public get continueButtonElement(): TUIElement {
        return $(this.continueButton);
    }

    public get checkOutInfoTitleElement(): TUIElement {
        return $(this.checkOutInformationTitle);
    }

}
export default new CheckoutInfoPagePom();