import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Record By User - Audit Observations', () => {
  const GQ = new GQTest()
 
  it('Quality Record By User - Audit Observations', () => {
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()

    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Yamarie Arroyo')

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.closesidePane()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.checkColumns()

    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.checkMultiChoicePickerColumns()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.refresh()

    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.openDetails()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.checkFormsandFieldsAvailablity()

    //check Forms and Fields
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.rightClickARecord()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.AuditObservations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Quality Record By User - Audit Observation > Content', () => {
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


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.clickAPerson('SRIVIDYA SAMPATHNARAYANAN')
    

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.open()
    
    //open
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.closeSidePane()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.refresh()
   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.AuditObservations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 }); 