import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterRecordsofMatrixRecords', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open()

        // Optiqs360 Records
        GQ.Planets.Core.MatrixRecords.open()

        // // Toggle filter
        // GQ.Planets.Core.MatrixRecords.Records.toggleFilter()

        // Filter columns
        cy.autoTestAll(
            GQ.Planets.Core.MatrixRecords.Records.nameColumn(),
            []
        )

        // Toggle filter
        GQ.Planets.Core.MatrixRecords.Records.toggleFilter()
        
        // Logout
        GQ.logout()

    })
})