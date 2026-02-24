import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Matrix Records Record Tabs', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open() 

        // Matrix Records
        GQ.Planets.Core.MatrixRecords.open()

        // Records tab
        GQ.Planets.Core.MatrixRecords.Records.open()
        
        // Toggle Filter
        GQ.Planets.Core.MatrixRecords.Records.toggleFilter()

        // Select Record
        GQ.Planets.Core.MatrixRecords.Records.selectRecord(0)

        // to continue

        // Logout
        GQ.logout()

    })
})
