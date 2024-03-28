class Item1Information {
    item1TitleLink() {
        return cy.get("#item_1_title_link");
    }

    Item1ImageLink() {
        return cy.get("#item_1_img_link");
    }

    Item1AddtoCartButton() {
        return cy.get("#add-to-cart-sauce-labs-bolt-t-shirt");
    }
    Item1RemoveFromCartButton() {
        return cy.get("#remove-sauce-labs-bolt-t-shirt");
    }
    Item1Name() {
        return cy.get('[alt="Sauce Labs Bolt T-Shirt"]');
    }
    item01Src = "/static/media/bolt-shirt-1200x1500.c2599ac5.jpg";
}

export default Item1Information;
