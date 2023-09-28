/// <reference types="cypress" />
describe('My test ',function(){

    it('first test',function(){
        Cypress.config('defaultCommandTimeout', 20000)
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(4) > .card > .card-footer > .btn').click()
        cy.get(':nth-child(3) > .card > .card-footer > .btn').click()
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        cy.wait(10000);
        cy.get('.suggestions > ul > li > a').click()
 
    })
})





