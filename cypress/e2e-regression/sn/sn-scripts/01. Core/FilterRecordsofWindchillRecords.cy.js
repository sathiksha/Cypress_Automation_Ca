import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterRecordsofWindchillRecords', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open()

        // Optiqs360 Records
        GQ.Planets.Core.Optiqs360Records.open()

        // Windchill tab
        GQ.Planets.Core.WindchillRecords.open()

        // Records tab
        GQ.Planets.Core.WindchillRecords.Records.open()
        
        // Toggle filter
        GQ.Planets.Core.WindchillRecords.Records.toggleFilter()

        // Filter columns
        cy.autoTestAll(
            GQ.Planets.Core.WindchillRecords.Records.nameColumn(),
            []
        )

        // Logout
        GQ.logout()

    })
})