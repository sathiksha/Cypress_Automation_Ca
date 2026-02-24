import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Non Conformances', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Quality Management
            GQ.Planets.QualityManagement.openLandingPage()

            // Escalations
            GQ.Planets.QualityManagement.NonConformances.openLandingPage()

            // Trackwise
            GQ.Planets.QualityManagement.NonConformances.viewTrackwise()

            // Refresh
            GQ.Planets.QualityManagement.NonConformances.Trackwise.refresh()

            // Related to Me
            GQ.Planets.QualityManagement.NonConformances.Trackwise.viewRelatedToMe()

            // Related to Me And In Approval
            GQ.Planets.QualityManagement.NonConformances.Trackwise.viewRelatedToMeAndInApproval()

            // Related to Me And Open
            GQ.Planets.QualityManagement.NonConformances.Trackwise.viewRelatedToMeAndOpen()

            // View All
            GQ.Planets.QualityManagement.NonConformances.Trackwise.viewAll()

            // Refresh
            GQ.Planets.QualityManagement.NonConformances.Trackwise.refresh()

            // // Auto Test All
            // cy.autoTestAll(
            //     GQ.Planets.QualityManagement.NonConformances.Trackwise.gridID()
            // , {})

            // Logout
            GQ.logout();
        })
    })