/// <reference types='cypress'/>

import MyHomePage from '../ProJObject/MyHomePage'
describe('description',function(){
    before(() => {
        cy.fixture('testexample').then(function(data){
            this.data =data
        })
      })
    it('test',function(){
        const myHomePage = new MyHomePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        myHomePage.getGender().select(this.data.gender)
        myHomePage.getNameField().type(this.data.name)
        myHomePage.getEmpStatus().check()


        
    })
})
