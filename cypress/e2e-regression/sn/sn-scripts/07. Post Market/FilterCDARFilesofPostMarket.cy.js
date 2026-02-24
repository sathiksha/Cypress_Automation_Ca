import { GQTest } from '../../sn-pages/GQTest';
describe('07. Post Market', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterCDARFilesofPostMarket', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Post Market planet
        GQ.Planets.PostMarket.open()

        // PMS Files tab
        GQ.Planets.PostMarket.CDARFiles.open()

        // Toggle Filter
        GQ.Planets.PostMarket.CDARFiles.toggleFilter()

        // Filter field
        cy.autoTestAll(
            GQ.Planets.PostMarket.CDARFiles.fileIDColumn(),
            []
        )
 
        // Logout
        GQ.logout()

    })
})
