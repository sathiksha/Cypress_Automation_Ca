import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Record By User - NCInvestigations', () => {
  const GQ = new GQTest()
 
  it('Quality Record By User - NCInvestigations', () => {
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()

    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Takamoto Sato')

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.closesidePane()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.checkColumns()

    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.openDetails()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.checkFormsandFieldsAvailablity()

    //check Forms and Fields
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.rightClickARecord()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Quality Record By User - NCInvestigations > Content', () => {
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


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Corinne McGill')
    

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.open()
    
    //open
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.closesidePane()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.refresh()
   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 }); 