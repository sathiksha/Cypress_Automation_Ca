import { GQTest } from '../../../../jnj-pages/GQTest.js'

describe ('Default view of Inventories',()=>{
	const GQ = new GQTest()

  it('Default view of Inventories - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Laboratory Information')

    //Open page
    GQ.Planets.LaboratoryInformation.Stabilitystudies.open()

    //Open page
    GQ.Planets.LaboratoryInformation.Stabilitystudies.Inventories.open()

    //Refresh
    GQ.Planets.LaboratoryInformation.Stabilitystudies.Inventories.refresh()

    GQ.Planets.LaboratoryInformation.Stabilitystudies.Inventories.checkHeaderIcons()

    //Column names
    GQ.Planets.LaboratoryInformation.Stabilitystudies.Inventories.checkColumns()

     GQ.Planets.LaboratoryInformation.Stabilitystudies.Inventories.checkMultiChoicePickerColumns()

    GQ.Logout()
  })

  it('Default view of Inventories - Product > Content', ()=>{
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

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.Inventories.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.Inventories.refresh()   

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.Inventories.checkHeaderIcons()

   // Column names

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.Inventories.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.Inventories.checkMultiChoicePickerColumns()
    
    GQ.Logout()
   

  })

  it('Default view of Inventories - Product > Admin Data Binder > Smart Content', ()=>{
   
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.refresh()   

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.checkColumns()

    //multi-choice picker 

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.checkMultiChoicePickerColumns()
    
    GQ.Logout()
  })

  it('Default view of Inventories - Product > Admin Data Binder > Linked Content', ()=>{
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.refresh()   

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.checkHeaderIcons()

    //Column names
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.checkColumns()

    //multi-choice picker 
     GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.checkMultiChoicePickerColumns()
    
    GQ.Logout()
  })

  it('Default view of Inventories - Product > User Data Binder > Smart Content', ()=>{
 
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

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.refresh()   

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.checkColumns()

    //multi-choice picker 
    
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.checkMultiChoicePickerColumns()
    
    GQ.Logout()
  
  })

  it('Default view of Inventories - Product > User Data Binder > Linked Content', ()=>{
 
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

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.refresh()   

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.checkHeaderIcons()

    //Column names
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.checkColumns()

      
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.checkMultiChoicePickerColumns()
    
    GQ.Logout()
  
  })

  it('Default view of Inventories - Product > Product Specific Binder > Smart Content', ()=>{

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

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.refresh()   

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.checkHeaderIcons()

    //Column names

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.checkColumns()

    //multi-choice picker 
    
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.Stabilitystudies.Inventories.checkMultiChoicePickerColumns()
    
    GQ.Logout()
  
   

  })

  it('Default view of Inventories - Product > Product Specific Binder > Linked Content', ()=>{

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

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.refresh()   

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.checkHeaderIcons()

    //Column names
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.checkColumns()

      
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.LaboratoryInformation.Stabilitystudies.Inventories.checkMultiChoicePickerColumns()
    
    GQ.Logout()
   
  
 
  })

});
