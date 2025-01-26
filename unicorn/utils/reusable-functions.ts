import { Page } from "@playwright/test";

const { BasePage } = require('../pages/basepage');
const { DateTime } = require('luxon');


exports.ReusableFunctions =  class ReusableFunctions extends BasePage
{

    readonly page:Page;

    constructor(page:Page)
    {
        super(page);
        this.page = page;
    }

    async createScreenshot(page:Page)
    {    
        let scrName = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
        scrName = scrName.split(' ').join('_');
        scrName = scrName.split(':').join('_');
        scrName = scrName.split('pm IST').join(' ');
        scrName = scrName.split('am IST').join(' ');
        let fs = require('fs');
        let dir = './'+scrName;
        let scrPath = dir;       
        fs.mkdirSync('./screenshots/'+dir);
        scrName = scrName.concat("",'.png');
        console.log(scrName);
        page.screenshot({ path: './screenshots/'+dir+'/'+scrName });


    }


}



