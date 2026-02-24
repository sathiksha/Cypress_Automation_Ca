import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of Batches',()=>{
	const GQ = new GQTest()

  it('Default view of Batches - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Manufacturing')

    //Open page
    GQ.Planets.Manufacturing.Batches.open()

    //Refresh
    GQ.Planets.Manufacturing.Batches.refresh()

    //Check Column availability
    GQ.Planets.Manufacturing.Batches.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Manufacturing.Batches.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Manufacturing.Batches.openARecord()

    //Click Details Tab
    GQ.Planets.Manufacturing.Batches.openDetails()

   //Check Forms and Fields
    GQ.Planets.Manufacturing.Batches.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Manufacturing.Batches.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Manufacturing.Batches.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Manufacturing.Batches.minimizeARecord()

    //Right Click the record
    GQ.Planets.Manufacturing.Batches.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Manufacturing.Batches.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Batches - Product > Content', ()=>{
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

    //Open Batches under Content
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Batches.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Batches - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.open()

   //close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Batches.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Batches - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.openDetails()

    //Click Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Batches - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Batches - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Manufacturing.Batches.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Batches - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.open()
    
    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Batches.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Batches - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Manufacturing.Batches.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
