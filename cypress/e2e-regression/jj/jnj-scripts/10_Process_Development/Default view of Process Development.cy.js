import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of Process Development',()=>{
	const GQ = new GQTest()

  it('Default view of Process Development - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()

    //Open page
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()
    //Refresh
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openARecord()

    //Click Details Tab
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.minimizeARecord()

    //Right Click the record
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.rightClickARecord()

    //Add Bookmark
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Process Development - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open Process Development under Content
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.Content.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Process Development - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Process Development - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Process Development - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Process Development - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Process Development - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Process Development - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ProcessDevelopment.ProcessDevelopment.ProcessDevelopment.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
