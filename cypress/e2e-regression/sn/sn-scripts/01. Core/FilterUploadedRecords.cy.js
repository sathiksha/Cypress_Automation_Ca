import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterUploadedRecords', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open()

        // Optiqs360 Records
        GQ.Planets.Core.UploadedRecords.open()

        // // Toggle filter
        // GQ.Planets.Core.UploadedRecords.toggleFilter()

        // Filter columns
        cy.autoTestAll(
            GQ.Planets.Core.UploadedRecords.nameColumn(),
            []
        )

        // Toggle filter
        GQ.Planets.Core.UploadedRecords.toggleFilter()
        
        // Logout
        GQ.logout()

    })
})