import { GQTest } from '../../../jj-pages/GQTest'
    describe('01. Records', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Filter Records', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Records
            GQ.Planets.Records.openLandingPage()

            // Landing Page
            let page = GQ.Planets.Records.TruVAULTRecords
            page.openLandingPage()

            // TruVAULT Records
            page = page.TruVAULTRecords
            
             // Test 
            cy.autoTestAll(
                page.gridID()
            , {} )

            // Logout
            GQ.logout();
        })
    })
