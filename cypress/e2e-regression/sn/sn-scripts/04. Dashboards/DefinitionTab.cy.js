import { GQTest } from '../../sn-pages/GQTest';
describe('04. Dashboards', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Definition TabsS', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Dashboards
        GQ.Planets.Dashboards.open()

        // Product Development
        GQ.Planets.Dashboards.ProductDevelopment.open()

        // Definition Tab
        GQ.Planets.Dashboards.ProductDevelopment.Definition.open()

        // Toggle filter
        GQ.Planets.Dashboards.ProductDevelopment.Definition.toggleFilter()

        // Select Record
        GQ.Planets.Dashboards.ProductDevelopment.Definition.selectRecord(0)

        // Navigate Through tabs
        GQ.Planets.Dashboards.ProductDevelopment.Definition.DefinitionTab.openRequirementCoverageTab()

        GQ.Planets.Dashboards.ProductDevelopment.Definition.DefinitionTab.openStatusBurnUpTab()

        GQ.Planets.Dashboards.ProductDevelopment.Definition.DefinitionTab.openNewItem()

        GQ.Planets.Dashboards.ProductDevelopment.Definition.DefinitionTab.openNonTDBBurnUpTab()

        GQ.Planets.Dashboards.ProductDevelopment.Definition.DefinitionTab.openTraceBurnUpTab()

        GQ.Planets.Dashboards.ProductDevelopment.Definition.DefinitionTab.openValidationMethodTab()

        GQ.Planets.Dashboards.ProductDevelopment.Definition.DefinitionTab.openRequiredTestTraceChartTab()

        GQ.Planets.Dashboards.ProductDevelopment.Definition.DefinitionTab.openRequirementCoverageTab()

        // Maximize selector
        GQ.Planets.Dashboards.ProductDevelopment.Definition.DefinitionTab.maximizeSelector()

        // Log out
        GQ.logout()


    })
})