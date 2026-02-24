import { GQTest } from '../../../../jnj-pages/GQTest.js'

describe('Default view of Audits - Trackwise', () => {
  const GQ = new GQTest()

   it('Default view of Audits - Trackwise - Planet', () => {
    // Login 
    GQ.Login()

    //open Quality Management
    GQ.Planets.openPlanet('Quality Management')

    //Open Planet
    GQ.Planets.QualityManagement.Audits.open()

    //Open page
    GQ.Planets.QualityManagement.Audits.AuditsTW.open()

    //Open trackwiseSourceSelector
    GQ.Planets.QualityManagement.Audits.AuditsTW.trackwiseSourceSelector()

    //Refresh
    GQ.Planets.QualityManagement.Audits.AuditsTW.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.Audits.AuditsTW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Audits.AuditsTW.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.QualityManagement.Audits.AuditsTW.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.Audits.AuditsTW.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.Audits.AuditsTW.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.Audits.AuditsTW.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.QualityManagement.Audits.AuditsTW.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.Audits.AuditsTW.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.Audits.AuditsTW.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.QualityManagement.Audits.AuditsTW.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.QualityManagement.Audits.AuditsTW.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.QualityManagement.Audits.AuditsTW.Analytics.checkFilterFunctionality()

    //Click State
    GQ.Planets.QualityManagement.Audits.AuditsTW.State.open()

    //State Refresh
    GQ.Planets.QualityManagement.Audits.AuditsTW.State.refresh()

    //checkGraphs
    GQ.Planets.QualityManagement.Audits.AuditsTW.State.checkGraphs()

    //Click StateorAssignedTo
    GQ.Planets.QualityManagement.Audits.AuditsTW.StateorAssignedTo.open()

    //StateorAssignedTo Refresh
    GQ.Planets.QualityManagement.Audits.AuditsTW.StateorAssignedTo.refresh()

    //Click chart icon
    GQ.Planets.QualityManagement.Audits.AuditsTW.clickChartIcon()

    //open a Record
    GQ.Planets.QualityManagement.Audits.AuditsTW.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.Audits.AuditsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.Audits.AuditsTW.checkFormsandFields('Audits', 'AuditsTW')

    //Open related Objects
    GQ.Planets.QualityManagement.Audits.AuditsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.Audits.AuditsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.Audits.AuditsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.Audits.AuditsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.Audits.AuditsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audits - Trackwise - Product > Content', () => {

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

    // Open Audits
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.open()

    //Open Audits under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.open()

    //trackwiseSourceSelector
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.trackwiseSourceSelector()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.Analytics.checkFilterFunctionality()

    //Click State
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.State.open()

    //State Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.State.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.State.checkGraphs()

    //Click StateorAssignedTo
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.StateorAssignedTo.open()

    //StateorAssignedTo Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.StateorAssignedTo.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.checkFormsandFields('Audits', 'AuditsTW')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audits - Trackwise - Product > Admin Data Binder > Smart Content', () => {
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

    //open Audits
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.open()

    //Trackwise
     GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.trackwiseSourceSelector()

    //openAll
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.checkFilterFunctionality()

    //Click State
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.State.open()

    //State Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.State.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.State.checkGraphs()

    //Click StateorAssignedTo
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.StateorAssignedTo.open()

    //StateorAssignedTo Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.StateorAssignedTo.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkFormsandFields('Audits', 'AuditsTW')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audits - Trackwise - Product > Admin Data Binder > Linked Content', () => {

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

    //Open Audits
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.open()

    //Open Audits under Audits
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.open()

    //trackwise
      GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.trackwiseSourceSelector()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.refresh()

    //Link a record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.linkARecord()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.checkFormsandFields('Audits', 'AuditsTW')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audits - Trackwise - Product > User Data Binder > Smart Content', () => {

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

    //Open Audits User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.open()

    //Open Audits under Audits User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.open()

    //Trackwise
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.trackwiseSourceSelector()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.checkFilterFunctionality()

    //Click State
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.State.open()

    //State Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.State.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.State.checkGraphs()

    //Click StateorAssignedTo
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.StateorAssignedTo.open()

    //StateorAssignedTo Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.StateorAssignedTo.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkFormsandFields('Audits', 'AuditsTW')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audits - Trackwise - Product > User Data Binder > Linked Content', () => {
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

    //open Audits
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.open()

    //Open Audits under Audits 
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.open()

    //Trackwise
     GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.trackwiseSourceSelector()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.linkARecord()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.checkFormsandFields('Audits', 'AuditsTW')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audits - Trackwise - Product > Product Specific Binder > Smart Content', () => {
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

    //Open Audits under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.open()

    //Open Audits under Audits
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.open()

    //trackwiseSourceSelector
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.trackwiseSourceSelector()

    //Open All page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.Analytics.checkFilterFunctionality()

    //Click State
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.State.open()

    //State Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.State.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.State.checkGraphs()

    //Click StateorAssignedTo
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.StateorAssignedTo.open()

    //StateorAssignedTo Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.StateorAssignedTo.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkFormsandFields('Audits', 'AuditsTW')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audits - Trackwise - Product > Product Specific Binder > Linked Content', () => {
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

    //Open Audits under User Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.open()

    //Open Audits under Audits
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.open()

    //Trackwise
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.trackwiseSourceSelector()

    //linkARecord
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.linkARecord()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.checkFormsandFields('Audits', 'AuditsTW')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
