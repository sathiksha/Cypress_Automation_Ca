import { GQTest } from '../../../jj-pages/GQTest'
describe('06. PQM Res Management', () => {
    Cypress.config('defaultCommandTimeout', 180000);

    it('PQM Expand Records', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();
    
        // Open PQM Res Management
        GQ.Planets.PQMResourceManagement.openLandingPage()

        // Activities
        GQ.Planets.PQMResourceManagement.Activities.openLandingPage()

        // Employees
        GQ.Planets.PQMResourceManagement.Employees.openLandingPage()

        // Resource Reports
        GQ.Planets.PQMResourceManagement.ResourceReports.openLandingPage()

    })
})