const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
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
  getSubmitButton() {
    return $('button[type="submit"]');
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
    return this.successMsg.getHTML(false);
  }
    /**
     * overwrite specifc options to adapt it to page object
     */
  open () {
      return super.open('');
  }
}

module.exports = new LoginPage();
