import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('RiskAssessmentMatrix- CreateRecord', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RiskManagement.open()

        // RiskAssesment Matrix
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.open()

        // Create Record
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.createRecord()

        // Set name
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.setName('Test File')

        // Select record
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.selectRecordByText('Test File')

        // Delete
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.deleteRecord()

        // Logout
        GQ.logout()

    })
})