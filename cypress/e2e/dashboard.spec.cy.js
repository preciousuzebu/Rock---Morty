import { dashboardPage } from "../PageObject/dashboard";


const dashboard = new dashboardPage()


describe('login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Validate that a superfan can search for a character using their first name', () => {
        dashboard.clickCharactefirstName()
    })

    it('Validate that a superfan can search for a character using their last name', () => {
        dashboard.clickCharracterlastName()
    })

})
