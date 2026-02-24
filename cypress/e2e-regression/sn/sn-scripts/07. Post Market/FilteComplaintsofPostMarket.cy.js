import { GQTest } from '../../sn-pages/GQTest';
describe('07. Post Market', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterComplaintsofPostMarket', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Post Market planet
        GQ.Planets.PostMarket.open()

        // PMS Files tab
        GQ.Planets.PostMarket.Complaints.open()

        // Toggle Filter
        GQ.Planets.PostMarket.Complaints.toggleFilter()

        // Filter field
        cy.autoTestAll(
            GQ.Planets.PostMarket.Complaints.fileIDColumn(),
            []
        )
 
        // Logout
        GQ.logout()

    })
})
