context('Cypress: Assertions ', () => {
    
    beforeEach(() => {
        cy.viewport(1280,720);
        cy.visit('/');
    })

    it('Test de Formulario', () =>{

        //Campo Full Name
        cy.get('#g4072-fullname').type("Pablo Vaio");
        cy.get('#g4072-fullname').should('have.value',"Pablo Vaio");

        //Campo Email
        cy.get('#g4072-email').type("Pablo@mail.com");
        cy.get('#g4072-email').should('have.value',"Pablo@mail.com");

        //Campo PhoneNumber
        cy.get('#g4072-phonenumber').type("0800444444");
        cy.get('#g4072-phonenumber').should('have.value',"0800444444");

        //Campo Gender
        cy.get('#g4072-gender-button').should('have.text',"Male");

        //Campo Years of experience
        cy.get('.grunion-radio-options > :nth-child(2) > .radio').click();
        cy.get('.grunion-radio-options > :nth-child(2) > .radio').should('be.checked');

        //Campo Skills
        cy.get('.grunion-checkbox-multiple-options > :nth-child(2) > .checkbox-multiple').click();
        cy.get('.grunion-checkbox-multiple-options > :nth-child(2) > .checkbox-multiple').should('be.checked');
        cy.get(':nth-child(3) > .checkbox-multiple').click();
        cy.get(':nth-child(3) > .checkbox-multiple').should('be.checked');

        //Campo QA Tools
        cy.get('#g4072-qatools-button').click();
        cy.get('#ui-id-3').click();
        cy.get('#g4072-qatools-button > .ui-selectmenu-text').should('have.text',"Cypress");

        //Campo Other Details
        cy.get('#contact-form-comment-g4072-otherdetails').type("Master of Cypress Automation");
        cy.get('#contact-form-comment-g4072-otherdetails').should('have.value',"Master of Cypress Automation");

        //Boton Sudmit!
        cy.get('.wp-block-jetpack-button > .wp-block-button__link').click();

        //Check Sucefull - Cotrolo el mensaje de que el Fomulario fue enviado
        cy.get('#contact-form-success-header').should('exist');
        cy.get('#contact-form-success-header').should('have.text', "Your message has been sent");
        
        
    })
    
    
})