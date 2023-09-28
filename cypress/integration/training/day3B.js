/// <reference types="cypress" />
describe('My test ',function(){

    it('first test',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').each(($el , index , $list) => {
          const textveg =$el.find('h4.product-name').text()  
          if (textveg.includes('Capsicum')) {
            cy.wrap($el).find('button').click()
          }
        })
    })
})


 



