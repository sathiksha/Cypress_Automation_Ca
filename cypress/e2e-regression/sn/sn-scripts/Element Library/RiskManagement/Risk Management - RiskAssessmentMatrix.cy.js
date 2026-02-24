import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Risk Management - RiskAssessmentMatrix', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RiskManagement.open()

        // RiskAssesment Matrix
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.open()

        // Read Column
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.nameID()
            ,{}
        )

        // View Ram
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.viewRAM()

        // View RAM releases
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.viewRAMReleases()

        // Select Record()
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.selectRecordByIndex(0)

        // Home
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.Home.open()

        // Releases
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.Releases.open()

        // Maximise
        GQ.NavBar.ElementLibrary.RiskManagement.RiskAssessmentMatrix.maximizeSelector()

        // Logout 
        GQ.logout()
    })
})