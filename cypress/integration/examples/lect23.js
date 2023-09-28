describe ('My test fun', function(){
    it('test case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
       // cy.get(".product").should("have.length", 4)
        cy.get(".product:visible").should("have.length", 4)
        var logo = cy.get(".brand_greenLogo")
logo.text()
    })
})