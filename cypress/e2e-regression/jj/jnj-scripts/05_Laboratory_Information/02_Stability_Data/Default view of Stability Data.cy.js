import { GQTest } from '../../../jnj-pages/GQTest.js'

describe('Default view of Stability Data', () => {
  const GQ = new GQTest()

  it('Default view of Stability Data - Planet', () => {
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Laboratory Information')

    //Open page
    GQ.Planets.LaboratoryInformation.StabilityData.open()

    GQ.Planets.LaboratoryInformation.StabilityData.refresh()

    //check Header Icons
    GQ.Planets.LaboratoryInformation.StabilityData.checkHeaderIcons()

    //Column names
    GQ.Planets.LaboratoryInformation.StabilityData.checkColumns()

    GQ.Planets.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns()

    GQ.Logout()

  })

  it('Default view of Stability Data - Product > Content', () => {

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

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.refresh()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.checkHeaderIcons()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.refresh()

    // Column names

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns()

    GQ.Logout()

  })

  it('Default view of Stability Data - Product > Admin Data Binder > Smart Content', () => {

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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns()

    GQ.Logout()

  })

  it('Default view of Stability Data - Product > Admin Data Binder > Linked Content', () => {

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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.StabilityData.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.StabilityData.linkContent()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.StabilityData.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.StabilityData.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.StabilityData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns()

    GQ.Logout()
  })

  it('Default view of Stability Data - Product > User Data Binder > Smart Content', () => {

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

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.checkHeaderIcons()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.refresh()

    //Column names

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns()

    GQ.Logout()
  })

  it('Default view of Stability Data - Product > User Data Binder > Linked Content', () => {

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

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityData.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityData.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns()

    GQ.Logout()
  })

  it('Default view of Stability Data - Product > Product Specific Binder > Smart Content', () => {

    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.checkColumns()

    //multi-choice picker 
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns()

    //Logout
    GQ.Logout()
  })

  it('Default view of Stability Data - Product > Product Specific Binder > Linked Content', () => {

    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.StabilityData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.StabilityData.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.StabilityData.checkHeaderIcons()
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.StabilityData.refresh()
    //Column names

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.StabilityData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns()

    //Logout
    GQ.Logout()
  })

});
