import { GQTest } from '../../sn-pages/GQTest';
describe('07. Post Market', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterPMSFilesofPostMarket', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Post Market planet
        GQ.Planets.PostMarket.open()

        // PMS Files tab
        GQ.Planets.PostMarket.PMSFiles.open()

        // // Toggle Filter
        // GQ.Planets.PostMarket.PMSFiles.toggleFilter()

        // Filter field
        cy.autoTestAll(
            GQ.Planets.PostMarket.PMSFiles.pmsFileIDColumn(),
            []
        )
        
        // Toggle Filter
        GQ.Planets.PostMarket.PMSFiles.toggleFilter()

        // Logout
        GQ.logout()

    })
})
