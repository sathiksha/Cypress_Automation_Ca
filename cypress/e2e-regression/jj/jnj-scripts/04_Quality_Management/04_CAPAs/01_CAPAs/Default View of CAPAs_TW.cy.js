import {GQTest} from '../../../../jnj-pages/GQTest.js'

describe ('Default view of CAPAs',()=>{
	const GQ = new GQTest()

  it('Default view of CAPAs_Trackwise - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open page
    GQ.Planets.QualityManagement.CAPAs.open()
    //Refresh
    GQ.Planets.QualityManagement.CAPAs.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //click Chart Icon
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //Click Analytics
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.open()

    //analytics Refresh
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.open()

    //Status Refresh
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.refresh()

    let structures = [
      'Bar','Area','Column','Line','Radar','Pie','Doughnut','Histogram'
    ]

    //checkGraphs
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.checkGraphs(structures)

    //Click Company
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.open()

    //Company Refresh
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.refresh()

    //Click chart icon
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //open a Record
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.rightClickARecord()

    //Add Bookmark
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CAPAs_Trackwise - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open CAPAs under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.refresh()

    let structures = [
      'Bar','Area','Column','Line','Radar','Pie','Doughnut','Histogram'
    ]

    //checkGraphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.checkGraphs(structures)

    //Click Company
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CAPAs_Trackwise - Product > Admin Data Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('Binder name')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //Open under Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.refresh()

    let structures = [
      'Bar','Area','Column','Line','Radar','Pie','Doughnut','Histogram'
    ]

    //checkGraphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.checkGraphs(structures)

    //Click Company
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CAPAs_Trackwise - Product > Admin Data Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('Binder name')

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

    //Open under Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.refresh()

    let structures = [
      'Bar','Area','Column','Line','Radar','Pie','Doughnut','Histogram'
    ]

    //checkGraphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.checkGraphs(structures)

    //Click Company
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CAPAs_Trackwise - Product > User Data Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('Binder name')

    // User Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //Open under User Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.refresh()

    let structures = [
      'Bar','Area','Column','Line','Radar','Pie','Doughnut','Histogram'
    ]

    //checkGraphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.checkGraphs(structures)

    //Click Company
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CAPAs_Trackwise - Product > User Data Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('Binder name')

    // User Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    //Open under User Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.refresh()

    let structures = [
      'Bar','Area','Column','Line','Radar','Pie','Doughnut','Histogram'
    ]

    //checkGraphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.checkGraphs(structures)

    //Click Company
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CAPAs_Trackwise - Product > Product Specific Binder > Smart Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('Binder name')

    // ProductSpecific Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //Open under Product Specific Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.refresh()

    let structures = [
      'Bar','Area','Column','Line','Radar','Pie','Doughnut','Histogram'
    ]

    //checkGraphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.checkGraphs(structures)

    //Click Company
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of CAPAs_Trackwise - Product > Product Specific Binder > Linked Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('Binder name')

    // ProductSpecific Binder - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    //Open under Product Specific Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFacetPicker()

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Analytics.checkFilterFunctionality()

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.refresh()

    let structures = [
      'Bar','Area','Column','Line','Radar','Pie','Doughnut','Histogram'
    ]

    //checkGraphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Status.checkGraphs(structures)

    //Click Company
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.open()

    //Company Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.Company.refresh()

    //Click chart icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.clickChartIcon()

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.CAPAs.CAPAs.CAPAs.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
