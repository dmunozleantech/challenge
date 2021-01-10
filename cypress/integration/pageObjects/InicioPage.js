export class InicioPage {
    txtUsername() {
        return cy.get('#username');
    }
    btnMisPedidos() {
        return cy.contains('Mis pedidos');
    }
    btnObtenerCupon() {
        return cy.get('#welcome-coupon');
    }
    
    lblObtenerCupon() {
        return cy.get('#coupon-code');
    }
    btnInformacionPersonal(){
        return cy.contains('Información personal');
    }
    btnCupones(){
        return cy.contains('Cupones');
    }
    btnInicio(){
        return cy.contains('Inicio');
    }

    btnCloseModal(){
        return cy.get('#coupon-modal > .modal-content > .close');
    }

    listTable() {
        return cy.get('tbody');
    }

    txtCoupon() {
        return cy.get('#coupon');
    }
    btnConfirmOrder(){
        return cy.get('#order-confirm');
    }
    lblCostArticle(){
        return cy.get('.offer-price');
    }
    lblMensajeConfirmacion(){
        return cy.get('.confirmation-modal-info');
    }
}
export const inicioPage = new InicioPage()