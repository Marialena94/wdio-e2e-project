import { TIMEOUT } from '../../../utils/ui-common.constants';
import { UICommonValidations } from '../../../utils/ui-common.validations';
import checkoutInfoPagePom from './checkoutInfo-page.pom';

class CheckOutInfoPageValidations extends UICommonValidations {

    async validateCheckOutInfoPageDisplayed(): Promise<void> {
        await this.expectElementDisplayed(
            checkoutInfoPagePom.checkOutInfoTitleElement,
            'Checkout: Your Information page Title',
            TIMEOUT.ELEMENT_MS
        );

        const title = await checkoutInfoPagePom.checkOutInfoTitleElement.getText();

        await expect(title).toBe('Checkout: Your Information');
    }

}

export default new CheckOutInfoPageValidations();