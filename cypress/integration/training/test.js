/// <reference types='cypress'/>
describe('description',function(){
    before(() => {
        cy.fixture('testexample').then(function(data){
            this.data =data
        })
      })
   
    it('test',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('select').select(this.data.gender)
       
    })
})
