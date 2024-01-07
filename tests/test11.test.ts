import { Builder, By, WebDriver } from "selenium-webdriver";
import  BasePage  from "../core/page-objects/base-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { CategoriesPage } from "../core/page-objects/categories-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

// convert currency

let driver: WebDriver;
let kp: CategoriesPage;


beforeAll(async () => {
    driver = await createDriver(testData.url.ct);
    kp = new CategoriesPage(driver);
},10000);

test("test advanced search", async()=>{
    await kp.acceptCookies();
    await kp.clickIphone();
    await kp.advancedSearch();
    await kp.priceFromField();
    await kp.clickPriceCheckBox();
    await kp.clickSearchBtn();


},30000);



// afterAll(async () => {
//    await quitDriver(driver);
// },10000);