import { GQTest } from '../../jj-pages/GQTest'
// Sprint 6
require('cypress-xpath')
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('Sprint 6', () => {
        const GQ = new GQTest();
        it('13249-Allows enforcement of customer license quantities', () => {

            // Login 
            GQ.login("PQM360 System Administrator")
            // Menu
            GQ.Menu.show()
            // Open Domain Setup
            GQ.Menu.DomainSetup.open()

            // Manage
            GQ.Menu.DomainSetup.Manage.open()
            // Users tab
            GQ.Menu.DomainSetup.Manage.Users.open()
            // Toggle Filter
            GQ.Menu.DomainSetup.Manage.Users.toggleFilter()

            // Select User
            GQ.Menu.DomainSetup.Manage.Users.openUserNameByText('testing 12345')
            //'test','testabc123 testabc123'
            // Check Work center
            //GQ.Menu.DomainSetup.Manage.Users.User.clickTrueWorkCenterLicense()

            // Check Intellistreamer
            GQ.Menu.DomainSetup.Manage.Users.User.clickTrueIntelliStreamerLicense()

            // Click save
            GQ.Menu.DomainSetup.Manage.Users.User.clickSave()

            // Error Message
            cy.getSC(GQ.Menu.DomainSetup.Manage.Users.User.message).invoke('text').then((title) => {
                cy.wrap(title).should('equal', "Your system has insufficient WorkCenter or IntelliWriter license quantity available to assign to this user account.  Please contact your Clarivate Account Manager to request an increase in your available license quantity.  Alternatively, you may deactivate another user's account access to allow this user to be assigned a license.")
            })

            // Click Ok
            GQ.Menu.DomainSetup.Manage.Users.User.clickErrorOk()

            // Refresh
            GQ.Menu.DomainSetup.Manage.Users.User.refresh()

            // Select Record
            GQ.Menu.DomainSetup.Manage.Users.selectUserByText('testing 12345')

            // Check Work center
            GQ.Menu.DomainSetup.Manage.Users.User.clickFalseWorkCenterLicense()

            // Check Intellistreamer
            GQ.Menu.DomainSetup.Manage.Users.User.clickFalseIntelliStreamerLicense()

            // Click save
            GQ.Menu.DomainSetup.Manage.Users.User.clickSave()

            // Check Pop up
            cy.getSC(
                GQ.Menu.DomainSetup.Manage.Users.User.userInactivationWarning()
            ).should('be.visible')

            // Abort
            GQ.Menu.DomainSetup.Manage.Users.User.clickAbort()

            // Refresh
            GQ.Menu.DomainSetup.Manage.Users.User.refresh()

            // Check Work center
            GQ.Menu.DomainSetup.Manage.Users.User.clickFalseWorkCenterLicense()

            // Check Intellistreamer
            GQ.Menu.DomainSetup.Manage.Users.User.clickFalseIntelliStreamerLicense()

            // Click save
            GQ.Menu.DomainSetup.Manage.Users.User.clickSave()

            // Enter Name
            GQ.Menu.DomainSetup.Manage.Users.User.enterUserName('valtest')

            // Proceed
            GQ.Menu.DomainSetup.Manage.Users.User.clickProceed()

            // cy.get('div#isc_TE').should('be.visible');

            // // Error message
            cy.getSC(
                GQ.Menu.DomainSetup.Manage.Users.User.mismatchErrorMessage()
            ).should('be.visible')

            // Click Ok
            GQ.Menu.DomainSetup.Manage.Users.User.clickOK()

            // Refresh
            GQ.Menu.DomainSetup.Manage.Users.User.refresh()

            // Commented for now may be needed for future purposes

            // // Check Work center
            // GQ.Menu.DomainSetup.Manage.Users.User.checkWorkCenterLicense()

            // // Check Intellistreamer
            // GQ.Menu.DomainSetup.Manage.Users.User.checkIntelliStreamerLicense()

            // // Click save
            // GQ.Menu.DomainSetup.Manage.Users.User.clickSave()

            // // Enter Name
            // GQ.Menu.DomainSetup.Manage.Users.User.enterUserName('valtest3')

            // // Proceed
            // GQ.Menu.DomainSetup.Manage.Users.User.clickProceed()

            // // Refresh
            // GQ.Menu.DomainSetup.Manage.Users.User.refresh()

            // // Check Work center
            // GQ.Menu.DomainSetup.Manage.Users.User.checkWorkCenterLicense()

            // // Check Intellistreamer
            // GQ.Menu.DomainSetup.Manage.Users.User.checkIntelliStreamerLicense()

            // // Click save
            // GQ.Menu.DomainSetup.Manage.Users.User.clickSave()

            // // Refresh
            // GQ.Menu.DomainSetup.Manage.Users.User.refresh()

            // Home
            GQ.NavBar.Home.openLandingPage()

            // Navigate to product
            GQ.Planets.Product.openLandingPage()

            // Toggle Filter
            GQ.Planets.Product.ProductFamilies.toggleFilter()

            // Open Product Family
            GQ.Planets.Product.ProductFamilies.openProductFamilyByText('My Family Test - Cypress')

            // Home tab
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.open()

            // Details tab
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.openLandingPage()

            cy.waitForSCDone()

            // Read Streaming Product family
            cy.getSC(
                GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.readStreamFamilyProduct()
            ).should('be.visible')

            // Click Streaming Product family
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.clickStreamFamilyProduct()

            // Save
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.save()

            // Error Message
            cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.message).invoke('text').then((title) => {
                cy.wrap(title).should('equal', "Your system has insufficient IntelliStreamer license quantity available to assign to this Product Family. Please contact your Clarivate Account Manager to request an increase in your available license quantity.  Alternatively, you may deactivate the streaming of another Product Family to allow this Product Family to be assigned a license.")
            })

            // Click OK
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.clickErrorOK()

            // Refresh
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.refresh()

            // Click Maximize selector
            GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

            // Open Product Family
            GQ.Planets.Product.ProductFamilies.openProductFamilyByText('IBRUTINIB')

            // Click Streaming Product family
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.clickStreamFamilyProduct()

            // Save
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.save()

            // Refresh
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.refresh()

            // Click Streaming Product family
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.clickStreamFamilyProduct()

            // Save
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.save()

            // Refresh
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.refresh()

            // Click Maximize selector
            GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

            // Logout
            GQ.logout()

            // Login
            GQ.login("PQM360 Business Administrator")

            // Navigate to product
            GQ.Planets.Product.openLandingPage()

            // Toggle Filter
            GQ.Planets.Product.ProductFamilies.toggleFilter()

            // Open Product Family
            GQ.Planets.Product.ProductFamilies.openProductFamilyByText('My Family Test - Cypress')

            //Home tab
            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.open()

            //Details tab
             GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.openLandingPage()

            // Read Streaming Product family

            GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.readStreamFamilyProduct()


             // Click Maximize selector
        //       GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

             // Logout
        //     GQ.logout()


        })
    })
}