import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Matrix Records Record By Type Tabs', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open() 

        // Matrix Records
        GQ.Planets.Core.MatrixRecords.open()

        // Records By Type
        GQ.Planets.Core.MatrixRecords.RecordsByType.open()
        
        // Toggle Filter
        GQ.Planets.Core.MatrixRecords.RecordsByType.toggleFilter()

        // Select Record
        GQ.Planets.Core.MatrixRecords.RecordsByType.selectRecord(0)

        // Logout
        GQ.logout()

    })
})
