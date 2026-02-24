import { GQTest } from '../../../jj-pages/GQTest'
describe('01. Records', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Tabs and Views', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();
 
        // Open Records
 
        GQ.Planets.Documents.openLandingPage()

        
        GQ.Planets.Documents.expandrecord.openLandingPage(1)
 
        cy.autoTestAll(
            GQ.Planets.Documents.expandrecord.activeScreenGridID()
            , {})
 
            // Logout
            GQ.logout();
    })
})
