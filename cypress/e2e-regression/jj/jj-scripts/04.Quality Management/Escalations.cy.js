import { GQTest } from '../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Escalations', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Quality Management
            GQ.Planets.QualityManagement.openLandingPage()

            // Escalations
            GQ.Planets.QualityManagement.Escalations.openLandingPage()

            // Trackwise
            GQ.Planets.QualityManagement.Escalations.viewTrackwise()

            // Refresh
            //GQ.Planets.QualityManagement.Escalations.Trackwise.refresh()

            // Related to Me
            GQ.Planets.QualityManagement.Escalations.Trackwise.viewRelatedToMe()

            // Related to Me And In Approval
            GQ.Planets.QualityManagement.Escalations.Trackwise.viewRelatedToMeAndInApproval()

            // Related to Me And Open
            GQ.Planets.QualityManagement.Escalations.Trackwise.viewRelatedToMeAndOpen()

            // View All
            GQ.Planets.QualityManagement.Escalations.Trackwise.viewAll()

            // // Auto Test All
            // cy.autoTestAll(
            //     GQ.Planets.QualityManagement.Escalations.Trackwise.gridID()
            // , {} )

            // Logout
            GQ.logout();
        })
    })