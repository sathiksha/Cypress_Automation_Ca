import { GQTest } from '../../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Package Sets Records', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.PackageSets.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.PackageSets.refresh()

            cy.autoTestAll(
                GQ.Planets.RegulatoryAffairs.RIMDocsRecords.PackageSets.gridID()
            ,{})
  
            // Logout
            GQ.logout();
        })
    })

