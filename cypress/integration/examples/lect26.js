describe('test suite',function(){

    it('first case',function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search').type('ca')
    cy.get('.products').find('.product').each(($el , index , $list)=>{
        const vegname = $el.find('h4.product-name').text()
        if (vegname.includes('Capsicum')) {
           cy.wrap($el).find('button').click()            
        }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
    })

})