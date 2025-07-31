const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const ContactListPage = require('../../pages/ContactListPage');

test.describe('Login Tests', () => {
  let loginPage;
  let contactListPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    contactListPage = new ContactListPage(page);
    await page.goto("/");
  });

  test('User is able to login with valid credentials', async ({ page }) => {
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await expect(page).toHaveURL(/contactList/);
    // await expect(contactListPage.logoutButton).toBeVisible();
  });

  test('User is unable to login with valid email and invalid password', async ({ page }) => {
    await loginPage.login(process.env.USER_EMAIL, 'invalidpassword');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Incorrect username or password');
  });

  test('User is unable to login with invalid email and valid password', async ({ page }) => {
    await loginPage.login('invalid@test.com', process.env.USER_PASSWORD);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Incorrect username or password');
  });

  test('User is able to logout', async ({ page }) => {
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await contactListPage.clickLogout();
    await expect(page).toHaveURL('/');
    await expect(loginPage.emailInput).toBeVisible();
  });
});