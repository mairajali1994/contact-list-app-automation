// const BasePage = require('./BasePage');

class AddContactPage {
  constructor(page) {
    // super(page);
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.birthdateInput = page.locator('#birthdate');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.street1Input = page.locator('#street1');
    this.street2Input = page.locator('#street2');
    this.cityInput = page.locator('#city');
    this.stateProvinceInput = page.locator('#stateProvince');
    this.postalCodeInput = page.locator('#postalCode');
    this.countryInput = page.locator('#country');
    this.submitButton = page.locator('#submit');
    this.cancelButton = page.locator('#cancel');
  }

  async fillContactForm(firstName, lastName, birthdate, email, phone, street1, street2, city, stateProvince, postalCode, country) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.birthdateInput.fill(birthdate);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.street1Input.fill(street1);
    await this.street2Input.fill(street2);
    await this.cityInput.fill(city);
    await this.stateProvinceInput.fill(stateProvince);
    await this.postalCodeInput.fill(postalCode);
    await this.countryInput.fill(country);
  }

  async submitContactForm() {
    await this.submitButton.click();
  }

  async cancelContactForm() {
    await this.cancelButton.click();
  }
}

module.exports = AddContactPage;