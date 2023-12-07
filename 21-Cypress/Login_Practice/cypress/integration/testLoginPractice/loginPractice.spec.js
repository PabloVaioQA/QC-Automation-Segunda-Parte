context('Cy Practice Test Automation', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Test de Login', () =>{

        cy.get('#username').type("student").should('have.value', 'student');
        cy.get('#password').type("Password123").should('have.value', 'Password123');
        cy.get('#submit').click();
        cy.get('.post-title').contains("Logged In Successfully");
    })
    
})