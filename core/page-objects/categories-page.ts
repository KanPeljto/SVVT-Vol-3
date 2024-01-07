import {WebDriver,WebElement,until,By} from "selenium-webdriver";
import BasePage from "./base-page";

import {readFileSync} from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CategoriesPage extends BasePage{

    //search
    private searchBtn=By.xpath('//button[@class="Button_base__Pz8U1 Button_big__6JOpp ButtonSearch_search__nLSRu ButtonSearch_isBlue__4Wdib"]');



    //cookies
    private cookiesBtn = By.xpath('//*[@id="__next"]/div/div[7]/div/div/div[2]/button');


     //advanced search
     private advancedSearchBtn=By.xpath('//span[@class="Button_children__3mYJw"]');
     //private group=By.id('react-select-groupId-placeholder');
     private priceFrom=By.xpath('//input[@id="priceFrom"]');
     private priceCheckBox=By.xpath('//span[@class="Checkbox_label___QfTq"]');
     //private conditionBtn=By.xpath('//div[@class=" css-19ak9pr-control"]');
     //private condition=By.xpath('/html/body/div[1]/div/div[1]/div/div/div/div/div/div[2]/form/section/div/div[2]/div/div/div[1]/div[3]/span/div[3]/div/section/div/div');
     private iphone=By.xpath('//a[@href="/mobilni-telefoni/apple-iphone/grupa/23/489/1"]');
 


    constructor(driver:WebDriver){
        super(driver);
    }



    async acceptCookies(){
        await this.waitForElement(this.cookiesBtn, 5000);
        await this.findAndClick(this.cookiesBtn);
    }


    async advancedSearch(){
        await this.findAndClick(this.advancedSearchBtn);
    }

    async priceFromField(){
        await this.fillInputField(this.priceFrom,"50000");
    }

    async clickPriceCheckBox(){
        await this.findAndClick(this.priceCheckBox);
    }

    async clickIphone(){
        await this.findAndClick(this.iphone);
    }

    async clickSearchBtn(){
        await this.findAndClick(this.searchBtn);
    }



}