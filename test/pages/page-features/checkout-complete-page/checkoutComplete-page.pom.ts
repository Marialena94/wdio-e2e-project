import { TUIElement } from "../../../utils/ui-common.actions";

export class CheckoutCompletePagePom {
    private orderConfirmationMessage =
        '//h2[@data-test="complete-header"]';

    public get orderConfirmationMessageElement(): TUIElement {
        return $(this.orderConfirmationMessage);
    }
}
export default new CheckoutCompletePagePom();