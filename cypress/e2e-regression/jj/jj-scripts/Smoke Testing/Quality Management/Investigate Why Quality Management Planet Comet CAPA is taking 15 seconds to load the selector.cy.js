import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Investigate Why Quality Management Planet Comet CAPA is taking 15 seconds to load the selector', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Quality Management
            GQ.Planets.QualityManagement.openLandingPage()

            // Capa
            GQ.Planets.QualityManagement.CAPAs.openLandingPage()

            // Refresh
            GQ.Planets.QualityManagement.CAPAs.refresh()

            // Logout
            GQ.logout()


    })
})
