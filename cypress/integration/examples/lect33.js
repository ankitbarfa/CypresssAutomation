/// <reference types="Cypress" />
describe("My Test Suite", function(){
    it("My first Test case", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[value ="radio2"]').click()
    })})