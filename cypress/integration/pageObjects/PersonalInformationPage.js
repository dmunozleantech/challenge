export class PersonalInformationPage {
    btnUploadImage() {
        return cy.get('.file-upload > #image');
    }
    txtName() {
        return cy.get('#name');
    }

    txtApellido() {
        return cy.get('#lastName');
    }

    listCountry(){
        return cy.get('#country');
    }

    txtDateBorn(){
        return cy.get('#bornDate');
    }
    radioGender(){
        return cy.get('.radio-container');
    }
    radioGender(){
        return cy.get('.radio-container');
    }
    btnSave(){
        return cy.get('#save-profile');
    }
    lblInformation(){
        return cy.get('.confirmation-modal-info');
    }
    btnCloseModal(){
        return cy.get('#confirmation-modal > .modal-content > .close');
    }
    lblerrorMessage(){
        return cy.get('#e-image');
    }
    loadImage(){
        return cy.get('.file-upload > #image');
    }
}
export const personalInformationPage = new PersonalInformationPage()