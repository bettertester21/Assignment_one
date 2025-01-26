import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";

const { LoginPage } = require('../pages/loginpage');
const testdata = JSON.parse(JSON.stringify(require('../testdata/testdata.json')));

let browser:Browser;
let browserContext:BrowserContext;
let page:Page;
let loginPage;
let item,index;
let url,username,password;

test.beforeAll('Run before all test',async() => {
    browser = await chromium.launch( { headless:false } );   
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    loginPage = new LoginPage(page);
})


test('Login Test using valid credentials', async() => {
        
        url = testdata.loginpage.url;
        username = testdata.loginpage.username;
        password = testdata.loginpage.password;    
        await loginPage.navigateToUrl(url);
        await loginPage.loginToUnicorn(username,password);
})
