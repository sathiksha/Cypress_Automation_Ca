import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('RecordManagement - RecordTypes', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RecordManagement.open()

        // RecordTypes
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.open()

        // Read column
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.recordID()
            ,{}    
        )

        
        // Select record
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.selectRecordByIndex(0)

        // Home
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.Home.open()

        // templates
        GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.Home.Templates.open()

        // read Column
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.RecordManagement.RecordTypes.Home.Templates.templateID()
            ,{}
        )

        // Logout
        GQ.logout()

    })
})