import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Change Controls', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Quality Management
            GQ.Planets.QualityManagement.openLandingPage()

            // Change Controls
            GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

            // Trackwise
            GQ.Planets.QualityManagement.ChangeControls.viewTrackwise()

            // Refresh
            GQ.Planets.QualityManagement.ChangeControls.Trackwise.refresh()

            // Related to Me
            GQ.Planets.QualityManagement.ChangeControls.Trackwise.viewRelatedToMe()

            // Related to Me And In Approval
            GQ.Planets.QualityManagement.ChangeControls.Trackwise.viewRelatedToMeAndInApproval()

            // Related to Me And Open
            GQ.Planets.QualityManagement.ChangeControls.Trackwise.viewRelatedToMeAndOpen()

            // View All
            GQ.Planets.QualityManagement.ChangeControls.Trackwise.viewAll()

            // Refresh
            GQ.Planets.QualityManagement.ChangeControls.Trackwise.refresh()

            // // Auto Test All
            // cy.autoTestAll(
            //     GQ.Planets.QualityManagement.ChangeControls.Trackwise.gridID()
            // , {})

            // Logout
            GQ.logout();
        })
    })