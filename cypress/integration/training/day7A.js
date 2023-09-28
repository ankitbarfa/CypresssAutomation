/// <reference types='cypress'/>
describe('description',function(){

    before(() => {
        cy.fixture('prod').then(function(data){
            this.data =data
        })
      })
    it('test',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2)  > .nav-link').click()
        this.data.productName.forEach(function(element){
            cy.ProductName(element)
        })
      
    })
})
