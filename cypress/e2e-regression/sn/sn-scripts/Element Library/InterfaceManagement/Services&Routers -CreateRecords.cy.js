import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('ServicesandRouters- CreateRecords', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.InterfaceManagement.open()

        // Services And Routers
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.open()

        // Create Records
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.createSibling()

        // Select record
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.selectRecordByText('A New XService')

        // Set name
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.setName('Test File')

        // Set Description
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.setDescription('abc')

        // save
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.save()

        // Select File
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.selectRecordByText('Test File')

        // Child
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.createChild()

        // Click plus
        cy.clickPlus(
            GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.getRowID(),0
        )

        // select record by text
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.selectRecordByText('A New XRouter')

        // child
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.setChildData('Test2','abc')

        // save
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.save()

        // Select record
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.selectRecordByText('Test File')
        
        // Delete
        GQ.NavBar.ElementLibrary.InterfaceManagement.ServicesandRouters.deleteRecord()

        // Logout
        GQ.logout()


    })
})