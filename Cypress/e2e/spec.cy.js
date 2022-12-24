import NavigateAndAcceptCookies from '../Fixtures/example';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Visit Asos and assert product added to basket', () => {
  it('navigates to asos homepage', () => {
    const asoshomepage = new NavigateAndAcceptCookies();
    asoshomepage.navigate();
    asoshomepage.acceptCookies();
    asoshomepage.searchForProduct();
    // asoshomepage.addToBasket();
  })

})
