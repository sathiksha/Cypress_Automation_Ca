import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Records by User - Escalations', () => {
  const GQ = new GQTest()
 
  it('Quality Records by User - Escalations - Planet', () => {
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

  
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Takamoto Sato')

    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.closesidePane()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.checkColumns()

    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.openDetails()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.checkFormsandFieldsAvailablity()

    //check Forms and Fields
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.minimizeARecord()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.rightClickARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.cometEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Quality Records by User Escalations - Product > Content', () => {
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


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Ana Teresa Dias Duarte')
    

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.open()
    

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.open()


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.closeSidePane()
   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Escalations.cometEscalations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 }); 