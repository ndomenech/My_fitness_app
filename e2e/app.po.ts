import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class AppTestPage {
=======
export class Test1Page {
>>>>>>> master
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
