import {GQTest} from '../../../../jnj-pages/GQTest.js'

describe ('Default view of Supplemental Investigations',()=>{
  const GQ = new GQTest()

  it('Default view of Supplemental Investigations - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open Planet
    GQ.Planets.QualityManagement.CAPAs.open()

    //Open Planet
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.open()

    //Refresh
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //click Chart Icon
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.clickChartIcon()

    //Click Analytics
    // GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.checkFilterFunctionality()

    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.refresh()
    
    //Click Status
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Status.refresh()

    //check Graphs
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Status.checkGraphs()
    
    //Click Owner
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Owner.open()

    //Owner Refresh
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Owner.refresh()


    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Owner.filter()


    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.Owner.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.clickChartIcon()

    //open a Record
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.openARecord()

    //check Forms and Fields
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Supplemental Investigations - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.open()

    //Open Planet
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.clickChartIcon()

    //Click Analytics
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.refresh()
    
    //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Status.checkGraphs()
    
    //Click Owner
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Owner.open()

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Owner.refresh()


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Owner.filter()


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.Owner.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.openARecord()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.SupplementalInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Supplemental Investigations - Product > Admin Data Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open Planet
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.clickChartIcon()

    //Click Analytics
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.refresh()
    
    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Status.checkGraphs()
    
    //Click Owner
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.open()

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.refresh()


    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.filter()


    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.openARecord()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Supplemental Investigations - Product > Admin Data Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open Planet
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkColumns()

    //Check multi-choice picker Column availability
    // GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.openARecord()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Supplemental Investigations - Product > User Data Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open Planet
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.clickChartIcon()

    //Click Analytics
    // GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.refresh()
    
    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Status.checkGraphs()
    
    //Click Owner
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.open()

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.refresh()


    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.filter()


    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.openARecord()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Supplemental Investigations - Product > User Data Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open Planet
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkColumns()

    //Check multi-choice picker Column availability
    // GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.openARecord()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Supplemental Investigations - Product > Product Specific Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open Planet
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkMultiChoicePickerColumns()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.clickChartIcon()

    //Click Analytics
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Analytics.refresh()
    
    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Status.checkGraphs()
    
    //Click Owner
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.open()

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.refresh()


    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.filter()


    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.Owner.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.openARecord()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.SupplementalInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Supplemental Investigations - Product > Product Specific Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open Planet
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkColumns()

    //Check multi-choice picker Column availability
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.openARecord()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.SupplementalInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
