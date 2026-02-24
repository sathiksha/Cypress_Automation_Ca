import { GQTest } from '../../../../jnj-pages/GQTest.js'

describe ('Default view of Assessment Executions',()=>{
	const GQ = new GQTest()

  it('Default view of Assessment Executions - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Quality Management')

    GQ.Planets.QualityManagement.ChangeControls.open()

    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.open()
    //Refresh
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.refresh()

   //Column names
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.checkColumns()

    //Check multi-choice picker Column availability
     GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.checkMultiChoicePickerColumns()

      //click Chart Icon
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.clickFacetPicker()

    //add Row Attributes
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.checkFilterFunctionality()
    
    // //click Chart Icon
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon()
    //open a Record
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.openARecord()
     
  
     GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.openARecord()

    //Click Details Tab
     GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.openDetails()

    // //check Forms and Fields
     GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.checkFormsandFieldsAvailablity()

     //Open related Objects
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects()
    
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    
    //Logout
    GQ.Logout()
  })

  it('Default view of Assessment Executions - Product > Content', ()=>{
  
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

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.closeSidePane()

    //Column names
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.clickFacetPicker()


    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.checkFilterFunctionality()

   
    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon()

     
  
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.openDetails()    

    
    // //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.checkFormsandFieldsAvailablity()

     //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects()
    
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    
    //Logout
    GQ.Logout()

  })

  it('Default view of Assessment Executions - Product > Admin Data Binder > Smart Content', ()=>{
    
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.closeSidePane()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.open()
  

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.closeSidePane()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.open()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.clickAll()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkMultiChoicePickerColumns()

     //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.clickFacetPicker()

  
    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.checkFilterFunctionality()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })

  it('Default view of Assessment Executions - Product > Admin Data Binder > Linked Content', ()=>{
 

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
   
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.open()
    
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.open()
    
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.open()
  
    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Assessment Executions - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkHeaderIcons()

    //Click All
     GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.clickAll()
     
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkMultiChoicePickerColumns()

    
    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.clickFacetPicker()

  
    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.checkFilterFunctionality()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Assessment Executions - Product > User Data Binder > Linked Content', ()=>{
    
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
    
    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.closeSidePane()

    //Link a Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects()
    
    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();

    //Logout
    GQ.Logout()
  })

  it('Default view of Assessment Executions - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.open()
   
    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkHeaderIcons()

    //Click All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkMultiChoicePickerColumns()

   //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.clickFacetPicker()

  
    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.checkFilterFunctionality()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon()
  

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkFormsandFieldsAvailablity()

   //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Assessment Executions - Product > Product Specific Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // ProductSpecific Binder - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    //Open under Product Specific Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.closeSidePane()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.linkAContent()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkHeaderIcons()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.refresh()

  
    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
