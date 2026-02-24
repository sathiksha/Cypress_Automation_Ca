import {GQTest} from '../../../../jnj-pages/GQTest.js'

describe ('Default view of Interim Controls',()=>{
	const GQ = new GQTest()

  it('Default view of Interim Controls - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Quality Management')

    //open CAPA
    GQ.Planets.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.QualityManagement.CAPAs.InterimControls.open()
    //Refresh
    GQ.Planets.QualityManagement.CAPAs.InterimControls.refresh()


    //Check Column availability
    GQ.Planets.QualityManagement.CAPAs.InterimControls.checkColumns()

    

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.CAPAs.InterimControls.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.QualityManagement.CAPAs.InterimControls.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.CAPAs.InterimControls.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.CAPAs.InterimControls.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.CAPAs.InterimControls.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.QualityManagement.CAPAs.InterimControls.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.CAPAs.InterimControls.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.CAPAs.InterimControls.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.QualityManagement.CAPAs.InterimControls.Analytics.addColumnAttributeClick()

    // //click filter
    // GQ.Planets.QualityManagement.CAPAs.InterimControls.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.QualityManagement.CAPAs.InterimControls.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.QualityManagement.CAPAs.InterimControls.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.CAPAs.InterimControls.Status.refresh()

    //checkGraphs
    GQ.Planets.QualityManagement.CAPAs.InterimControls.Status.checkGraphs()

    //Click Status Assingee
    GQ.Planets.QualityManagement.CAPAs.InterimControls.StatusAssignee.open()

    //StatusAssignee Refresh
    GQ.Planets.QualityManagement.CAPAs.InterimControls.StatusAssignee.refresh()

    //Click chart icon
    GQ.Planets.QualityManagement.CAPAs.InterimControls.clickChartIcon()

    //open a Record
    GQ.Planets.QualityManagement.CAPAs.InterimControls.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.CAPAs.InterimControls.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.CAPAs.InterimControls.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.QualityManagement.CAPAs.InterimControls.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.QualityManagement.CAPAs.InterimControls.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.CAPAs.InterimControls.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.CAPAs.InterimControls.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.CAPAs.InterimControls.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.CAPAs.InterimControls.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Interim Controls - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    // Open Product Family
    GQ.Planets.Product.ProductFamily.toggleFilter()

    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.open()

    //Open Interim Controls under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Analytics.removeAllColumnAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Analytics.removeAllRowAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Analytics.addColumnAttributeClick()

    // //click filter
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.Status.checkGraphs()

    //Click StatusAssignee
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.StatusAssignee.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.StatusAssignee.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.InterimControls.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Interim Controls - Product > Admin Data Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    // Open Product Family
    GQ.Planets.Product.ProductFamily.toggleFilter()

    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Status.checkGraphs()

    //Click StatusAssignee
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.StatusAssignee.open()

    //StatusAssignee Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.StatusAssignee.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Interim Controls - Product > Admin Data Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    // Open Product Family
    GQ.Planets.Product.ProductFamily.toggleFilter()

    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.AddLinkedContent()


    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Interim Controls - Product > User Data Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    // Open Product Family
    GQ.Planets.Product.ProductFamily.toggleFilter()

    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Status.checkGraphs()

    //Click StatusAssignee
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.StatusAssignee.open()

    //StatusAssignee Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.StatusAssignee.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.InterimControls.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Interim Controls - Product > User Data Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    // Open Product Family
    GQ.Planets.Product.ProductFamily.toggleFilter()

    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Binder')

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.AddLinkedContent()


    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Interim Controls - Product > Product Specific Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    // Open Product Family
    GQ.Planets.Product.ProductFamily.toggleFilter()

    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.Status.checkGraphs()

    //Click StatusAssignee
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.StatusAssignee.open()

    //StatusAssignee Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.StatusAssignee.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.InterimControls.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Interim Controls - Product > Product Specific Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    // Open Product Family
    GQ.Planets.Product.ProductFamily.toggleFilter()

    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.AddLinkedContent()


    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.InterimControls.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
    })

});
