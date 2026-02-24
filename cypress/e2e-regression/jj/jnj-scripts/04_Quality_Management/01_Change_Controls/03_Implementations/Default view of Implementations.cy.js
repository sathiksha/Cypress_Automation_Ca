import { GQTest } from '../../../../jnj-pages/GQTest.js'

describe('Default view of Implementations', () => {
  const GQ = new GQTest()

  it('Default view of Implementations - Planet', () => {

    // Login 
    GQ.Login()

    //Open Documents Planet
    GQ.Planets.openPlanet('Quality Management')

    GQ.Planets.QualityManagement.ChangeControls.open()

    GQ.Planets.QualityManagement.ChangeControls.Implementations.open()

    //Refresh
    GQ.Planets.QualityManagement.ChangeControls.Implementations.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.ChangeControls.Implementations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.ChangeControls.Implementations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.ChangeControls.Implementations.checkMultiChoicePickerColumns()

     GQ.Planets.QualityManagement.ChangeControls.Implementations.refresh()

    //click Chart Icon
    GQ.Planets.QualityManagement.ChangeControls.Implementations.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.clickFacetPicker()

       //remove Row Attributes
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.checkFilterFunctionality()

    GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

    //Status
    //Click Status
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Status.refresh()

    //check Graphs
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Status.checkGraphs()
    //Assignee

    //Click Asssignee
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Assignee.open()

    //Assignee Refresh
    GQ.Planets.QualityManagement.ChangeControls.Implementations.Assignee.refresh()

    GQ.Planets.QualityManagement.ChangeControls.Implementations.Assignee.filter()

    GQ.Planets.QualityManagement.ChangeControls.Implementations.Assignee.checkFilterFunctionality()


    // //click Chart Icon
    GQ.Planets.QualityManagement.ChangeControls.Implementations.clickChartIcon()


    //open a Record
    GQ.Planets.QualityManagement.ChangeControls.Implementations.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.ChangeControls.Implementations.openDetails()


    GQ.Planets.QualityManagement.ChangeControls.Implementations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.QualityManagement.ChangeControls.Implementations.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.QualityManagement.ChangeControls.Implementations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.ChangeControls.Implementations.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.ChangeControls.Implementations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.ChangeControls.Implementations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
  })

  it('Default view of Implementation - Product > Content', () => {
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

    //Open Assessment Executions under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.refresh()

     //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.clickFacetPicker()

    
    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.removeColumnAttributes()


    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

     //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Status.checkGraphs()
    //Assignee

    //Click Asssignee
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Assignee.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Assignee.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Assignee.filter()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Assignee.checkFilterFunctionality()

    
    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.clickChartIcon()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.openDetails()


    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Implementation - Product > Admin Data Binder > Smart Content', () => {

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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkMultiChoicePickerColumns()

    
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.refresh()

   
     //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.clickFacetPicker()

  
    
    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.refresh()
   //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.checkGraphs()
    //Assignee

    //Click Asssignee
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.filter()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.checkFilterFunctionality()

 

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()



    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Implementations - Product > Admin Data Binder > Linked Content', () => {

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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Implementations - Product > User Data Binder > Smart Content', () => {

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

    //Open under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.open()
    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkHeaderIcons()

    //Click All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.refresh()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.clickFacetPicker()

      //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.checkFilterFunctionality()
 
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.refresh()
    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.checkGraphs()
    //Assignee

    //Click Asssignee
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.filter()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()

    
    
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()


    //Logout
    GQ.Logout()
  })

  it('Default view of Implementations - Product > User Data Binder > Linked Content', () => {
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

    //Open under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.open()
    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.closeSidePane()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Implementations - Product > Product Specific Binder > Smart Content', () => {

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

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkHeaderIcons()

    //Click All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkMultiChoicePickerColumns()

     GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.refresh()

     //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.removeRowAttributes()
    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.checkFilterFunctionality()
    

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.refresh()
    //Status
    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.checkGraphs()
    //Assignee

    //Click Asssignee
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.filter()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Assignee.checkFilterFunctionality()


    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()
    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Implementations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()

  })

  it('Default view of Implementations - Product > Product Specific Binder > Linked Content', () => {

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

    // Product Specific Binder  - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.open()


    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
