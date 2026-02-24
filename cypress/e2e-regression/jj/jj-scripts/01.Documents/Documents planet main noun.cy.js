import { GQTest } from '../../jj-pages/GQTest'
// Sprint 4
require('cypress-xpath')
describe('Sprint 4', () => {
    const GQ = new GQTest();
    it('12148-Allows Documents planet main noun', () => {

        // Login 
        GQ.login()

        // Documents
        GQ.Planets.Documents.openLandingPage()

        // Read Documents tab
        cy.getSC(
            GQ.Planets.Documents.Documents.readTabHeader()
        ).should('be.visible')

        // Documents tab
        GQ.Planets.Documents.Documents.openLandingPage()

        // Logout 
        GQ.logout()

    })
})