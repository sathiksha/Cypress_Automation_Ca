import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Data Management- DataFolders', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Data Management
        GQ.NavBar.ElementLibrary.DataManagement.open()

        // data Folders
        GQ.NavBar.ElementLibrary.DataManagement.DataFolders.open()
        
        // General
        GQ.NavBar.ElementLibrary.DataManagement.DataFolders.Home.General.open()

        // Related Objects
        GQ.NavBar.ElementLibrary.DataManagement.DataFolders.Home.RelatedObjects.open()


        // Read columns
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.DataManagement.DataFolders.Home.RelatedObjects.nameID()
            ,{}
        )

        // Logout
        GQ.logout()

  })
})