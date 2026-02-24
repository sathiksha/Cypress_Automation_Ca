import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Record By User changeControls', () => {
  const GQ = new GQTest()
 
  it('Quality Record By User changeControls', () => {
    // Login
    GQ.Login()
 
    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')
 
    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()
 
    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Takamoto Sato')
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.open()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.open()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.closesidePane()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.refresh()
 
    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.checkHeaderIcons()
 
    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.checkColumns()
 
    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.checkMultiChoicePickerColumns()

    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.refresh()
 
    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.openARecord()
 
    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.openDetails()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.checkFormsandFieldsAvailablity()
 
    //check Forms and Fields
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.openRelatedObjects()
 
    //Check Related Objects
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.checkRelatedObjects()
 
    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.minimizeARecord()
 
    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.rightClickARecord()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.cometChangecontrols.addBookmark()
 
    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
 
    //Logout
    GQ.Logout()
  })
 
  it('Quality Record By User changeControls > Content', () => {
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
 
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Wendy Bleux')
   
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.open()
   
    //open
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.open()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.closesidePane()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.refresh()
   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.checkHeaderIcons()
 
    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.checkColumns()
 
    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.checkMultiChoicePickerColumns()
 
    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.openARecord()
 
    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.openDetails()
 
    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.checkFormsandFieldsAvailablity()
 
    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.openRelatedObjects()
 
    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.checkRelatedObjects()
 
    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.minimizeARecord()
 
    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.rightClickARecord()
 
    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.cometChangecontrols.addBookmark()
 
    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 });