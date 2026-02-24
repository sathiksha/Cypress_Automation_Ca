import { GQTest } from '../../sn-pages/GQTest';
describe('04. Dashboards', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterDevelopmentofProductDevelopment', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Dashboards
        GQ.Planets.Dashboards.open()

        // Product Development
        GQ.Planets.Dashboards.ProductDevelopment.open()

        // Definition Tab
        GQ.Planets.Dashboards.ProductDevelopment.Development.open()

        // // Toggle Filter
        // GQ.Planets.Dashboards.ProductDevelopment.Development.toggleFilter()

        // Fiter fields
        cy.autoTestAll(
            GQ.Planets.Dashboards.ProductDevelopment.Development.nameColumn(),
            []
        )
        
        // Toggle Filter
        GQ.Planets.Dashboards.ProductDevelopment.Development.toggleFilter()
        
        // Logout
        GQ.logout()

    })
})
