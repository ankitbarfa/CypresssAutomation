describe ('My test fun', function(){
    it('test case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
       // cy.get(".product").should("have.length", 4)
        cy.get(".product:visible").should("have.length", 4)
        cy.get(".products").as("testaliase") 
       cy.get("@testaliase").find(".product").eq(3).contains("ADD TO CART").click()
       cy.get("@testaliase").find(".product").each(($el , index , $list)=>
       {
        const textveg = $el.find(".product-name").text()
        if (textveg.includes('Capsicum')) {
            $el.find('button').click()
            console.log("test log")                        
        }
       })
    })
})