import { GQTest } from '../../sn-pages/GQTest';
describe('04. Dashboards', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterVerificationofProductDevelopment', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Dashboards
        GQ.Planets.Dashboards.open()

        // Product Development
        GQ.Planets.Dashboards.ProductDevelopment.open()

        // Definition Tab
        GQ.Planets.Dashboards.ProductDevelopment.Verification.open()

        // Toggle Filter
        GQ.Planets.Dashboards.ProductDevelopment.Verification.toggleFilter()

        // Fiter fields
        cy.autoTestAll(
            GQ.Planets.Dashboards.ProductDevelopment.Verification.nameColumn(),
            []
        )
        
        
        // Logout
        GQ.logout()

    })
})
