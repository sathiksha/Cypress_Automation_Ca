import { GQTest } from '../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Applications Records', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Applications.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Applications.refresh()

            cy.autoTestAll(
                GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Applications.gridID()
            ,{})
  
            // Logout
            GQ.logout();
        })
    })

