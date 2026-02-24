import { GQTest } from '../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('CTA IND Events Records', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.refresh()

            cy.autoTestAll(
                GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.gridID()
            ,{})
  
            // Logout
            GQ.logout();
        })
    })

