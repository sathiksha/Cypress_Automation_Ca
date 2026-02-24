import { GQTest } from '../../../../jnj-pages/GQTest.js'

describe('Default view of Nonconformances', () => {
  const GQ = new GQTest()

  it('Default view of Nonconformances - Planet', () => {
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open Planet
    GQ.Planets.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.open()

    //cometSourceSelector
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.cometSourceSelector()

    //Refresh
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.refresh()

    //Pre-defined filter
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.checkPredefinedFilters()

    //Check Column availability
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.Analytics.addRowAttributeClick()

    //checkRowValues
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.Analytics.checkRowValues()

    //add Column Attributes
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.Analytics.addColumnAttributeClick()

    // //click filter
    // GQ.Planets.QualityManagement.Nonconformances.NonConformances.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.QualityManagement.Nonconformances.NonConformances.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.Status.refresh()


    //checkGraphs
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.Status.checkGraphs()

    //Click Status or Owner
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.StatusorOwner.open()

    //Status or Owner Refresh
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.StatusorOwner.refresh()

    //Click chart icon
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.clickChartIcon()

    //open a Record
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.checkFormsandFields('Nonconformances', 'NonConformances')

    //Open related Objects
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.checkRelatedObjects('Nonconformances', 'NonConformances');

    //minimize the record
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.Nonconformances.NonConformances.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Nonconformances - Product > Content', () => {
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

    //Open Nonconformances under Nonconformances
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.open()

    //cometSourceSelector
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.cometSourceSelector()

    //openAll
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Status.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Status.checkGraphs()

    //Click Status or Owner
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.StatusorOwner.open()

    //Status or Owner Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.StatusorOwner.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.openDetails()


    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.checkFormsandFields('Nonconformances', 'NonConformances')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.checkRelatedObjects('Nonconformances', 'NonConformances');

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Nonconformances - Product > Admin Data Binder > Smart Content', () => {
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

    //Open Nonconformances under Nonconformances
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Status.refresh()

    //checkGraphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Status.checkGraphs()

    //Click Status or Owner
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.StatusorOwner.open()

    //Status or Owner Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.StatusorOwner.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkFormsandFields('Nonconformances', 'NonConformances')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkRelatedObjects('Nonconformances', 'NonConformances');

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Nonconformances - Product > Admin Data Binder > Linked Content', () => {

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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.open()

    //Open linkARecord
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.linkARecord()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.checkFormsandFields('Nonconformances', 'NonConformances')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.checkRelatedObjects('Nonconformances', 'NonConformances');

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Nonconformances - Product > User Data Binder > Smart Content', () => {
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

    //Open NonConformances page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Status.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Status.checkGraphs()

    //Click Status or Owner
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.StatusorOwner.open()

    //Status or Owner Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.StatusorOwner.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openDetails()


    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkFormsandFields('Nonconformances', 'NonConformances')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkRelatedObjects('Nonconformances', 'NonConformances');

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Nonconformances - Product > User Data Binder > Linked Content', () => {
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

    //Open NonConformances
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.open()

    // linkARecord
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.linkARecord()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.checkFormsandFields('Nonconformances', 'NonConformances')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.checkRelatedObjects('Nonconformances', 'NonConformances');

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Nonconformances - Product > Product Specific Binder > Smart Content', () => {
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

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.closeSidePane()

    //Open under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    //Open under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.open()

    //Open under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.facetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Status.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.Status.checkGraphs()

    //Click Status or Owner
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.StatusorOwner.open()

    //Status or Owner Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.StatusorOwner.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openDetails()


    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkFormsandFields('Nonconformances', 'NonConformances')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.checkRelatedObjects('Nonconformances', 'NonConformances');

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Nonconformances - Product > Product Specific Binder > Linked Content', () => {
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

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.open()

    //link a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.linkARecord()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.openDetails()


    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.checkFormsandFields('Nonconformances', 'NonConformances')

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.checkRelatedObjects('Nonconformances', 'NonConformances');

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NonConformances.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

});
