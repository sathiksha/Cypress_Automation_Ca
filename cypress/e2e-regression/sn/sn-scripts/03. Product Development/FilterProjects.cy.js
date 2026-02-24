import { GQTest } from '../../sn-pages/GQTest';
describe('03. Product Development', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterProjects', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Product Development
        GQ.Planets.ProductDevelopment.open()

        // Project tab
        GQ.Planets.ProductDevelopment.Projects.open()

        // Toggle Filter
        GQ.Planets.ProductDevelopment.Projects.toggleFilter()

        // Filter column
        cy.autoTestAll(
            GQ.Planets.ProductDevelopment.Projects.programColumn(),
            []
        )

        // Logout
        GQ.logout()




    })
})