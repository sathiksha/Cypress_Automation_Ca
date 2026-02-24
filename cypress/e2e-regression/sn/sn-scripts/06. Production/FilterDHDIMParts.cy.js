import { GQTest } from '../../sn-pages/GQTest';
describe('06. Production', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterDHDIMParts', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Dashboards
        GQ.Planets.Production.open()

        // DH DIM Parts
        GQ.Planets.Production.DHDIMParts.open()

        // // Toggle filter
        // GQ.Planets.Production.DHDIMParts.toggleFilter()

        // Filter columns
        cy.autoTestAll(
            GQ.Planets.Production.DHDIMParts.materialIDColumn(),
            []
        )
        
        // Toggle filter
        GQ.Planets.Production.DHDIMParts.toggleFilter()
        
        // Logout
        GQ.logout()

    })
})
