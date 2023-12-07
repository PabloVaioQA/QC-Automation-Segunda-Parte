/// <reference types="Cypress" />

context('Ej 04 - Waits', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    //waiting a specific time
    it('Test 01 - Implicit Wait', () => {
        
        cy.get('#ajaxButton').click()

        cy.wait(15000);

        cy.get('.bg-success').should("contain","Data loaded with AJAX get request.")

    })

    //waiting with a BDD expectation
    it('Test 02 - BDD Exp', () => {

        cy.get('#ajaxButton').click()

        cy.get('.bg-success', {"timeout": 25000}).should('have.text', 'Data loaded with AJAX get request.')
    })

    //waiting for the service to return a response
    it.only('Test 03 - Return Response', () => {
        
        cy.intercept('GET', 'http://uitestingplayground.com/ajaxdata').as('request');

        cy.get('#ajaxButton').click()

        cy.wait('@request', {"timeout": 30000}).its('response.statusCode').should('equal', 304)

        cy.get('.bg-success').should('have.text', 'Data loaded with AJAX get request.')
    })
})