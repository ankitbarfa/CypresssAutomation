
describe('THis is my Test', function(){
    before(() => {
        cy.fixture('test').then(function(data){
            this.data =data
        })
      })

    it('test case ',function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(":nth-child(2) > .nav-link").click()
        this.data.ProductName.forEach(function(element){   
            cy.productName(element)    
        });
        
    })
})