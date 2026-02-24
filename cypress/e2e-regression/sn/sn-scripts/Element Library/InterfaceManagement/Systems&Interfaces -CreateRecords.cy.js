import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('SystemsandInterfaces- CreateRecords', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.InterfaceManagement.open()

        // System Interfaces
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.open()

        // Create Records
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.createSibling()

        // Select record
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.selectRecordByText('A New XSystem')

        // Set name
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.setName('Test File')

        // Set Description
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.setDescription('abc')

        //datasource
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.setDataSource('Systems')

        // save
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.save()

        // Child
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.createChild()

        // Click plus
        cy.clickPlus(
            GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.getRowID(),0
        )

        // select record by text
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.selectRecordByText('A New XInterface')

        // child
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.setChildData('Test2','abc')

        // save
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.save()

        // Select record
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.selectRecordByText('Test File')
        
        // Delete
        GQ.NavBar.ElementLibrary.InterfaceManagement.SystemsandInterfaces.deleteRecord()

        // Logout
        GQ.logout()


    })
})