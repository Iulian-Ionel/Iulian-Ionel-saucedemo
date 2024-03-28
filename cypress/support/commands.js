import LoginPage from "../fixtures/pageObjects/page/login/loginPageObjects";
import SideMenu from "../fixtures/pageObjects/page/sideMenu/sideMenuPageObjects";
let login = new LoginPage();
let sideMenu = new SideMenu();

Cypress.Commands.add("logIn", (username, password) => {
    cy.visit("https://www.saucedemo.com/", { failOnStatusCode: false });
    login.usernameField().type(username);
    login.passwordField().type(password);
    login.logInButton().click();
    cy.url().should("include", "/inventory.html");
    cy.contains("Products").should("exist");
    cy.log("Log in succesful");
});

// Use this command when you need to test invalid login attempts
Cypress.Commands.add("attemptLogin", (username, password) => {
    cy.visit("https://www.saucedemo.com/", { failOnStatusCode: false });
    if (username) {
        login.usernameField().type(username);
    }
    if (password) {
        login.passwordField().type(password);
    }
    login.logInButton().click();
});

//Basic Log out  Command, will work only if the user is already logged in
Cypress.Commands.add("logOut", () => {
    sideMenu.sideMenuButton().click();
    sideMenu.sideLogOutButton().click();
    cy.url().should("not.contain", "/inventory.html");
    login.logInCredentials().should("exist");
    cy.log("Log out successful");
});

//Basic Reset APP command, this is used in order to reset the data of the application (must be used while logged in)
Cypress.Commands.add("appReset", () => {
    sideMenu.sideMenuButton().click();
    sideMenu.sideResetAppButton().click();
    cy.log("APP DATA RESET SUCCESS");
});
