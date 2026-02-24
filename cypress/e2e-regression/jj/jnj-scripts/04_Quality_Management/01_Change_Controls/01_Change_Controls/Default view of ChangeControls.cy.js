import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Default view of ChangeControls', () => {
  const GQ = new GQTest()
 
  it('Default view of ChangeControls - Planet', () => {
    
     // Login 
    GQ.Login()
    
    //Open Planet
    GQ.Planets.openPlanet('Quality Management')

    //
    GQ.Planets.QualityManagement.ChangeControls.open()

    //
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.open()
    
    //Refresh
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.checkColumns()

    //Check multi-choice picker Column availability
    
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.refresh()

    //click Chart Icon
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Analytics.checkFilterFunctionality()

    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Analytics.refresh()
    
    //Click Status
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Status.refresh()

    //check Graphs
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Status.checkGraphs()
    
    //Click Owner
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Owner.open()

    //Owner Refresh
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Owner.refresh()


    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Owner.filter()


    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.Owner.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.clickChartIcon()
    //open a Record
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.ChangeControls.Changecontrols.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
   })
 
  it('Default view of Change Controls - Product > Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.refresh()

     //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Analytics.clickFacetPicker()
  
    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Analytics.refresh()

     //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Status.checkGraphs()    

    //Click Asssignee
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Owner.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Owner.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Owner.filter()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.Owner.checkFilterFunctionality()

    
    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.clickChartIcon()

    // //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.openDetails()


    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
    
  })
 
  it('Default view of Change Controls - Product > Admin Data Binder > Smart Content', ()=>{
    
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.clickAll()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkMultiChoicePickerColumns()

   
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.refresh()

     //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.removeColumnAttributes()

  
    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.refresh()

   //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Status.checkGraphs()
    

    //Click Asssignee
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.filter()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.checkFilterFunctionality()

 

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.clickChartIcon()



    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 
  it('Default view of Change Controls - Product > Admin Data Binder > Linked Content', ()=>{
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.refresh()

    //Check Column availability
    //GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.openDetails()

    //check Forms and Fields
    //GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.openRelatedObjects()

    //Check Related Objects
    //GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })
 
  it('Default view of Change Controls - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkHeaderIcons()

    //Click All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.refresh()
    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.clickFacetPicker()

          //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.removeColumnAttributes()
  
    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.checkFilterFunctionality()

     GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.refresh()

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Status.checkGraphs()
    //Assignee

    //Click Asssignee
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.filter()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.refresh()


    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.clickChartIcon()

  

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()


    //Logout
    GQ.Logout()
  })
 
  it('Default view of Change Controls - Product > User Data Binder > Linked Content', ()=>{
    
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.closeSidePane()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })
 
  it('Default view of Change Controls - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkHeaderIcons()

    //Click All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.refresh()
     //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.clickFacetPicker()

     //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.removeRowAttributes()
    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.checkFilterFunctionality()
   
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Analytics.refresh()
   //Status
    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Status.checkGraphs()
    //Assignee

    //Click Asssignee
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.filter()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.Owner.checkFilterFunctionality()


    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.clickChartIcon()
    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()

  })
 
  it('Default view of Change Controls - Product > Product Specific Binder > Linked Content', ()=>{
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
     
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.open()  
 
   //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.Changecontrols.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })
 
});
 
 