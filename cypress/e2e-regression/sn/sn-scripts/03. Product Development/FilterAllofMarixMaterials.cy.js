import { GQTest } from '../../sn-pages/GQTest';
describe('03. Product Development', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterAllofMarixMaterials', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Product Development
        GQ.Planets.ProductDevelopment.open()

        // Matrix materials tab
        GQ.Planets.ProductDevelopment.MatrixMaterials.open()

        // All tab
        GQ.Planets.ProductDevelopment.MatrixMaterials.All.open()

        // Toggle Filter
        GQ.Planets.ProductDevelopment.MatrixMaterials.All.toggleFilter()

        // Filter column
        cy.autoTestAll(
            GQ.Planets.ProductDevelopment.MatrixMaterials.All.nameColumn(),
            []
        )

        // Logout
        GQ.logout()




    })
})