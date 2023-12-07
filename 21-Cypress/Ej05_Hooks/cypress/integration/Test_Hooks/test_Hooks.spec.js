/// <reference types='cypress'/>

context('Variables 02', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Test 01 - New User Signup', () => {

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[type="text"]').type("Pablo");
        cy.get('.signup-form > form > [type="email"]').type("pablo@mail.com");
        cy.get('.signup-form > form > .btn').click();

        cy.get('#id_gender1').click()
        cy.get('#password').type("123")
        //cy.get('#days').click()
        cy.get('#days').select(13)
        cy.get('#months').select("January")
        cy.get('#years').select("2000")

        cy.get('#newsletter').click()
        cy.get('#optin').click()

        cy.get('#first_name').type('Pablo')
        cy.get('#last_name').type('Vaio')
        cy.get('#company').type('Globant')
        cy.get('#address1').type('Avenida siempre viva')
        cy.get('#address2').type('Calle inventada 222')
        cy.get('#country').select("Canada")
        cy.get('#state').type('Empire State')
        cy.get('#city').type('Springfield')
        cy.get('#zipcode').type('5555')
        cy.get('#mobile_number').type('0800555444')

        cy.get('.login-form > form > .btn').click()
        cy.get('b').should('exist')
    })

    it('Test 02 - Login to your account', () => {

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('.login-form > form > [type="email"]').type("pablo@mail.com")
        cy.get('[type="password"]').type("123")
        cy.get('.login-form > form > .btn').click()
        cy.get('a').contains(' Logged in as ')
        cy.get('b').should('have.text','Pablo')
    })

    it('Test 03 - Delete accound', () => {

        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

    })

})