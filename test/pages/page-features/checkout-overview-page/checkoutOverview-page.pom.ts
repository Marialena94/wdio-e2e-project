import { TUIElement } from "../../../utils/ui-common.actions";

export class CheckoutOverviewPagePom {
    private checkOutOverviewTitle = '//span[@data-test="title"]';
    private finishButton = '//button[@data-test="finish"]'

    public get checkOutTitleOverViewElement(): TUIElement {
        return $(this.checkOutOverviewTitle);
    }

    public get finishButtonButtonElement(): TUIElement {
        return $(this.finishButton);
    }
}
export default new CheckoutOverviewPagePom();