import { TIMEOUT } from '../../../utils/ui-common.constants';
import { UICommonValidations } from '../../../utils/ui-common.validations';
import checkoutOverviewPagePom from './checkoutOverview-page.pom';

class CheckoutOverviewValidations extends UICommonValidations {


    async validateCheckOutOverviewPageDisplayed(): Promise<void> {
        await this.expectElementDisplayed(
            checkoutOverviewPagePom.checkOutTitleOverViewElement,
            'Checkout: Your Information Page Title',
            TIMEOUT.ELEMENT_MS
        );

        const title = await checkoutOverviewPagePom.checkOutTitleOverViewElement.getText();

        await expect(title).toBe('Checkout: Overview');
    }
}



export default new CheckoutOverviewValidations();