import { GQTest } from '../../jj-pages/GQTest'
    describe('01. Records', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Filter Records', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Records
            GQ.Planets.Records.openLandingPage()

            // Landing Page
            GQ.Planets.Records.TruVAULTRecords.openLandingPage()

             // Test 
            cy.autoTestAll(
                GQ.Planets.Records.TruVAULTRecords.TruVAULTRecords.gridID()
            , {} )

            // Logout
            GQ.logout();
        })
    })
