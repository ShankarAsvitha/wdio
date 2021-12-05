const LoginPage = require('../pageobjects/login.page');
const businessPage = require('../pageobjects/business.page');

describe('My Login application', () => {
    it('Enter UserName', () => {
      LoginPage.open();
      LoginPage.username('asvithashankar@gmail.com');
      LoginPage.next();
      expect(LoginPage.getPasswordField()).toBeDisplayed();
    });
    it('Enter Password', () => {
      LoginPage.password('Test@123');
      LoginPage.next();
      LoginPage.getSubmitButton().waitForDisplayed({ timeout: 3000 });
      expect(LoginPage.getSubmitButton()).toBeDisplayed();
    });  
});