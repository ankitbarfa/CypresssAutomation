describe ('Test Suite ', function(){
    it('My test case',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('cu')
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART')
        console.log("test ankit")
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegname =$el.find('.product-name').text()
        if(vegname.includes('Capsicum')){
            cy.wrap($el).find('button').click()
        }

        })

    })
})