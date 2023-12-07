/// <reference types="Cypress" />
context('Wikipedia', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Test 01 - BDD Exp', () => {
        cy.get('#www-wikipedia-org #searchInput').type("Globant {enter}")

        cy.get(".infobox img").eq(0).should('be.visible')

        cy.get(".mediawiki #firstHeading").should("be.visible")

        cy.get(".mediawiki #firstHeading").should("contain", "Globant")
    });

    it('Test 02 - Implicit Wait', () => {
        cy.get('#www-wikipedia-org #searchInput').type("Globant {enter}")

        cy.wait(6000);

        cy.get(".mediawiki #firstHeading").should("be.visible")

        cy.get(".mediawiki #firstHeading").should("contain", "Globant")
    });
});