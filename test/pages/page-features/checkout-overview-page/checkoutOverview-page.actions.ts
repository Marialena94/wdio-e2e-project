
import { UICommonActions } from '../../../utils/ui-common.actions';
import { TIMEOUT } from '../../../utils/ui-common.constants';
import checkoutOverviewPagePom from './checkoutOverview-page.pom';

class CheckoutOverviewActions extends UICommonActions {

    async clickFinishButtonButton(): Promise<void> {
        await this.click(checkoutOverviewPagePom.finishButtonButtonElement, TIMEOUT.ELEMENT_MS, 500, 'finishButtonButtonElement');
    }
}
export default new CheckoutOverviewActions();