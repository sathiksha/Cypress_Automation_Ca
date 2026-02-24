import { GQTest } from '../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('CTA-IND Navigation', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.refresh()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.openRecordByIndex(0)

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.openDetails()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.openRelatedObjects()
      

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.maximiseSelector()
  
            // Logout
            GQ.logout();
        })
    })

