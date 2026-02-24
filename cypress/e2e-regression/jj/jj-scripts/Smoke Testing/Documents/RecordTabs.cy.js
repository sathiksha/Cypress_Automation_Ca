import { GQTest } from '../../../jj-pages/GQTest'
    describe('01. Records', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Records Tabs', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Records
            GQ.Planets.Documents.openLandingPage()

            // Landing Page
            GQ.Planets.Documents.Documents.openLandingPage()

            //Click Filter
            GQ.Planets.Documents.Documents.toggleFilter()

            //Filter Record
            GQ.Planets.Documents.Documents.filterRecordbyName('VOGUE - 91811 Child Fitness For Commercialization')
            
            // Open a Record
            GQ.Planets.Documents.Documents.openRecord(0) 

            // Record Navigation
            GQ.Planets.Documents.Documents.Document.Details.open()

            GQ.Planets.Documents.Documents.Document.RelatedObjects.open()
            
            // Logout
            GQ.logout();
        })
    })