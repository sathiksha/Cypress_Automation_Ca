import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Default view of ChangeControls Track Wise', () => {
  const GQ = new GQTest() 
 
  it('Default view of ChangeControls Track Wise - Planet', () => {
     // Login 
    GQ.Login()
    
    //Open Planet
    GQ.Planets.openPlanet('Quality Management')

    GQ.Planets.QualityManagement.ChangeControls.open()

    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.open()

    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.selectTrackwise()
    
    //Refresh
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.refresh()

  //   //click Chart Icon
  // GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.clickChartIcon()

  //   //Click Analytics
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.open()

  //   //analytics Refresh
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.refresh()

  //   //click FacetPicker
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.clickFacetPicker()

  //   //add Row Attributes
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.addRowAttributes()

  //   //add Column Attributes
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.addColumnAttributes()

  //   //click filter
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.clickFilter()

  //   //Validate Filter Functionality
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.checkFilterFunctionality()

  //   //remove Row Attributes
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.removeRowAttributes()

  //   //remove Column Attributes
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.removeColumnAttributes()

  //   //Click Status
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Status.open()

  //   //Status Refresh
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Status.refresh()

  //   //check Graphs
  //  // GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Status.checkGraph()
    
  //   //Assignee
  //   //Click Owner
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Owner.open()

  //   //Owner Refresh
  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Owner.refresh()

  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Owner.filter()

  //   GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.Owner.checkFilterFunctionality()

  //   // //click Chart Icon
   //GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.clickChartIcon()

    //open a Record
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.ChangeControls.ChangecontrolsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
   })
 
  it('Default view of Change Controls Track Wise - Product > Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.open()


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.selectTrackwise()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.checkMultiChoicePickerColumns()

    //  //click Chart Icon
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.clickChartIcon()

    // //Click Analytics
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.open()

    // //analytics Refresh
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.refresh()

    // //click FacetPicker
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.clickFacetPicker()


    // //add Row Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.addRowAttributes()

    // //add Column Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.addColumnAttributes()

    // //click filter
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.checkFilterFunctionality()

    // //remove Row Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.removeRowAttributes()

    // //remove Column Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.removeColumnAttributes()

    //  //Click Status
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Status.open()

    // //Status Refresh
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Status.refresh()

    // //check Graphs
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Status.checkGraph()
    // //Assignee

    // //Click Asssignee
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.open()

    // //Assignee Refresh
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.refresh()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.filter()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.checkFilterFunctionality()

    
    // //Click chart icon
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.clickChartIcon()


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.openDetails()


    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangecontrolsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
    
  })
 
  it('Default view of Change Controls Track Wise - Product > Admin Data Binder > Smart Content', ()=>{
    
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.selectTrackwise()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.clickAll()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkMultiChoicePickerColumns()

   
  //    //click Chart Icon
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.clickChartIcon()

  //   //Click Analytics
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.open()

  //   //analytics Refresh
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.refresh()

  //   //click FacetPicker
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.clickFacetPicker()

  
  //   //add Row Attributes
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.addRowAttributes()

  //   //add Column Attributes
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.addColumnAttributes()

  //   //click filter
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.clickFilter()

  //   //Validate Filter Functionality
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.checkFilterFunctionality()

  //   //remove Row Attributes
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.removeRowAttributes()

  //   //remove Column Attributes
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.removeColumnAttributes()

  //  //Click Status
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Status.open()

  //   //Status Refresh
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Status.refresh()

  //   //check Graphs
  //   //GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Status.checkGraph()
  //   //Assignee

  //   //Click Asssignee
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.open()

  //   //Assignee Refresh
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.refresh()

  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.filter()

  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.checkFilterFunctionality()

 

  //   //Click chart icon
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.clickChartIcon()



    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 
  it('Default view of Change Controls Track Wise - Product > Admin Data Binder > Linked Content', ()=>{
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.selectTrackwise()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })
 
  it('Default view of Change Controls Track Wise - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.selectTrackwise()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkHeaderIcons()

    //Click All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkMultiChoicePickerColumns()

    // //click Chart Icon
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.clickChartIcon()

    // //Click Analytics
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.open()

    // //analytics Refresh
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.refresh()

    // //click FacetPicker
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.clickFacetPicker()

  
    // //add Row Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.addRowAttributes()

    // //add Column Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.addColumnAttributes()

    // //click filter
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.checkFilterFunctionality()

    //   //remove Row Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.removeRowAttributes()

    // //remove Column Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.removeColumnAttributes()
 
    // //Click Status
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Status.open()

    // //Status Refresh
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Status.refresh()

    // //check Graphs
    // //GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Status.checkGraph()
    // //Assignee

    // //Click Asssignee
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.open()

    // //Assignee Refresh
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.refresh()

    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.filter()

    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.checkFilterFunctionality()



    // //Click chart icon
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.clickChartIcon()

    
    
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()


    //Logout
    GQ.Logout()
  })
 
  it('Default view of Change Controls Track Wise - Product > User Data Binder > Linked Content', ()=>{
    
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.selectTrackwise()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.closeSidePane()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })
 
  it('Default view of Change Controls Track Wise - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.selectTrackwise()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkHeaderIcons()

    //Click All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkMultiChoicePickerColumns()

    //  //click Chart Icon
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.clickChartIcon()

    // //Click Analytics
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.open()

    // //analytics Refresh
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.refresh()

    // //click FacetPicker
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.clickFacetPicker()

    // //add Row Attributes
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.addRowAttributes()

    // //add Column Attributes
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.addColumnAttributes()

    // //click filter
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.checkFilterFunctionality()
    // //remove Row Attributes
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.removeRowAttributes()
    // //remove Column Attributes
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Analytics.removeColumnAttributes()

    // //Status
    // //Click Status
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Status.open()

    // //Status Refresh
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Status.refresh()

    // //check Graphs
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Status.checkGraph()
   

    // //Click Asssignee
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.open()

    // //Assignee Refresh
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.refresh()

    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.filter()

    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.Assignee.checkFilterFunctionality()


    // // //click Chart Icon
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.clickChartIcon()
    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.ChangecontrolsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()

  })
 
  it('Default view of Change Controls Track Wise - Product > Product Specific Binder > Linked Content', ()=>{
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
     
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.open()  

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.selectTrackwise()
 
   //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.ChangecontrolsTW.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })
 
});
 
 