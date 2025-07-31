const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const ContactListPage = require('../../pages/ContactListPage');
const AddContactPage = require('../../pages/AddContactPage');

test.describe('Contact CRUD Operations', () => {
  let loginPage;
  let contactListPage;
  let addContactPage;
  const random3Digits = Math.floor(Math.random() * 900) + 100;
  

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    contactListPage = new ContactListPage(page);
    addContactPage = new AddContactPage(page);
    
    await page.goto('/');
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await page.waitForSelector("#myTable tr");
  });

  test.afterEach(async () => {
    await contactListPage.clickLogout();
  });

  test('User is able to add new contact', async ({ page }) => {
    const emailTxt = `testuser${random3Digits}@example.com`;
    const beforeCount = await contactListPage.getContactCount();
    await contactListPage.clickAddContact();
    await expect(page).toHaveURL(/addContact/);
    await addContactPage.fillContactForm("test",`${random3Digits}`, "2025-01-01", emailTxt, "8001234567", "address1", "address2", "testCity", "testState", "95684", "testCountry");
    await addContactPage.submitContactForm();
    await page.waitForSelector("#myTable tr");
    const afterCount = await contactListPage.getContactCount();
    expect(afterCount).toBe(beforeCount + 1);
  });

  test('User is able to view contact details', async ({ page }) => {
    await contactListPage.contactRows.first().click();
    await expect(page).toHaveURL(/contactDetails/);
    await expect(page.locator('h1')).toContainText('Contact Details');
  });

  test('User is able to edit contact', async ({ page }) => {
    await contactListPage.contactRows.first().click();
    await page.locator('#edit-contact').click();
    await page.waitForSelector("#firstName");
    await page.locator('#firstName').clear();
    await addContactPage.firstNameInput.fill(`First ${random3Digits}`);
    await page.locator('#lastName').clear();
    await addContactPage.lastNameInput.fill(`last ${random3Digits}`);
    await addContactPage.submitButton.click();
    await expect(page.locator('h1')).toContainText('Contact Details');
    await page.waitForSelector("#firstName");
    await expect(page.locator('#firstName')).toContainText(`First ${random3Digits}`);
    await expect(page.locator('#lastName')).toContainText(`last ${random3Digits}`);
  });

  test('User is able to delete contact', async ({ page }) => {
    const initialCount = await contactListPage.getContactCount();
    await contactListPage.contactRows.first().click();
    await page.waitForSelector("#delete");
    page.once('dialog', dialog => dialog.accept());
    await page.locator('#delete').click();
    await page.waitForSelector("#myTable tr");
    const newCount = await contactListPage.getContactCount();
    expect(newCount).toBe(initialCount > 0 ? initialCount - 1 : 0);
  });
});