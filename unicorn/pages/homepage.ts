//Create a HomePage to declare properties of Home Page, methods that act on the properties

import { expect, Locator, Page } from "playwright/test";
const { BasePage } = require('../pages/basepage');



exports.HomePage =  class HomePage extends BasePage
{

    readonly page:Page;
    readonly profileIcon:Locator;
    readonly logoutBTN:Locator;
    readonly propertyAddressTXT:Locator;
    readonly dealNumberTXT:Locator;



    constructor(page:Page)
    {
        super(page);
        this.profileIcon = page.getByText('R J', { exact: true });
        this.logoutBTN = page.getByText('Logout ', { exact: true });
        this.propertyAddressTXT = page.getByPlaceholder('Enter Address');
        this.dealNumberTXT = page.getByPlaceholder('Enter Deal Number');

    }

    async verifyWelcomePage()
    {
       await expect(this.profileIcon).toBeVisible();
    }

    async verifyLogoutButton()
    {
        await this.profileIcon.click();
        await expect(this.logoutBTN).toBeVisible();
    }

    async createDeal(property_address,deal_number)
    {
        await this.propertyAddressTXT.fill(property_address);
        await this.dealNumberTXT.fill(deal_number);
        await this.page.waitForTimeout(500000);

    }



}