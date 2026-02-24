import { GQTest } from '../../../jnj-pages/GQTest.js'

describe('Default view of Release Data', () => {
  const GQ = new GQTest()

  it('Default view of Release Data - Planet', () => {


    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Laboratory Information')

    //Open page
    GQ.Planets.LaboratoryInformation.ReleaseData.open()

    GQ.Planets.LaboratoryInformation.ReleaseData.checkHeaderIcons()

    //Column names
    GQ.Planets.LaboratoryInformation.ReleaseData.checkColumns()

    GQ.Planets.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns()

    GQ.Logout()


  })

  it('Default view of Release Data - Product > Content', () => {


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

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.ReleaseData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.ReleaseData.refresh()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.ReleaseData.checkHeaderIcons()

    // Column names

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.ReleaseData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns()

    GQ.Logout()
  })

  it('Default view of Release Data - Product > Admin Data Binder > Smart Content', () => {
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.checkHeaderIcons()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.refresh()

    //Column names

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns()

    GQ.Logout()

  })

  it('Default view of Release Data - Product > Admin Data Binder > Linked Content', () => {
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.ReleaseData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.ReleaseData.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.ReleaseData.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.ReleaseData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns()

    GQ.Logout()
  })

  it('Default view of Release Data - Product > User Data Binder > Smart Content', () => {

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

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.ReleaseData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.ReleaseData.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.ReleaseData.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.ReleaseData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns()

    GQ.Logout()

  })

  it('Default view of Release Data - Product > User Data Binder > Linked Content', () => {

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

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.ReleaseData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.ReleaseData.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.ReleaseData.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.ReleaseData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns()

    GQ.Logout()
  })

  it('Default view of Release Data - Product > Product Specific Binder > Smart Content', () => {
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.ReleaseData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.ReleaseData.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.ReleaseData.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.ReleaseData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns()

    GQ.Logout()

  })

  it('Default view of Release Data - Product > Product Specific Binder > Linked Content', () => {

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

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.ReleaseData.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.ReleaseData.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.ReleaseData.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.ReleaseData.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns()

    GQ.Logout()
  })

});
