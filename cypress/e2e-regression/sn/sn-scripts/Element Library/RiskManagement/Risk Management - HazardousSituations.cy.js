import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Risk Management - HazardousSituations', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RiskManagement.open()

        // Harzardous Situation
        GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.open()

        // Read
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.RiskManagement.HazardousSituations.nameID()
            ,{}
        )

        // Logout
        GQ.logout()

    
    })
})