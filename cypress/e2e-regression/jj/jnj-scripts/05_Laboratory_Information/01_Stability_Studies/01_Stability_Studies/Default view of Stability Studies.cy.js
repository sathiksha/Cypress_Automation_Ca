import { GQTest } from '../../../../jnj-pages/GQTest'

describe('Default view of Stability Studies', () => {
  const GQ = new GQTest()

  it('Default view of Stability Studies - Planet', () => {

    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Laboratory Information')

    //Open page
    GQ.Planets.LaboratoryInformation.Stabilitystudies.open()

    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //check Header Icons
    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkColumns()

    //Check multi-choice picker Column availability
   GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkMultiChoicePickerColumns()

    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.refreshIcon()

    //open a Record
    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.openARecord()

    //Click Details Tab
    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.openDetails()

    //check Forms and Fields
    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkRelatedObjects()

    //minimize the record
    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.minimizeARecord()

    //Right Click the record
    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.LaboratoryInformation.Stabilitystudies.stabilitystudies.addBookmark()


    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Stability Studies - Product > Content', () => {
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

    //Open page
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.refreshIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.minimizeARecord()


    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.stabilitystudies.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()


  })

  it('Default view of Stability Studies - Product > Admin Data Binder > Smart Content', () => {
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.minimizeARecord()


    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()


  })

  it('Default view of Stability Studies - Product > Admin Data Binder > Linked Content', () => {

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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.linkAContent()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.minimizeARecord()


    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()

  })

  it('Default view of Stability Studies - Product > User Data Binder > Smart Content', () => {

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

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.minimizeARecord()


    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()

  })

  it('Default view of Stability Studies - Product > User Data Binder > Linked Content', () => {

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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.linkAContent()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.minimizeARecord()


    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()

  })

  it('Default view of Stability Studies - Product > Product Specific Binder > Smart Content', () => {
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

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.open()


    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.minimizeARecord()


    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()

  })

  it('Default view of Stability Studies - Product > Product Specific Binder > Linked Content', () => {

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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.linkAContent()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.openRelatedObjects()

    // Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.minimizeARecord()


    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.stabilitystudies.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()

  })

});
