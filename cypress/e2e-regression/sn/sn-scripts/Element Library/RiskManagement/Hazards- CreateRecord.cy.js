import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Hazards- CreateRecord', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RiskManagement.open()

        // Hazards
        GQ.NavBar.ElementLibrary.RiskManagement.Hazards.open()

        // Create record
        GQ.NavBar.ElementLibrary.RiskManagement.Hazards.createSibling()

        // setName
        GQ.NavBar.ElementLibrary.RiskManagement.Hazards.setName('Test File')

        // open record
        GQ.NavBar.ElementLibrary.RiskManagement.Hazards.openRecordByText('Test File')

        // History
        GQ.NavBar.ElementLibrary.RiskManagement.Hazards.History.open()

        // Maximise
        GQ.NavBar.ElementLibrary.RiskManagement.Hazards.maximizeSelector()

        // select record
        GQ.NavBar.ElementLibrary.RiskManagement.Hazards.selectRecordByText('Test File')

        // delete
        GQ.NavBar.ElementLibrary.RiskManagement.Hazards.deleteRecord()

        // refresh
        GQ.NavBar.ElementLibrary.RiskManagement.Hazards.refreshSelector()

        // Toggle filter
        GQ.NavBar.ElementLibrary.RiskManagement.Hazards.toggleFilter()

        // Logout
        GQ.logout()
    })
})