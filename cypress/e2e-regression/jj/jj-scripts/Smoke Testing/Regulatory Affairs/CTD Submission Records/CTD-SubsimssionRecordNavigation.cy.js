import { GQTest } from '../../../../jj-pages/GQTest'
    describe('02. Regulatory Affairs', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('CTD/Submission Record Navigation', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Regulatory Affairs
            GQ.Planets.RegulatoryAffairs.openLandingPage()

            // RIMDocs Records - Parent Tab Name
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.openLandingPage()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.refresh()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.openRecordByIndex(0)

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.RIMDocsRecord.openFile()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.RIMDocsRecord.openDetails()

            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.RIMDocsRecord.maximiseSelector()
  
            // Logout
            GQ.logout();
        })
    })

