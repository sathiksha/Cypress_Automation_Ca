import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Record By User - Supplemental Investigations', () => {
  const GQ = new GQTest()
 
  it('Quality Record By User - Supplemental Investigations', () => {
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()

    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Takamoto Sato')

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.closesidePane()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.checkColumns()

    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.checkMultiChoicePickerColumns()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.refresh()

    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.openDetails()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.checkFormsandFieldsAvailablity()

    //check Forms and Fields
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.rightClickARecord()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.SupplementalInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Quality Record By User - SupplementalInvestigations > Content', () => {
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


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Lars Gumbel')
    

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.open()
    
    //open
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.open()


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.refresh()
    
   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.checkMultiChoicePickerColumns()

    
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.SupplementalInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 }); 