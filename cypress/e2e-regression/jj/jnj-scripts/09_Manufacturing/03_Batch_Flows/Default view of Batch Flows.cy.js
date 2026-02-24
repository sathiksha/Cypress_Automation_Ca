import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of Batch Flows',()=>{
	const GQ = new GQTest()

  it('Default view of Batch Flows - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Manufacturing')

    //Open page
    GQ.Planets.Manufacturing.BatchFlows.open()
    
    //Refresh
    GQ.Planets.Manufacturing.BatchFlows.refresh()

    //Check Column availability
    GQ.Planets.Manufacturing.BatchFlows.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Manufacturing.BatchFlows.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Manufacturing.BatchFlows.openARecord()

    //Click Details Tab
    GQ.Planets.Manufacturing.BatchFlows.openDetails()
   
    //Collapse upward
    GQ.Planets.Manufacturing.BatchFlows.collapseUpward()

   //check Fields are Non Editable
    GQ.Planets.Manufacturing.BatchFlows.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Manufacturing.BatchFlows.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Manufacturing.BatchFlows.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Manufacturing.BatchFlows.minimizeARecord()

    //Right Click the record
    GQ.Planets.Manufacturing.BatchFlows.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Manufacturing.BatchFlows.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Batch Flows - Product > Content', ()=>{
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

    //Open Batch Flows under Content
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.openDetails()

    //Collapse upward
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.collapseUpward()

   //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Batch Flows - Product > Admin Data Binder > Smart Content', ()=>{
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

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.openDetails()

    //Collapse upward
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.collapseUpward()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.BatchFlows.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Batch Flows - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.open()
    
    //close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.openDetails()

    //Collapse upward
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.collapseUpward()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.BatchFlows.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Batch Flows - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.open()
    
    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.openDetails()

    //Collapse upward
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.collapseUpward()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.BatchFlows.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })
});
