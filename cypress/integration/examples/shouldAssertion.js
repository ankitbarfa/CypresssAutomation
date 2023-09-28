/// <reference types="Cypress" />
describe("My Test Suite", function(){
    it("My first Test case", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.get('.product').should('have.length',5)
        //cy.get('.products').find('product').should('have.length',5)
        cy.get('.products').find('.product').each(($el, index ,$list) => {
             const textveg = $el.find('.product-name').text()
            if(textveg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        
    })
}) 