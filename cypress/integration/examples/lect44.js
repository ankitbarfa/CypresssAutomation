describe('THis is my Test', function(){

    it('test case ',function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
    })
    before(function(){
        cy.fixture("example").then(function(data){
            this.data= data
        })
        
    
    })
})
