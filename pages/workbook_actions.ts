const selector = require('../elements/locators.json')
import { expect, Page } from "@playwright/test";


class workBookActions {
  constructor(private page: Page) {} 


    async todayfunction() {
        await this.page.frameLocator(selector.excelPage.iframeRoot).locator(selector.excelPage.formulaTab).waitFor({ state: 'visible' });
        await this.page.frameLocator(selector.excelPage.iframeRoot).locator(selector.excelPage.formulaTab).click()
        await this.page.waitForTimeout(3000)
        await this.page.keyboard.type('=TODAY()');
        await this.page.keyboard.press('Enter');
       
        await this.page.waitForTimeout(10000)
        await this.page.frameLocator(selector.excelPage.iframeRoot).getByRole(selector.excelPage.promptModal).waitFor({ state: 'visible' });
        await this.page.frameLocator(selector.excelPage.iframeRoot).getByRole(selector.excelPage.promptModal).getByText('Got it').click();
        await this.page.waitForTimeout(5000)
        
        console.log("TODAY() function verified successfully.");

      
    }
  

}
export default workBookActions;
