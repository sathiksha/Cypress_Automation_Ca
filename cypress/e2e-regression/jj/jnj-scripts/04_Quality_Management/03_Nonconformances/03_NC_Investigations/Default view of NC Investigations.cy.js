import {GQTest} from '../../../../jnj-pages/GQTest'

describe ('Default view of NC Investigations',()=>{
	const GQ = new GQTest()

  it('Default view of NC Investigations - Planet', ()=>{
    // Login 
    GQ.Login()
    
    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open Nonconformances
    GQ.Planets.QualityManagement.Nonconformances.open()

    //Open NCInvestigations
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.open()

    //Refresh
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Analytics.clickFacetPicker()

       //remove Row Attributes
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Analytics.checkFilterFunctionality()

    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Analytics.refresh()

    //Status
    //Click Status
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Status.refresh()

    //check Graphs
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Status.checkGraphs()
    //Owner

    //Click Owner
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Owner.open()

    //Owner Refresh
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Owner.refresh()

    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Owner.filter()

    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.Owner.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.clickChartIcon()

    //open a Record
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.openDetails()

    //check Fields are Non Editable
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.Nonconformances.NCInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Investigations - Product > Content', ()=>{
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

    //Open QualityManagement tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    //Open NC Investigations under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.open()

    //close side pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.closeSidePane()

    //click All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.checkColumns()

    //Check eye icon Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Analytics.clickFacetPicker()

    
    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Analytics.removeColumnAttributes()


    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Analytics.refresh()

     //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Status.checkGraphs()
    //Owner

    //Click Owner
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Owner.open()

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Owner.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Owner.filter()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.Owner.checkFilterFunctionality()

    
    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.clickChartIcon()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NCInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Investigations - Product > Admin Data Binder > Smart Content', ()=>{
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

    //Open Quality Management tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.closeSidePane()

    //Click All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkColumns()

   //Check eye icon Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.clickFacetPicker()

  
    
    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.refresh()
   //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Status.checkGraphs()
    //Owner

    //Click Owner
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.open()

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.filter()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.checkFilterFunctionality()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Investigations - Product > Admin Data Binder > Linked Content', ()=>{
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

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

    // Admin Data Binder - QualityManagement
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.closeSidePane()

    //Link A content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkEyeIconColumn()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Investigations - Product > User Data Binder > Smart Content', ()=>{
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

    // User Data Binder - QualityManagement
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

    //Open under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.closeSidePane()

    //Click All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkEyeIconColumn() 

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.clickChartIcon()

   //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.clickFacetPicker()

      //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.checkFilterFunctionality()
 
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.refresh()
    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Status.checkGraphs()
    //Owner

    //Click Owner
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.open()

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.filter()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.clickChartIcon()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Investigations - Product > User Data Binder > Linked Content', ()=>{
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

    // User Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    // User Data Binder - QualityManagement
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

    //Open under User Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.closeSidePane()

    //Link A content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkColumns() 

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkEyeIconColumn() 

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Investigations - Product > Product Specific Binder > Smart Content', ()=>{
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

    // ProductSpecific Binder - QualityManagement
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    //Open under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.open()

    //close side pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.clickChartIcon()

   //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.removeRowAttributes()
    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.checkFilterFunctionality()
    

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Analytics.refresh()
    //Status
    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Status.checkGraphs()
    //Owner

    //Click Owner
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.open()

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.filter()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.Owner.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NCInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of NC Investigations - Product > Product Specific Binder > Linked Content', ()=>{
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

    // ProductSpecific Binder - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    // ProductSpecific Binder - QualityManagement
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open()

    //Open under Product Specific Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.closeSidePane()

    //Link A content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkEyeIconColumn()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.NCInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
