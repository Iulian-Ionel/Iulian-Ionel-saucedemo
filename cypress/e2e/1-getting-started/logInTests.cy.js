import * as usernames from "../../fixtures/Users/users";
import LoginPage from "../../fixtures/pageObjects/page/login/loginPageObjects";
let login = new LoginPage();

describe("Various Log In attemps with various user types as well as with incorrect or missing fields.", () => {
    it("should login with valid credentials", () => {
        cy.logIn(usernames.standardUser, usernames.userPassword);
        cy.logOut();
    });
    it("should attempt to log in without a user and must be faced with an error message", () => {
        cy.attemptLogin("", usernames.userPassword);
        login
            .logInErrorMessage()
            .should("be.visible")
            .invoke("text")
            .should("contain", "Epic sadface: Username is required");
    });

    it("should attempt to log in without a user and must be faced with an error message", () => {
        cy.attemptLogin(usernames.standardUser, "");
        login
            .logInErrorMessage()
            .should("be.visible")
            .invoke("text")
            .should("contain", "Epic sadface: Password is required");
    });

    it("should attempt to connect with a wrong username and a wrong password", () => {
        cy.attemptLogin(usernames.wrongUser, usernames.wrongUserPassword);
        login
            .logInErrorMessage()
            .should("be.visible")
            .invoke("text")
            .should(
                "contain",
                "Epic sadface: Username and password do not match any user in this service"
            );
    });

    it("should attempt to connect with a locked out user", () => {
        cy.attemptLogin(usernames.lockedOutUser, usernames.userPassword);
        login
            .logInErrorMessage()
            .should("be.visible")
            .invoke("text")
            .should(
                "contain",
                "Epic sadface: Sorry, this user has been locked out."
            );
    });

    it("Should Log in with a problem user then log out", () => {
        cy.logIn(usernames.problemUser, usernames.userPassword);
        cy.logOut();
    });

    it("Should Log in with a performance_glitch_user then log out", () => {
        cy.logIn(usernames.performanceUser, usernames.userPassword);
        cy.logOut();
    });

    it("Should Log in with a error_user then log out", () => {
        cy.logIn(usernames.errorUser, usernames.userPassword);
        cy.logOut();
    });
});
