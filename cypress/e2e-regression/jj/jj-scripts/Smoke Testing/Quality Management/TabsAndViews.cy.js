import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Tabs and Views', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Quality Management
            GQ.Planets.QualityManagement.openLandingPage()

            GQ.Planets.QualityManagement.Audits.openLandingPage()
            GQ.Planets.QualityManagement.Audits.viewTrackwise()
            GQ.Planets.QualityManagement.Audits.viewComet()


            GQ.Planets.QualityManagement.CAPAs.openLandingPage()
            GQ.Planets.QualityManagement.CAPAs.viewTrackwise()
            GQ.Planets.QualityManagement.CAPAs.viewComet()

            GQ.Planets.QualityManagement.ChangeControls.openLandingPage()
            GQ.Planets.QualityManagement.ChangeControls.viewTrackwise()
            GQ.Planets.QualityManagement.ChangeControls.viewComet()

            GQ.Planets.QualityManagement.Escalations.openLandingPage()
            GQ.Planets.QualityManagement.Escalations.viewTrackwise()
            GQ.Planets.QualityManagement.Escalations.viewComet()

            GQ.Planets.QualityManagement.NonConformances.openLandingPage()
            GQ.Planets.QualityManagement.NonConformances.viewTrackwise()
            GQ.Planets.QualityManagement.NonConformances.viewComet()

            GQ.Planets.QualityManagement.Suppliers.openLandingPage()
            GQ.Planets.QualityManagement.Suppliers.viewTrackwise()
            GQ.Planets.QualityManagement.Suppliers.viewComet()
           
            GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

            // Logout
            GQ.logout();
        })
    })