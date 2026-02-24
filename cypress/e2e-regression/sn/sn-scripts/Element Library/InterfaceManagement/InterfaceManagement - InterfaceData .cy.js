import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);    
    it('InterfaceManagement - Interface Data', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Inteface Management
        GQ.NavBar.ElementLibrary.InterfaceManagement.open()

        // Interface Data
        GQ.NavBar.ElementLibrary.InterfaceManagement.InterfaceData.open()

        // Read()
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.InterfaceManagement.RequestsandTransactions.interfaceID()
            ,{}
        )

        // Logout
        GQ.logout()
        

    })
})