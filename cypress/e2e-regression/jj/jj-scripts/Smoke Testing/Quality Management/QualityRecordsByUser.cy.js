import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Quality Records By User', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Quality Management
            GQ.Planets.QualityManagement.openLandingPage()

            // QualityRecordsByUser
            GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

            // Click Mark Johnson
            GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Mark Johnson')

            // Navigate through all other tabs
            GQ.Planets.QualityManagement.QualityRecordsByUser.navigateThroughAll()

            // Logout
            GQ.logout();
        })
    })