import HomePage from "./HomePage"
describe('THis is my Test', function(){

    it('test case ',function(){
        const homePage = new HomePage()
        homePage.gender().select(this.data.gender)

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
