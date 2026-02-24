import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterRecordsofOptiqs360Records', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open()

        // Optiqs360 Records
        GQ.Planets.Core.Optiqs360Records.open()

        // Toggle filter
        GQ.Planets.Core.Optiqs360Records.Records.toggleFilter()

        // Filter columns
        cy.autoTestAll(
            GQ.Planets.Core.Optiqs360Records.Records.nameColumn(),
            []
        )

        // Logout
        GQ.logout()

    })
})