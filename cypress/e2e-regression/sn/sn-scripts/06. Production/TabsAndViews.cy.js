import { GQTest } from '../../sn-pages/GQTest';
describe('06. Production', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Tabs And  Views', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Dashboards
        GQ.Planets.Production.open()

        // DH Sales tab
        GQ.Planets.Production.DHSales.open()

        // DH DIM Parts
        GQ.Planets.Production.DHDIMParts.open()

        // Logout
        GQ.logout()

    })
})
