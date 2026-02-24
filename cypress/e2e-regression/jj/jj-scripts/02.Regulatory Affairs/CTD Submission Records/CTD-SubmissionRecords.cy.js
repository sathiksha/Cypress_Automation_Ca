import { GQTest } from '../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('CTD/Submission Records', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.refresh()

            cy.autoTestAll(
                GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.gridID()
            ,{})
  
            // Logout
            GQ.logout();
        })
    })

