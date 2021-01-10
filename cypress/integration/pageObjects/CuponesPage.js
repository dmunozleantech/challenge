export class CuponesPage {
    listTable() {
        return cy.get('tbody');
    }
    lbltittle(){
        return cy.get('.app-title')
    }
   
}
export const cuponesPage = new CuponesPage()

