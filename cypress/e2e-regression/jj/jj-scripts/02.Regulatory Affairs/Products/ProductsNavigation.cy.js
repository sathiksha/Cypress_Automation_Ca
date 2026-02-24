import { GQTest } from '../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Product Navigation', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Products.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Products.refresh()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Products.openRecordByIndex(0)

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Products.openDetails()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Products.openRelatedObjects()
      

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Products.maximiseSelector()
  
            // Logout
            GQ.logout();
        })
    })

