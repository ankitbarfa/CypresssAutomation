
import HomePage from '../pageObject/HomePage'
describe('THis is my Test', function(){
    before(() => {
        cy.fixture('test').then(function(data){
            this.data =data
        })
      })

    it('test case ',function(){
        const homepage = new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homepage.getName().type(this.data.name)
       // homepage.getEditBox().click()
        homepage.getGender().select(this.data.gender)
        
    })
})