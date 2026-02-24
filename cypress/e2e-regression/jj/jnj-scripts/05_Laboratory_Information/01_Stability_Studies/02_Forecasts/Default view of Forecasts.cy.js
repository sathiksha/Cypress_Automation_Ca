import { GQTest } from '../../../../jnj-pages/GQTest.js'

describe('Default view of Forecasts', () => {
  const GQ = new GQTest()

  it('Default view of Forecasts - Planet', () => {

    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Laboratory Information')

    //Open page
    GQ.Planets.LaboratoryInformation.Stabilitystudies.open()

    GQ.Planets.LaboratoryInformation.Stabilitystudies.Forecasts.open()

    //Refresh
    GQ.Planets.LaboratoryInformation.Stabilitystudies.Forecasts.refresh()

    GQ.Planets.LaboratoryInformation.Stabilitystudies.Forecasts.checkHeaderIcons()

    //Column names

    GQ.Planets.LaboratoryInformation.Stabilitystudies.Forecasts.checkColumns()

    GQ.Planets.LaboratoryInformation.Stabilitystudies.Forecasts.refreshIcon()

    //multi-choice picker 
    GQ.Planets.LaboratoryInformation.Stabilitystudies.Forecasts.checkMultiChoicePickerColumns()

    GQ.Logout()
   })

  it('Default view of Forecasts - Product > Content', () => {

     // Login 
    GQ.Login()

  // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    GQ.Planets.Product.ProductFamily.Content.open()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.Forecasts.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.Forecasts.refresh()   

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.Forecasts.checkHeaderIcons()

   // Column names

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.Forecasts.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.Forecasts.checkMultiChoicePickerColumns()
    
    GQ.Logout()
  
  })

  it('Default view of Forecasts - Product > Admin Data Binder > Smart Content', () => {
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.refresh()   

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkMultiChoicePickerColumns()
    
    GQ.Logout()
    
  })

  it('Default view of Forecasts - Product > Admin Data Binder > Linked Content', () => {

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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.refresh()   

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkHeaderIcons()

    //Column names
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkMultiChoicePickerColumns()
    
    GQ.Logout()

  })

  it('Default view of Forecasts - Product > User Data Binder > Smart Content', () => {

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

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.refresh()   

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkMultiChoicePickerColumns()
    
    GQ.Logout()



  })

  it('Default view of Forecasts - Product > User Data Binder > Linked Content', () => {

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

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.refresh()   

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkHeaderIcons()

    //Column names
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkMultiChoicePickerColumns()
    
    GQ.Logout()
   
  })

  it('Default view of Forecasts - Product > Product Specific Binder > Smart Content', () => {
  
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

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.refresh()   

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkMultiChoicePickerColumns()
    
    GQ.Logout()
  })

  it('Default view of Forecasts - Product > Product Specific Binder > Linked Content', () => {
   
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

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.refresh()   

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkHeaderIcons()

    //Column names
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Forecasts.checkMultiChoicePickerColumns()
    
    GQ.Logout()
  })

});
