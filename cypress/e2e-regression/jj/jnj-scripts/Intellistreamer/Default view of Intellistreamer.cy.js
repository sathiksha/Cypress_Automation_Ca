import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of Intellistreamer',()=>{
	const GQ = new GQTest()

  it('Default view of Intellistreamer - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.open()

    //Open page
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.open()
    //Refresh
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.openARecord()

    //Click Details Tab
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.minimizeARecord()

    //Right Click the record
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Intellistreamer.Intellistreamer.Intellistreamer.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Intellistreamer - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open Intellistreamer under Content
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.Content.Intellistreamer.Intellistreamer.Intellistreamer.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Intellistreamer - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Intellistreamer - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Intellistreamer - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Intellistreamer - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Intellistreamer - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Intellistreamer.Intellistreamer.Intellistreamer.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Intellistreamer - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Intellistreamer.Intellistreamer.Intellistreamer.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
