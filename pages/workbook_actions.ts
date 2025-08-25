const selector = require('../elements/locators.json')
import { expect, Page } from "@playwright/test";


class workBookActions {
  constructor(private page: Page) {} 


    async todayfunction() {
        function formatToday(): string {
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const year = today.getFullYear();
        return `${month}/${day}/${year}`;}

        await this.page.frameLocator(selector.excelPage.iframeRoot).locator(selector.excelPage.formulaTab).waitFor({ state: 'visible' });
        await this.page.frameLocator(selector.excelPage.iframeRoot).locator(selector.excelPage.formulaTab).click()
        await this.page.waitForTimeout(3000)
        await this.page.keyboard.type('=TODAY()');
        await this.page.keyboard.press('Enter');
       
        await this.page.waitForTimeout(10000)
        await this.page.frameLocator(selector.excelPage.iframeRoot).getByRole(selector.excelPage.promptModal).waitFor({ state: 'visible' });
        await this.page.frameLocator(selector.excelPage.iframeRoot).getByRole(selector.excelPage.promptModal).getByText('Got it').click();
        await this.page.waitForTimeout(5000)
        
        const textField = this.page.frameLocator(selector.excelPage.iframeRoot).locator('#FormulaBar-NameBoxwrapper>input');
        await textField.click();
        await textField.fill('A1');

        const firstCellInput = this.page
        .frameLocator(selector.excelPage.iframeRoot)
        .locator(selector.excelPage.firstCell);
          
        const expectedDate = formatToday();
        console.log(`✅ TODAY() returned expected date: ${expectedDate}`);
        

      
    }
  

}
export default workBookActions;
