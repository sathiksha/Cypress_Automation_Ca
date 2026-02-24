import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('Default view of Product Families',()=>{
	const GQ = new GQTest()

  it('Default view of Product Families - Planet', ()=>{
    // Login 
    GQ.Login()

    //Open Planet
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()

    //Open page
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()
    //Refresh
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.openARecord()

    //Click Details Tab
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.minimizeARecord()

    //Right Click the record
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Product Families - Product > Content', ()=>{
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.Product.open()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('Family Name')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open Product Families under Content
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.Content.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Product Families - Product > Admin Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Product Families - Product > Admin Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Product Families - Product > User Data Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Product Families - Product > User Data Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Product Families - Product > Product Specific Binder > Smart Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Default view of Product Families - Product > Product Specific Binder > Linked Content', ()=>{
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.open()
    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.refresh()

    //Column names
    let expectedColumnNames = [
    ]

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkColumns(expectedColumnNames)

    //multi-choice picker column names
    let multiChoicePickerColumnNames = [
    ]

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkMultiChoicePickerColumns(multiChoicePickerColumnNames)

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openDetails()

    //Forms and Fields
    let expectedFormsandFields = [
    ]

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFormsandFields(expectedFormsandFields)

    //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkFieldsNonEditable()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.openRelatedObjects()

    //Related Objects
    let expectedRelatedObjects = [
    ]

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkRelatedObjects(expectedRelatedObjects)

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.addBookmark()

    //check Bookmark Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Products.ProductFamilies.ProductFamilies.ProductFamilies.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});
