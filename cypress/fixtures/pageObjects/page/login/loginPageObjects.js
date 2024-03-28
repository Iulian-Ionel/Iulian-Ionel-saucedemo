class LoginPage {
    usernameField() {
        return cy.get("#user-name");
    }

    passwordField() {
        return cy.get("#password");
    }

    logInButton() {
        return cy.get("#login-button");
    }

    logInCredentials() {
        return cy.get("#login_credentials");
    }

    logInErrorMessage() {
        return cy.get('[data-test="error"]');
    }
}
export default LoginPage;
