import { CmswebPage } from './app.po';

describe('cmsweb App', () => {
  let page: CmswebPage;

  beforeEach(() => {
    page = new CmswebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
