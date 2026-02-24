import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Records By User Containments ', () => {
  const GQ = new GQTest()
 
  it('Quality Records By User Containments - Planet', () => {
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()

    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Takamoto Sato')

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.closesidePane()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.checkColumns()

    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.checkMultiChoicePickerColumns()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.refresh()

    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.openDetails()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.checkFormsandFieldsAvailablity()

    //check Forms and Fields
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.rightClickARecord()


    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.Containments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Quality Records By User Containments  > Content', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()
    
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.open()


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Andrea Baldisseri')
    

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.open()
    
    //open
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.refresh()
   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.checkMultiChoicePickerColumns()

     GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.Containments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 }); 