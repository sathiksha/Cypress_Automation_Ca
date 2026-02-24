import { GQTest } from '../../jj-pages/GQTest'
// Sprint 6
require('cypress-xpath')
describe('Sprint 6', () => {
    const GQ = new GQTest();
    it('12691-Allows User Reporting Element Library area with sub-nouns: Organization, Department, Function and Site', () => {

        // Login 
        GQ.login('PQM360 System Administrator')

        // Go to element library
        GQ.NavBar.ElementLibrary.openLandingPage()

        // User Reporting
        GQ.NavBar.ElementLibrary.UserReporting.open()

        // Read tab
        cy.getSC(
            GQ.NavBar.ElementLibrary.UserReporting.ReadUserReporting()
        ).should('be.visible')

        cy.wait(200)
        cy.get('body').trigger('keydown', { keyCode: 27 });
        cy.wait(200);
        cy.get('body').trigger('keyup', { keyCode: 27 });

        // Organization
        cy.getSC(
            GQ.NavBar.ElementLibrary.UserReporting.Organization.ReadOrganization()
        ).should('be.visible')

        // Function
        cy.getSC(
            GQ.NavBar.ElementLibrary.UserReporting.Function.ReadFunction()
        ).should('be.visible')

        // Department
        cy.getSC(
            GQ.NavBar.ElementLibrary.UserReporting.Department.ReadDepartment()
        ).should('be.visible')

        // Site
        cy.getSC(
            GQ.NavBar.ElementLibrary.UserReporting.Site.ReadSite()
        ).should('be.visible')

        // Logout 
        GQ.logout()

        



    })
})