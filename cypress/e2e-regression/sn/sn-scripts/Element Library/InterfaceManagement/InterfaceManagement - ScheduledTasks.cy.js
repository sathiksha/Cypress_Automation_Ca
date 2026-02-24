import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);    
    it('InterfaceManagement - ScheduledTasks', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.InterfaceManagement.open()

        // Services And Routers
        GQ.NavBar.ElementLibrary.InterfaceManagement.ScheduledTasks.open()

        // Read
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.InterfaceManagement.ScheduledTasks.nameID()
            ,{}
        )

        // Logout
        GQ.logout()
        

    })
})