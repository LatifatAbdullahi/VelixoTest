import { test, expect } from '@playwright/test';
import { LoginUtil } from "../pages/login_actions";
import workBookActions from "../pages/workbook_actions";

let pages: workBookActions;

test('Verifying TODAY() returns the expected date', async ({ page }) => {
  await LoginUtil.login(page)
  pages = new workBookActions(page)
  await pages.todayfunction();

 
});

