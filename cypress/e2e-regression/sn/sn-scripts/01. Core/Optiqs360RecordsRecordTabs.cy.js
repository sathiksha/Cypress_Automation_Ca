import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Optiqs360 Record Record Tabs', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open()

        // Optiqs360 Records
        GQ.Planets.Core.Optiqs360Records.open()

        // Records
        GQ.Planets.Core.Optiqs360Records.Records.open()

        // Toggle Filter
        GQ.Planets.Core.Optiqs360Records.Records.toggleFilter()

        // Select Record
        GQ.Planets.Core.Optiqs360Records.Records.selectRecord(0)

        // Released tab
        GQ.Planets.Core.Optiqs360Records.Records.Record.openReleaseTab()

        // Routing tab
        GQ.Planets.Core.Optiqs360Records.Records.Record.openRoutingsTab()

        // Team tab
        GQ.Planets.Core.Optiqs360Records.Records.Record.openTeamTab()

        // Action Items
        GQ.Planets.Core.Optiqs360Records.Records.Record.openActionItemsTab()

        // Details
        GQ.Planets.Core.Optiqs360Records.Records.Record.openDetailsTab()

        // Admin tab
        GQ.Planets.Core.Optiqs360Records.Records.Record.openAdminTab()

        // History Tab
        GQ.Planets.Core.Optiqs360Records.Records.Record.openHistoryTab()

        // Click to maximise
        GQ.Planets.Core.Optiqs360Records.Records.Record.maximiseSelector()

        // Toggle Filter
        GQ.Planets.Core.Optiqs360Records.Records.toggleFilter()

        // Logout
        GQ.logout()






    })
})