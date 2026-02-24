import {GQTest} from '../../../jnj-pages/GQTest.js'

describe ('APR/PQR view of Batch Flows',()=>{
    const GQ = new GQTest()

  it('APR/PQR view of Batch Flows', ()=>{
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

    //Open Batch Flows under Content
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.open()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlows.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.open()

    //close Side Pane
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.closeSidePane()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.refresh()

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.checkColumns()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.closeSidePane()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.openDetails()

    //Collapse upward
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.collapseUpward()

   //check Fields are Non Editable
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.minimizeARecord()

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.BatchFlowsAPRPQR.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()
  })

});