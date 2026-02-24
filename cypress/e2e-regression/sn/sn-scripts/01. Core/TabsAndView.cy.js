import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Tabs And  Views', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open()

        // Optiqs360 Records
        GQ.Planets.Core.Optiqs360Records.open()

        // Records By Type
        GQ.Planets.Core.Optiqs360Records.RecordsByType.open()

        // Records
        GQ.Planets.Core.Optiqs360Records.Records.open()

        // Matrix Records
        GQ.Planets.Core.MatrixRecords.open()

        // Records By Type
        GQ.Planets.Core.MatrixRecords.RecordsByType.open()

        // Records
        GQ.Planets.Core.MatrixRecords.Records.open()

        // Windchill Records
        GQ.Planets.Core.WindchillRecords.open()

        // Records By Type
        GQ.Planets.Core.WindchillRecords.RecordsByType.open()

        // Records
        GQ.Planets.Core.WindchillRecords.Records.open()

        // Uploaded Records
        GQ.Planets.Core.UploadedRecords.open()

        // InternalReferenceProjects
        GQ.Planets.Core.InternalReferenceProjects.open()

        // Logout
        GQ.logout()

    })
})