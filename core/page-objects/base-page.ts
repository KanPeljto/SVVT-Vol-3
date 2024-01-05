import { By, WebDriver, WebElement, until } from "selenium-webdriver";
export default class BasePage {
    protected driver: WebDriver;


    constructor(driver: WebDriver) {
        this.driver = driver;
    }
    async getTitle(){
        return await this.driver.getTitle();
    }
    async checkMatchingElements(selector: By, matchingItem: string){
        const element = await this.driver.findElement(selector);
        const elementText = await element.getText();
        this.driver.expect(elementText).toMatch(matchingItem);
    }
    async checkTitle(page: { getTitle: () => Promise<string>}, page_title: string){
        let title = await page.getTitle();
        this.driver.expect(title).toMatch(page_title);
    }  
    async waitAndClick(elementLocator, timeout) {
        await this.driver.wait(
            until.elementLocated(elementLocator), timeout).click();
    }
   
    async waitForElement(elementLocator, timeout) {
        return this.driver.wait(until.elementLocated(elementLocator), timeout);
    }
    async hoverElement(element: WebElement) {
        const actions = this.driver.actions({ bridge: true });
        await actions
                    .move({ duration: 2000, origin: element, x: 0, y: 0 })
                    .perform();
    }
async scrollToElement(element: WebElement): Promise<void> {
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    }

    async fillInputField(inputField: By, text: string) {
        await (await this.driver.findElement(inputField)).sendKeys(text);
    }

    async findAndClick(selector: By){
        const element = this.driver.findElement(selector);
        await element.click();
    }


}
