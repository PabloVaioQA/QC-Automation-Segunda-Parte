context('Variables 02', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture("todos").as("todos"); //Si se necesita en todos los TestCase
    })

    it('Test 01', () =>{
        cy.get('.new-todo').type("Something...{enter}");
        cy.get('.todo-list li').as('items');

        cy.get('@items').should('have.length',3);
        cy.get('.todo-list li').should('have.length',3);
    })

    it('Test 02', () =>{
        //cy.fixture("todos").as("todos"); Si se usa solo en el TestCase
        cy.get("@todos").then(todos => {
            todos.todos.forEach(todo => {
                cy.get('.new-todo').type(todo + "{enter}")
            });
        });
    
    })
 
})
