import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of CTA IND Events',()=>{
	const GQ = new GQTest()

  it('Default view of CTA IND Events - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Regulatory Affairs')

    //Open page
    GQ.Planets.RegulatoryAffairs.CTAINDEvents.open()

    //Refresh
    GQ.Planets.RegulatoryAffairs.CTAINDEvents.refresh()

    //check Header Icons
    GQ.Planets.RegulatoryAffairs.CTAINDEvents.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.RegulatoryAffairs.CTAINDEvents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.RegulatoryAffairs.CTAINDEvents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.RegulatoryAffairs.CTAINDEvents.openARecord()

    //Click Details Tab
    GQ.Planets.RegulatoryAffairs.CTAINDEvents.openDetails()

    //check Forms and Fields
    GQ.Planets.RegulatoryAffairs.CTAINDEvents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.RegulatoryAffairs.CTAINDEvents.openRelatedObjects()
    
    //Check Related Objects
    GQ.Planets.RegulatoryAffairs.CTAINDEvents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.RegulatoryAffairs.CTAINDEvents.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of CTA IND Events - Product > Content', ()=>{
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

    //Open Regulatory Affairs
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.clickAll()

    //Refresh
     GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.refresh()

    // check Header Icons
     GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.CTAINDEvents.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of CTA IND Events - Product > Admin Data Binder > Smart Content', ()=>{
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

    //Regulatory Affairs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.refresh()

    //check header icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of CTA IND Events - Product > User Data Binder > Smart Content', ()=>{
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

    //Open under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of CTA IND Events - Product > Product Specific Binder > Smart Content', ()=>{
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

    //Open Regulatory Affairs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.open()

    //Open CTAINDEvents
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.closeSidePane()

     //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.CTAINDEvents.minimizeARecord()

    //Logout
    GQ.Logout()
  })
   
});
