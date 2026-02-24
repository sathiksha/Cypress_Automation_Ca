import { GQTest } from '../../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Package Sets Navigation', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.PackageSets.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.PackageSets.refresh()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.PackageSets.openRecordByIndex(0)

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.PackageSets.openDetails()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.PackageSets.openRelatedObjects()
      

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.PackageSets.maximiseSelector()
  
            // Logout
            GQ.logout();
        })
    })

