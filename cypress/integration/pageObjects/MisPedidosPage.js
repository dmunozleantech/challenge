export class MisPedidosPage {
 listTable() {
    return cy.get('tbody');
}
}
export const misPedidosPage = new MisPedidosPage()