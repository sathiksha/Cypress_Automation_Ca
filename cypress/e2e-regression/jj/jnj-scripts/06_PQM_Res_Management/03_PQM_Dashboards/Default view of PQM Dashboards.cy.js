import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of PQM Dashboards',()=>{
	const GQ = new GQTest()

  it('Default view of PQM Dashboards - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()

    //Open page
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()
    //Refresh
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openARecord()

    //Click Details Tab
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.minimizeARecord()

    //Right Click the record
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.rightClickARecord()

    //Add Bookmark
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Dashboards - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open PQM Dashboards under Content
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Dashboards - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Dashboards - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Dashboards - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Dashboards - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Dashboards - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Dashboards - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMDashboards.PQMDashboards.PQMDashboards.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
