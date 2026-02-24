import { GQTest } from '../../jj-pages/GQTest';

const GQ = new GQTest();

const adminUsername = "optiqs admin";

const currentUsername = Cypress.env('username');
describe('Allows management of named-user licensing quantities', () => {

    if (currentUsername === adminUsername) {
        it('Allows management of named-user licensing quantities', () => {
            // Step 1: Login
            GQ.login();

            // Step 2: Open the "Licensing" page from the Utility Menu
            GQ.Menu.show();
            GQ.Menu.openlicensing();

            // Step 3: Verify that the "Licensing Management" dialog box appears
            cy.contains('Licensing Management').should('be.visible');

            // Step 4: Verify the fields for managing licensing quantities
            cy.contains('Workcenter Licenses').should('be.visible');
            cy.contains('Intelliwriter Licenses').should('be.visible');
            cy.contains('IntelliStreamer Product Licenses').should('be.visible');
            cy.contains('Inactivated Time Period').should('be.visible');
            cy.contains('In Days').should('be.visible');

        });
    } else {
        it('Should skip the licensing management test for non-optics admin users', () => {
            cy.log('Skipping Licensing Management Test for non-optics admin user');
        });
        GQ.logout();
    }
   
});
