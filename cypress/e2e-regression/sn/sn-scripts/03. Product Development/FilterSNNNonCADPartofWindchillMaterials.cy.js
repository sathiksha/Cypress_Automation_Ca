import { GQTest } from '../../sn-pages/GQTest';
describe('03. Product Development', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterSNNNonCADPartofWindchillMaterials', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Product Development
        GQ.Planets.ProductDevelopment.open()

        // Windchill materials tab
        GQ.Planets.ProductDevelopment.WindchillMaterials.open()

        // open tab
        GQ.Planets.ProductDevelopment.WindchillMaterials.SNNNonCADPart.open()

        // // Toggle Filter
        // GQ.Planets.ProductDevelopment.WindchillMaterials.SNNNonCADPart.toggleFilter()
        
        // Filter column
        cy.autoTestAll(
            GQ.Planets.ProductDevelopment.WindchillMaterials.SNNNonCADPart.nameColumn(),
            []
        )

        // Toggle Filter
        GQ.Planets.ProductDevelopment.WindchillMaterials.SNNNonCADPart.toggleFilter()

        // Logout
        GQ.logout()




    })
})