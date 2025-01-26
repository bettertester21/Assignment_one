//Create a LoginPage to declare properties of Logimn Page, methods that act on the properties

import { expect, Locator, Page } from "playwright/test";
// import { BasePage } from '../pages/BasePage';
const { BasePage } = require('../pages/basepage');



exports.LoginPage =  class LoginPage extends BasePage {

    readonly page: Page;
    readonly usernameTXT: Locator;
    readonly passwordTXT: Locator;
    readonly signinBTN: Locator;
    readonly signupnowBTN: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.usernameTXT = this.page.getByPlaceholder('Enter User Name');
        this.passwordTXT = this.page.getByPlaceholder('Enter Password');
        this.signinBTN = this.page.getByRole('button', { name: ' SIGN IN' });
        this.signupnowBTN = this.page.getByRole('button', { name: ' SIGN UP NOW' });
    }

    async navigateToUrl(url:string)
    {
        await this.page.goto(url);
    }

    async loginToUnicorn(user: string, pass: string) {

        await this.usernameTXT.fill(user);
        await this.passwordTXT.fill(pass);
        await this.signinBTN.click();

    }


}