import * as usernames from "../../fixtures/Users/users";
import Item0Information from "../../fixtures/pageObjects/page/catalogMenu/Item0";
import Item1Information from "../../fixtures/pageObjects/page/catalogMenu/Item1";
import Item2Information from "../../fixtures/pageObjects/page/catalogMenu/Item2";
import Item4Information from "../../fixtures/pageObjects/page/catalogMenu/Item4";
import Item5Information from "../../fixtures/pageObjects/page/catalogMenu/Item5";
import ShoppingCart from "../../fixtures/pageObjects/page/shoppingCart/shoppingCart";
import Checkout from "../../fixtures/pageObjects/page/checkout/checkOut";
let item0 = new Item0Information();
let item1 = new Item1Information();
let item2 = new Item2Information();
let item4 = new Item4Information();
let item5 = new Item5Information();
let cart = new ShoppingCart();
let checkout = new Checkout();

//We can change the user type to run the whole suite as a different user
//For instance the test will fail with problem_user and error_user as this types of users are unable to add some items to the cart, or remove them

describe("The user is able to add items to the cart and the cart badge updates accordingly ", () => {
    afterEach(() => {
        cy.appReset();
    });
    beforeEach(() => {
        cy.logIn(usernames.standardUser, usernames.userPassword);
    });

    it("The user is able to add items to the cart and the cart badge updates accordingly", () => {
        item0.Item0AddtoCartButton().click();
        item0.Item0RemoveFromCartButton().should("be.visible");
        cart.ShoppingCartContainer().should("have.text", 1);
        item1.Item1AddtoCartButton().click();
        item1.Item1RemoveFromCartButton().should("be.visible");
        cart.ShoppingCartContainer().should("have.text", 2);
        item2.Item2AddToCartButton().click();
        item2.Item2RemoveFromCartButton().should("be.visible");
        cart.ShoppingCartContainer().should("have.text", 3);
        item4.Item4AddToCartButton().click();
        item4.Item4RemoveFromCartButton().should("be.visible");
        cart.ShoppingCartContainer().should("have.text", 4);
        item5.Item5AddtoCartButton().click();
        item5.Item5RemoveFromCartButton().should("be.visible");
        cart.ShoppingCartContainer().should("have.text", 5);
        cy.get(".btn_inventory").eq(5).click();
        cart.ShoppingCartContainer().should("have.text", 6);
    });

    it("Should allow the user to remove items from the cart and the cart badge should update accordingly", () => {
        item0.Item0AddtoCartButton().click();
        item1.Item1AddtoCartButton().click();
        item2.Item2AddToCartButton().click();
        item4.Item4AddToCartButton().click();
        item5.Item5AddtoCartButton().click();
        cy.get(".btn_inventory").eq(5).click();
        cart.ShoppingCartContainer().should("have.text", 6);
        item0.Item0RemoveFromCartButton().click();
        cart.ShoppingCartContainer().should("have.text", 5);
        item1.Item1RemoveFromCartButton().click();
        cart.ShoppingCartContainer().should("have.text", 4);
        item2.Item2RemoveFromCartButton().click();
        cart.ShoppingCartContainer().should("have.text", 3);
        item4.Item4RemoveFromCartButton().click();
        cart.ShoppingCartContainer().should("have.text", 2);
        item5.Item5RemoveFromCartButton().click();
        cart.ShoppingCartContainer().should("have.text", 1);
    });

    it("Should allow the user to add items to the cart and then review them before proceeding to the checkout", () => {
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
    });

    it('Add the items to the cart, clicks on the cart icon then ensure that the added items appear in the list, then clicks on "continue shopping"', () => {
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
        cart.ShoppingCartContinueShoppingButton().click();
        cy.url().should("include", "/inventory.html");
        item0.Item0RemoveFromCartButton().should("be.visible");
        item1.Item1RemoveFromCartButton().should("be.visible");
        item2.Item2RemoveFromCartButton().should("be.visible");
        item4.Item4RemoveFromCartButton().should("be.visible");
        item5.Item5RemoveFromCartButton().should("be.visible");
    });

    it('Add the items to the cart, clicks on the cart icon then ensure that the added items appear in the list, then clicks on "Checkout button ', () => {
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
    });
});
