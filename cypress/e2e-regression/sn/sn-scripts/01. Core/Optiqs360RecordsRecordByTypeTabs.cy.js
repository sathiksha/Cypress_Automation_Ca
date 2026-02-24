import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Optiqs360 Records Record By Type Tabs', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open()

        // Optiqs360 Records
        GQ.Planets.Core.Optiqs360Records.open()

        // Records By Type
        GQ.Planets.Core.Optiqs360Records.RecordsByType.open()
        
        // Toggle Filter
        GQ.Planets.Core.Optiqs360Records.RecordsByType.toggleFilter()

        // Select Record
        GQ.Planets.Core.Optiqs360Records.RecordsByType.selectRecord(0)

        // Records tab
        GQ.Planets.Core.Optiqs360Records.RecordsByType.RecordByType.openRecordsTab()

        // RecordReleases
        GQ.Planets.Core.Optiqs360Records.RecordsByType.RecordByType.openRecordReleasesTab()

        // Logout
        GQ.logout()

    })
})
