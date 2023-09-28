describe('THis is my Test', function(){
    it('test case ',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       // cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})