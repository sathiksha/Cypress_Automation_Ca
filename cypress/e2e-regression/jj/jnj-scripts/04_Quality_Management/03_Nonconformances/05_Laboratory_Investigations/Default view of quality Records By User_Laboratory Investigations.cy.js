import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('Quality Records By User Laboratory Investigations ', () => {
  const GQ = new GQTest()
 
  it('Quality Records By User Laboratory Investigations - Planet', () => {
    // Login 
    GQ.Login()

    //Open Quality Management Planet
    GQ.Planets.openPlanet('Quality Management')

    //Open qualityRecordsByUser page
    GQ.Planets.QualityManagement.QualityRecordsByUser.open()

    //clickUser
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Gitte Coopmans')

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.open()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.closesidePane()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.refresh()

    //check Header Icons
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.checkColumns()

    //Check MulitichoicePicker
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.checkMultiChoicePickerColumns()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.refresh()

    //open a Record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.openDetails()

    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.checkFormsandFieldsAvailablity()

    //minimize the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.rightClickARecord()


    GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

  it('Quality Records By User Laboratory Investigation  > Content', () => {
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


    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Gitte Coopmans')
    

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.open()
    
    //open
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.refresh()
   
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.checkMultiChoicePickerColumns()

     GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.refresh()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.openDetails()

        //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.checkFormsandFieldsAvailablity()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.openRelatedObjects()

     GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.checkRelatedObjects()
    
     //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
    //Logout
    GQ.Logout()
  })
 }); 