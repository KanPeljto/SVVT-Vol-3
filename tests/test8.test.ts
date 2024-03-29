import { Builder, By, WebDriver } from "selenium-webdriver";
import  BasePage  from "../core/page-objects/base-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { KpHome } from "../core/page-objects/kp-home";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

// convert currency

let driver: WebDriver;
let kp: KpHome;


beforeAll(async () => {
    driver = await createDriver(testData.url.kp);
    kp = new KpHome(driver);
},10000);

test("log in", async () => {
    await kp.acceptCookies();
    await kp.clickLogIn();
    await driver.sleep(3000);
    await kp.enterEmail();
    await kp.enterPassword();
    await driver.sleep(20000) // time for captcha
    //await kp.submitLogIn(); nakon captche se automatski uloguje
 },60000);

test("change information", async() => {
    await kp.openMyAccount();
    await kp.openMySettings();
    await kp.changeSettings();
}, 60000);



afterAll(async () => {
   await quitDriver(driver);
},10000);