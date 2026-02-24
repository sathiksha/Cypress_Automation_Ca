import { GQTest } from '../../sn-pages/GQTest';
describe('02. Packaging and Labelling', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterMatrixPackagingConfiguration', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.PackagingAndLabelling.open()

        // Matrix Packaging Configuration
        GQ.Planets.PackagingAndLabelling.MatrixPackagingConfiguration.open()

        // Toggle Filter
        GQ.Planets.PackagingAndLabelling.MatrixPackagingConfiguration.toggleFilter()

        // Filter colums
        cy.autoTestAll(
            GQ.Planets.PackagingAndLabelling.MatrixPackagingConfiguration.nameColumn(),
            []
        )
        

        // Logout
        GQ.logout()
    })
})