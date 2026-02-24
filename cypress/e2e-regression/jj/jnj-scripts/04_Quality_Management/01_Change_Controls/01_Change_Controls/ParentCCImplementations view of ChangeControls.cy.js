import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('APR/PQR view of ChangeControls', () => {
  const GQ = new GQTest()
 
  it('APR/PQR view of ChangeControls', () => {
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

    //Open Assessment Executions under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.open()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.closeSidePane()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.refresh()
 
    //check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.checkHeaderIcons()
 
    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.checkColumns()

    //Check eye icon Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.checkEyeIconColumn()
 
    //Check MulitichoicePicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.refresh()
 
    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.openARecord()
 
    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.openDetails()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.checkFormsandFieldsAvailablity()
 
    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.openRelatedObjects()
 
    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.checkRelatedObjects()
 
    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.minimizeARecord()
 
    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.rightClickARecord()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsParentCCImplementations.addBookmark()
 
    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
 
    //Logout
    GQ.Logout()
  })
 
});