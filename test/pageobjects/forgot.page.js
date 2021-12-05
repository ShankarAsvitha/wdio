const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ForgotPage extends Page {
    /**
     * define selectors using getter methods
     */
  get inputUsername () { return $('input[name=username]') }
  get inputPassword() { return $('input[type=password]') }
  get terms() { return $('input[nam=registration[terms]]')}
  get btnSubmit() { return $('button[type="submit"]') }
  get forgotPassword() { return $('#forgot-izgolink') }
  get email() { return $('input[name=email]')}
  get successMsg() { return $('.message') }
  
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
  username (username) {
    this.inputUsername.setValue(username);
  }
  getPasswordField() {
    return $('input[type=password]');
  }
  getEmailField() {
    return this.email;
  }
  next() {
    this.btnSubmit.click(); 
  }
  password(password) {
      this.inputPassword.setValue(password);
  }
  forgotPassword() {
    this.forgotPassword.click();
  }
  setEmail(email) {
    this.email.setValue(email);
  }
  getSuccessMsg() {
    return this.successMsg;
  }
  open () {
      return super.open('forgot');
  }
}

module.exports = new ForgotPage();
