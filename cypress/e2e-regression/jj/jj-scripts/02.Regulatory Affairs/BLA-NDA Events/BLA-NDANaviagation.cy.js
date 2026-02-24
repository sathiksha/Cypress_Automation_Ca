import { GQTest } from '../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('BLA-NDA Navigation', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.BLA_NDAEvents.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.BLA_NDAEvents.refresh()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.BLA_NDAEvents.openRecordByIndex(0)

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.BLA_NDAEvents.openDetails()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.BLA_NDAEvents.openRelatedObjects()
      

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.BLA_NDAEvents.maximiseSelector()
  
            // Logout
            GQ.logout();
        })
    })

