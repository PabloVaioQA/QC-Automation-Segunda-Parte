context('Cy Accessing elements', () => {
    
    beforeEach(() => {
        cy.visit('/');
    })

    it('Test de Loggin', () =>{

        cy.get('.form-control[type="text"]').type("Pablo");
        cy.get('.form-control[type="password"]').type("pwd");
        cy.get('#login').click();
        cy.get('#loginstatus').contains("Welcome, Pablo!");
    })
    
})