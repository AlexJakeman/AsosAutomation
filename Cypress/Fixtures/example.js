import { dropdownsizemenu } from "./pagebjects"
import { acceptcookiesbtn } from "./pagebjects"
import { addtobasketbtn } from "./pagebjects"
import { dropdownoption } from "./pagebjects"
import { searchsubmitbtn } from "./pagebjects"
import { searchbar } from "./pagebjects"

class asosAddToBasketAndAssert{
    navigate() {
        cy.visit("https://www.asos.com/")
    }
    acceptCookies() {
        cy.visit('https://www.asos.com')
        cy.wait(4000)
        // cy.get('button').contains("That's ok").click()
        cy.get(acceptcookiesbtn).click()
    }
    searchForProduct() {
        cy.get(searchbar).type('116779768')
        cy.get(searchsubmitbtn).click()
    }
    addToBasket() {
        // cy.get('select').contains('Please select').click()
        // cy.get('option').contains('').click()
        cy.select(dropdownsizemenu).click()
        cy.get(dropdownoption).click()
        cy.get(addtobasketbtn).click()
    }
}


export default asosAddToBasketAndAssert


