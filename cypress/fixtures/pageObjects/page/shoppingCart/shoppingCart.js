class ShoppingCart {
    ShoppingCartButton() {
        return cy.get("#shopping_cart_link");
    }

    ShoppingCartBadge() {
        return cy.get("#shopping_cart_badge");
    }
    ShoppingCartContainer() {
        return cy.get("#shopping_cart_container");
    }
    ShoppingCartContinueShoppingButton() {
        return cy.get("#continue-shopping");
    }
    ShoppingCartCheckout() {
        return cy.get("#checkout");
    }
}

export default ShoppingCart;
