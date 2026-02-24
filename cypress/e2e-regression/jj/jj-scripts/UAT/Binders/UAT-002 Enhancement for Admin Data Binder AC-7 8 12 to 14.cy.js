import { GQTest } from "../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('UAT/5.0', () => {
        it('UAT-002 Enhancement for Admin Data Binder AC-7 8 12 to 14', () => {

            //Login
            GQ.login('PQM360 System Administrator')

            //Element library
            GQ.NavBar.ElementLibrary.openLandingPage()

            //Data Management
            GQ.NavBar.ElementLibrary.DataManagement.open()

            //Admin dataBinder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.open()

            // Create New Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createNewBinderIcon()

            // Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('A New Admin Data Folder')

            // Set Name
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('MM Test ADB')

            // Set DataTypes
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.selectDataTypeByMultipleIndex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

            // Save
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()

            // Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('MM Test ADB')


            //Click Hamburger icon
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()

            // Check in
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.checkIn()

            //Click Hamburger icon
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()

            // Check Out
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.checkOut()

            //Make obsolete - Removed
            // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.makeObsolete()

            //New binder(Plus Icon)
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createNewBinderIcon()

            //Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('A New Admin Data Folder')

            // Set Name
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('MM Test to delete ADB')

            // Set DataTypes
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.selectDataTypeByMultipleIndex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

            // Save
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()

            // Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('MM Test to delete ADB')


            //Click Hamburger icon
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()


            // Check in
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.checkIn()


            //Click Hamburger icon
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()


            // Release
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.release()

            // Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('MM Test to delete ADB')

            // Make obsolete
            // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.makeObsolete()

            // Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('MM Test to delete ADB')

            //Delete no
            // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteRowWithNo()

            // Delete Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteRow('MM Test to delete ADB')

            //Delete yes
            // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteRowWithYes()

            //Logout
            GQ.logout()

            // Login
            GQ.login('PQM360 Business Administrator')

            //Element Library 
            GQ.NavBar.ElementLibrary.openLandingPage()

            //Data Management
            GQ.NavBar.ElementLibrary.DataManagement.open()

            //Admin dataBinder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.open()

            // Create New Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createNewBinderIcon()

            // Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('A New Admin Data Folder')

            // Set Name
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('MM Test ADB 5.0')

            // Set DataTypes
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.selectDataTypeByMultipleIndex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

            // Save
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()

            // Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('MM Test ADB 5.0')


            //Click Hamburger icon
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()


            // Check in
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.checkIn()


            //Click Hamburger icon
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()


            // Check Out
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.checkOut()

            //Make obsolete
            // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.makeObsolete()

            //New binder(Plus Icon)
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createNewBinderIcon()

            //Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('A New Admin Data Folder')

            // Set Name
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('MM Test to delete ADB 5.0')

            // Set DataTypes
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.selectDataTypeByMultipleIndex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

            // Save
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()

            // Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('MM Test to delete ADB 5.0')


            //Click Hamburger icon
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()


            // Check in
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.checkIn()


            //Click Hamburger icon
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()


            // Release
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.release()

            // Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('MM Test to delete ADB 5.0')

            // Make obsolete
            // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.makeObsolete()

            // Select Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByText('MM Test to delete ADB 5.0')

            //Delete and no
            // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteRowWithNo()

            // Delete Binder
            GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteRow('MM Test to delete ADB 5.0')

            //Delete and yes
            // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteRowWithYes()

            //Logout
            GQ.logout()


        })
    })

}
