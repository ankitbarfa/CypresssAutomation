/// <reference types="cypress"/>
describe('THis is my Test', function(){
    before(function(){   
        cy.fixture('test').then(function(data){
            this.data=data
        })
    })
    it('test case ',function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('form input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name) // name assertion
        cy.get('form input[name="name"]:nth-child(2)').should('have.attr','minlength',2) // legnth assertion
        cy.get('.form-check-input').should('be.disabled') // radio button is disabled 
    })
})