export default class BasePage {

    baseUrl       = "https://automation-wappi.vercel.app/login";
    cookieMessage = "#ccc-close";
    
    navigate(path) {
        cy
            .visit(this.baseUrl + path)
            .get(this.cookieMessage)
            .click();
    }

    getPageTitle() {
        return cy.title()
    }

}