import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of Smoke Testing',()=>{
	const GQ = new GQTest()

  it('Default view of Smoke Testing - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.open()

    //Open page
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.open()
    //Refresh
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.openARecord()

    //Click Details Tab
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.minimizeARecord()

    //Right Click the record
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.rightClickARecord()

    //Add Bookmark
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.SmokeTesting.SmokeTesting.SmokeTesting.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Smoke Testing - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open Smoke Testing under Content
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.Content.SmokeTesting.SmokeTesting.SmokeTesting.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Smoke Testing - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Smoke Testing - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Smoke Testing - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Smoke Testing - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Smoke Testing - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.SmokeTesting.SmokeTesting.SmokeTesting.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Smoke Testing - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.SmokeTesting.SmokeTesting.SmokeTesting.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
