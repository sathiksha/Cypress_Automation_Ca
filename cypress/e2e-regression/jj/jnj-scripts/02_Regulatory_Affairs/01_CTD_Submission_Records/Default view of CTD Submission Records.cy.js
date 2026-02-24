import { GQTest } from '../../../jnj-pages/GQTest.js'

describe('Default view of CTD Submission Records', () => {
  const GQ = new GQTest()

  it('Default view of CTD Submission Records - Planet', () => {
    // Login 
    GQ.Login()

    //Open Documents Planet
    GQ.Planets.openPlanet('Regulatory Affairs')

    //Open Planet
    GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.open()

    //Refresh
    GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.refresh()

    //Check Header Icons
    GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.openARecord()

    //Click Details Tab
    GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.openDetails()

    //check Forms and Fields
    GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.minimizeARecord()

    //Right Click the record
    GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.rightClickARecord()

    //Add Bookmark
    GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CTD Submission Records - Product > Content', () => {
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

    //Open Regulatory Affairs
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.open()

    //Open CTD Submission Records under Content
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.closeSidePane()

    //Click ctdTraingle
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.ctdTraingle()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.refresh()

    //Check Header Icons
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.minimizeARecord()

    //check Ctd Triangle Data
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.checkCtdTriangleData()

    //Click ctdTraingle
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.ctdTraingle()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTDSubmissionRecords.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CTD Submission Records - Product > Admin Data Binder > Smart Content', () => {
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.closeSidePane()

    //Open Regulatory Affairs under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.open()

    //Open CTD Submission Records
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.open()

    //Click ctdTraingle
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.ctdTraingle()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.refresh()

    //Check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.minimizeARecord()

    //checkCtdTriangleData
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkCtdTriangleData()

    //Click ctdTraingle
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.ctdTraingle()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CTD Submission Records - Product > Admin Data Binder > Linked Content', () => {
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

    //Open Regulatory Affairs under Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.open()

    //Open CTD Submission Records
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.closeSidePane()

    //Click All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.linkARecord()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.refresh()

    //Check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of CTD Submission Records - Product > User Data Binder > Smart Content', () => {
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

    //Open RegulatoryAffairs 
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.open()

    //Open CTD Submission Records
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.open()

    //Close Side  Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.closeSidePane()

    //Click ctdTraingle
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.ctdTraingle()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.refresh()

    //Check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.minimizeARecord()

    //Check Triangle Data
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkCtdTriangleData()

    //Click ctdTraingle
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.ctdTraingle()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CTD Submission Records - Product > User Data Binder > Linked Content', () => {
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

    //Open Regulatory Affairs
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.open()

    //Open  CTD Submission Records
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.open()

     //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.closeSidePane()

    //Click All
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.linkARecord()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.refresh()

    //Check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CTD Submission Records - Product > Product Specific Binder > Smart Content', () => {
    // Login 
    GQ.Login()

    //Open Documents Planet
    GQ.Planets.openPlanet('Regulatory Affairs')

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

    //Open Regulatory Affairs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.open()

    //Open CTD Submission Records
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.closeSidePane()

    //Click ctd Traingle
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.ctdTraingle()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.refresh()

    //Check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.minimizeARecord()

     //Click ctd Traingle data
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.checkCtdTriangleData()

     //Click ctd Traingle
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.ctdTraingle()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTDSubmissionRecords.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CTD Submission Records - Product > Product Specific Binder > Linked Content', () => {
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

    // User Data Binder  - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    //Open Regulatory Affairs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.open()

    //Open  CTD Submission Records
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.open()

     //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.closeSidePane()

    //Click All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.linkARecord()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.refresh()

    //Check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
