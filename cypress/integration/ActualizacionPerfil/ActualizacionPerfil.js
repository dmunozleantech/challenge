import { loginPage }  from '../pageObjects/LoginPage';
import {inicioPage } from '../pageObjects/InicioPage';
import {personalInformationPage} from '../pageObjects/PersonalInformationPage';
const yourFixturePath = 'IMAG0037.jpg'

Given('I open to page with user and password {string} and {string}', (username, password) => {
    cy.visit('/')
    loginPage.txtUsername().type(username)      
    loginPage.txtPassword().type(password)
    loginPage.btnLogin()
    .should("be.visible")
    .should("have.css", "background-color", "rgb(0, 170, 0)")
    .click({force:true})
  });
   
  When('I click and into information personal form', () => {
    inicioPage.btnInformacionPersonal().click();
  })

  And('Validate initialized information', () => {
  
      personalInformationPage.txtName().invoke('val').then(text =>{
        expect(text).to.not.equal('')
      })
      personalInformationPage.txtApellido().invoke('val').then(text =>{
        expect(text).to.not.equal('')
      })
      personalInformationPage.txtDateBorn().invoke('val').then(text =>{
        expect(text).to.not.equal('')
      })
      personalInformationPage.listCountry().invoke('val').then(text =>{
        expect(text).to.not.equal('')
      })
      cy.get('.profile-content').find('[type="radio"]').then(radiButtons =>{
        cy.wrap(radiButtons)
        .should("be.checked")
      })
  });
  And('I put {string}', (image) => {
    var booValue = JSON.parse(image)
    if(booValue == true){
      personalInformationPage.loadImage().attachFile(yourFixturePath);
    }
    cy.get('#save-profile').click()
  });
   
  Then('validate confirmation {string} is present and close', (content) => {
    var booValue = JSON.parse(content)
    if(booValue == true){
      personalInformationPage.lblInformation().invoke('text').then(text => {
        expect(text).to.equal('Tu información se guardó correctamente')
    })
    }
    else{
      personalInformationPage.lblerrorMessage()
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 0, 0)")
      .invoke('text').then(text => {
        expect(text.trim()).to.equal('La imagen es requerida')
    })
    }
  });



