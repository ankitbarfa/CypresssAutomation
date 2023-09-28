/// <reference types='cypress'/>
describe('description',function(){
    before(() => {
        cy.fixture('testexample').then(function(data){
            this.data =data
        })
      })
    it('test',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength',2)
        cy.get('.form-check-input').should('be.disabled')
    })
})
