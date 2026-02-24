import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it.skip('CDARFiles- CreateRecords', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Post Market
        GQ.Planets.PostMarket.open()

        // CDAR file
        GQ.Planets.PostMarket.CDARFiles.open()

        // Create Record
        GQ.Planets.PostMarket.CDARFiles.createRecord('Test File','CDAR')

        // Open record
        GQ.Planets.PostMarket.CDARFiles.openRecordByText('Test File')

        // History
        GQ.Planets.PostMarket.CDARFiles.CDARFile.History.open()

        // maximize
        GQ.Planets.PostMarket.CDARFiles.CDARFile.maximizeSelector()

        // Select Record By text
        GQ.Planets.PostMarket.CDARFiles.selectRecordByText('Test File')

        // Delete Record
        GQ.Planets.PostMarket.CDARFiles.deleteRecord()

        // logout
        GQ.logout()
    })
})