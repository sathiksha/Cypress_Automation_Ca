import { GQTest } from '../../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Applications Navigation', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Applications.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Applications.refresh()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Applications.openRecordByIndex(0)

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Applications.openDetails()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Applications.openRelatedObjects()
      

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Applications.maximiseSelector()
  
            // Logout
            GQ.logout();
        })
    })

