import { GQTest } from '../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Accounts', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Quality Management
            GQ.Planets.QualityManagement.openLandingPage()

            // Suppliers
            GQ.Planets.QualityManagement.Suppliers.openLandingPage()

            // Trackwise
            GQ.Planets.QualityManagement.Suppliers.viewTrackwise()

            // Refresh
            GQ.Planets.QualityManagement.Suppliers.Trackwise.refresh()

            // Related to Me
            GQ.Planets.QualityManagement.Suppliers.Trackwise.viewRelatedToMe()
            
            // View All
            GQ.Planets.QualityManagement.Suppliers.Trackwise.viewAll()

            // Refresh
            GQ.Planets.QualityManagement.Suppliers.Trackwise.refresh()

            // // Auto Test All
            // cy.autoTestAll(
            //     GQ.Planets.QualityManagement.Suppliers.Trackwise.gridID()
            // , {})

            // Logout
            GQ.logout();
        })
    })