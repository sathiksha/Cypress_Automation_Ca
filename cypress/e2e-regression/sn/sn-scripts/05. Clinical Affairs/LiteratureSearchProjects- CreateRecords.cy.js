import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it.skip('LiteratureSearchProjects- CreateRecords', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Clinical Affairs
        GQ.Planets.ClinicalAffairs.open()

        // Literaturs search Project
        GQ.Planets.ClinicalAffairs.LiteratureSearchProjects.open()

        // Create sibing
        GQ.Planets.ClinicalAffairs.LiteratureSearchProjects.createSibling('Test File')

        // Select Record
        GQ.Planets.ClinicalAffairs.LiteratureSearchProjects.selectRecordByText('Test File')

        // Delete Record

        // Logout
        GQ.logout()
    
    })
})