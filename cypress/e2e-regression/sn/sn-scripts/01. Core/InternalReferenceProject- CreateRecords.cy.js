import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('InternalReferenceProjec- CreateRecords', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open()

        // Internal Reference Project
        GQ.Planets.Core.InternalReferenceProjects.open()

        // Create Sibling
        GQ.Planets.Core.InternalReferenceProjects.createSibling('Test File')

        // Open 
        GQ.Planets.Core.InternalReferenceProjects.openRecordByText('Test File')

        // History
        GQ.Planets.Core.InternalReferenceProjects.InternalReferenceProject.History.open()

        // Maximise
        GQ.Planets.Core.InternalReferenceProjects.InternalReferenceProject.maximizeSelector()

        // Select Record
        GQ.Planets.Core.InternalReferenceProjects.selectRecordByText('Test File')

        // Delete Record
        GQ.Planets.Core.InternalReferenceProjects.deleteRecord()

        // Logout
        GQ.logout()
    })
})