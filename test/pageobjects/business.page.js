const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BusinessPage extends Page {
    /**
     * define selectors using getter methods
     */
  get title() { return super.title(); }
}

module.exports = new BusinessPage();
