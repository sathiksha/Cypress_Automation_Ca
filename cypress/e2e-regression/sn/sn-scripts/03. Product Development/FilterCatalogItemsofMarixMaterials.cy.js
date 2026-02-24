import { GQTest } from '../../sn-pages/GQTest';
describe('03. Product Development', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterCatalogItemsofMarixMaterials', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Product Development
        GQ.Planets.ProductDevelopment.open()

        // Matrix materials tab
        GQ.Planets.ProductDevelopment.MatrixMaterials.open()

        // open tab
        GQ.Planets.ProductDevelopment.MatrixMaterials.CatalogItems.open()

        // Toggle Filter
        GQ.Planets.ProductDevelopment.MatrixMaterials.CatalogItems.toggleFilter()

        // Filter column
        cy.autoTestAll(
            GQ.Planets.ProductDevelopment.MatrixMaterials.CatalogItems.nameColumn(),
            []
        )

        // Toggle Filter
        GQ.Planets.ProductDevelopment.MatrixMaterials.CatalogItems.toggleFilter()
        
        // Logout
        GQ.logout()




    })
})