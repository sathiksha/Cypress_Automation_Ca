import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 4', () => {
    const GQ = new GQTest();
    it('12302-Test Case-Allows active delete confirmation dialogue', () => {

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

        // Set Name
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('Parent-Cypress')

        // Save
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()

         // Check Owner is creator
         cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.AdminBinderOwnerLocator
        ).invoke('text').then(text=>{
            cy.wrap(text).should('equal', 'Optiqs Administrator')
        })

        // Delete Visible
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonLocator
        ).should('be.visible')

        // Click Delete
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonLocator
        ).click()

        // Title Check
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.titleLocator).invoke('text').then((title)=>{
            cy.wrap(title).should('equal', 'Warning:')
        })

        // Message Check
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.message).invoke('text').then((title)=>{
            cy.wrap(title).should('equal', "You're about to delete an Admin Data Binder and all of its child binders, if any; this action cannot be undone. If you are sure that you want to proceed with this action, please type the name of the Admin Data Binder (case sensitive) in the field below:")
        })

        // Get Placeholder
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.textBox
        ).invoke('text').then((text)=>{
            cy.log(text)
        })

        // Text box Visible
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.textBox
        ).should('be.visible')

        // Confirm button Visible
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.confirm
        ).should('be.visible')

        // Abort button Visible
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.abortButton
        ).should('be.visible')

        // Click Abort
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.abortButton
        ).click()

        // Click Delete
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonLocator
        ).click()

         // Set Wrong name
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.textBox
        ).clear().type('Parent-WRONG')

        // Click Confirm
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.confirm
        ).click()

        // Secondary Message Check
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.SecondaryDeletePopup.message).invoke('text').then((title)=>{
            cy.wrap(title).should('equal', "The typed name does not match the Admin Data Binder name. This action will be aborted.")
        })

        // OK
        cy.getSC(GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.SecondaryDeletePopup.OK).click()

        // Refresh Selector
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector()

        // Verify record is deleted
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('Parent-Cypress')

         // Click Delete
         cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonLocator
        ).click()

         // Set Wrong name
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.textBox
        ).clear().type('Parent-Cypress')

        // Click Confirm
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.DeleteButtonPopup.confirm
        ).click()

        // Refresh Selector
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector()
        
        // Verify record is deleted
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.recordShouldNotExist('Parent-Cypress')

        // Logout
        GQ.logout()

    })
})
