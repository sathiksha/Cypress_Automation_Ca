import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);    
    it('InterfaceManagement - RequestsandTransactions', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Inteface Management
        GQ.NavBar.ElementLibrary.InterfaceManagement.open()

        // R & T
        GQ.NavBar.ElementLibrary.InterfaceManagement.RequestsandTransactions.open()

        // Read()
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.InterfaceManagement.RequestsandTransactions.interfaceID()
            ,{}
        )

        // Home
        GQ.NavBar.ElementLibrary.InterfaceManagement.RequestsandTransactions.Home.open()

        // General 
        GQ.NavBar.ElementLibrary.InterfaceManagement.RequestsandTransactions.Home.General.open()

        // Files
        GQ.NavBar.ElementLibrary.InterfaceManagement.RequestsandTransactions.Home.Files.open()

        // Child Transaction
        GQ.NavBar.ElementLibrary.InterfaceManagement.RequestsandTransactions.Home.ChildTransaction.open()

        // Read
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.InterfaceManagement.RequestsandTransactions.Home.ChildTransaction.interfaceID()
            ,{}
        )

        // Data
        GQ.NavBar.ElementLibrary.InterfaceManagement.RequestsandTransactions.Home.Data.open()

        // Logout
        GQ.logout()
        

    })
})