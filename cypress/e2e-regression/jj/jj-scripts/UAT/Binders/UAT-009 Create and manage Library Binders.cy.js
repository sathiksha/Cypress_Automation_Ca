import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
require('cypress-xpath')
if (!Cypress.env('onlyRunReadOnlyTests')) {
// Before remove skip, check if this script does any state changes
// If yes, do the following if (!Cypress.env('onlyRunReadOnlyTests')) {//Script}
// The cleanup process is commented due to the delete issue
describe('UAT/4.0', () => {
   it('UAT-009 Create and manage Library Binders', () => {
      // Login to planet Page
    GQ.login('PQM360 System Administrator')
      
      // click on Element library
      GQ.NavBar.ElementLibrary.openLandingPage()
      
      // click Data Management
      GQ.NavBar.ElementLibrary.DataManagement.open()

      // click any binder data
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByIndex(0)
      
      // click plus icon
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createNewBinderIcon()
      
      // click on new data
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRow('A New Admin Data Folder')
      
      // click name field
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('Test to add and delete Admin Data Binder')
      
      // click description
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setDescription('Testing')
      
      // select data types from dropdown
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.selectDataTypesByText('Regulatory Affairs')
      
      // click save all
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()
      
      // Refresh
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector()

      // Select Record
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRow('Test to add and delete Admin Data Binder')
      
      // click remove data
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteRow('Test to add and delete Admin Data Binder')
      
      // click refresh icon
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector()
      
      // click plus icon
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createNewBinderIcon()
      
      // click the data
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRow('A New Admin Data Folder')
      
      // click name field
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('Test Admin Data Binder')
      
      // click description
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setDescription('For testing admin data binder functionalities')
      
      // select Documents
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.selectDataTypesByText('Documents')
      
      // select manufacturing record
      // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.selectDataTypesByText('Manufacturing (Non GxP)')
           
      // click save all
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()
      
      // navigate to smart content
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.SmartContent.open()
      
      // click alias rule link
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.SmartContent.ProductRecords.AliasRule.open()
      
      // select 1st dropdown
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.SmartContent.ProductRecords.AliasRule.aliasRuleFilterField(0,'Document Type','contains','Validation')
      
      // click on filtered
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.SmartContent.ProductRecords.Filtered.open()
      
      // click refresh 
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.SmartContent.ProductRecords.Filtered.refresh()
      
      // click on 3 lines
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()
      
      // click check in
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.checkIn()
      
      // click 3 lines
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()
      
      // click release
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickRelease()
      
      // click Product Families
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.ProductFamilies.open()
      
      // Click Link sibling button
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.ProductFamilies.linkSibling()
            
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.ProductFamilies.toggleLinkFilter()

      // Select SIRNA
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.ProductFamilies.searchAndSelectFirstRow('SIRNA')
      
      // Select SIRNA
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.ProductFamilies.selectRowByText('SIRNA')
               
      // Click remove item
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.ProductFamilies.removeItem()
      
      // Navigate to products
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Products.open()
      
      // click on Link Sibling item
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Products.linkSibling()
      
      // right click in right most tab
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Products.rightClickItem()

      //select Select all
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Products.selectAllItems()
      
      //click select items icon
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Products.selectItemsButton()
      
      //click refresh icon
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Products.refresh()
      
      //click first data
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Products.selectRowByIndex(0)
      
      //select Second data
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Products.selectRowByIndex(1)
      
      //click remove icon
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Products.removeItem()
      // Cleanup Process
      // Select Test admin data
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRow('Test Admin Data Binder')
      
      //Click delete
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteRow('Test Admin Data Binder')
      
      //click log out
      GQ.logout() 
      
      
      // Login to planet Page
      GQ.login('PQM360 System Administrator')
      
      // click on Element library
      GQ.NavBar.ElementLibrary.openLandingPage()
      
      // click Data Management
      GQ.NavBar.ElementLibrary.DataManagement.open()
      
      // click on Element library
      GQ.NavBar.ElementLibrary.openLandingPage()
            
      //click Data Management
      GQ.NavBar.ElementLibrary.DataManagement.open()

      // click plus icon
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createNewBinderIcon()
      
      // click on new data
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRow('A New Admin Data Folder')
      
      // click name field
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('PQM View')
      
      // click description
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setDescription('Testing')
      
      // select data types from dropdown
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.selectDataTypesByText('Regulatory Affairs')
      
      // click save all
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()
      
      // Refresh
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector()

      // Select Record
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRow('PQM View')

      // Click New sibling
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createChildItem()
      
      // Click the Admin data binder Plus
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickPlusIcon('PQM View')
      
      //click new data folder
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickChildItem()
   
            
      //Click Name field
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('API Product Information')
      
      //Click Description
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setDescription('Testing')

      //Select Documents
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.selectDataTypesByText('Documents')
   
      //Click save data
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.save()
      
      //Click Refresh
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector()
      
      // Select Record
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRow('PQM View')
      
      //click on history tab
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.History.open()
      
      //click on products
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Products.open()
      
      //Cleanup process
      // //click pqm data
      // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRow('PQM View')
      //Click delete
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteRow('PQM View')

      
      //click log out
      GQ.logout()
      
      // Login to planet Page
      GQ.login('PQM360 System Administrator')
      
      // click on Element library
      GQ.NavBar.ElementLibrary.openLandingPage()
      
      // click Data Management
      GQ.NavBar.ElementLibrary.DataManagement.open()
      
      // click on Element library
      GQ.NavBar.ElementLibrary.openLandingPage()
            
      //click Data Management
      GQ.NavBar.ElementLibrary.DataManagement.open()
      
      //click user data binder
      GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.open()
      
      //click plus icon
      GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.createNewBinderIcon()
      
      //click the data
      //click New data
      GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.selectRecordByIndex(0)

      //Click Name field
      GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.Home.setName('Functional Test')
      
      //Click Description
      GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.Home.setDescription('For testing user data binder functionalities')

      //Select Laboratory records
      GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.Home.selectDataTypesByText('Documents')
     
      //Click save data
      GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.Home.save()
      
      //select functional test record
      GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.rightClickBinder('Functional Test')
      
      //convert to admin data binder
      GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.convertToAdminDataBinder()
      
      // Refresh 
      GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.refreshSelector()
      
      //Click Admin data binder
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.open()
     
      //Click refresh
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector()

      // Select Functional Test
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRowByText('Functional Test')
      
      // click on 3 lines
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()
      
      // click check in
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.checkIn()
      
      // click 3 lines
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger()
      
      // click release
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickRelease()
      
      // Click functional test
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRow('Functional Test')
      
      //Click delete
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteRow('Functional Test')
      
      //log out
      GQ.logout()
   })
})
}
