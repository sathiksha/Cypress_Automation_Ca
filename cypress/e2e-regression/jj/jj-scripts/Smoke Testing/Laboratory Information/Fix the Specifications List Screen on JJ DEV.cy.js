import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('Fix the Specifications List Screen on JJ DEV', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Element Library
        GQ.NavBar.ElementLibrary.openLandingPage();

        // Data management
        GQ.NavBar.ElementLibrary.DataManagement.open()

        // Data Specification
        GQ.NavBar.ElementLibrary.DataManagement.DataSpecification.openLandingPage()

        cy.wait(1000)

        // Select Record
        GQ.NavBar.ElementLibrary.DataManagement.DataSpecification.selectRecord('eLIMS-Stability Study')

        // Select Specification list
        GQ.NavBar.ElementLibrary.DataManagement.DataSpecification.SpecificationList.openLandingPage()

        // wait
        cy.wait(10000)

        // Logout
        GQ.logout()
        



    })
})