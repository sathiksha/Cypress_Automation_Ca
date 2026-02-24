import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Records By User RishAssessments ', () => {
  const GQ = new GQTest()
 
  it('Quality Records By User RiskAssessments - Planet', () => {
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()

    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Takamoto Sato')

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.closesidePane()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.checkColumns()

    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.checkMultiChoicePickerColumns()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.refresh()

    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.openDetails()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.rightClickARecord()


    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.RiskAssessments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Quality Records By User RiskAssessments  > Content', () => {
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


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Yamarie Arroyo')
    

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.open()
    
    //open
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.open()
    

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.refresh()

   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.checkMultiChoicePickerColumns()


     GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.RiskAssessments.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 }); 