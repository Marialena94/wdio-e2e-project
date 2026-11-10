import { TIMEOUT } from '../../../utils/ui-common.constants';
import { UICommonValidations } from '../../../utils/ui-common.validations';
import checkoutCompletePagePom from './checkoutComplete-page.pom';

class CheckoutCompleteValidations extends UICommonValidations {

    async validateOrderConfirmationMessage(expectedMessage: string): Promise<void> {

        await this.expectElementDisplayed(
            checkoutCompletePagePom.orderConfirmationMessageElement,
            'Order Confirmation Message',
            TIMEOUT.ELEMENT_MS
        );

        const actualMessage =
            await checkoutCompletePagePom.orderConfirmationMessageElement.getText();

        await expect(actualMessage).toBe(expectedMessage);
    }

}
export default new CheckoutCompleteValidations();