import { GQTest } from '../../sn-pages/GQTest';
describe('04. Dashboards', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Tabs And  Views', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Dashboards
        GQ.Planets.Dashboards.open()

        // Product Development
        GQ.Planets.Dashboards.ProductDevelopment.open()

        // Definition Tab
        GQ.Planets.Dashboards.ProductDevelopment.Definition.open()

        // Development
        GQ.Planets.Dashboards.ProductDevelopment.Development.open()

        // Verification
        GQ.Planets.Dashboards.ProductDevelopment.Verification.open()

        // Logout
        GQ.logout()

    })
})
