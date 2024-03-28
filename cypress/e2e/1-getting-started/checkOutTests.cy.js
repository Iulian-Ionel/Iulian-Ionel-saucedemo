import * as usernames from "../../fixtures/Users/users";
import Item0Information from "../../fixtures/pageObjects/page/catalogMenu/Item0";
import Item1Information from "../../fixtures/pageObjects/page/catalogMenu/Item1";
import Item2Information from "../../fixtures/pageObjects/page/catalogMenu/Item2";
import Item3Information from "../../fixtures/pageObjects/page/catalogMenu/Item3";
import Item4Information from "../../fixtures/pageObjects/page/catalogMenu/Item4";
import Item5Information from "../../fixtures/pageObjects/page/catalogMenu/Item5";
import ShoppingCart from "../../fixtures/pageObjects/page/shoppingCart/shoppingCart";
import CheckOut from "../../fixtures/pageObjects/page/checkout/checkOut";
let item0 = new Item0Information();
let item1 = new Item1Information();
let item2 = new Item2Information();
let item3 = new Item3Information();
let item4 = new Item4Information();
let item5 = new Item5Information();
let cart = new ShoppingCart();
let checkOut = new CheckOut();

//We can change the user type to run the whole suite as a different user
//For instance the 1st test will fail with error_user and problem users as they cannot type in the "Last Name" field (others will fail due to not being able to add items to the cart, see cartTests.cy.js)

describe("Various checkout tests.", () => {
    beforeEach(() => {
        cy.logIn(usernames.standardUser, usernames.userPassword);
    });

    it('Add One item to the cart, clicks on the cart icon then ensure that the added items appear in the list,fills out the information form then clicks on "Checkout" button ', () => {
        item2.Item2AddToCartButton().click();
        cart.ShoppingCartContainer().click();
        item2.Item2RemoveFromCartButton().should("be.visible");
        cart.ShoppingCartCheckout().click();
        cy.url().should("include", "/checkout-step-one.html");
        checkOut.CheckOutFirstNameField().type("Firs ree tName");
        checkOut.CheckOutLastNameField().type("Last ree  Name");
        checkOut.CheckOutPostalCode().type("123123123");
        checkOut.CheckOutContinueButton().click();
        checkOut.CheckOutFinishButton().should("be.visible");
    });

    it('Add the items to the cart, clicks on the cart icon then ensure that the added items appear in the list,fills out the information form then clicks on "Cancel" button ', () => {
        item0.Item0AddtoCartButton().click();
        item1.Item1AddtoCartButton().click();
        item2.Item2AddToCartButton().click();
        item4.Item4AddToCartButton().click();
        item5.Item5AddtoCartButton().click();
        cy.get(".btn_inventory").eq(5).click();
        cart.ShoppingCartContainer().click();
        item0.Item0RemoveFromCartButton().should("be.visible");
        item1.Item1RemoveFromCartButton().should("be.visible");
        item2.Item2RemoveFromCartButton().should("be.visible");
        item4.Item4RemoveFromCartButton().should("be.visible");
        item5.Item5RemoveFromCartButton().should("be.visible");
        cart.ShoppingCartCheckout().click();
        cy.url().should("include", "/checkout-step-one.html");
        checkOut.CheckOutFirstNameField().type("FirstName");
        checkOut.CheckOutLastNameField().type("LastName");
        checkOut.CheckOutPostalCode().type("123123123");
        checkOut.CheckOutCancelButton().click();
        cy.url().should("include", "/cart.html");
    });

    it('Add the items to the cart, clicks on the cart icon then ensure that the added items appear in the list,fills only the first name then clicks on "Checkout" ', () => {
        item0.Item0AddtoCartButton().click();
        item1.Item1AddtoCartButton().click();
        item2.Item2AddToCartButton().click();
        item4.Item4AddToCartButton().click();
        item5.Item5AddtoCartButton().click();
        cy.get(".btn_inventory").eq(5).click();
        cart.ShoppingCartContainer().click();
        item0.Item0RemoveFromCartButton().should("be.visible");
        item1.Item1RemoveFromCartButton().should("be.visible");
        item2.Item2RemoveFromCartButton().should("be.visible");
        item4.Item4RemoveFromCartButton().should("be.visible");
        item5.Item5RemoveFromCartButton().should("be.visible");
        cart.ShoppingCartCheckout().click();
        cy.url().should("include", "/checkout-step-one.html");
        checkOut.CheckOutFirstNameField().type("FirstName");
        checkOut.CheckOutContinueButton().click();
        checkOut
            .CheckOutErrorMessageContainer()
            .should("be.visible")
            .invoke("text")
            .should("contain", "Error: Last Name is required");
    });

    it('Add the items to the cart, clicks on the cart icon then ensure that the added items appear in the list,fills only the last name then clicks on "Checkout" ', () => {
        item0.Item0AddtoCartButton().click();
        item1.Item1AddtoCartButton().click();
        item2.Item2AddToCartButton().click();
        item4.Item4AddToCartButton().click();
        item5.Item5AddtoCartButton().click();
        cy.get(".btn_inventory").eq(5).click();
        cart.ShoppingCartContainer().click();
        item0.Item0RemoveFromCartButton().should("be.visible");
        item1.Item1RemoveFromCartButton().should("be.visible");
        item2.Item2RemoveFromCartButton().should("be.visible");
        item4.Item4RemoveFromCartButton().should("be.visible");
        item5.Item5RemoveFromCartButton().should("be.visible");
        cart.ShoppingCartCheckout().click();
        cy.url().should("include", "/checkout-step-one.html");
        checkOut.CheckOutLastNameField().type("LastName");
        checkOut.CheckOutContinueButton().click();
        checkOut
            .CheckOutErrorMessageContainer()
            .should("be.visible")
            .invoke("text")
            .should("contain", "Error: First Name is required");
    });

    it('Add the items to the cart, clicks on the cart icon then ensure that the added items appear in the list,leaving zip code empty then clicks on  "Checkout" ', () => {
        item0.Item0AddtoCartButton().click();
        item1.Item1AddtoCartButton().click();
        item2.Item2AddToCartButton().click();
        item4.Item4AddToCartButton().click();
        item5.Item5AddtoCartButton().click();
        cy.get(".btn_inventory").eq(5).click();
        cart.ShoppingCartContainer().click();
        item0.Item0RemoveFromCartButton().should("be.visible");
        item1.Item1RemoveFromCartButton().should("be.visible");
        item2.Item2RemoveFromCartButton().should("be.visible");
        item4.Item4RemoveFromCartButton().should("be.visible");
        item5.Item5RemoveFromCartButton().should("be.visible");
        cart.ShoppingCartCheckout().click();
        cy.url().should("include", "/checkout-step-one.html");
        checkOut.CheckOutLastNameField().type("LastName");
        checkOut.CheckOutFirstNameField().type("First Name");
        checkOut.CheckOutContinueButton().click();
        checkOut
            .CheckOutErrorMessageContainer()
            .should("be.visible")
            .invoke("text")
            .should("contain", "Error: Postal Code is required");
    });

    it("Adds one item to cart, goes trough the delivery information, clicks continue, checks the added items are present, then presses Finish", () => {
        item2.Item2AddToCartButton().click();
        cart.ShoppingCartContainer().click();
        cart.ShoppingCartCheckout().click();
        cy.url().should("include", "/checkout-step-one.html");
        checkOut.CheckOutFirstNameField().type("FirstName");
        checkOut.CheckOutLastNameField().type("LastName");
        checkOut.CheckOutPostalCode().type("123123123");
        checkOut.CheckOutContinueButton().click();
        cy.url().should("include", "/checkout-step-two.html");
        item2.item2TitleLink().should("be.visible");
        checkOut.CheckOutFinishButton().click();
        cy.url().should("include", "/checkout-complete.html");
    });

    it("Adds all items to cart, goes trough the delivery information, clicks continue, checks the added items are present, then presses Finish", () => {
        item0.Item0AddtoCartButton().click();
        item1.Item1AddtoCartButton().click();
        item2.Item2AddToCartButton().click();
        item4.Item4AddToCartButton().click();
        item5.Item5AddtoCartButton().click();
        cy.get(".btn_inventory").eq(5).click();
        cart.ShoppingCartContainer().click();
        cart.ShoppingCartCheckout().click();
        cy.url().should("include", "/checkout-step-one.html");
        checkOut.CheckOutFirstNameField().type("FirstName");
        checkOut.CheckOutLastNameField().type("LastName");
        checkOut.CheckOutPostalCode().type("123123123");
        checkOut.CheckOutContinueButton().click();
        cy.url().should("include", "/checkout-step-two.html");
        item0.Item0TitleLink().should("be.visible");
        item1.item1TitleLink().should("be.visible");
        item2.item2TitleLink().should("be.visible");
        item3.Item3TitleLink().should("be.visible");
        item4.Item4TitleLink().should("be.visible");
        item5.item5TitleLink().should("be.visible");
        checkOut.CheckOutFinishButton().click();
        cy.url().should("include", "/checkout-complete.html");
    });
});
