//Create a BasePage to initialize the Browse,BrowserContext and Page objects

import { Page } from "playwright/test";

exports.BasePage = class BasePage
{


    readonly page:Page;

    constructor(page:Page)
    {
        this.page = page;
    }

    async navigateToUrl(url:string)
    {
        await this.page.goto(url);
    }

    async waitForPageToLoad(time:number)
    {
        await this.page.waitForTimeout(time);
    }
}