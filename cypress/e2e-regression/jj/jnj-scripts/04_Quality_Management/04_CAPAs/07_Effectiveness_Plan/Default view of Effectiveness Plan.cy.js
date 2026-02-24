import {GQTest} from '../../../../jnj-pages/GQTest.js'

describe ('Default view of Effectiveness Plan',()=>{
	const GQ = new GQTest()

  it('Default view of Effectiveness Plan - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Quality Management')
    
    //open CAPA
    GQ.Planets.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.open()

    //Refresh
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.refresh()

    //Check Column availability
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Analytics.clickFacetPicker()

    //add Row Attributes
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Analytics.checkFilterFunctionality()

       //remove Row Attributes
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Analytics.removeColumnAttributes()


    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Analytics.refresh()

    //Status
    //Click Status
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Status.refresh()

    //check Graphs
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.Status.checkGraphs()

    //ResponsiblePerson

    //Click ResponsiblePerson
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.open()

    //ResponsiblePerson Refresh
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.refresh()

    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.filter()

    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.clickChartIcon()
    //open a Record
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.openDetails()

    //check Forms and Fields
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Effectiveness Plan - Product > Content', ()=>{
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

    //Open Effectiveness Plan under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.open()

    //close side pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.closeSidePane()

    //click All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.checkColumns()

    //Check eye icon Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Analytics.clickFacetPicker()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Analytics.checkFilterFunctionality()
    
    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Analytics.removeColumnAttributes()


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Analytics.refresh()

     //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.Status.checkGraphs()
    //ResponsiblePerson

    //Click ResponsiblePerson
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.open()

    //ResponsiblePerson Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.filter()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.checkFilterFunctionality()

    
    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.clickChartIcon()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Effectiveness Plan - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.closeSidePane()

    //Click All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkColumns()

   //Check eye icon Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.clickFacetPicker()

  //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.checkFilterFunctionality()
    
    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.removeColumnAttributes()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.refresh()
   //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Status.checkGraphs()
    //ResponsiblePerson

    //Click ResponsiblePerson
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.open()

    //ResponsiblePerson Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.filter()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.checkFilterFunctionality()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Effectiveness Plan - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.closeSidePane()

    //Link A content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkEyeIconColumn()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Effectiveness Plan - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.closeSidePane()

    //Click All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkEyeIconColumn() 

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.clickChartIcon()

   //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.clickFacetPicker()

     //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.checkFilterFunctionality()

      //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.removeColumnAttributes()
 
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.refresh()
    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Status.checkGraphs()
    //ResponsiblePerson

    //Click ResponsiblePerson
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.open()

    //ResponsiblePerson Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.filter()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.clickChartIcon()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.openDetails()

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Effectiveness Plan - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.closeSidePane()

    //Link A content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkColumns() 

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkEyeIconColumn() 

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Effectiveness Plan - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.open()

    //close side pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.closeSidePane()

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.clickAll()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkEyeIconColumn()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkMultiChoicePickerColumns()

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.clickChartIcon()

   //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.clickFacetPicker()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.checkFilterFunctionality()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.removeRowAttributes()
    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.removeColumnAttributes()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Analytics.refresh()
    //Status
    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.Status.checkGraphs()
    //ResponsiblePerson

    //Click ResponsiblePerson
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.open()

    //ResponsiblePerson Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.filter()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.ResponsiblePerson.checkFilterFunctionality()

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.EffectivenessPlan.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Effectiveness Plan - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.open()

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.closeSidePane()

    //Link A content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.linkAContent()

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.refresh()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkColumns()

    //Check record-eye icon availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkEyeIconColumn()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.EffectivenessPlan.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
