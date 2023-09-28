/// <reference types="cypress" />
describe('My test ',function(){

    it('first test',function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(4) > .card > .card-footer > .btn').click()
        cy.get(':nth-child(3) > .card > .card-footer > .btn').click()
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()


        
      
    })
})



