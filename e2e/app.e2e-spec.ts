import { Ng2ChartsTestPage } from './app.po';

describe('ng2-charts-test App', function() {
  let page: Ng2ChartsTestPage;

  beforeEach(() => {
    page = new Ng2ChartsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
