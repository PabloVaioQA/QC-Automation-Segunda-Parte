context('Login con archivo Fixture', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture("datosLogin").as("datos")
    })

    it('Test Login 01', () =>{
        //cy.fixture("datosLogin").as("datos"); //Si se usa solo en el TestCase
        
        //cy.fixture('nombres').as('names')
        cy.get("@datos").then(datos.name);
        cy.get('#fc8f3543-936f-b040-fa7e-afcd3c2c3d16').type(datos.name);
        /*
        cy.get("@names").then(names => {
            names.names.forEach(name => {
                cy.get('#fc8f3543-936f-b040-fa7e-afcd3c2c3d16').type(name)
                //cy.get('#cd0200a8-daca-7377-76f4-1626b73868d2').type(dato.password);
                
            });
        });
        */

        cy.fixture("contraseñas").as("passwords");
        cy.get("@passwords").then(passwords => {
            passwords.passwords.forEach(password => {
                
                cy.get('#cd0200a8-daca-7377-76f4-1626b73868d2').type(password);
                
            });
        });
    
    })
 
})