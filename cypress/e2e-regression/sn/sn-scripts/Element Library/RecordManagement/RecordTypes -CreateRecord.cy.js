import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('RecordManagement - RecordTypes', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RecordManagement.open()

        // RecordTypes
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.open()

        // Create Record
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.createRecord()

        // Select Record
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.selectRecordByText('A New Record Type')

        // Set name
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.setName('Test File')

        // Set description
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.setDescription('abc')

        // Set Record type
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.setRecordType('Acceptibily Criteria')

        // Set System name
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.setSystemName('Matrix')

        // Set Aprrover name
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.setApproverRoles('Approver1')

        // Save
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.save()

        // select record
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.selectRecordByText('Test File')

        // Delete
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.deleteRecord()

        // Logout
        GQ.logout()
    })
})