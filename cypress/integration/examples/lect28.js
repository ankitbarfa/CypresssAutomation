describe('My test Suite ', function(){
    it('my test case',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck()
        cy.get('input[type="checkbox"]').check(['option2','option3'])
    })
})