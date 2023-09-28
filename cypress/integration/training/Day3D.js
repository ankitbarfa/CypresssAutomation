describe('Test case',function(){
    it('my test',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[type="checkbox"]').click()
    })
})


