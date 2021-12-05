/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
  open(path) {
      browser.setTimeout({ 'script': 60000 });
      return browser.url(`https://login.izettle.com/${path}`)
      
    }
  title() {
    return browser.getUrl();
    }
}
