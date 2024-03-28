class Item3Information {
    Item3TitleLink() {
        return cy.get("#item_3_title_link");
    }

    Item3ImageLink() {
        return cy.get("#item_3_img_link");
    }

    Item3AddToCartButton() {
        return cy.get("#add-to-cart-test.allthethings()-t-shirt-(red)"); //cannot be used as it contains unsupported characters such as .  and , and ()
    }
    Item3RemoveFromCartButton() {
        return cy.get("#remove-test.allthethings()-t-shirt-(red)"); //cannot be used as it contains unsupported characters such as .  and , and ()
    }
    Item3Name() {
        return cy.get('[alt="Test.allTheThings() T-Shirt (Red)"]'); //cannot be used as it contains unsupported characters such as .  and , and ()
    }

    item3Src = "/static/media/red-tatt-1200x1500.30dadef4.jpg";
}
export default Item3Information;
