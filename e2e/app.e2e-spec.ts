import { ANGUPage } from './app.po';

describe('angu App', function() {
  let page: ANGUPage;

  beforeEach(() => {
    page = new ANGUPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
