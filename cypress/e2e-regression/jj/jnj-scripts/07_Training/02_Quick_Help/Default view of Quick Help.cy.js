import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of Quick Help',()=>{
	const GQ = new GQTest()

  it('Default view of Quick Help - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.open()

    //Open page
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.open()
    //Refresh
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.openARecord()

    //Click Details Tab
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.minimizeARecord()

    //Right Click the record
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Training.QuickHelp.QuickHelp.QuickHelp.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Quick Help - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open Quick Help under Content
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.Content.Training.QuickHelp.QuickHelp.QuickHelp.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Quick Help - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Quick Help - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Quick Help - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Quick Help - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Quick Help - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Training.QuickHelp.QuickHelp.QuickHelp.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Quick Help - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Training.QuickHelp.QuickHelp.QuickHelp.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
