import { GQTest } from '../../sn-pages/GQTest';
describe('03. Product Development', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterExpressCatalogItemsofMarixMaterials', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Product Development
        GQ.Planets.ProductDevelopment.open()

        // Matrix materials tab
        GQ.Planets.ProductDevelopment.MatrixMaterials.open()

        // open tab
        GQ.Planets.ProductDevelopment.MatrixMaterials.ExpressatalogItems.open()

        // // Toggle Filter
        // GQ.Planets.ProductDevelopment.MatrixMaterials.ExpressatalogItems.toggleFilter()

        // Filter column
        cy.autoTestAll(
            GQ.Planets.ProductDevelopment.MatrixMaterials.ExpressatalogItems.nameColumn(),
            []
        )


        // Toggle Filter
        GQ.Planets.ProductDevelopment.MatrixMaterials.ExpressatalogItems.toggleFilter()

        // Logout
        GQ.logout()

    })
})