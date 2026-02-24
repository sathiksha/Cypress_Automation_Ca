import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('InterfaceManagement - SystemsandInterfaces', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.InterfaceManagement.open()

        // System Interfaces
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.open()

        // Read
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.nameID()
            ,{}
        )

        // Logout
        GQ.logout()


    })
})