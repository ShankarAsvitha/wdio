const ForgotPage = require('../pageobjects/forgot.page');
const businessPage = require('../pageobjects/business.page');

describe('My Login application', () => {
    it('Load Reset Password Page', () => {
      ForgotPage.open();
      expect(ForgotPage.getEmailField()).toBeDisplayed();
    });
  it('Enter Email to reset Password', () => {
    ForgotPage.setEmail('asvithashankar@gmail.com');
    ForgotPage.next();
  });
  it('Reset Password Success Page', () => {
    console.log("reset success msg", ForgotPage.getSuccessMsg());
     expect(ForgotPage.getSuccessMsg()).toBeDisplayed();
  })
});


