import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('UploadedRecords - CreateRecords', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open()

        // Optiqs360 Records
        GQ.Planets.Core.UploadedRecords.open()

        // create Record
        GQ.Planets.Core.UploadedRecords.CreatSibling('Test File','Bronchure','0','2023')

        // Open Record
        GQ.Planets.Core.UploadedRecords.openRecordByText('Test File')

        // History
        GQ.Planets.Core.UploadedRecords.uploadedRecord.History.open()

        // Maximize
        GQ.Planets.Core.UploadedRecords.uploadedRecord.maximizeSelector()

        // Select file
        GQ.Planets.Core.UploadedRecords.selectRecordByText('Test File')

        // Delete Record
        GQ.Planets.Core.UploadedRecords.deleteRecord()

        // Log out
        GQ.logout()



    })
})