/// <reference types="cypress" />
describe('My test ',function(){

    it('first test',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.product').should("have.length",5)
        cy.get('.products').find('.product').eq(1).contains("ADD TO CART").click()
    })
})



