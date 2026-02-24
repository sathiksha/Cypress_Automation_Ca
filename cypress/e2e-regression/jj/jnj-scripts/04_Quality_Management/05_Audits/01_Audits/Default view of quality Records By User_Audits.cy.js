import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Record By User - Audits', () => {
  const GQ = new GQTest()
 
  it('Quality Record By User - Audits', () => {
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()

    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Takamoto Sato')

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.closesidePane()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.checkColumns()

    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.openDetails()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.checkFormsandFieldsAvailablity()

    //check Forms and Fields
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.rightClickARecord()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Audits.cometAudits.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Quality Record By User - Audits > Content', () => {
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


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Breda Geoghegan')
    

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.open()
    
    //open
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.closesidePane()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.refresh()
   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Audits.cometAudits.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 }); 