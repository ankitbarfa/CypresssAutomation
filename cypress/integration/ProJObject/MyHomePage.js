class MyHomePage
{
    getNameField(){
    return cy.get(":nth-child(1) > .form-control")
    }
    getGender(){
        return cy.get("select")
    }
    getEmpStatus(){
        return cy.get(".form-check-input")
    }
}
export default MyHomePage

