/**
 * BasePage class is a base class for all page objects in the application.
 * It provides common methods browser -related and properties that can be used by all page objects.
 */
class BasePage {

    async open(path: string): Promise<void> {
        await browser.url(path);
    }

}
export default new BasePage();

