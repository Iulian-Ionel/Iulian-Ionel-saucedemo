class Item0Information {
    Item0TitleLink() {
        return cy.get("#item_0_title_link");
    }

    Item0ImageLink() {
        return cy.get("#item_0_img_link");
    }

    Item0AddtoCartButton() {
        return cy.get("#add-to-cart-sauce-labs-bike-light");
    }

    Item0RemoveFromCartButton() {
        return cy.get("#remove-sauce-labs-bike-light");
    }

    Item0Name() {
        return cy.get('[alt="Sauce Labs Bike Light"]');
    }

    item0Src = "/static/media/bike-light-1200x1500.37c843b0.jpg";
}
export default Item0Information;
