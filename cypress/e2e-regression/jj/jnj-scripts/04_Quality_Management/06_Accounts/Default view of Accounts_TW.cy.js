import { GQTest } from "../../../jnj-pages/GQTest"; 
 
describe('Default view of Accounts_TW', () => {
  const GQ = new GQTest()
 
  it('Default view of Accounts_TW - Planet', () => {
     // Login 
    GQ.Login()
    
    //Open Planet
    GQ.Planets.openPlanet('Quality Management')

    GQ.Planets.QualityManagement.Accounts_TW.open()

    GQ.Planets.QualityManagement.Accounts_TW.selectTrackwise()
    
    //Refresh
    GQ.Planets.QualityManagement.Accounts_TW.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.Accounts_TW.checkColumns()

    //Check multi-choice picker Column availability
    
    GQ.Planets.QualityManagement.Accounts_TW.checkMultiChoicePickerColumns()

    GQ.Planets.QualityManagement.Accounts_TW.refresh()
    //click Chart Icon
    // GQ.Planets.QualityManagement.Accounts_TW.clickChartIcon()

//     //Click Analytics
//     GQ.Planets.QualityManagement.Accounts_TW.Analytics.open()

//     //analytics Refresh
//     GQ.Planets.QualityManagement.Accounts_TW.Analytics.refresh()

//     //click FacetPicker
//     GQ.Planets.QualityManagement.Accounts_TW.Analytics.clickFacetPicker()

//     //remove Row Attributes
//     GQ.Planets.QualityManagement.Accounts_TW.Analytics.removeRowAttributes()

//     //remove Column Attributes
//     GQ.Planets.QualityManagement.Accounts_TW.Analytics.removeColumnAttributes()

//     //add Row Attributes
//     GQ.Planets.QualityManagement.Accounts_TW.Analytics.addRowAttributes()

//     //add Column Attributes
//     GQ.Planets.QualityManagement.Accounts_TW.Analytics.addColumnAttributes()

//     //click filter
//     GQ.Planets.QualityManagement.Accounts_TW.Analytics.clickFilter()

// //Refresh
//    GQ.Planets.QualityManagement.Accounts_TW.Analytics.refresh()
//   // //click Chart Icon
//     GQ.Planets.QualityManagement.Accounts_TW.clickChartIcon()
    //open a Record
    GQ.Planets.QualityManagement.Accounts_TW.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.Accounts_TW.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.Accounts_TW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.QualityManagement.Accounts_TW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.Accounts_TW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.Accounts_TW.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.Accounts_TW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.Accounts_TW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
   })
 
  it('Default view of Accounts_TW - Product > Content', ()=>{
     // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open Assessment Executions under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.open()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.selectTrackwise()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.refresh()

    //  //click Chart Icon
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.clickChartIcon()

    // //Click Analytics
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.Analytics.open()

    // //analytics Refresh
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.Analytics.refresh()

    // //click FacetPicker
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.Analytics.clickFacetPicker()
  
    // //remove Row Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.Analytics.removeRowAttributes()

    // //remove Column Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.Analytics.removeColumnAttributes()

    // //add Row Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.Analytics.addRowAttributes()

    // //add Column Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.Analytics.addColumnAttributes()

//     //click filter
//     GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.Analytics.clickFilter()

//  GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.Analytics.refresh()
//     //Validate Filter Functionality
//     GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.Analytics.checkFilterFunctionality()

//     GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.Analytics.refresh()

//     //Click chart icon
//     GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.clickChartIcon()

 GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.refresh()
    // //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.openDetails()


    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts_TW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
    
  })
 
  it('Default view of Accounts_TW - Product > Admin Data Binder > Smart Content', ()=>{
    
     // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.selectTrackwise()
    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.checkMultiChoicePickerColumns()

   
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.refresh()
   //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts_TW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 
  it('Default view of Accounts_TW - Product > Admin Data Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.open()

   GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.selectTrackwise()
    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.refresh()

   // Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Accounts_TW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })
 
  it('Default view of Accounts_TW - Product > User Data Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    //Open under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.open()

 GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.selectTrackwise()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.refresh()
    // //click Chart Icon
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.clickChartIcon()

    // //Click Analytics
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.open()

    // //analytics Refresh
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.refresh()

    // //click FacetPicker
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.clickFacetPicker()

          //remove Row Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.removeRowAttributes()

    // //remove Column Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.removeColumnAttributes()
  
    // //add Row Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.addRowAttributes()

    // //add Column Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.addColumnAttributes()

    // //click filter
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.checkFilterFunctionality()

    //  GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.refresh()

    // //Click Status
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Status.open()

    // //Status Refresh
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Status.refresh()

    // //check Graphs
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Status.checkGraphs()
    // //Assignee

    // //Click Asssignee
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Owner.open()

    // //Assignee Refresh
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Owner.refresh()

    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Owner.filter()

    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Owner.checkFilterFunctionality()

    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.Owner.refresh()


    // //Click chart icon
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.clickChartIcon()

  

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()


    //Logout
    GQ.Logout()
  })
 
  it('Default view of Accounts_TW - Product > User Data Binder > Linked Content', ()=>{
    
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    //Open under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.selectTrackwise()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Accounts_TW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })
 
  it('Default view of Accounts_TW - Product > Product Specific Binder > Smart Content', ()=>{
   // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // ProductSpecific Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //Open under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts_TW.selectTrackwise()

  
    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.refresh()
    //  //click Chart Icon
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.clickChartIcon()

    // //Click Analytics
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.open()

    // //analytics Refresh
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.refresh()

  //   //click FacetPicker
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.clickFacetPicker()

  //    //remove Row Attributes
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.removeRowAttributes()
  //   //remove Column Attributes
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.removeColumnAttributes()

  //   //add Row Attributes
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.addRowAttributes()

  //   //add Column Attributes
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.addColumnAttributes()

  //   //click filter
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.clickFilter()

  //   //Validate Filter Functionality
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.checkFilterFunctionality()
   
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Analytics.refresh()
  //  //Status
  //   //Click Status
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Status.open()

  //   //Status Refresh
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Status.refresh()

  //   //check Graphs
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Status.checkGraphs()
  //   //Assignee

  //   //Click Asssignee
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Owner.open()

  //   //Assignee Refresh
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Owner.refresh()

  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Owner.filter()

  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.Owner.checkFilterFunctionality()


  //   // //click Chart Icon
  //   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.clickChartIcon()
    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts_TW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()

  })
 
  it('Default view of Accounts_TW - Product > Product Specific Binder > Linked Content', ()=>{
      // Login
    GQ.Login()
 
    // Open Product
    GQ.Planets.openPlanet('Product')
 
   //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()
 
    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')
 
    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')
 
   // Product Specific Binder  - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()
   
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open()
  
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.open()  

   GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.selectTrackwise()

//link a Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Accounts_TW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
    //changes
  })
 
}); 
