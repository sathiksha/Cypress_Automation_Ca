import { GQTest } from '../../sn-pages/GQTest';
describe('06. Production', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterDHSales', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Dashboards
        GQ.Planets.Production.open()

        // DH Sales tab
        GQ.Planets.Production.DHSales.open()

        // // Toggle filter
        // GQ.Planets.Production.DHSales.toggleFilter()

        // Filter columns
        cy.autoTestAll(
            GQ.Planets.Production.DHSales.materialIDColumn(),
            []
        )

        // Toggle filter
        GQ.Planets.Production.DHSales.toggleFilter()
        
        // Logout
        GQ.logout()

    })
})
