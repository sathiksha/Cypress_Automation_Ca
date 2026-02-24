import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of Materials',()=>{
	const GQ = new GQTest()

  it('Default view of Materials - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Manufacturing')

    //Open page
    GQ.Planets.Manufacturing.Materials.open()

    //Refresh
    GQ.Planets.Manufacturing.Materials.refresh()

    //check Header Icons
    GQ.Planets.Manufacturing.Materials.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Manufacturing.Materials.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Manufacturing.Materials.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Manufacturing.Materials.openARecord()

    //Click Details Tab
    GQ.Planets.Manufacturing.Materials.openDetails()

    //check Forms and Fields
    GQ.Planets.Manufacturing.Materials.checkFormsandFieldsAvailablity()

    //open Batches tab
    GQ.Planets.Manufacturing.Materials.openBatches()

    //open batches record
    GQ.Planets.Manufacturing.Materials.openBatchesRecord()

    //Open related Objects
    GQ.Planets.Manufacturing.Materials.openRelatedObjects()
        
    // Check Related Objects
    GQ.Planets.Manufacturing.Materials.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Manufacturing.Materials.minimizeARecord()

    //Right Click the record
    GQ.Planets.Manufacturing.Materials.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Manufacturing.Materials.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Materials - Product > Content', ()=>{
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

    //Open Materials under Content
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.checkFormsandFieldsAvailablity()

    //open Batches tab
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.openBatches()

    //open batches record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.openBatchesRecord()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Materials - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.checkFormsandFieldsAvailablity()

    //open Batches tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.openBatches()

    //open batches record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.openBatchesRecord()
    
    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Materials - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.openDetails()

   //check Forms and Fields
   GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.checkFormsandFieldsAvailablity()

    //open Batches tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.openBatches()

    //open batches record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.openBatchesRecord()
  
    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Materials.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Materials - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.open()

   //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.checkFormsandFieldsAvailablity()

    //open Batches tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.openBatches()

    //open batches record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.openBatchesRecord()
    
    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Materials - Product > User Data Binder > Linked Content', ()=>{
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

    // User Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    //Open under User Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.checkFormsandFieldsAvailablity()

    //open Batches tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.openBatches()

    //open batches record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.openBatchesRecord()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Materials.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Materials - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.open()
    
    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.checkFormsandFieldsAvailablity()

    //open Batches tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.openBatches()

    //open batches record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.openBatchesRecord()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Materials - Product > Product Specific Binder > Linked Content', ()=>{
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

    // ProductSpecific Binder - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    //Open under Product Specific Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.open()
    
    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.openDetails()

   //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.checkFormsandFieldsAvailablity()

    //open Batches tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.openBatches()

    //open batches record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.openBatchesRecord()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Materials.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
