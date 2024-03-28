class Item4Information {
    Item4TitleLink() {
        return cy.get("#item_4_title_link");
    }

    Item4ImageLink() {
        return cy.get("#item_4_img_link");
    }

    Item4AddToCartButton() {
        return cy.get("#add-to-cart-sauce-labs-backpack");
    }

    Item4RemoveFromCartButton() {
        return cy.get("#remove-sauce-labs-backpack");
    }
    Item4Name() {
        return cy.get('[alt="Sauce Labs Backpack"]');
    }

    item4Src = "/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg";
}
export default Item4Information;
