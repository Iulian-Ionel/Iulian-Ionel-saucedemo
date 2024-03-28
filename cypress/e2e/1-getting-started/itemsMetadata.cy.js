import * as usernames from "../../fixtures/Users/users";
import Item0Information from "../../fixtures/pageObjects/page/catalogMenu/Item0";
import Item1Information from "../../fixtures/pageObjects/page/catalogMenu/Item1";
import Item2Information from "../../fixtures/pageObjects/page/catalogMenu/Item2";
import Item4Information from "../../fixtures/pageObjects/page/catalogMenu/Item4";
import Item5Information from "../../fixtures/pageObjects/page/catalogMenu/Item5";
import Item3Information from "../../fixtures/pageObjects/page/catalogMenu/Item3";
let item0 = new Item0Information();
let item1 = new Item1Information();
let item2 = new Item2Information();
let item3 = new Item3Information();
let item4 = new Item4Information();
let item5 = new Item5Information();

/*Change the user type to run the test against multiple users type 
The test will fail for problemUser (which has all the wrong images)  and for the visual user which only has one item with the wrong immage (sauce bagpack) */
describe("Checks the Image source of each item to ensure that the items have the correct background images", () => {
    afterEach(() => {
        cy.appReset();
    });
    beforeEach(() => {
        cy.logIn(usernames.standardUser, usernames.userPassword);
    });

    it("Checks the Image source 'Sauce Labs Bike Light' to ensure that the item has the correct backround image", () => {
        item0.Item0Name().should("have.attr", "src", item0.item0Src);
    });

    it("Checks the Image source 'Sauce Labs Bolt T-Shirt' to ensure that the item has the correct backround image", () => {
        item1.Item1Name().should("have.attr", "src", item1.item01Src);
    });

    it("Checks the Image source 'Sauce Labs Onesie' to ensure that the item has the correct backround image", () => {
        item2.Item2Name().should("have.attr", "src", item2.item2Src);
    });

    it("Checks the Image source 'Test.allTheThings() T-Shirt (Red)' to ensure that the item has the correct backround image", () => {
        item3.Item3Name().should("have.attr", "src", item3.item3Src);
    });

    it("Checks the Image source 'Sauce Labs Backpack' to ensure that the item has the correct backround image", () => {
        item4.Item4Name().should("have.attr", "src", item4.item4Src);
    });

    it("Checks the Image source 'Sauce Labs Fleece Jacket' to ensure that the item has the correct backround image", () => {
        item5.Item5Name().should("have.attr", "src", item5.item5Src);
    });
});
