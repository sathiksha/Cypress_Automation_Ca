import { GQTest } from '../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('BLA-NDA Records', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.BLA_NDAEvents.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.BLA_NDAEvents.refresh()

            cy.autoTestAll(
                GQ.Planets.RegulatoryAffairs.RIMDocsRecords.BLA_NDAEvents.gridID()
            ,{})
  
            // Logout
            GQ.logout();
        })
    })

