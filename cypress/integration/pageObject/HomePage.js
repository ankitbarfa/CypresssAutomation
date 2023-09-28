class HomePage {
    getEditBox(){
        return cy.get(":nth-child(2) > .nav-link").click();

    }
    getName(){
        return cy.get(":nth-child(1) > .form-control")
    }
    getGender(){
      return cy.get('select')
    }
    getShopData(){
        return cy.get(":nth-child(2) > .nav-link").click()
    }
}
export default HomePage;