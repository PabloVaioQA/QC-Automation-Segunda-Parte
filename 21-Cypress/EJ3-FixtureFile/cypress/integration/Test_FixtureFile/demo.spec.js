//demo-data-driven-test.cy.js
describe('Data driven testing Demo', () => {
    let signUpData
    before(() => {
    cy.fixture('ejemplo').then((data) => {
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