import { GQTest } from '../../../../jnj-pages/GQTest.js'

describe('Default view of Escalations - Meetings', () => {

  const GQ = new GQTest()

  it('Default view of Escalations - Meetings - Planet', () => {
    
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open Planet
    GQ.Planets.QualityManagement.Escalations.open()

    //Open page
    GQ.Planets.QualityManagement.Escalations.Meetings.open()

    //Refresh
    GQ.Planets.QualityManagement.Escalations.Meetings.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.Escalations.Meetings.checkColumns()

    //Check Eye icon column
    GQ.Planets.QualityManagement.Escalations.Meetings.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Escalations.Meetings.checkMultiChoicePickerColumns()

    //check Predefined Filters
    GQ.Planets.QualityManagement.Escalations.Meetings.checkPredefinedFilters()

    //click Chart Icon
    GQ.Planets.QualityManagement.Escalations.Meetings.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.addRowAttributeClick()

    //Check Chart Dropdown values
    GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.checkRowValues()

    //add Column Attributes
    GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.filter()

    //Validate Filter Functionality
    // GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.QualityManagement.Escalations.Meetings.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.Escalations.Meetings.Status.refresh()

    //checkGraphs
    GQ.Planets.QualityManagement.Escalations.Meetings.Status.checkGraphs()

    //Click StausorOwner
    GQ.Planets.QualityManagement.Escalations.Meetings.StausorOwner.open()

    //StausorOwner Refresh
    GQ.Planets.QualityManagement.Escalations.Meetings.StausorOwner.refresh()

    //Click chart icon
    GQ.Planets.QualityManagement.Escalations.Meetings.clickChartIcon()

    //open a Record
    GQ.Planets.QualityManagement.Escalations.Meetings.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.Escalations.Meetings.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.Escalations.Meetings.checkFormsandFields()

    //minimize the record
    GQ.Planets.QualityManagement.Escalations.Meetings.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.Escalations.Meetings.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.Escalations.Meetings.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Meetings - Product > Content', () => {
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

    // Quality Management
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    //Open Escalations under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.open()

    //Open Meetings under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.refresh()

    //checkHeaderIcons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.checkColumns()

    //Check Eye icon column
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.checkEyeIconColumn()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Analytics.addRowAttributeClick()

    //Check Chart Dropdown values
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Analytics.checkRowValues()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Analytics.filter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.Status.checkGraphs()

    //Click StausorOwner
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.StausorOwner.open()

    //StausorOwner Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.StausorOwner.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.clickChartIcon()


    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.checkFormsandFields()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.Meetings.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Meetings - Product > Admin Data Binder > Smart Content', () => {
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

    //Open under Quality Management
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    //Open Escalations
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.open()

    //Open Meetings
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.open()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkColumns()

    //Check Eye icon column
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkEyeIconColumn()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.clickFacetPicker()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.checkGraphs()

    //Click StausorOwner
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.open()

    //StausorOwner Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkFormsandFields()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Meetings - Product > Admin Data Binder > Linked Content', () => {

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

    //close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.closeSidePane()

    //Open Quality Management
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.open()

    //Open Escalations
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.open()

    //Open Meetings
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.open()

    //Link a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.linkARecord()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.checkColumns()

    //Check Eye icon column
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.checkEyeIconColumn()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.checkFormsandFields()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Meetings - Product > User Data Binder > Smart Content', () => {
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

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.closeSidePane()

    //Open Quality Management 
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

    //Open Escalations under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.open()

    //Open Meetings
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.open()

    // Click All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkColumns()

    //Check Eye icon column
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.clickFacetPicker()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.checkGraphs()

    //Click StausorOwner
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.open()

    //StausorOwner Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkFormsandFields()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Meetings - Product > User Data Binder > Linked Content', () => {
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

    //Open under User Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

    // Open Escalations
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.checkColumns()

    //Check Eye icon column
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.checkEyeIconColumn()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.checkFormsandFields()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Meetings.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Meetings - Product > Product Specific Binder > Smart Content', () => {
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

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.closeSidePane()

    //Open under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.open()

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.checkColumns()

    //Check Eye icon column
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.checkEyeIconColumn()
  
    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.clickFacetPicker()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.checkGraphs()

    //Click StausorOwner
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.open()

    //StausorOwner Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.checkFormsandFields()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.Meetings.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Meetings - Product > Product Specific Binder > Linked Content', () => {
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

    //Open QualityManagement under Product Specific Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open()

    //Open Escalations page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.open()

    //Open Meetings page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.Meetings.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.Meetings.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.Meetings.checkColumns()

    //Check Eye icon column
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.Meetings.checkEyeIconColumn()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.Meetings.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.Meetings.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.Meetings.checkFormsandFields()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.Meetings.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.Meetings.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.Meetings.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()

  })

});
