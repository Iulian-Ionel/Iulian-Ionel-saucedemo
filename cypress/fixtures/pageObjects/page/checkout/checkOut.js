class CheckOut {
    CheckOutFirstNameField() {
        return cy.get("#first-name");
    }

    CheckOutLastNameField() {
        return cy.get("#last-name");
    }

    CheckOutPostalCode() {
        return cy.get("#postal-code");
    }
    CheckOutContinueButton() {
        return cy.get("#continue");
    }
    CheckOutCancelButton() {
        return cy.get("#cancel");
    }
    CheckOutFinishButton() {
        return cy.get("#finish");
    }
    CheckOutErrorMessageContainer() {
        return cy.get('[data-test="error"]');
    }
}
export default CheckOut;
