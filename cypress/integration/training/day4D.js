/// <reference types="cypress" />
describe('My test ',function(){

    it('first test',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.get('input[value="radio2"]').check()
        cy.get('input[type="radio"]').check(['radio2','radio3'])
    })
})







