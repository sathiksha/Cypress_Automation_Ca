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

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.open()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.closeSidePane()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.refresh()
 
    //check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.checkHeaderIcons()
 
    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.checkColumns()

    //Check eye icon Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.checkEyeIconColumn()
 
    //Check MulitichoicePicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.refresh()
 
    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.openARecord()
 
    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.openDetails()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.checkFormsandFieldsAvailablity()
 
    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.openRelatedObjects()
 
    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.checkRelatedObjects()
 
    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.minimizeARecord()
 
    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.rightClickARecord()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.ChangeControlsAPRPQR.addBookmark()
 
    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
 
    //Logout
    GQ.Logout()
  })
 
});