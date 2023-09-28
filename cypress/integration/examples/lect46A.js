describe('description',function(){
    it('descript',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        cy.get(':nth-child(2) > .nav-link').click()

        cy.get('.card-title').each(($el, index , $list)=> {
            if($el.text().includes("Blackberry")){
                cy.get('button..btn.btn-info').eq(index).click()
            }
        })
    })
})