/// <reference types="cypress" />
describe('My test ',function(){

    it('first test',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[value="option1"]').check().should("be.checked").and("have.value",'option1')
        cy.get('input[value="option1"]').uncheck().should("not.be.checked").and("have.value",'option1')
        cy.get('input[value="option1"]').should("not.be.checked")
        cy.get('input[type="checkbox"]').check(['option3','option2'])
    })
})





