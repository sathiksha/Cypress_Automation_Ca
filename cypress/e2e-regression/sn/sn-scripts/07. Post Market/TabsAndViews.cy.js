import { GQTest } from '../../sn-pages/GQTest';
describe('07. Post Market', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Tabs And  Views', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Post Market planet
        GQ.Planets.PostMarket.open()

        // PMS Files tab
        GQ.Planets.PostMarket.PMSFiles.open()

        // CDAR Files tab
        GQ.Planets.PostMarket.CDARFiles.open()

        // Complaints tab
        GQ.Planets.PostMarket.Complaints.open()

        // PMS Group tab
        GQ.Planets.PostMarket.PMSGroups.open()
 
        // Logout
        GQ.logout()

    })
})
