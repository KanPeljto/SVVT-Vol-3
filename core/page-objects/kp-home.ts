import { By, Key, WebDriver, until } from "selenium-webdriver";
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
    
    
    //search field
    private search=By.id('keywords');
    private searchBtn=By.xpath('//button[@class="Button_base__Pz8U1 Button_big__6JOpp ButtonSearch_search__nLSRu ButtonSearch_isBlue__4Wdib"]');
    //listings following
    private addToFollowingBtn=By.xpath('//*[@id="__next"]/div/div[3]/div/div/div[2]/section[1]/div[2]/section[1]/div[2]/div/button');
    private listingLink=By.xpath('//a[@href="/automobili/toyota/toyota-rav4/oglas/160981218?filterId=2023197765"]');
    private followingTab=By.xpath('//a[@href="/moj-kp/pratim"]');
    private rav4Listing=By.xpath('//div[@class="AdItem_name__RhGAZ"]');
    private remListing = By.xpath('//div[@id="__next"]//div//div//div[2]//div//div//div[2]//section[3]//section//article//div//div[5]//button');

    // change settings
    private myAccount = By.xpath('//*[@id="__next"]/div/div[3]/div/div/div[1]/div[1]/section/ul/li[16]/a');
    private mySettings = By.xpath('//*[@id="__next"]/div/div/div[2]/div/div/div[2]/section/section[1]/div[1]/a');
    private myName = By.xpath('//input[@id="name"]');
    private city = By.xpath('//*[@id="__next"]//div//div//div[2]//div//div//div[2]//section[2]//form//div[1]//section[2]//div[2]//div');
    private cityInput = By.id('//*[@id="react-select-locationId-input"]');
    private phoneNumber = By.id('phone');
    private submitChanges = By.xpath('//*[@id="__next"]//div//div//div[2]//div//div//div[2]//section[2]//form//div[3]//button');

    //misc
    private cookiesBtn = By.xpath('//*[@id="__next"]/div/div[7]/div/div/div[2]/button');
    private currencyBtn = By.id('react-select-currencyFrom-input');
    private amount = By.id('amount')

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
        await this.waitForElement(this.messages, 2000);
        await this.findAndClick(this.messages);
    }

    async checkWelcomeMessage(){
        await this.waitForElement(this.welcomeMessage, 2000);
        await this.checkMatchingElements(this.welcomeMessage, testData.kupujuemprodajem.dobrodosli);
    }

    async fillSearchField(){
        await this.fillInputField(this.search,"toyota rav4");
    }

    async clickSearchBtn(){
        await this.findAndClick(this.searchBtn);
    }

    async clickListing(){
        await this.findAndClick(this.listingLink);
    }

    async addToFollowing(){
        await this.findAndClick(this.addToFollowingBtn);

    }

    async clickFollowTab(){
        await this.findAndClick(this.followingTab);
    }

    async verifyFollowing(){
        await this.checkMatchingElements(this.rav4Listing,"Toyota RAV4");
    }

    async removeListing(){
        await this.findAndClick(this.remListing);
    }

    async openMyAccount(){
        await this.findAndClick(this.myAccount);
    }

    async openMySettings(){
        await this.findAndClick(this.mySettings);
    }

    async acceptCookies(){
        await this.waitForElement(this.cookiesBtn, 5000);
        await this.findAndClick(this.cookiesBtn);
    }

    async changeSettings(){
        await this.findAndClick(this.myName);
        await this.clearInput(this.myName);
        await this.fillInputField(this.myName, testData.user.name);
        await this.driver.sleep(1500);
        await this.clearInput(this.phoneNumber);
        await this.fillInputField(this.phoneNumber, testData.user.number);
        await this.findAndClick(this.submitChanges);
    }

    async convertToRsd(amount){
        await this.clearInput(this.amount);
        await this.fillInputField(this.amount, amount);
    }
}
