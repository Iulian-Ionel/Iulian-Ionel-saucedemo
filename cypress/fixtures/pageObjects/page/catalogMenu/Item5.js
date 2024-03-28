class Item5Information {
    item5TitleLink() {
        return cy.get("#item_5_title_link");
    }

    Item5ImageLink() {
        return cy.get("#item_5_img_link");
    }

    Item5AddtoCartButton() {
        return cy.get("#add-to-cart-sauce-labs-fleece-jacket");
    }

    Item5RemoveFromCartButton() {
        return cy.get("#remove-sauce-labs-fleece-jacket");
    }
    Item5Name() {
        return cy.get('[alt="Sauce Labs Fleece Jacket"]');
    }

    item5Src = "/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg";
}

export default Item5Information;
