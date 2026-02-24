import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of BLA NDA Events',()=>{
	const GQ = new GQTest()

  it('Default view of BLA NDA Events - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Regulatory Affairs')

    //Open page
    GQ.Planets.RegulatoryAffairs.BLANDAEvents.open()
    
    //Refresh
    GQ.Planets.RegulatoryAffairs.BLANDAEvents.refresh()

    //check Header Icons
    GQ.Planets.RegulatoryAffairs.BLANDAEvents.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.RegulatoryAffairs.BLANDAEvents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.RegulatoryAffairs.BLANDAEvents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.RegulatoryAffairs.BLANDAEvents.openARecord()

    //Click Details Tab
    GQ.Planets.RegulatoryAffairs.BLANDAEvents.openDetails()

    //check Forms and Fields
    GQ.Planets.RegulatoryAffairs.BLANDAEvents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.RegulatoryAffairs.BLANDAEvents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.RegulatoryAffairs.BLANDAEvents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.RegulatoryAffairs.BLANDAEvents.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of BLA NDA Events - Product > Content', ()=>{
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

    //Open BLA NDA Events under Content
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.refresh()

    // check Header Icons
     GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.BLANDAEvents.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of BLA NDA Events - Product > Admin Data Binder > Smart Content', ()=>{
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

    //Open Regulatory Affairs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.clickAll()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkHeaderIcons()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of BLA NDA Events - Product > User Data Binder > Smart Content', ()=>{
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

    // User Data Binder - Regulatory Affairs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.open()

    //Open under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.clickAll()
    
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.minimizeARecord()

    //Logout
    GQ.Logout()
  })

  it('Default view of BLA NDA Events - Product > Product Specific Binder > Smart Content', ()=>{
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

    // ProductSpecific Binder - Regulatory Affairs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.open()

    //Open under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.closeSidePane()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkHeaderIcons()

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.BLANDAEvents.minimizeARecord()

    //Logout
    GQ.Logout()
  })

});
