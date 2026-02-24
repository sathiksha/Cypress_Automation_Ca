import { GQTest } from '../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Registration Navigation', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Registrations.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Registrations.refresh()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Registrations.openRecordByIndex(0)

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Registrations.openDetails()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Registrations.openRelatedObjects()
      

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Registrations.maximiseSelector()
  
            // Logout
            GQ.logout();
        })
    })

