import { GQTest } from '../../jnj-pages/GQTest.js'

describe('8734 - Default view of Risk', () => {
  const GQ = new GQTest()

  it('Default view of Risk > Product > Content', () => {

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
    GQ.Planets.Product.ProductFamily.Content.riskDocument.open()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.Content.riskDocument.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.riskDocument.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.riskDocument.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.Content.riskDocument.refreshIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.riskDocument.openARecord()

    GQ.Planets.Product.ProductFamily.Content.riskDocument.TabOrderValidation()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.riskDocument.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.riskDocument.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.riskDocument.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.riskDocument.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.riskDocument.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of Risk > Product > Admin Data Binder > Smart Content', () => {

    // Login SmartContent
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Click Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.open()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.refreshIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.openARecord()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.TabOrderValidation()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.riskDocument.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of Risk > Product > User Data Binder > Smart Content', () => {

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

    // Click Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.open()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.refreshIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.openARecord()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.TabOrderValidation()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.riskDocument.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of Risk > Product > Product Specific Binder > Smart Content', () => {

    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductBinder('MSAT Product View - Cypress Test Product Specific Binder')

    // Click Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.open()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.refreshIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.openARecord()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.TabOrderValidation()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.riskDocument.minimizeARecord()

    //Logout
    GQ.Logout()
  })

});
