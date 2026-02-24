import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('CAPAs', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Quality Management
            GQ.Planets.QualityManagement.openLandingPage()

            // Escalations
            GQ.Planets.QualityManagement.CAPAs.openLandingPage()

            // Trackwise
            GQ.Planets.QualityManagement.CAPAs.viewTrackwise()

            // Refresh
            GQ.Planets.QualityManagement.CAPAs.Trackwise.refresh()

            // Related to Me
            GQ.Planets.QualityManagement.CAPAs.Trackwise.viewRelatedToMe()

            // Related to Me And In Approval
            GQ.Planets.QualityManagement.CAPAs.Trackwise.viewRelatedToMeAndInApproval()

            // Related to Me And Open
            GQ.Planets.QualityManagement.CAPAs.Trackwise.viewRelatedToMeAndOpen()

            // View All
            GQ.Planets.QualityManagement.CAPAs.Trackwise.viewAll()

            // Refresh
            GQ.Planets.QualityManagement.CAPAs.Trackwise.refresh()

            // // Auto Test All
            // cy.autoTestAll(
            //     GQ.Planets.QualityManagement.CAPAs.Trackwise.gridID()
            // , {})

            // Logout
            GQ.logout();
        })
    })