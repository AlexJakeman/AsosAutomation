import { acceptcookiesbtn } from "./pagebjects"
import { saveditemsbtn } from "./pagebjects"
import { itemimg } from "./pagebjects"
import { viewbasketbtn } from "./pagebjects"
import { movetobagbtn } from "./pagebjects"
import { saveforlaterbtn } from "./pagebjects"
import { searchsubmitbtn } from "./pagebjects"
import { searchbar } from "./pagebjects"

class asosAddToBasketAndAssert{
    navigateToAsos() {
        cy.visit("https://www.asos.com/")
    }
    acceptCookies() {
        cy.visit('https://www.asos.com')
        cy.wait(4000)
        cy.get(acceptcookiesbtn).click()
    }
    searchForProduct() {
        cy.get(searchbar).type('121632372')
        cy.get(searchsubmitbtn).click()
    }
    addToSavedItems() {
        cy.get(saveforlaterbtn).click()
        cy.get(saveditemsbtn).click({ force: true })
    }
    addToBasket() {
        cy.get(movetobagbtn).click()
        cy.get(viewbasketbtn).click({ multiple: true })
    }
    assertItemInBasket() {
        cy.get(itemimg).should('be.visible')
    }
}

export default asosAddToBasketAndAssert