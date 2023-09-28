describe('Testing the new Tab', function () {
    it('New tab Opening', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.get('#navbarSupportedContent a[href*="about"]').click()
            cy.get('.pt-70 h2').should('contain','Welcome to QAClick Academy ')

        })

    })
})