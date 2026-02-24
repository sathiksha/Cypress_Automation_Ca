import { GQTest } from '../../jnj-pages/GQTest.js'

describe('Default view of Documents', () => {
  const GQ = new GQTest()

  it.only('Default view of Documents - Planet', () => {
    // Login 
    GQ.Login()

    //Open Documents Planet
    GQ.Planets.openPlanet('Documents')

    //Open Documents page
    GQ.Planets.Documents.open()

    //Refresh
    GQ.Planets.Documents.refresh()

    //check Header Icons
    GQ.Planets.Documents.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Documents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Documents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Documents.openARecord()

    //Click Details Tab
    GQ.Planets.Documents.openDetails()

    //check Forms and Fields
    GQ.Planets.Documents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Documents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Documents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Documents.minimizeARecord()

    GQ.Planets.Documents.selectcolumn()
 
    GQ.Planets.Documents.checkAvailableFields()

    //Right Click the record
    GQ.Planets.Documents.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Documents.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Documents - Product > Content', () => {
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

    //Open page
    GQ.Planets.Product.ProductFamily.Content.Documents.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.Documents.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.Documents.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.Documents.refresh()

    // check Header Icons
     GQ.Planets.Product.ProductFamily.Content.Documents.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.Documents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.Documents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.Documents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.Documents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.Documents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.Documents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.Documents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.Documents.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.Documents.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.Documents.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Documents - Product > Admin Data Binder > Smart Content', () => {

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

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.closeSidePane()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.open()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.clickAll()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Documents - Product > Admin Data Binder > Linked Content', () => {
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Documents - Product > User Data Binder > Smart Content', () => {
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

    // User Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //Open under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.checkHeaderIcons()

    //Click All
     GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Documents - Product > User Data Binder > Linked Content', () => {
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

     // User Data Binder  - Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()
    
    //Open Documents under Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.checkHeaderIcons()
    
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Documents - Product > Product Specific Binder > Smart Content', () => {
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

    // Product Specific Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //Open Product Specific Binder Documents
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.checkHeaderIcons()

    //Click All
     GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Documents - Product > Product Specific Binder > Linked Content', () => {
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
    
    //Open Documents under Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.checkHeaderIcons()
    
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
