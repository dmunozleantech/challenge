export class LoginPage {
    

    username     = "#username";
    password     = "#password";


diligenciarformulario(test){
    let field = cy.get(this.username);
    field.clear();
    field.type("David31982")

}
    txtUsername() {
        return cy.get('#username');
    }
    txtPassword() {
        return cy.get('#password');
    }
    btnLogin() {
        return cy.get('#button-login');
    }
}
export const loginPage = new LoginPage()