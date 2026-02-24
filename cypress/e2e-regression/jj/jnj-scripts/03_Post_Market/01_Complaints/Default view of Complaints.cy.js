import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of Complaints',()=>{
	const GQ = new GQTest()

  it('Default view of Complaints - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Post Market')

    //Open page
    GQ.Planets.PostMarket.Complaints.open()
    //Refresh
    GQ.Planets.PostMarket.Complaints.refresh()
    // check Headers
    GQ.Planets.PostMarket.Complaints.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.PostMarket.Complaints.checkColumns()


    // Check multi-choice picker Column availability
    GQ.Planets.PostMarket.Complaints.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.PostMarket.Complaints.clickChartIcon()
    // cy.pause()

    //check Chart Tabs
    GQ.Planets.PostMarket.Complaints.checkcharttabs()

    //Click Analytics
    GQ.Planets.PostMarket.Complaints.Analytics.open()

    //analytics Refresh
    GQ.Planets.PostMarket.Complaints.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.PostMarket.Complaints.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.PostMarket.Complaints.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.PostMarket.Complaints.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.PostMarket.Complaints.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.PostMarket.Complaints.Analytics.addColumnAttributeClick() 



    // //click filter
    // GQ.Planets.PostMarket.Complaints.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.PostMarket.Complaints.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.PostMarket.Complaints.Status.open()

    //Status Refresh
    GQ.Planets.PostMarket.Complaints.Status.refresh()

    //Check Graphs
    GQ.Planets.PostMarket.Complaints.Status.checkGraphs()

    //Click Company
    GQ.Planets.PostMarket.Complaints.Company.open()

    //Company Refresh
    GQ.Planets.PostMarket.Complaints.Company.refresh()

    //Check Graphs
    GQ.Planets.PostMarket.Complaints.Company.checkGraphs()

    //Click Region
    GQ.Planets.PostMarket.Complaints.Region.open()

    //Company Refresh
    GQ.Planets.PostMarket.Complaints.Region.refresh()

    //Check Graphs
    GQ.Planets.PostMarket.Complaints.Region.checkGraphs()

    // //Click chart icon
    GQ.Planets.PostMarket.Complaints.clickChartIcon()

    // //open a Record
    GQ.Planets.PostMarket.Complaints.openARecord()

    // //Click Details Tab
    // GQ.Planets.PostMarket.Complaints.openDetails()


    // //check Forms and Fields
    GQ.Planets.PostMarket.Complaints.checkFormsandFieldsAvailablity()

    // //check Fields are Non Editable
    // GQ.Planets.PostMarket.Complaints.checkFieldsNonEditable()

    // //Open related Objects
    GQ.Planets.PostMarket.Complaints.openRelatedObjects()

    // //Check Related Objects
    GQ.Planets.PostMarket.Complaints.checkRelatedObjects()
    

    // //minimize the record
    GQ.Planets.PostMarket.Complaints.minimizeARecord()

    // //Right Click the record
    GQ.Planets.PostMarket.Complaints.rightClickARecord()

    // //Add Bookmark
    GQ.Planets.PostMarket.Complaints.addBookmark()

    // //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    // Logout
    GQ.Logout()
  })

  it('Default view of Complaints - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    // Open Product Family
    GQ.Planets.Product.ProductFamily.toggleFilter()
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open Complaints under Content
    GQ.Planets.Product.ProductFamily.Content.PostMarket.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.open()

    // check Headers
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.checkHeaderIcons()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.checkMultiChoicePickerColumns()

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Analytics.addColumnAttributeClick()

    // //click filter
    // GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Status.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Status.checkGraphs()

    // //Click Company
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Company.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Company.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Company.checkGraphs()

    // //Click Region
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Region.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Region.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.Region.checkGraphs()

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.clickChartIcon()

    // //open a Record
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.openARecord()

    // //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.openDetails()


    // //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.checkFormsandFieldsAvailablity()

    // //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.checkFieldsNonEditable()

    // //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.openRelatedObjects()

    // //Related Objects
    // let expectedRelatedObjects = [
    // ]

    // //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.checkRelatedObjects()

    // //minimize the record
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.minimizeARecord()

    // //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.rightClickARecord()

    // //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaints.addBookmark()

    // //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    // //Logout
    // GQ.Logout()
  })

  it('Default view of Complaints - Product > Admin Data Binder > Smart Content', ()=>{
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

    //Open Post Market under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Status.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Status.checkGraphs()

    //Click Company
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Company.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Company.refresh()

     //Check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Company.checkGraphs()

    //Click Region
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Region.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Region.refresh()

     //Check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.Region.checkGraphs()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.openDetails()

    

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.openRelatedObjects()

    

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaints.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaints - Product > Admin Data Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    // Open Product Family
    GQ.Planets.Product.ProductFamily.toggleFilter()
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.open()
    

    //Add Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.AddLinkedContent()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaints.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaints - Product > User Data Binder > Smart Content', ()=>{
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

    //Open Post Market under Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Status.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Status.checkGraphs()

    //Click Company
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Company.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Company.refresh()

     //Check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Company.checkGraphs()

    //Click Region
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Region.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Region.refresh()

     //Check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.Region.checkGraphs()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.openDetails()

    

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.openRelatedObjects()

    

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaints.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaints - Product > User Data Binder > Linked Content', ()=>{
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

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.open()
    

    //Add Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.AddLinkedContent()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaints.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaints - Product > Product Specific Binder > Smart Content', ()=>{
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

    //Open Post Market under Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Status.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Status.checkGraphs()

    //Click Company
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Company.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Company.refresh()

     //Check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Company.checkGraphs()

    //Click Region
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Region.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Region.refresh()

     //Check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.Region.checkGraphs()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.openDetails()

    

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.openRelatedObjects()

    

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaints.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaints - Product > Product Specific Binder > Linked Content', ()=>{
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

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.open()
    

    //Add Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.AddLinkedContent()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaints.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
