import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it.skip('PMSFiles- CreateRecords', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Post Market
        GQ.Planets.PostMarket.open()

        // PMS file
        GQ.Planets.PostMarket.PMSFiles.open()

        // Select Record
        GQ.Planets.PostMarket.PMSFiles.selectRecordByIndex(0)

        // Create Sibling
        GQ.Planets.PostMarket.PMSFiles.createNewRecord(0)

        // Refresh
        GQ.Planets.PostMarket.PMSFiles.refreshSelector()

        // Select record
        GQ.Planets.PostMarket.PMSFiles.selectRecordByText('	_paulN_ecmY')

        // Delete Record
        GQ.Planets.PostMarket.PMSFiles.deleteRecord()

        // logout
        GQ.logout()


    })
})