import { inicioPage } from '../pageObjects/InicioPage';
import { loginPage } from '../pageObjects/LoginPage';

let valueArticle1 = "";
let valueArticle2 = "";
let nameArticle1 = "";
let nameArticle2 = "";


Given('I open to page with user and password', () => {
    cy.visit('/')
    loginPage.txtUsername().type("david31982",  {delay: 100})
    loginPage.txtPassword().type("admin123",  {delay: 100}, { log: false })
    loginPage.btnLogin().click({ force: true })
  });
  And('get {string} and {string}', (article1, article2) => {
    nameArticle1 = article1;
    nameArticle2 = article2;
    inicioPage.btnInicio().click();
    inicioPage.listTable().contains('tr', article1).then(tableRow => {
      cy.wrap(tableRow).find('.button').click();
    })
    inicioPage.lblCostArticle()
    .should('have.css', "color", "rgb(255, 0, 0)")
    .invoke('text').then(text => {
        valueArticle1 = text
      })
    inicioPage.btnConfirmOrder().click();
    inicioPage.lblMensajeConfirmacion().invoke('text').then(text => {
    expect(text.trim()).to.equal('Tu pedido ha sido confirmado, te mantendremos informado ante nuevas novedades')
    })
    inicioPage.btnCloseModal().click({ force: true });
  
    inicioPage.btnInicio().click();
    inicioPage.listTable().contains('tr', article2).then(tableRow => {
    cy.wrap(tableRow).find('.button').click();
    })
    inicioPage.lblCostArticle()
    .should('have.css', "color", "rgb(255, 0, 0)")
    .invoke('text').then(text => {
    valueArticle2 = text
      })
    inicioPage.btnConfirmOrder().click();
    inicioPage.lblMensajeConfirmacion().invoke('text').then(text => {
    expect(text.trim()).to.equal('Tu pedido ha sido confirmado, te mantendremos informado ante nuevas novedades')
    })
    inicioPage.btnCloseModal().click({ force: true });
  });
  Then('Validate information in the view my orders', () => {
    inicioPage.btnMisPedidos().click();
    inicioPage.listTable().contains('tr', nameArticle1).then(tableRow => {
    cy.wrap(tableRow).find('td').eq(6).invoke('text').then(text => {
    expect(text.trim()).to.equal('No')
      })
    cy.wrap(tableRow).find('td').eq(2).invoke('text').then(text => {
    expect(text.trim()).to.equal(valueArticle1)
      })
    })
    inicioPage.listTable().contains('tr', nameArticle2).then(tableRow => {
    cy.wrap(tableRow).find('td').eq(6).invoke('text').then(text => {
    expect(text.trim()).to.equal('No')
      })
    cy.wrap(tableRow).find('td').eq(2).invoke('text').then(text => {
    expect(text.trim()).to.equal(valueArticle2)
      })
    })
  });