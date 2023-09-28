// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('ProductName', (prodName) => { 
    cy.get('.card-title').each(($el , index ,$list) =>{
        if($el.text().includes(prodName))
        {
            cy.get('.btn.btn-info').eq(index).click()
         }
        })
 })

 Cypress.Commands.add('loginAPI', () => {
    cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login",{
        "userEmail": "ankit.barfa26@gmail.com",
        "userPassword": "Barfa@786"
      }).then(function(response){
        expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token);

      })
 })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })