const selector = require('../elements/locators.json')
import {expect, Page} from '@playwright/test'
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '..', 'login.env') });

export class LoginUtil{
    static async login(page: Page) {
    await page.goto("/");
   // await page.setViewportSize({ width: 1530, height: 960 });
    await page.getByTestId(selector.homepage.signInButton).click();
    await page.locator(selector.signInPage.microsoftModal).waitFor({ state: 'visible' });
    await page.locator(selector.signInPage.emailField).fill(process.env.TEST_EMAIL || '');
    await page.locator(selector.signInPage.nextButton).click();
    await page.getByTestId(selector.signInPage.passwordModal).waitFor({ state: 'visible' });
    await page.locator(selector.signInPage.passwordField).fill(process.env.TEST_PASSWORD || '');
    await page.getByTestId(selector.signInPage.signInButton).click();
    await page.locator(selector.signInPage.staySignedModal).waitFor({ state: 'visible' });
    await page.getByTestId(selector.signInPage.noOptionButton).click();
    await page.getByTestId(selector.homepage.createBlankWorkbookButton).waitFor({ state: 'visible' });
    await page.getByTestId(selector.homepage.createBlankWorkbookButton).click();
    await page.frameLocator(selector.excelPage.iframeRoot).locator(selector.excelPage.homeTab).waitFor({ state: 'visible' });
   
}
}
