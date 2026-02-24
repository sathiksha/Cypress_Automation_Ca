import { GQTest } from '../../../../jnj-pages/GQTest.js'

describe('Default view of Containments', () => {
  const GQ = new GQTest()

  it('Default view of Containments - Planet', () => {
    // Login 
    GQ.Login()

    //open Quality Management
    GQ.Planets.openPlanet('Quality Management')

    //Open Planet
    GQ.Planets.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.QualityManagement.Nonconformances.Containments.open()

    //Refresh
    GQ.Planets.QualityManagement.Nonconformances.Containments.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.Nonconformances.Containments.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Nonconformances.Containments.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.QualityManagement.Nonconformances.Containments.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.Nonconformances.Containments.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.Nonconformances.Containments.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.Nonconformances.Containments.Analytics.facetPicker()

    //add Row Attributes
    GQ.Planets.QualityManagement.Nonconformances.Containments.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.QualityManagement.Nonconformances.Containments.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.QualityManagement.Nonconformances.Containments.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.QualityManagement.Nonconformances.Containments.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.QualityManagement.Nonconformances.Containments.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.Nonconformances.Containments.Status.refresh()

    //checkGraphs
    GQ.Planets.QualityManagement.Nonconformances.Containments.Status.checkGraphs()

    //Click StatusorAssignee
    GQ.Planets.QualityManagement.Nonconformances.Containments.StatusorAssignee.open()

    //StatusorAssignee Refresh
    GQ.Planets.QualityManagement.Nonconformances.Containments.StatusorAssignee.refresh()

    //Click chart icon
    GQ.Planets.QualityManagement.Nonconformances.Containments.clickChartIcon()

    //open a Record
    GQ.Planets.QualityManagement.Nonconformances.Containments.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.Nonconformances.Containments.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.Nonconformances.Containments.checkFormsandFields('Nonconformances', 'Containments')

    //Open related Objects
    GQ.Planets.QualityManagement.Nonconformances.Containments.openRelatedObjects()

    //Check related Objects
    GQ.Planets.QualityManagement.Nonconformances.Containments.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.Nonconformances.Containments.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.Nonconformances.Containments.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.Nonconformances.Containments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Containments - Product > Content', () => {
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

    //close Side Pane
    GQ.Planets.Product.ProductFamily.Content.closeSidePane()

    // Quality Management
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    //Open Nonconformances under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.open()

    //Open Containments under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.open()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.Analytics.facetPicker()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.Status.checkGraphs()

    //Click StatusorAssignee
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.StatusorAssignee.open()

    //StatusorAssignee Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.StatusorAssignee.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.checkFormsandFields('Nonconformances', 'Containments')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.openRelatedObjects()

    //checkRelatedObjects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Containments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Containments - Product > Admin Data Binder > Smart Content', () => {

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

    //Open Nonconformances
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.open()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.facetPicker()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Status.checkGraphs()

    //Click StatusorAssignee
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.StatusorAssignee.open()

    //StatusorAssignee Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.StatusorAssignee.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkFormsandFields('Nonconformances', 'Containments')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.openRelatedObjects()

    //checkRelatedObjects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Containments - Product > Admin Data Binder > Linked Content', () => {

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

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.checkFormsandFields('Nonconformances', 'Containments')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.openRelatedObjects()

    //Check related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Containments - Product > User Data Binder > Smart Content', () => {
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

    //Open Nonconformances User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.open()

    //Open under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.open()

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.facetPicker()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.Status.checkGraphs()

    //Click StatusorAssignee
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.StatusorAssignee.open()

    //StatusorAssignee Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.StatusorAssignee.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkFormsandFields('Nonconformances', 'Containments')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.openRelatedObjects()

    //Check related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Containments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Containments - Product > User Data Binder > Linked Content', () => {
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

    // closeSidePane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.closeSidePane()

    //Open QualityManagement under User Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

    //Open Nonconformances under User Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.open()

    //Open under User Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.linkARecord()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.checkFormsandFields('Nonconformances', 'Containments')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.openRelatedObjects()

    //Check related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Containments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Containments - Product > Product Specific Binder > Smart Content', () => {

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

    //Open under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.open()

    //Open under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.facetPicker()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.Status.checkGraphs()

    //Click StatusorAssignee
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.StatusorAssignee.open()

    //StatusorAssignee Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.StatusorAssignee.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkFormsandFields('Nonconformances', 'Containments')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.openRelatedObjects()

    //Check related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Containments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Containments - Product > Product Specific Binder > Linked Content', () => {
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

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.closeSidePane()

    //Open QualityManagement under Product Specific Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open()

    //Open Nonconformances under Product Specific Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.open()

    //Open under Product Specific Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.linkARecord()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.checkFormsandFields('Nonconformances', 'Containments')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.openRelatedObjects()

    //check related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Containments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })
});
