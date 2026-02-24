import { GQTest } from '.././jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 4', () => {
    const GQ = new GQTest();
    it('12300-Test Case-Allows recursive inheritance of child level Admin Data Binder ownership', () => {

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

        // Set Name
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('Parent')

        // Save
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()

        // Create Child
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createAndClickChild('Parent',0)

        // Set Name
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('Child')

        // Save
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()

        // Check Owner is creator
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.AdminBinderOwnerLocator
        ).invoke('text').then(text=>{
            cy.wrap(text).should('equal', 'Optiqs Administrator')
        })

        // Create Child
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createChildItem()

        // CLick PLus
        cy.clickPlus(GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.getRowLocatorByName('Child'), 1)

        // Click Grand-SOn
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('A New Admin Data Folder')

        // Set Name
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('Grand-Child')

        // Save
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()

        // Check Owner is creator
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.AdminBinderOwnerLocator
        ).invoke('text').then(text=>{
            cy.wrap(text).should('equal', 'Optiqs Administrator')
        })
        
        // Refresh Selector
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector()

        // Select Parent Record
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('Parent')
 
        // Set Admin Binder Owner
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setAdminBinderOwnerByName('val test2')
 
        // // CLick PLus
        // cy.clickPlus(
        //     GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.getRowLocatorByName('Parent'),0
        // )

        // Select Child Record
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('Child')

         // Check Owner is creator
         cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.AdminBinderOwnerLocator
        ).invoke('text').then(text=>{
            cy.wrap(text).should('equal', 'val test2')
        })

        // Expect This to be read-only
        cy.expectToBeReadOnly(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.AdminBinderOwnerLocator
        )  
        
        // CLick PLus
        cy.clickPlus(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.getRowLocatorByName('Child'),1
        ) 

        // Select Grand Child
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('Grand-Child')

        // Check Owner is creator
        cy.getSC(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.AdminBinderOwnerLocator
        ).invoke('text').then(text=>{
            cy.wrap(text).should('equal', 'val test2')
        })

        // Expect This to be read-only
        cy.expectToBeReadOnly(
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.AdminBinderOwnerLocator
        )
       
        // Refresh Selector
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector()

        // Select Grand Child
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('Parent')

        // Set Admin Binder Owner
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setAdminBinderOwnerByName('Optiqs Administrator')

        // Wait
        cy.wait(1000)

        // Try to Delete
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteWithWarning('Parent')

        // Logout
        GQ.logout()

    })
})
