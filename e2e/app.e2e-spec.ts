import { AppFeConfPage } from './app.po';

describe('app-fe-conf App', function() {
  let page: AppFeConfPage;

  beforeEach(() => {
    page = new AppFeConfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
