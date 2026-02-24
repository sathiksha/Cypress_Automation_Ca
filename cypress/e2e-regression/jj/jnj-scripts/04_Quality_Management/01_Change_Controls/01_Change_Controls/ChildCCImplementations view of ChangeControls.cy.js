import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('ChangeControlsChildCCImplementations view of ChangeControls', () => {
  const GQ = new GQTest()
 
  it('ChangeControlsChildCCImplementations view of ChangeControls', () => {
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

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.open()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.closeSidePane()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.refresh()
 
    //check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.checkHeaderIcons()
 
    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.checkColumns()

    //Check eye icon Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.checkEyeIconColumn()
 
    //Check MulitichoicePicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.refresh()
 
    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.openARecord()
 
    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.openDetails()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.checkFormsandFieldsAvailablity()
 
    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.openRelatedObjects()
 
    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.checkRelatedObjects()
 
    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.minimizeARecord()
 
    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.rightClickARecord()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsChildCCImplementations.addBookmark()
 
    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
 
    //Logout
    GQ.Logout()
  })
 
});