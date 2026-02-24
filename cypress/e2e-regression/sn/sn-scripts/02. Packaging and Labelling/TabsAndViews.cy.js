import { GQTest } from '../../sn-pages/GQTest';
describe('02. Packaging and Labelling', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Tabs And  Views', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.PackagingAndLabelling.open()

        // Matrix Packaging Configuration
        GQ.Planets.PackagingAndLabelling.MatrixPackagingConfiguration.open()

        // Windchill Packaging Elements
        GQ.Planets.PackagingAndLabelling.WindchillPackagingElements.open()

        // Packaging Element
        GQ.Planets.PackagingAndLabelling.WindchillPackagingElements.PackagingElement.open()

        // Packaging Design Transfer
        GQ.Planets.PackagingAndLabelling.WindchillPackagingElements.PackagingDesignTransfer.open()

        // Logout
        GQ.logout()
    })
})