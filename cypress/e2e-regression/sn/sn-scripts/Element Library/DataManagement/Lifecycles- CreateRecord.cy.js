import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('LifeCycles- CreateRecord', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Data Management
        GQ.NavBar.ElementLibrary.DataManagement.open()

        // Life cycles
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.open()

        // Create record
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.createRecord()

        // Select record
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.selectRecordByText('A New Lifecycle')

        // Set name
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.setName('Test File')

        // Set Description
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.setDescription('abc')

        // Save
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.save()

        // Select record
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.selectRecordByText('Test File')

        // Delete
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.deleteRecord()

        // Logout
        GQ.logout()
    })
})
