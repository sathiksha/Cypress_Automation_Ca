import { GQTest } from '../../sn-pages/GQTest';
describe('03. Product Development', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterGroups', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Product Development
        GQ.Planets.ProductDevelopment.open()

        // Groups tab
        GQ.Planets.ProductDevelopment.Groups.open()

        // // Toggle Filter
        // GQ.Planets.ProductDevelopment.Groups.toggleFilter()

        // Filter column
        cy.autoTestAll(
            GQ.Planets.ProductDevelopment.Groups.nameColumn(),
            []
        )

        // Toggle Filter
        GQ.Planets.ProductDevelopment.Groups.toggleFilter()
        
        // Logout
        GQ.logout()




    })
})