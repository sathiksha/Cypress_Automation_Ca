import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Risk Management - Hazards', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RiskManagement.open()

        // Hazards
        GQ.NavBar.ElementLibrary.RiskManagement.Hazards.open()

        // Read
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.RiskManagement.Hazards.nameID()
            ,{}
        )

        // Logout
        GQ.logout()

    
    })
})