import { GQTest } from '../../sn-pages/GQTest';
describe('07. Post Market', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterPMSGroupsSofPostMarket', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Post Market planet
        GQ.Planets.PostMarket.open()

        // PMS Files tab
        GQ.Planets.PostMarket.PMSGroups.open()

        // // Toggle Filter
        // GQ.Planets.PostMarket.PMSGroups.toggleFilter()

        // Filter field
        cy.autoTestAll(
            GQ.Planets.PostMarket.PMSGroups.nameColumn(),
            []
        )
 
        // Toggle Filter
        GQ.Planets.PostMarket.PMSGroups.toggleFilter()
        
        // Logout
        GQ.logout()

    })
})
