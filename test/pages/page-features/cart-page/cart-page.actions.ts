import { UICommonActions } from '../../../utils/ui-common.actions';
import { TIMEOUT } from '../../../utils/ui-common.constants';
import cartPagePom from './cart-page.pom';

class CartPageActions extends UICommonActions {

    async clickCheckoutButton(): Promise<void> {
        await this.click(cartPagePom.checkoutButtonElement, TIMEOUT.ELEMENT_MS, 500, 'checkoutButtonElement');
    }
}
export default new CartPageActions();