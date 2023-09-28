describe('My test Suite ', function(){
    it('my test case',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el , index , $list)=>{
            
            if($el.text()==="India"){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
    })
})