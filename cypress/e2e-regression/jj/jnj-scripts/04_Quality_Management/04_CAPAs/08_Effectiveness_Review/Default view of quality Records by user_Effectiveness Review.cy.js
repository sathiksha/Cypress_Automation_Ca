import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Records By User - EffectivenessReview', () => {
  const GQ = new GQTest()
 
  it('Quality Records By User - EffectivenessReview', () => {
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()

    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Maibritt Lindemann')

    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.closesidePane()

    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.checkColumns()

    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.openDetails()

    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.checkFormsandFieldsAvailablity()

    //check Forms and Fields
    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.checkRelatedObjects()

    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.minimizeARecord()
    

    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.rightClickARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.CAPAs.EffectivenessReview.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Quality Records By User - EffectivenessReview > Content', () => {
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


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Maibritt Lindemann')
    

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.open()
    
    //open
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.open()


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.closesidePane()

   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.CAPAs.EffectivenessReview.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 }); 