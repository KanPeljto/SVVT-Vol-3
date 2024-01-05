import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));




export class KpHome extends BasePage {
    private regButton = By.xpath('//*[@href="/registracija"]');
    private email = By.id('email');
    private password = By.id('password');
    private repeatedPassword = By.xpath('//*[@id="repeatedPassword"]');
    private terms = By.xpath('//*[@id="__next"]/div/div[2]/div/section/div[1]/section/div/form/span[1]/label/span[1]');
    private ageTerms = By.xpath('/html/body/div[1]/div/div[2]/div/section/div[1]/section/div/form/span[2]/label/span[1]');
    private submit = By.xpath('//*[@id="__next"]/div/div[2]/div/section/div[1]/section/div/form/button');


    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickRegister() {
        await this.findAndClick(this.regButton);
    }

    async enterEmail(){
        await this.fillInputField(this.email, testData.user.email);
    }

    async enterPassword(){
        await this.fillInputField(this.password, testData.user.password);
    }

    async repeatPassword(){
        await this.fillInputField(this.repeatedPassword, testData.user.password);
    }

    async submitReg(){
        await this.findAndClick(this.submit);
    }

    async checkTerms(){
        await this.findAndClick(this.terms);
        await this.findAndClick(this.ageTerms);
    }


}
