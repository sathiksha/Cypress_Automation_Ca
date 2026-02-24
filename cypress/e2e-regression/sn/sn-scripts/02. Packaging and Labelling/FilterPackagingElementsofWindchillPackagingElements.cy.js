import { GQTest } from '../../sn-pages/GQTest';
describe('02. Packaging and Labelling', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterPackagingElementsofWindchillPackagingElements', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.PackagingAndLabelling.open()

        // Windchill Packaging Elements
        GQ.Planets.PackagingAndLabelling.WindchillPackagingElements.open()

        // Packaging Element
        GQ.Planets.PackagingAndLabelling.WindchillPackagingElements.PackagingElement.open()


        // Filter colums
        cy.autoTestAll(
            GQ.Planets.PackagingAndLabelling.WindchillPackagingElements.PackagingElement.nameColumn(),
            []
        )
        

        // Logout
        GQ.logout()
    })
})