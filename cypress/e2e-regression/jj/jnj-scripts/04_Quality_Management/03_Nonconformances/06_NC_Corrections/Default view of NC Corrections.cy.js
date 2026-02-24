import {GQTest} from '../../../../jnj-pages/GQTest.js'

describe ('Default view of NC Corrections',()=>{
  const GQ = new GQTest()

  it('Default view of NC Corrections- Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open page
    GQ.Planets.QualityManagement.Nonconformances.open()

    //open NC correction
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.open()
    //Refresh
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.refresh()
    // check Headers
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.checkColumns()


    // Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.clickChartIcon()
    // cy.pause()

    //check Chart Tabs
    // GQ.Planets.QualityManagement.Nonconformances.NCCorrections.checkcharttabs()

    //Click Analytics
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.Analytics.removeAllRowAttributes()

    // //remove Column Attributes
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.Analytics.removeAllColumnAttributes()

    // //add Row Attributes
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.Analytics.addRowAttributeClick()

    // //add Column Attributes
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.Analytics.addColumnAttributeClick() 



    // // //click filter
    // // GQ.Planets.QualityManagement.Nonconformances.NCCorrections.Analytics.clickFilter()

    // // //Validate Filter Functionality
    // // GQ.Planets.QualityManagement.Nonconformances.NCCorrections.Analytics.checkFilterFunctionality()

    

    // // //Click chart icon
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.clickChartIcon()

    // // //open a Record
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.openARecord()

    // // //Click Details Tab
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.openDetails()


    // // //check Forms and Fields
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.checkFormsandFieldsAvailablity()

    // // //check Fields are Non Editable
    // // GQ.Planets.QualityManagement.Nonconformances.NCCorrections.checkFieldsNonEditable()

    // // //Open related Objects
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.openRelatedObjects()

    // // //Check Related Objects
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.checkRelatedObjects()
    

    // // //minimize the record
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.minimizeARecord()

    // // //Right Click the record
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.rightClickARecord()

    // // //Add Bookmark
    GQ.Planets.QualityManagement.Nonconformances.NCCorrections.addBookmark()

    // // //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    // // Logout
    GQ.Logout()
  })

  it('Default view of NC Corrections- Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //click filter toggle
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open Complaints under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.open()
    //Open page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.open()

    // check Headers
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.checkHeaderIcons()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.checkMultiChoicePickerColumns()

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.Analytics.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.Analytics.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.Analytics.clickFacetPicker()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.Analytics.removeAllRowAttributes()
    
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.Analytics.removeAllColumnAttributes()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.Analytics.addColumnAttributeClick()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.Analytics.addRowAttributeClick()


    // //click filter
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.Analytics.clickFilter()

    // //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.Analytics.checkFilterFunctionality()


    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.clickChartIcon()

    // //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.openARecord()

    // //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.openDetails()


    // //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.checkFormsandFieldsAvailablity()

    // //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.checkFieldsNonEditable()

    // //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.openRelatedObjects()

    // //Related Objects
    // let expectedRelatedObjects = [
    // ]

    // //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.checkRelatedObjects()

    // //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.minimizeARecord()

    // //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.rightClickARecord()

    // //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrections.addBookmark()

    // //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    // //Logout
    // GQ.Logout()
  })

  it('Default view of NC Corrections- Product > Admin Data Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //click filter toggle
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //Open Post Market under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.clickFacetPicker()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.removeAllColumnAttributes()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.removeAllColumnAttributes()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.addColumnAttributeClick()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.addColumnAttributeClick()


    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.openDetails()

    

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.openRelatedObjects()

    

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Corrections- Product > Admin Data Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //click filter toggle
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.open()
    

    //Add Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.AddLinkedContent()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkColumns()


    //Check multi-choice picker Column availability
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Corrections- Product > User Data Binder > Smart Content', ()=>{
     // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //click filter toggle
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //Open Post Market under Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.open()
    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.checkFilterFunctionality()

   

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.openDetails()

    

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.openRelatedObjects()

    

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Corrections- Product > User Data Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //click filter toggle
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Binder')

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.open()
    

    //Add Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.AddLinkedContent()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkColumns()


    //Check multi-choice picker Column availability
    // GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Corrections- Product > Product Specific Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //click filter toggle
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //Open Post Market under Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkColumns()


    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.removeAllRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.removeAllColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.addRowAttributeClick()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.addColumnAttributeClick()

    //click filter
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.clickFilter()

    //Validate Filter Functionality
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.Analytics.checkFilterFunctionality()


    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.openDetails()

    

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.openRelatedObjects()

    

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCCorrections.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Corrections- Product > Product Specific Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //click filter toggle
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.open()
    

    //Add Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.AddLinkedContent()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.refresh()


    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkColumns()


    //Check multi-choice picker Column availability
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkFormsandFieldsAvailablity()

    //check Fields are Non Editable
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.openRelatedObjects()


    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCCorrections.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
