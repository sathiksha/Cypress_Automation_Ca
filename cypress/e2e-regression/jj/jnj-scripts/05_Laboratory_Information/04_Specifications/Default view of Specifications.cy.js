import { GQTest } from '../../../jnj-pages/GQTest.js'

describe('Default view of Specifications', () => {
  const GQ = new GQTest()

  it('Default view of Specifications - Planet', () => {
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Laboratory Information')

    //Open page
    GQ.Planets.LaboratoryInformation.Specifications.open()

    //Refresh
    GQ.Planets.LaboratoryInformation.Specifications.refresh()

    GQ.Planets.LaboratoryInformation.Specifications.checkHeaderIcons()

    //Column names
    GQ.Planets.LaboratoryInformation.Specifications.checkColumns()

    GQ.Planets.LaboratoryInformation.Specifications.checkMultiChoicePickerColumns()

    GQ.Planets.LaboratoryInformation.Specifications.refresh()

    //open a Record
    GQ.Planets.LaboratoryInformation.Specifications.openARecord()

    //Click Details Tab
    GQ.Planets.LaboratoryInformation.Specifications.openDetails()

    //check Forms and Fields
    GQ.Planets.LaboratoryInformation.Specifications.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.LaboratoryInformation.Specifications.openRelatedObjects()

    // //Check Related Objects
    GQ.Planets.LaboratoryInformation.Specifications.checkRelatedObjects()

    //minimize the record
    GQ.Planets.LaboratoryInformation.Specificationss.minimizeARecord()

    //Right Click the record
    GQ.Planets.LaboratoryInformation.Specifications.rightClickARecord()

    //Add Bookmark
    GQ.Planets.LaboratoryInformation.Specifications.addBookmark()

    GQ.Logout()


  })

  it('Default view of Specifications - Product > Content', () => {
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

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.refresh()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.checkHeaderIcons()

     GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.refresh()

    // Column names

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.openRelatedObjects()

    // //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Specifications.addBookmark()

    GQ.Logout()
  })

  it('Default view of Specifications - Product > Admin Data Binder > Smart Content', () => {
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Specifications.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Specifications.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Specifications.checkHeaderIcons()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Specifications.refresh()

    //Column names

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Specifications.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Specifications.checkMultiChoicePickerColumns()


    GQ.Logout()

  })

  it('Default view of Specifications - Product > Admin Data Binder > Linked Content', () => {

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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Specifications.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Specifications.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Specifications.checkHeaderIcons()


    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Specifications.linkAContent()

    //Column names

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Specifications.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Specifications.checkMultiChoicePickerColumns()


    GQ.Logout()
  })

  it('Default view of Specifications - Product > User Data Binder > Smart Content', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Specifications.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Specifications.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Specifications.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Specifications.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Specifications.checkMultiChoicePickerColumns()


    GQ.Logout()
  })

  it('Default view of Specifications - Product > User Data Binder > Linked Content', () => {
    // Login 

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Specifications.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Specifications.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Specifications.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Specifications.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Specifications.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Specifications.checkMultiChoicePickerColumns()


    GQ.Logout()
  })

  it('Default view of Specifications - Product > Product Specific Binder > Smart Content', () => {

    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Specifications.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Specifications.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Specifications.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Specifications.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Specifications.checkMultiChoicePickerColumns()


    GQ.Logout()
  })


  it('Default view of Specifications - Product > Product Specific Binder > Linked Content', () => {

    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Specifications.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Specifications.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Specifications.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Specifications.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Specifications.checkMultiChoicePickerColumns()


    GQ.Logout()

  })

});