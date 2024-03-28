class Item2Information {
    item2TitleLink() {
        return cy.get("#item_2_title_link");
    }

    Item2ImageLink() {
        return cy.get("#item_2_img_link");
    }

    Item2AddToCartButton() {
        return cy.get("#add-to-cart-sauce-labs-onesie");
    }
    Item2RemoveFromCartButton() {
        return cy.get("#remove-sauce-labs-onesie");
    }
    Item2Name() {
        return cy.get('[alt="Sauce Labs Onesie"]');
    }

    item2Src = "/static/media/red-onesie-1200x1500.2ec615b2.jpg";
}
export default Item2Information;
