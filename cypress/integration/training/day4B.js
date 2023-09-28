/// <reference types="cypress" />
describe('My test ',function(){

    it('first test',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       // Static drop down
        cy.get('select').select('Option3')
        
        // Dynamic drop down
      cy.get('#autocomplete').type('ind')
      cy.get('.ui-menu-item div').each(($el, index , $list)=>{
        if($el.text()==='India'){
     cy.wrap($el).click()
      }
      })
      cy.get('#autocomplete').should('have.value',"India")
    })
})






