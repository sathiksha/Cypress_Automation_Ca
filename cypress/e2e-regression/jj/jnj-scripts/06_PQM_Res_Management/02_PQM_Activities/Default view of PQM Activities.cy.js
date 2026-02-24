import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of PQM Activities',()=>{
	const GQ = new GQTest()

  it('Default view of PQM Activities - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()

    //Open page
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()
    //Refresh
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openARecord()

    //Click Details Tab
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.minimizeARecord()

    //Right Click the record
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.rightClickARecord()

    //Add Bookmark
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Activities - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open PQM Activities under Content
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.Content.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Activities - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Activities - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Activities - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Activities - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Activities - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of PQM Activities - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.PQMResManagement.PQMActivities.PQMActivities.PQMActivities.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
