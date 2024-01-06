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

    // login

    private logInBtn = By.xpath('//*[@id="__next"]//div//div[3]//div//div//div//div//section//div//div//ul//li[2]//button[@class="Button_base__Pz8U1 Button_big__6JOpp ButtonPrimaryBlue_primaryBlue__Uz5k1 MyKpMenu_loginButton__BGK_f"]');
    private logInSubmit = By.xpath('/html/body/div[2]/div/div/aside/div/div/div[2]/main/div[2]/form/button');

    // poruke

    private messages = By.xpath('//*[@href="/moj-kp/poruke/inbox"]//span[2]');
    private welcomeMessage = By.xpath('//*[@id="__next"]/div/div/div[2]/div/div/div[2]/form/section[2]/div[2]/a/div/div[1]'); //copied xpath

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

    async clickLogIn(){
        await this.findAndClick(this.logInBtn);
    }

    async submitLogIn(){
        await this.findAndClick(this.submitLogIn);
    }


    async openMessages(){
        await this.findAndClick(this.messages);
    }

    async checkWelcomeMessage(){
        await this.checkMatchingElements(this.welcomeMessage, testData.kupujuemprodajem.welcomemessage);
    }

}
