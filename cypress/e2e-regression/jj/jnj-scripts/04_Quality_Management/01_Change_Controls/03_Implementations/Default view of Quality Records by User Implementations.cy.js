import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Record By User Implementations', () => {
  const GQ = new GQTest()
 
  it('Quality Record By User Implementations', () => {
    // Login
    GQ.Login()
 
    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')
 
    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()
 
    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Takamoto Sato')
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.open()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.open()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.closeSidePane()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.refresh()
 
    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.checkHeaderIcons()
 
    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.checkColumns()
 
    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.checkMultiChoicePickerColumns()

    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.refresh()
 
    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.openARecord()
 
    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.openDetails()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.checkFormsandFieldsAvailablity()
 
    //check Forms and Fields
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.openRelatedObjects()
 
    //Check Related Objects
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.checkRelatedObjects()
 
    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.minimizeARecord()
 
    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.rightClickARecord()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.addBookmark()
 
    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
 
    //Logout
    GQ.Logout()
  })
 
  it('Quality Record By User Implementations > Content', () => {
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
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()
    //Open page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.open()
 
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Aaron Grace')
   
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.open()
   
    //open
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.open()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.closesidePane()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.refresh()
   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.checkHeaderIcons()
 
    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.checkColumns()
 
    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.checkMultiChoicePickerColumns()
 
    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.openARecord()
 
    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.openDetails()
 
    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.checkFormsandFieldsAvailablity()
 
    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.openRelatedObjects()
 
    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.checkRelatedObjects()
 
    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.minimizeARecord()
 
    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.rightClickARecord()
 
    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.Implementations.addBookmark()
 
    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 });