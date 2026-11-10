import { TUIElement } from "../../../utils/ui-common.actions";

export class CartPagePom {
    private cartPageTitle = '//span[@data-test="title"]';
    private cartItemNames = '//div[@data-test="inventory-item-name"]';
    private cartItemPrices = '//div[@data-test="inventory-item-price"]';
    private checkoutButton = '//button[@data-test="checkout"]'

    public get cartItemNameElements(): ReturnType<typeof $$> {
        return $$(this.cartItemNames);
    }

    public get cartItemPriceElements(): ReturnType<typeof $$> {
        return $$(this.cartItemPrices);
    }

    public get cartPageTitleElement(): TUIElement {
        return $(this.cartPageTitle);
    }

    public get checkoutButtonElement(): TUIElement {
        return $(this.checkoutButton)
    }
}
export default new CartPagePom();