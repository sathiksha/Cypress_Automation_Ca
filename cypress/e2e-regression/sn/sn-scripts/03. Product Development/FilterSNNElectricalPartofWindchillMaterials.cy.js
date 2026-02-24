import { GQTest } from '../../sn-pages/GQTest';
describe('03. Product Development', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterSNNElectricalPartofWindchillMaterials', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Product Development
        GQ.Planets.ProductDevelopment.open()

        // Group tab
        GQ.Planets.ProductDevelopment.Groups.open()

        // Windchill materials tab
        GQ.Planets.ProductDevelopment.WindchillMaterials.open()

        // open tab
        GQ.Planets.ProductDevelopment.WindchillMaterials.SNNElectricalPart.open()

        // // Toggle Filter
        // GQ.Planets.ProductDevelopment.WindchillMaterials.SNNElectricalPart.toggleFilter()

        // Filter column
        cy.autoTestAll(
            GQ.Planets.ProductDevelopment.WindchillMaterials.SNNElectricalPart.nameColumn(),
            []
        )

        // Logout
        GQ.logout()




    })
})