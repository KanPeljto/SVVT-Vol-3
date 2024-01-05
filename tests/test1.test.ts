import { Builder, By, WebDriver } from "selenium-webdriver";
import  BasePage  from "../core/page-objects/base-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { EtsyHome } from "../core/page-objects/etsy-home";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let etsyPage: EtsyHome;


beforeAll(async () => {
    driver = await createDriver(testData.url.etsy);
    etsyPage = new EtsyHome(driver);
},10000);


test("registration", async () => {
    //await etsyPage.clickPopUp();
   await etsyPage.clickSignIn();
   await etsyPage.clickRegister();
   await etsyPage.enterEmail();
   await etsyPage.enterName();
   await etsyPage.enterPassword();
   await etsyPage.submitReg();
},30000);


//afterAll(async () => {
  //  await quitDriver(driver);
//},10000);