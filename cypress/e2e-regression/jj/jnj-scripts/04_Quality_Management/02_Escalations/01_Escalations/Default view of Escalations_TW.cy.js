import {GQTest} from '../../../../jnj-pages/GQTest.js'

describe ('Default view of Escalations Track Wise',()=>{
    const GQ = new GQTest()

  it('Default view of Escalations Track Wise - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Quality Management')

    GQ.Planets.QualityManagement.Escalations.open()

    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.open()

    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.selectTrackwise()
    
    //Refresh
    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.checkMultiChoicePickerColumns()

    //click Chart Icon
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.clickChartIcon()

    // //Click Analytics
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Analytics.open()

    // //analytics Refresh
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Analytics.refresh()

    // //click FacetPicker
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Analytics.clickFacetPicker()

    //  //remove Row Attributes
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Analytics.removeRowAttributes()

    // //remove Column Attributes
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Analytics.removeColumnAttributes()

    // //add Row Attributes
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Analytics.addRowAttributes()

    // //add Column Attributes
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Analytics.addColumnAttributes()

    // //click filter
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Analytics.checkFilterFunctionality()
   
    // //Click Status
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Status.open()

    // //Status Refresh
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Status.refresh()

    // //check Graphs
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Status.checkGraphs()
  
    // //Click Owner
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Owner.open()

    // //Owner Refresh
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Owner.refresh()

    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Owner.filter()

    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.Owner.checkFilterFunctionality()

    // // //click Chart Icon
    // GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.clickChartIcon()
      GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.refresh()
    //open a Record
    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.Escalations.TrackwiseEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
    
  })

  it('Default view of Escalations Track Wise - Product > Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.selectTrackwise()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.checkMultiChoicePickerColumns()

    //  //click Chart Icon
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.clickChartIcon()

    // //Click Analytics
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Analytics.open()

    // //analytics Refresh
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Analytics.refresh()

    // //click FacetPicker
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Analytics.clickFacetPicker()


    // //add Row Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Analytics.addRowAttributes()

    // //add Column Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Analytics.addColumnAttributes()

    // //click filter
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Analytics.checkFilterFunctionality()

    // //remove Row Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Analytics.removeRowAttributes()

    // //remove Column Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Analytics.removeColumnAttributes()

    //  //Click Status
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Status.open()

    // //Status Refresh
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Status.refresh()

    // //check Graphs
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Status.checkGraph()
    // //Assignee

    // //Click Asssignee
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Owner.open()

    // //Assignee Refresh
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Owner.refresh()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Owner.filter()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.Owner.checkFilterFunctionality()

    
    // //Click chart icon
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.clickChartIcon()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.TrackwiseEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations Track Wise - Product > Admin Data Binder > Smart Content', () => {

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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.selectTrackwise()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.clickAll()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    //Check Column availability
   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkColumns()

    //Check multi-choice picker Column availability
   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkMultiChoicePickerColumns()

   
  //    //click Chart Icon
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.clickChartIcon()

  //   //Click Analytics
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.open()

  //   //analytics Refresh
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.refresh()

  //   //click FacetPicker
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.clickFacetPicker()

  
  //   //add Row Attributes
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.addRowAttributes()

  //   //add Column Attributes
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.addColumnAttributes()

  //   //click filter
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.clickFilter()

  //   //Validate Filter Functionality
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.checkFilterFunctionality()

  //   //remove Row Attributes
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.removeRowAttributes()

  //   //remove Column Attributes
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.removeColumnAttributes()

  //  //Click Status
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Status.open()

  //   //Status Refresh
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Status.refresh()

  //   //check Graphs
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Status.checkGraph()
  //   //Assignee

  //   //Click chart icon
  //   GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.clickChartIcon()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.refresh()
    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations Track Wise - Product > Admin Data Binder > Linked Content', ()=>{
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.selectTrackwise()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.openDetails()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkFormsandFieldsAvailablity()


    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.openRelatedObjects()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkRelatedObjects()
    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations Track Wise - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.selectTrackwise()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.closeSidePane()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.clickAll()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkMultiChoicePickerColumns()

    // //Refresh
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    // //click Chart Icon
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.clickChartIcon()

    // //Click Analytics
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.open()

    // //analytics Refresh
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.refresh()

    // //click FacetPicker
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.clickFacetPicker()


    // //add Row Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.addRowAttributes()

    // //add Column Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.addColumnAttributes()

    // //click filter
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.checkFilterFunctionality()

    // //remove Row Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.removeRowAttributes()

    // //remove Column Attributes
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.removeColumnAttributes()

    // //click Chart Icon
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.clickChartIcon()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.refresh()
    
    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkFormsandFieldsAvailablity()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.openRelatedObjects()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkRelatedObjects()


    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()


    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations Track Wise - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.selectTrackwise()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.closeSidePane()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.openDetails()

    //check Forms and Fields
   GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkFormsandFieldsAvailablity()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.openRelatedObjects()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    GQ.Logout()
  })

  it('Default view of Escalations Track Wise - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.selectTrackwise()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkHeaderIcons()

    //Click All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    // //click Chart Icon
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.clickChartIcon()

    // //Click Analytics
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.open()

    // //analytics Refresh
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.refresh()

    // //click FacetPicker
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.clickFacetPicker()


    // //add Row Attributes
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.addRowAttributes()

    // //add Column Attributes
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.addColumnAttributes()

    // //click filter
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.checkFilterFunctionality()

    // //remove Row Attributes
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.removeRowAttributes()

    // //remove Column Attributes
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.Analytics.removeColumnAttributes()

    // //Click chart icon
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.checkFormsandFieldsAvailablity()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.openRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.TrackwiseEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Escalations Track Wise - Product > Product Specific Binder > Linked Content', ()=>{
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

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.selectTrackwise()


    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Escalations.TrackwiseEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
