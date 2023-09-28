describe ('my tset case',function(){
it('first test', function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('cu')
})
})