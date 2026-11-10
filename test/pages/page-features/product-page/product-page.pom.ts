import { TUIElement } from "../../../utils/ui-common.actions";


export class ProductPagePom {
    // Product page selectors
    private productPageTitle = '//div[@data-test="primary-header"]';
    private productItems = '//div[@class="inventory_item"]';
    private productPage = 'https://www.saucedemo.com/inventory.html';
    private sortDropdown = '//select[@data-test="product-sort-container"]'
    private productNames = '//div[@data-test="inventory-item-name"]';
    private productPrices = '//div[@data-test="inventory-item-price"]';
    private cartIcon = '//a[@data-test="shopping-cart-link"]';


    private addToCartButtons = '//button[contains(@data-test, "add-to-cart-")]';
    private cartBadge = '//span[@data-test="shopping-cart-badge"]';

    public get cartBadgeElement(): TUIElement {
        return $(this.cartBadge);
    }

    public get cartIconElement(): TUIElement {
        return $(this.cartIcon);
    }

    public get addToCartButtonElements(): ReturnType<typeof $$> {
        return $$(this.addToCartButtons);
    }

    public get productNameElements(): ReturnType<typeof $$> {
        return $$(this.productNames);
    }

    public get productPriceElements(): ReturnType<typeof $$> {
        return $$(this.productPrices);
    }

    public get productPageTitleElement(): TUIElement {
        return $(this.productPageTitle);
    }

    public getProductPageUrl(): string {
        return this.productPage;
    }

    public get productItemElements(): ReturnType<typeof $$> {
        return $$(this.productItems);
    }

    public get sortDropdownElement(): TUIElement {
        return $(this.sortDropdown)
    }

    public get sortPriceElement(): TUIElement {
        return this.sortDropdownElement;
    }

    protected dropdownByLabel(
        labelText: string,
        contextSelector?: string
    ): TUIElement {
        const selector = contextSelector
            ? `${contextSelector} select[aria-label="${labelText}"]`
            : `select[aria-label="${labelText}"]`;

        return $(selector);
    }
}
export default new ProductPagePom();