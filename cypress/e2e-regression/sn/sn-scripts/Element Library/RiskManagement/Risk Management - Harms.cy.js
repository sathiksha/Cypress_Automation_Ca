import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Risk Management - Harms', () => {
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

        // Read
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.RiskManagement.Harms.Harm.nameID()
            ,{}
        )

        // harm severity
        GQ.NavBar.ElementLibrary.RiskManagement.Harms.HarmSeverity.open()

        // Read
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.RiskManagement.Harms.HarmSeverity.levelID()
            ,{}
        )

        // Logout
        GQ.logout()

    
    })
})