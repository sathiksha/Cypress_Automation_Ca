import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Data Management- LifeCycles', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Data Management
        GQ.NavBar.ElementLibrary.DataManagement.open()

        // Life cycles
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.open()

        // Read columns
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.nameId()
            ,{}
        )

        // Select Record
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.selectRecord(0)

        // Home
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.Home.open()

        // Details
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.Home.Details.open()

        // Required Roles
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.Home.RequiredRole.open()

        // Name 
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.Home.RequiredRole.nameId()
            ,{}
        )

        // permission activities
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.Home.RequiredRole.PermissionedActivities.open()

        // Name 
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.Home.RequiredRole.PermissionedActivities.nameID()
            ,{}
        )

        // UserGroups
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.Home.RequiredRole.UserGroups.open()

        // Name id
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.Home.RequiredRole.UserGroups.nameID()
            ,{}
        )

        // Details Tab
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.Home.RequiredRole.Details.open()

        // Lifecycle Elements tab
        GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.Home.LifecycleElements.open()

        // Name ID
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.DataManagement.LifeCycles.Home.LifecycleElements.nameID()
            ,{}
        )

        // Logout
        GQ.logout()
    })
})