import { GQTest } from '../../../../jnj-pages/GQTest.js'
 
describe('APR/PQR view of CAPAs', () => {
  const GQ = new GQTest()
 
  it('APR/PQR view of CAPAs', () => {
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

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.open()
    
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.closeSidePane()
  
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.refresh()
 
    //check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.checkHeaderIcons()
 
    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.checkColumns()

    //Check eye icon Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.checkEyeIconColumn()
 
    //Check MulitichoicePicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.checkMultiChoicePickerColumns()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.refresh()

     //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.clickChartIcon()

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Analytics.open()

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Analytics.refresh()

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Analytics.clickFacetPicker()
  
    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Analytics.removeRowAttributes()

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Analytics.removeColumnAttributes()

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Analytics.addRowAttributes()

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Analytics.addColumnAttributes()

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Analytics.clickFilter()

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Analytics.checkFilterFunctionality()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Analytics.refresh()

     //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Status.open()

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Status.refresh()

    //check Graphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Status.checkGraphs()    

    //Click Asssignee
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Owner.open()

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Owner.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Owner.filter()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.Owner.checkFilterFunctionality()

    
    //Click chart icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.clickChartIcon()
   
    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.openARecord()
 
    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.openDetails()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.checkFormsandFieldsAvailablity()
 
    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.openRelatedObjects()
 
    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.checkRelatedObjects()
 
    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.minimizeARecord()
 
    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.rightClickARecord()
 
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.CAPAsAPRPQR.addBookmark()
 
    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()
 
    //Logout
    GQ.Logout()
  })
 
});