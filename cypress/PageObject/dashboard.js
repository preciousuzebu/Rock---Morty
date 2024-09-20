export class dashboardPage{
    characterField = "input[type=text]"


    clickCharactefirstName() {
        cy.get(this.characterField).type('Armothy').type("{enter}")
        .should('be.visible')
    }

    clickCharracterlastName() {
        cy.get(this.characterField).type('SMITH').type("{enter}")
        .should('exist')
    }
}
