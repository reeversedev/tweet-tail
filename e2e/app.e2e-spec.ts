import { TweetTailPage } from './app.po';

describe('tweet-tail App', function() {
  let page: TweetTailPage;

  beforeEach(() => {
    page = new TweetTailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
