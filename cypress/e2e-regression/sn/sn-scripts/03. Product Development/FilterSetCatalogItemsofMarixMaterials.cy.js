import { GQTest } from '../../sn-pages/GQTest';
describe('03. Product Development', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterSetCatalogItemsofMarixMaterials', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Product Development
        GQ.Planets.ProductDevelopment.open()

        // Matrix materials tab
        GQ.Planets.ProductDevelopment.MatrixMaterials.open()

        // open tab
        GQ.Planets.ProductDevelopment.MatrixMaterials.SetCatalogItems.open()

        // // Toggle Filter
        // GQ.Planets.ProductDevelopment.MatrixMaterials.SetCatalogItems.toggleFilter()

        // Filter column
        cy.autoTestAll(
            GQ.Planets.ProductDevelopment.MatrixMaterials.SetCatalogItems.nameColumn(),
            []
        )

        // Toggle Filter
        GQ.Planets.ProductDevelopment.MatrixMaterials.SetCatalogItems.toggleFilter()
        
        // Logout
        GQ.logout()

    })
})