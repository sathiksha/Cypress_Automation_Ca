import {GQTest} from '../../../../jnj-pages/GQTest.js'

describe ('Default view of Audit Observations',()=>{
	const GQ = new GQTest()

  it('Default view of Audit Observations - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Quality Management')

    GQ.Planets.QualityManagement.Audits.open()

    //Open page
    GQ.Planets.QualityManagement.Audits.AuditObservations.open()

    //Refresh
    GQ.Planets.QualityManagement.Audits.AuditObservations.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.Audits.AuditObservations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Audits.AuditObservations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.QualityManagement.Audits.AuditObservations.refresh()

    //click Chart Icon
    GQ.Planets.QualityManagement.Audits.AuditObservations.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.Audits.AuditObservations.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.Audits.AuditObservations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.Audits.AuditObservations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.QualityManagement.Audits.AuditObservations.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.Audits.AuditObservations.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.Audits.AuditObservations.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.QualityManagement.Audits.AuditObservations.Analytics.addColumnAttributeClick()

    //click filter
    GQ.Planets.QualityManagement.Audits.AuditObservations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.Audits.AuditObservations.Analytics.checkFilterFunctionality()

    //Refresh
    GQ.Planets.QualityManagement.Audits.AuditObservations.refresh()

    //Click Status
    GQ.Planets.QualityManagement.Audits.AuditObservations.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.Audits.AuditObservations.Status.refresh()

    //checkGraphs
    GQ.Planets.QualityManagement.Audits.AuditObservations.Status.checkGraphs()

    //Click Status/Owner
    GQ.Planets.QualityManagement.Audits.AuditObservations.Assignee.open()

    //Status/Owner Refresh
    GQ.Planets.QualityManagement.Audits.AuditObservations.Assignee.refresh()

    //Status/Owner Filter
    GQ.Planets.QualityManagement.Audits.AuditObservations.Assignee.filter()


    //Click chart icon
    GQ.Planets.QualityManagement.Audits.AuditObservations.clickChartIcon()

    //open a Record
    GQ.Planets.QualityManagement.Audits.AuditObservations.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.Audits.AuditObservations.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.Audits.AuditObservations.checkFormsandFieldsAvailablity()


    //Open related Objects
    GQ.Planets.QualityManagement.Audits.AuditObservations.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.QualityManagement.Audits.AuditObservations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.Audits.AuditObservations.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.Audits.AuditObservations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.Audits.AuditObservations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audit Observations - Product > Content', ()=>{
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

    //Open Quality Management
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    //Open Audit Observations under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.open()

    //Open Audit Observation
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.refresh()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Analytics.addColumnAttributeClick()

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Analytics.checkFilterFunctionality()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.refresh()

    //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Status.checkGraphs()

    //Click Status/Owner
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Assignee.open()

    //Status/Owner Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Assignee.refresh()

    //Status/Owner Filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.Assignee.filter()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.checkFormsandFieldsAvailablity()


    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.AuditObservations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audit Observations - Product > Admin Data Binder > Smart Content', ()=>{
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

    //Open Audits under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.open()

    //Open Audits Observation
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.refresh()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.addColumnAttributeClick()

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.checkFilterFunctionality()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.refresh()

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Status.checkGraphs()

    //Click Status/Owner
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Assignee.open()

    //Status/Owner Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Assignee.refresh()

    //Status/Owner Filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Assignee.filter()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audit Observations - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.open()

    //Open Audits under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.open()

    //Open Audits Observation
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.closeSidePane()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkColumns()

    //Check multi-choice picker Column availability
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkMultiChoicePickerColumns()

    //Refresh
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audit Observations - Product > User Data Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Binder')

    // User Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

    //Open Audits under Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.open()

    //Open Audits Observation
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.refresh()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.addColumnAttributeClick()

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.checkFilterFunctionality()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.refresh()

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Status.checkGraphs()

    //Click Status/Owner
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Assignee.open()

    //Status/Owner Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Assignee.refresh()

    //Status/Owner Filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.Assignee.filter()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.AuditObservations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audit Observations - Product > User Data Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Binder')

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

    //Open Audits under Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.open()

    //Open Audits Observation
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.closeSidePane()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkColumns()

    //Check multi-choice picker Column availability
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkMultiChoicePickerColumns()

    //Refresh
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audit Observations - Product > Product Specific Binder > Smart Content', ()=>{
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

    //Open Audits under Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.open()

    //Open Audits Observation
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.refresh()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.addColumnAttributeClick()

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Analytics.checkFilterFunctionality()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.refresh()

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Status.checkGraphs()

    //Click Status/Owner
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Assignee.open()

    //Status/Owner Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Assignee.refresh()

    //Status/Owner Filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.Assignee.filter()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.AuditObservations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Audit Observations - Product > Product Specific Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // Product Specific Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open()

    //Open Audits under Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.open()

    //Open Audits Observation
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.closeSidePane()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkColumns()

    //Check multi-choice picker Column availability
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkMultiChoicePickerColumns()

    //Refresh
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Audits.AuditObservations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Audits.AuditObservations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
