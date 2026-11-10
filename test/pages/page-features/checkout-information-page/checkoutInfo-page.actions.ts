import { UICommonActions } from '../../../utils/ui-common.actions';
import { TIMEOUT } from '../../../utils/ui-common.constants';
import cartPagePom from '../cart-page/cart-page.pom';
import checkoutInfoPagePom from './checkoutInfo-page.pom';

class CheckOutInfoPageActions extends UICommonActions {

    async clickCheckoutButton(): Promise<void> {
        await this.click(cartPagePom.checkoutButtonElement, TIMEOUT.ELEMENT_MS, 500, 'checkoutButtonElement');
    }

    async fillCheckoutInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ): Promise<void> {

        await this.waitForDisplayed(
            checkoutInfoPagePom.firstNameElement,
            TIMEOUT.ELEMENT_MS,
            'First Name'
        );
        await checkoutInfoPagePom.firstNameElement.setValue(firstName);

        await this.waitForDisplayed(
            checkoutInfoPagePom.lastNameElement,
            TIMEOUT.ELEMENT_MS,
            'Last Name'
        );
        await checkoutInfoPagePom.lastNameElement.setValue(lastName);

        await this.waitForDisplayed(
            checkoutInfoPagePom.postalCodeElement,
            TIMEOUT.ELEMENT_MS,
            'Postal Code'
        );
        await checkoutInfoPagePom.postalCodeElement.setValue(postalCode);
    }

    async clickContinueButton(): Promise<void> {
        await this.click(checkoutInfoPagePom.continueButtonElement, TIMEOUT.ELEMENT_MS, 500, 'continueButtonElement');
    }
}
export default new CheckOutInfoPageActions();