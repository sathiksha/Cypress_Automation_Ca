import {GQTest} from '../../../../jnj-pages/GQTest.js'

describe ('Default view of CAPA Implementation',()=>{
	const GQ = new GQTest()

  it('Default view of CAPA Implementation - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Quality Management')

    //open CAPA
    GQ.Planets.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.open()

    //Refresh
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Analytics.clickFacetPicker()

       //remove Row Attributes
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Analytics.checkFilterFunctionality()

    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Analytics.refresh()

    //Approved
    //Click Approved
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Approved.open()

    //Approved Refresh
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Approved.refresh()

    //check Graphs
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Approved.checkGraphs()

    //Assignee

    //Click Assignee
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Assignee.open()

    //Assignee Refresh
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Assignee.refresh()

    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Assignee.filter()

    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.Assignee.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.clickChartIcon()
    //open a Record
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CAPA Implementation - Product > Content', ()=>{
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

    //Open CAPA Implementation under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.open()

    //close side pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.closeSidePane()

    //click All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.checkColumns()

    //Check eye icon Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Analytics.clickFacetPicker()

    
    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Analytics.removeColumnAttributes()


    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Analytics.refresh()

     //Click Approved
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Approved.open()

    //Approved Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Approved.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Approved.checkGraphs()
    //Assignee

    //Click Assignee
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Assignee.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Assignee.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Assignee.filter()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.Assignee.checkFilterFunctionality()

    
    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.clickChartIcon()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplementation.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CAPA Implementation - Product > Admin Data Binder > Smart Content', ()=>{
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

    //Open Quality Management tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.closeSidePane()

    //Click All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkColumns()

   //Check eye icon Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.clickFacetPicker()

  
    
    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.refresh()
   //Click Approved
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Approved.open()

    //Approved Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Approved.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Approved.checkGraphs()
    //Assignee

    //Click Assignee
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.filter()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.checkFilterFunctionality()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    
    //Logout
    GQ.Logout()
  })

  it('Default view of CAPA Implementation - Product > Admin Data Binder > Linked Content', ()=>{
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

    // Admin Data Binder - QualityManagement
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.closeSidePane()

    //Link A content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkEyeIconColumn()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CAPA Implementation - Product > User Data Binder > Smart Content', ()=>{
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

    // User Data Binder - QualityManagement
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

    //Open under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.closeSidePane()

    //Click All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkEyeIconColumn() 

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.clickChartIcon()

   //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.clickFacetPicker()

      //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.checkFilterFunctionality()
 
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.refresh()
    //Click Approved
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Approved.open()

    //Approved Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Approved.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Approved.checkGraphs()
    //Assignee

    //Click Assignee
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.filter()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.clickChartIcon()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CAPA Implementation - Product > User Data Binder > Linked Content', ()=>{
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

    // User Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    // User Data Binder - QualityManagement
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

    //Open under User Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.closeSidePane()

    //Link A content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkColumns() 

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkEyeIconColumn() 

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    
    //Logout
    GQ.Logout()
  })

  it('Default view of CAPA Implementation - Product > Product Specific Binder > Smart Content', ()=>{
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

    // ProductSpecific Binder - QualityManagement
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    //Open under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.open()

    //close side pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.clickChartIcon()

   //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.removeRowAttributes()
    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.checkFilterFunctionality()
    

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Analytics.refresh()
    //Approved
    //Click Approved
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Approved.open()

    //Approved Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Approved.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Approved.checkGraphs()
    //Assignee

    //Click Assignee
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.filter()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.Assignee.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAImplementation.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    
    //Logout
    GQ.Logout()
  })

  it('Default view of CAPA Implementation - Product > Product Specific Binder > Linked Content', ()=>{
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

    // ProductSpecific Binder - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    // ProductSpecific Binder - QualityManagement
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open()

    //Open under Product Specific Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.closeSidePane()

    //Link A content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkEyeIconColumn()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAImplementation.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
