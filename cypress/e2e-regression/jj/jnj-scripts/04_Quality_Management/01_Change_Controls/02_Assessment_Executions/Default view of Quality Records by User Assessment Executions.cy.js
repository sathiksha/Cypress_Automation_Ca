import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Record By Assessment Executions', () => {
  const GQ = new GQTest()
 
  it('Quality Record By Assessment Executions', () => {
    // Login
    GQ.Login()
 
    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')
 
    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()
 
    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Takamoto Sato')
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.open()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.open()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.closesidePane()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.refresh()
 
    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.checkHeaderIcons()
 
    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.checkColumns()
 
    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.checkMultiChoicePickerColumns()

    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.refresh()
 
    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.openARecord()
 
    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.openDetails()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.checkFormsandFieldsAvailablity()
 
    //check Forms and Fields
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.openRelatedObjects()
 
    //Check Related Objects
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.checkRelatedObjects()
 
    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.minimizeARecord()
 
    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.rightClickARecord()
 
    GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.addBookmark()
 
    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
 
    //Logout
    GQ.Logout()
  })
 
  it('Quality Record By Assessment Executions > Content', () => {
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
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.open()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.closesidePane()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.refresh()
   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.checkHeaderIcons()
 
    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.checkColumns()
 
    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.checkMultiChoicePickerColumns()
 
    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.openARecord()
 
    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.openDetails()
 
    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.checkFormsandFieldsAvailablity()
 
    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.openRelatedObjects()
 
    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.checkRelatedObjects()
 
    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.minimizeARecord()
 
    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.rightClickARecord()
 
    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.ChangeControls.AssessmentExecutions.addBookmark()
 
    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 });