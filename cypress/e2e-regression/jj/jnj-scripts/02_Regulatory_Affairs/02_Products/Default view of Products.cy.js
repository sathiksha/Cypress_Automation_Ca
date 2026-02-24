import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of Regulatory Products',()=>{
	const GQ = new GQTest()

  it('Default view of Regulatory Products - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Regulatory Affairs Planet
    GQ.Planets.openPlanet('Regulatory Affairs')

    //Open Planet
    GQ.Planets.RegulatoryAffairs.Products.open()

    //Refresh
    GQ.Planets.RegulatoryAffairs.Products.refresh()

    //check Header Icons
    GQ.Planets.RegulatoryAffairs.Products.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.RegulatoryAffairs.Products.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.RegulatoryAffairs.Products.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.RegulatoryAffairs.Products.openARecord()

    //Click Details Tab
    // GQ.Planets.RegulatoryAffairs.Products.openDetails()

    //check Forms and Fields
    GQ.Planets.RegulatoryAffairs.Products.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.RegulatoryAffairs.Products.checkRelatedObjects()

    //minimize the record
    GQ.Planets.RegulatoryAffairs.Products.minimizeARecord()

    //Right Click the record
    GQ.Planets.RegulatoryAffairs.Products.rightClickARecord()

    //Add Bookmark
    GQ.Planets.RegulatoryAffairs.Products.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Regulatory Products - Product > Content', ()=>{
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

    //Open Regulatory Affairs under Content
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.open()

    //Open Products under Regulatory Affairs
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.checkColumns()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.checkHeaderIcons()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.openARecord()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Regulatory Products - Product > Admin Data Binder > Smart Content', ()=>{
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

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.checkColumns()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.checkHeaderIcons()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Regulatory Products - Product > Admin Data Binder > Linked Content', ()=>{
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

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.Products.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.Products.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.Products.checkColumns()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.Products.checkHeaderIcons()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.Products.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.Products.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.Products.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.Products.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.Products.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.Products.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.RegulatoryAffairs.Products.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Regulatory Products - Product > User Data Binder > Smart Content', ()=>{
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

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.checkColumns()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.checkHeaderIcons()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Regulatory Products - Product > User Data Binder > Linked Content', ()=>{
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

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.checkColumns()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.checkHeaderIcons()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Regulatory Products - Product > Product Specific Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openAdminBinder('MSAT Product View - Cypress Test Admin Binder')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.checkColumns()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.checkHeaderIcons()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Regulatory Products - Product > Product Specific Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    // GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openAdminBinder('MSAT Product View - Cypress Test Admin Binder')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.Products.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.Products.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.Products.checkColumns()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.Products.checkHeaderIcons()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.Products.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.Products.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.Products.checkFormsandFieldsAvailablity()

    //Open related Objects
    cy.contains('Related Objects').should('be.visible').click()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.Products.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.Products.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.Products.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.RegulatoryAffairs.Products.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
