import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('HazardousSituation- CreateRecord', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RiskManagement.open()

        // Harzardous Situation
        GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.open()

        // Create Sibling
        GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.createSibling()

        // set Name
        GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.setName('Test File')

        // Open record
        GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.openRecordByText('Test File')

        // History
        GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.History.open()

        // Maximise
        GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.maximizeSelector()

        // select record
        GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.selectRecordByText('Test File')

        // delete
        GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.deleteRecord()

        // Refresh
        GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.refreshSelector()

        // toggle filter
        GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.toggleFilter()

        // Logout
        GQ.logout()
    })
})