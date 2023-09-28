describe('My test Suite ', function(){
    it('my test case',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //dynamic dropdown
       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get('#show-textbox').click()
       cy.get('input[value="radio1"]').check()
    })

})