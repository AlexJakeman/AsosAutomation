import { it } from 'mocha';
import NavigateAndAcceptCookies from '../Fixtures/example';

describe('Visit Asos and assert product added to basket', () => {
  it('navigates to asos, adds to basket and asserts that item is in basket', () => {
    const asos = new NavigateAndAcceptCookies();
    asos.navigateToAsos();
    asos.acceptCookies();
    asos.searchForProduct();
    asos.addToSavedItems();
    asos.addToBasket();
    asos.assertItemInBasket();
  })
}),

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
