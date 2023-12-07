/// <reference types="Cypress" />
context('Login con archivo Fixture', () => {
    let signUpData

    beforeEach(() => {
        cy.visit('/');
        cy.fixture('datosLogin').then((data) => {
            signUpData = data;
        })
    })

    //Test de login simple por archivos separados----------------------
    it('Test 01', () =>{
        
        cy.fixture("name").as("names");

        cy.get("@names").then(names => {
            names.name.forEach(name => {
                cy.get('.form-control[type="text"]').type(name)
            });
        });

        cy.fixture("contraseñas").as("passwords");
        cy.get("@passwords").then(passwords => {
            passwords.password.forEach(password => {
                cy.get('.form-control[type="password"]').type(password)
            });
        });

        cy.get('#login').click();
    
    })

    //Test con todos los datos de datosLogin.json----------------------
    it.only('Test 02', () =>{
        
        cy.get('.form-control[type="text"]').type(signUpData.name[0]);
        cy.get('.form-control[type="password"]').type(signUpData.password[0]);
        cy.get('#login').click();
        cy.get('#loginstatus').should('have.text',"Welcome, Pablo!");
        
    })
    it.only('Test 03', () =>{
        
        cy.get('.form-control[type="text"]').type(signUpData.name[1]);
        cy.get('.form-control[type="password"]').type(signUpData.password[1]);
        cy.get('#login').click();
        cy.get('#loginstatus').should('have.text',"Welcome, Rodri!");
        
    })
    it.only('Test 04', () =>{
        
        cy.get('.form-control[type="text"]').type(signUpData.name[2]);
        cy.get('.form-control[type="password"]').type(signUpData.password[2]);
        cy.get('#login').click();
        cy.get('#loginstatus').should('have.text',"Welcome, Emily!");
        
    })

    //PRUEBA CON FOREACH (NO FUNCIONA)----------------------
    it('Test 05', () =>{
        signUpData.forEach((signUpData) => {
            cy.get('.form-control[type="text"]').type(signUpData.name);
            cy.get('.form-control[type="password"]').type(signUpData.password);
            cy.get('#login').click();
            cy.get('#loginstatus').should('have.text',"Welcome, Pablo!");
        })

    })

})

/*
//INFO EMILY
//demo-data-driven-test.cy.js
describe('Data driven testing Demo', () => {
    let signUpData
    before(() => {
    cy.fixture('example').then((data) => {
    signUpData = data;
    })
    })
    
    it('Should create user', () => {
    cy.visit('https://www.browserstack.com/users/sign_up')
    cy.get('#user_full_name').type(signUpData.fullname)
    cy.get('#user_email_login').type(signUpData.email)
    cy.get('#user_password').type(signUpData.password)
    cy.get('#tnc_checkbox').click()
    cy.get('#user_submit').click()
    })
    });
    */