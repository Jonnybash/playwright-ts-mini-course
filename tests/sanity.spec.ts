import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import UserCredentials from '../helpers/USerCredentials';
import ApplicationURL from '../helpers/ApplicationURL';

test('Sanity Test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication();
  
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('yonatan');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('bashiri');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('123456');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="reset-sidebar-link"]').click();
  await page.locator('[data-test="reset-sidebar-link"]').click();
  await page.locator('[data-test="reset-sidebar-link"]').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});

test('Demo Test', async ( {page} ) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication(UserCredentials.LOCKED_OUT_USER, UserCredentials.USER_PASSWORD);
});

test('Demo Test2', async ( {page} ) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication(); 
    
}); 