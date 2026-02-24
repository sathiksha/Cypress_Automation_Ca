import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Records By User NC Corrections ', () => {
  const GQ = new GQTest()
 
  it('Quality Records By User NC Corrections - Planet', () => {
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()

    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Ana Lopez')

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.closesidePane()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.checkColumns()

    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.checkMultiChoicePickerColumns()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.refresh()

    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.openDetails()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.rightClickARecord()


    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.NCCorrections.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it.only('Quality Records By User NC Corrections > Content', () => {
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
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.closesidePane()
   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.checkMultiChoicePickerColumns()

     GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.NCCorrections.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 }); 