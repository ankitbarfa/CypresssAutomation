describe('THis is my Test', function(){

    it('test case ',function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(":nth-child(2) > .nav-link").click()
        // cy.pause()
        cy.get(".card-title").each(($el , index , $list) => {
            if ($el.text().includes("Blackberry")){
                    cy.get("button.btn.btn-info").eq(index).click()
            }

        })
    })
})