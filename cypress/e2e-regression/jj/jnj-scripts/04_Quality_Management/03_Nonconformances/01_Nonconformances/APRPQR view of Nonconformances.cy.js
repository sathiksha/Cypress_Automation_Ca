import { GQTest } from '../../../../jnj-pages/GQTest.js';
require('cypress-xpath');


describe('APR/PQR view of Nonconformances', () => {

  const GQ = new GQTest();

  Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('replace is not a function')) {
      cy.log('Ignoring replace error');
      return false;
    }
    return false; // suppress all errors anyway
  });

it('APR/PQR view of Nonconformances - Product > Content', () => {

  cy.on('uncaught:exception', () => false)

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

    //close Side Pane
    GQ.Planets.Product.ProductFamily.Content.closeSidePane()

    // Quality Management
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    //Open Nonconformances under Content
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.open()

    //Open Nonconformances under Nonconformances
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.open()

    cy.wait(2000);
    cy.log('NC opened');

    //openAPR/PQR
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.open()

    cy.wait(2000);
    cy.log('APR/PQR opened');


    //Refresh
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.refresh()

    //Check Column availability
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.checkColumns()

    //Check multi-choice picker Column availability
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.checkMultiChoicePickerColumns()

    //click Chart Icon
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.clickChartIcon()

    //Click Analytics
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.Analytics.open()

    //analytics Refresh
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.Analytics.refresh()

    //click FacetPicker
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.facetPicker()

    // //remove Row Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.Analytics.removeAllRowAttributes()

    // //remove Column Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.Analytics.removeAllColumnAttributes()

    // //add Row Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.Analytics.addRowAttributeClick()

    // //add Column Attributes
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.Analytics.addColumnAttributeClick()

    // //click filter
    // // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.clickFilter()

    // // //Validate Filter Functionality
    // // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.Analytics.checkFilterFunctionality()

    // //Click Status
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.Status.open()

    // //Status Refresh
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.Status.refresh()


    // //checkGraphs
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.Status.checkGraphs()

    // //Click Status or Owner
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.StatusorOwner.open()

    // //Status or Owner Refresh
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.StatusorOwner.refresh()

    // //Click chart icon
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.clickChartIcon()

    // //open a Record
    //  GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.openARecord()

    // //Click Details Tab
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.openDetails()


    // //check Forms and Fields
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.checkFormsandFields('Nonconformances', 'NonConformances')

    // //Open related Objects
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.openRelatedObjects()

    // //Check Related Objects
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.checkRelatedObjects('Nonconformances', 'NonConformances');

    // //minimize the record
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.minimizeARecord()

    // //Right Click the record
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.rightClickARecord()

    // //Add Bookmark
    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesAPRPQR.addBookmark()

    // //check Bookmark Functionality
    // cy.checkBookmarkFunctionality()
    // //Logout
    // GQ.Logout()
  });

});
