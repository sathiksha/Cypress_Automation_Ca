import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
describe('Bug Tracking Test', () => {
    it('8054-Fix the Specifications List Screen on JJ DEV', () => {
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