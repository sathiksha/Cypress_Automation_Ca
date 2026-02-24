import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Harm- CreateRecord', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RiskManagement.open()

        // Harms
        GQ.NavBar.ElementLibrary.RiskManagement.Harms.open()

        // Harm
        GQ.NavBar.ElementLibrary.RiskManagement.Harms.Harm.open()

        // Create record
        GQ.NavBar.ElementLibrary.RiskManagement.Harms.Harm.createSibling()

        // Set Name
        GQ.NavBar.ElementLibrary.RiskManagement.Harms.Harm.setName('Test File')

        //Open Record
        GQ.NavBar.ElementLibrary.RiskManagement.Harms.Harm.openRecordByText('Test File')

        // History
        GQ.NavBar.ElementLibrary.RiskManagement.Harms.Harm.History.open()

        // Maximise
        GQ.NavBar.ElementLibrary.RiskManagement.Harms.Harm.maximizeSelector()

        // Select record By Text
        GQ.NavBar.ElementLibrary.RiskManagement.Harms.Harm.selectRecordByText('Test File')

        // Delete
        GQ.NavBar.ElementLibrary.RiskManagement.Harms.Harm.deleteRecord()

        // Logout
        GQ.logout()
    })
})