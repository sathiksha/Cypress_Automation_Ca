import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of AT LegendBio',()=>{
	const GQ = new GQTest()

  it('Default view of AT LegendBio - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.open()

    //Open page
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.open()
    //Refresh
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.openARecord()

    //Click Details Tab
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.minimizeARecord()

    //Right Click the record
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.rightClickARecord()

    //Add Bookmark
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.ATLegendBio.ATLegendBio.ATLegendBio.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of AT LegendBio - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open AT LegendBio under Content
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.Content.ATLegendBio.ATLegendBio.ATLegendBio.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of AT LegendBio - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of AT LegendBio - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of AT LegendBio - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of AT LegendBio - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of AT LegendBio - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.ATLegendBio.ATLegendBio.ATLegendBio.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of AT LegendBio - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.ATLegendBio.ATLegendBio.ATLegendBio.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
