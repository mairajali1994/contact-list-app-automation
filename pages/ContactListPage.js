// const BasePage = require('./BasePage');

class ContactListPage {
  constructor(page) {
    // super(page);
    this.addContactButton = page.locator('#add-contact');
    this.contactTable = page.locator('#myTable');
    this.contactRows = page.locator('#myTable tr:not(:has(th))');
    this.logoutButton = page.locator('#logout');
  }

  async clickAddContact() {
    await this.addContactButton.click();
  }

  async getContactCount() {
    return await this.contactRows.count();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }

  async isEmailPresent(email) {
    // XPath to find exact email match in the table
    const emailLocator = this.page.locator(`//table[@id="myTable"]//tr/td[text()="${email}"]`);
    return await emailLocator.count() > 0;
  }
}

module.exports = ContactListPage;