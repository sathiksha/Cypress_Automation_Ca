import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of PQM Employees',()=>{
	const GQ = new GQTest()

  it('Default view of PQM Employees - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()

    //Open page
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()
    //Refresh
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openARecord()

    //Click Details Tab
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.minimizeARecord()

    //Right Click the record
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.rightClickARecord()

    //Add Bookmark
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Employees - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open PQM Employees under Content
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Employees - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Employees - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Employees - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Employees - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Employees - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Employees - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMEmployees.PQMEmployees.PQMEmployees.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
