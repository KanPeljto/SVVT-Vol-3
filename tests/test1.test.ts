import { Builder, By, WebDriver } from "selenium-webdriver";
import  BasePage  from "../core/page-objects/base-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { KpHome } from "../core/page-objects/kp-home";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let kp: KpHome;


beforeAll(async () => {
    driver = await createDriver(testData.url.kp);
    kp = new KpHome(driver);
},10000);


test("registration", async () => {
    //await etsyPage.clickPopUp();
   await kp.clickRegister();
   await kp.enterEmail();
   await kp.enterPassword();
   await kp.repeatPassword();
   await kp.checkTerms();
   await kp.submitReg();
},30000);


//afterAll(async () => {
  //  await quitDriver(driver);
//},10000);