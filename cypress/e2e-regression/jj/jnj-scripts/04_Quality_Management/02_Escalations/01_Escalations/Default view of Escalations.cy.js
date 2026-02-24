import {GQTest} from '../../../../jnj-pages/GQTest.js'

describe ('Default view of Escalations',()=>{
	const GQ = new GQTest()

  it('Default view of Escalations - Planet', ()=>{
    // Login 
    GQ.Login()
    
    //Open Planet
    GQ.Planets.openPlanet('Quality Management')

    GQ.Planets.QualityManagement.Escalations.open()

    GQ.Planets.QualityManagement.Escalations.cometEscalations.open()
    
    //Refresh
    GQ.Planets.QualityManagement.Escalations.cometEscalations.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.Escalations.cometEscalations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Escalations.cometEscalations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.QualityManagement.Escalations.cometEscalations.refresh()

    //click Chart Icon
    GQ.Planets.QualityManagement.Escalations.cometEscalations.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Analytics.clickFacetPicker()

    GQ.Planets.QualityManagement.Escalations.cometEscalations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Analytics.checkFilterFunctionality()

    //analytics Refresh
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Analytics.refresh()
  
     //Click Status
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Status.refresh()

    //check Graphs
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Status.checkGraphs()
    
    //Click Owner
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Owner.open()

    //Owner Refresh
    GQ.Planets.QualityManagement.Escalations.cometEscalations.Owner.refresh()

    GQ.Planets.QualityManagement.Escalations.cometEscalations.Owner.filter()

    GQ.Planets.QualityManagement.Escalations.cometEscalations.Owner.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.QualityManagement.Escalations.cometEscalations.clickChartIcon()
    //open a Record
    GQ.Planets.QualityManagement.Escalations.cometEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.Escalations.cometEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.Escalations.cometEscalations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.QualityManagement.Escalations.cometEscalations.openRelatedObjects()

   //Check Related Objects
    GQ.Planets.QualityManagement.Escalations.cometEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.Escalations.cometEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.Escalations.cometEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.Escalations.cometEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
    
  })

  it('Default view of Escalations - Product > Content', ()=>{
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

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.checkMultiChoicePickerColumns()

     //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Analytics.refresh()

     //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Status.checkGraphs()
  
    //Click Owner
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Owner.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Owner.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Owner.filter()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.Owner.checkFilterFunctionality()

    
    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.clickChartIcon()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.openDetails()


    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Product > Admin Data Binder > Smart Content', () => {

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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.open()


    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.clickAll()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.clickFacetPicker()

     //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.removeColumnAttributes()
  
    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.refresh()

   //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Status.checkGraphs()
    
    //Click Asssignee
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.refresh()


    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.filter()


    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.checkFilterFunctionality()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Product > Admin Data Binder > Linked Content', ()=>{
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.openDetails()

   GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkFormsandFieldsAvailablity()


    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.openRelatedObjects()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkRelatedObjects()
    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.open()
    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.closeSidePane()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.clickAll()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkHeaderIcons()

    //Click All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.refresh()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Status.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Status.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Status.checkGraphs()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.filter()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.checkFilterFunctionality()
   //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.clickChartIcon()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkFormsandFieldsAvailablity()


    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.openRelatedObjects()

   GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkRelatedObjects()

   //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()


    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Product > User Data Binder > Linked Content', ()=>{
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

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.open()
    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.closeSidePane()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.openDetails()

    //check Forms and Fields
   GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkFormsandFieldsAvailablity()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.openRelatedObjects()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    GQ.Logout()
  })

  it('Default view of Escalations - Product > Product Specific Binder > Smart Content', ()=>{
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

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkHeaderIcons()

    //Click All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.refresh()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Analytics.refresh()

    //Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Status.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Status.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Status.checkGraphs()

    //Owner
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.filter()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.Owner.checkFilterFunctionality()

   //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkFormsandFieldsAvailablity()


    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.openRelatedObjects()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations - Product > Product Specific Binder > Linked Content', ()=>{
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

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.cometEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
