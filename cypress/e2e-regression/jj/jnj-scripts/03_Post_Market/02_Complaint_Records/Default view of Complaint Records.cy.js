import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of Complaint Records',()=>{
	const GQ = new GQTest()

  it('Default view of Complaint Records - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Post Market')

    //open complaint Records
    GQ.Planets.PostMarket.Complaintrecords.open()

    //Refresh
    GQ.Planets.PostMarket.Complaintrecords.refresh()

    //check Headers
    GQ.Planets.PostMarket.Complaintrecords.checkHeaderIcons()


    //Check Column availability
    GQ.Planets.PostMarket.Complaintrecords.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.PostMarket.Complaintrecords.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.PostMarket.Complaintrecords.clickChartIcon()

    //check Chart Tabs
    GQ.Planets.PostMarket.Complaintrecords.checkcharttabs()

    //Click Analytics
    GQ.Planets.PostMarket.Complaintrecords.Analytics.open()

    //analytics Refresh
    GQ.Planets.PostMarket.Complaintrecords.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.PostMarket.Complaintrecords.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.PostMarket.Complaintrecords.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.PostMarket.Complaintrecords.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.PostMarket.Complaintrecords.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.PostMarket.Complaintrecords.Analytics.addColumnAttributeClick()
    
    //open Seriousness
    GQ.Planets.PostMarket.Complaintrecords.Seriousness.open()

    //refresh
    GQ.Planets.PostMarket.Complaintrecords.Seriousness.refresh()

    //checkgraphs
    GQ.Planets.PostMarket.Complaintrecords.Seriousness.checkGraphs()

    //open Status
    GQ.Planets.PostMarket.Complaintrecords.Status.open()

    //refresh
    GQ.Planets.PostMarket.Complaintrecords.Status.refresh()

    //checkgraphs
    GQ.Planets.PostMarket.Complaintrecords.Status.checkGraphs()

    //click Chart Icon
    GQ.Planets.PostMarket.Complaintrecords.clickChartIcon()

    //open a Record
    GQ.Planets.PostMarket.Complaintrecords.openARecord()

    //Click Details Tab
    GQ.Planets.PostMarket.Complaintrecords.openDetails()


    //check Forms and Fields
    GQ.Planets.PostMarket.Complaintrecords.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.PostMarket.Complaintrecords.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.PostMarket.Complaintrecords.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.PostMarket.Complaintrecords.checkRelatedObjects()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaint Records - Product > Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.open()

    // check Headers
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.checkHeaderIcons()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.checkMultiChoicePickerColumns()

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Analytics.addColumnAttributeClick()

    //Click Seriousness
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Seriousness.open()

    //Seriousness Refresh
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Seriousness.refresh()

    //Check Graphs
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Seriousness.checkGraphs()

    //Click Status
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Status.refresh()

    //Check Graphs
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.Status.checkGraphs()


    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.openDetails()


    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaint Records - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Status.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Status.checkGraphs()

    //Click Seriousness
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Seriousness.open()

    //Seriousness Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Seriousness.refresh()

     //Check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.Seriousness.checkGraphs()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.openDetails()

    

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.openRelatedObjects()

    

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaint Records - Product > Admin Data Binder > Linked Content', ()=>{
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

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaintrecords.open()
    
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaintrecords.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaintrecords.checkColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaintrecords.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaintrecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaintrecords.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaintrecords.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaintrecords.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaintrecords.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaintrecords.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PostMarket.Complaintrecords.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaint Records - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Status.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Status.checkGraphs()

    //Click Seriousness
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Seriousness.open()

    //Seriousness Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Seriousness.refresh()

     //Check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.Seriousness.checkGraphs()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.openDetails()

    

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.openRelatedObjects()

    

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaint Records - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaintrecords.open()
    
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaintrecords.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaintrecords.checkColumns()


    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaintrecords.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaintrecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaintrecords.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaintrecords.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaintrecords.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaintrecords.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaintrecords.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PostMarket.Complaintrecords.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaint Records - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Status.refresh()


    //checkGraphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Status.checkGraphs()

    //Click Seriousness
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Seriousness.open()

    //Seriousness Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Seriousness.refresh()

     //Check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.Seriousness.checkGraphs()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.openDetails()

    

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.openRelatedObjects()

    

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of Complaint Records - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaintrecords.open()
    
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaintrecords.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaintrecords.checkColumns()



    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaintrecords.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaintrecords.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaintrecords.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaintrecords.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaintrecords.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaintrecords.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaintrecords.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PostMarket.Complaintrecords.minimizeARecord()

    //Logout
    GQ.Logout()
  })

});
