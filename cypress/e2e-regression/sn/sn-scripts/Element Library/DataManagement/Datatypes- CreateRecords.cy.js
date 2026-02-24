import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('DataTypes- CreateRecords', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Data Management
        GQ.NavBar.ElementLibrary.DataManagement.open()

        // DataTypes
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.open()

        // Creat Sibling
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.createSiblingButton()

        // Select Record
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.selecRecordByText('A New Data Type')

        // Set Name
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.setName('Test File')

        // Set Description
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.setDescription('abc')

        // Set Datatype
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.setDataType('Acceptability Criteria')

        // Save
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.save()

        // Select Record
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.selecRecordByText('Test File')

        // Delete
        GQ.NavBar.ElementLibrary.DataManagement.Datatypes.deleteRecord()

        // logout
        GQ.logout()


    })
})