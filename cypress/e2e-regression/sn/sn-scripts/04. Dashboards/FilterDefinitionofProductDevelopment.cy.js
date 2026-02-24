import { GQTest } from '../../sn-pages/GQTest';
describe('04. Dashboards', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterDefinitionofProductDevelopment', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Dashboards
        GQ.Planets.Dashboards.open()

        // Product Development
        GQ.Planets.Dashboards.ProductDevelopment.open()

        // Definition Tab
        GQ.Planets.Dashboards.ProductDevelopment.Definition.open()

        // Toggle Filter
        GQ.Planets.Dashboards.ProductDevelopment.Definition.toggleFilter()

        // Fiter fields
        cy.autoTestAll(
            GQ.Planets.Dashboards.ProductDevelopment.Definition.nameColumn(),
            []
        )
        
        
        // Logout
        GQ.logout()

    })
})
