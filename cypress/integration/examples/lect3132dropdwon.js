/// <reference types="Cypress" />
describe('My test Suite ', function(){
    it('my test case',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('select').select('Option2').should('have.value','option2')

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($e1 , index, $list) =>{ 
            if($e1.text()==="India"){
                cy.wrap($e1).click()
            }

        })


    })
})