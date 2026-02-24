import { GQTest } from '../../sn-pages/GQTest';
describe('03. Product Development', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterWindchillChangeNotices', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Product Development
        GQ.Planets.ProductDevelopment.open()

        // Windchill Change Notices tab
        GQ.Planets.ProductDevelopment.WindchillChangeNotices.open()

        // // Toggle Filter
        // GQ.Planets.ProductDevelopment.WindchillChangeNotices.toggleFilter()

        // Filter column
        cy.autoTestAll(
            GQ.Planets.ProductDevelopment.WindchillChangeNotices.nameColumn(),
            []
        )

        // Toggle Filter
        GQ.Planets.ProductDevelopment.WindchillChangeNotices.toggleFilter()
        
        // Logout
        GQ.logout()




    })
})