class SideMenu {
    sideMenuButton() {
        return cy.get("#react-burger-menu-btn");
    }

    sideAboutButton() {
        return cy.get("#about_sidebar_link");
    }

    sideLogOutButton() {
        return cy.get("#logout_sidebar_link");
    }

    sideResetAppButton() {
        return cy.get("#reset_sidebar_link");
    }
}
export default SideMenu;
