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


test("log in", async () => {
   await kp.clickLogIn();
   await driver.sleep(2000);
   await kp.enterEmail();
   await driver.sleep(3000);
   await kp.enterPassword();
   await driver.sleep(20000) // time for captcha
   await kp.submitLogIn();
},80000);


afterAll(async () => {
   await quitDriver(driver);
},10000);