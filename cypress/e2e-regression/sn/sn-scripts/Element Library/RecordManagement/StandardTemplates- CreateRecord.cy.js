import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('StandartTemplates- CreateRecord', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RecordManagement.open()

        // Standard Template
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.open()

        // Templates
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.open()

        // Create template
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.createTemplate()

        // Set Data
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.setData('Test File','Clinical Evaluation Plan')

        // Open record
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.openRecordByText('Test File')

        // History
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.Template.History.open()

        // Maximise
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.Template.clickToMaximise()

        // Select Record
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.selectRecordByText('Test File')

        // Delete Record
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.deleteRecord()

        // Logout
        GQ.logout()
    })
})