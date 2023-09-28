describe('Token session', function(){
it('my test case',function(){

    cy.loginAPI().then(function(){
        cy.visit("https://rahulshettyacademy.com/client/",{
            onBeforeLoad : function(window){
                window.localStorage.setItem('token',Cypress.env('token'))
            }
        })
    })
    cy.get(".card-body button:last-of-type").eq(1).click()
    cy.get("[routerlink*=cart]").click()
    cy.contains("Checkout").click()
    cy.get("[placeholder*=Country]").type("ind")
    cy.get(".ta-results button").each(($el, index , $list)=>{
        
        if($el.text()===" India"){
            cy.wrap($el).click()
        }
    })
    cy.get(".btnn").click()
    cy.wait(6000)
    cy.get(".order-summary button").contains("CSV").click()

    })
})