import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Audits', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Quality Management
            GQ.Planets.QualityManagement.openLandingPage()

            // Escalations
            GQ.Planets.QualityManagement.Audits.openLandingPage()

            // Trackwise
            GQ.Planets.QualityManagement.Audits.viewTrackwise()

            // Refresh
            GQ.Planets.QualityManagement.Audits.Trackwise.refresh()

            // Related to Me
            GQ.Planets.QualityManagement.Audits.Trackwise.viewRelatedToMe()

            // // Related to Me And In Approval
            // GQ.Planets.QualityManagement.Audits.Trackwise.viewRelatedToMeAndInApproval()

            // // Related to Me And Open
            // GQ.Planets.QualityManagement.Audits.Trackwise.viewRelatedToMeAndOpen()

            // View All
            GQ.Planets.QualityManagement.Audits.Trackwise.viewAll()

            // Refresh
            GQ.Planets.QualityManagement.Audits.Trackwise.refresh()

            // // Auto Test All
            // cy.autoTestAll(
            //     GQ.Planets.QualityManagement.Audits.Trackwise.gridID()
            // , {})

            // Logout
            GQ.logout();
        })
    })