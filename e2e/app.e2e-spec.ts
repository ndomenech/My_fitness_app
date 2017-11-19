<<<<<<< HEAD
import { AppTestPage } from './app.po';

describe('app-test App', function() {
  let page: AppTestPage;

  beforeEach(() => {
    page = new AppTestPage();
=======
import { Test1Page } from './app.po';

describe('test1 App', function() {
  let page: Test1Page;

  beforeEach(() => {
    page = new Test1Page();
>>>>>>> master
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
