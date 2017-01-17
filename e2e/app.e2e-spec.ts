import { GuestbookPage } from './app.po';

describe('guestbook App', function() {
  let page: GuestbookPage;

  beforeEach(() => {
    page = new GuestbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
