import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 4', () => {
    const GQ = new GQTest();
    it('12294-Test Case-Allows ownership role of root level Admin Data Binders', () => {

        // Login 
        GQ.login()

        // Element Library
        GQ.NavBar.ElementLibrary.openLandingPage()

        // Dropdown visible
        cy.getSC(GQ.NavBar.ElementLibrary.DropdownLocator).should('be.visible')

        // Data management
        GQ.NavBar.ElementLibrary.DataManagement.open()

        // Admin Data Binder visible
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.locator).should('be.visible')

        // User Data Binder visible
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.locator).should('be.visible')

        // Data Specification visible
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.DataSpecification.locator).should('be.visible')

        // Order Release Plans visible
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.OrderReleasePlans.locator).should('be.visible')

        // Document Review Projects visible
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.DocumentReviewProjects.locator).should('be.visible')

        // Data Folder visible
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.DataFolder.locator).should('be.visible')

        // Data Types visible
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.DataTypes.locator).should('be.visible')

        // Lifecycles visible
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.Lifecycles.locator).should('be.visible')

        // Open Admin Data Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.open()

        // Create new Admin Data Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createNewAdminDataBinder()

        // Refresh Selector
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector()

        // Select First Record
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByIndex(0)

        // Check Owner is creator
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.AdminBinderOwnerLocator
        ).invoke('text').then(text=>{
            cy.wrap(text).should('equal', 'Optiqs Administrator')
        })

        // Open Dropdown
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.AdminBinderOwnerLocator).click()

        // Hide groups one by one - this also makes sure that they exist
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.hideGroups()

        // Escape
        cy.pressEscape()

        // Set Admin Binder Owner
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setAdminBinderOwnerByIndex(1)

        // Escape
        cy.pressEscape()

        // Save
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()

        // Try to Delete
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteWithWarning('A New Admin Data Folder')

        // Logout
        GQ.logout()

    })
})
