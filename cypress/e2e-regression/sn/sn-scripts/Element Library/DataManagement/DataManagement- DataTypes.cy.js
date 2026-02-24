import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Data Management- DataTypes', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Data Management
        GQ.NavBar.ElementLibrary.DataManagement.open()

        // DataTypes
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.open()

        // Autotest
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.DataManagement.Datatypes.dataTypeID()
        ,{})
        
        // select data
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.selectRecord(0)

        // Home 
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.Home.open()

        // Specifications
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.Specification.open()
        
        // Inputs
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.Inputs.open()

        // read columns
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.DataManagement.Datatypes.Inputs.nameID(),{}
        )

        // Checkout
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.clickCheckOut()

        // Checkin
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.clickCheckIn()
        
        // Logout
        GQ.logout()
       



        
    })
})