export class LoginPage {
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