import { GQTest } from '../../jj-pages/GQTest';
require('cypress-xpath');

describe('Sprint 6 - CRT: APR/PQR View of Nonconformances (COMET)', () => {
  const GQ = new GQTest();

  Cypress.on('uncaught:exception', (err, runnable) => {
    // if (err.message.includes('_1.replace is not a function')) {
    return false;  // Suppress error to avoid stopping the test
    // }
  });

  it('Validates key APR/PQR columns are present in the DOM', () => {
    cy.on('uncaught:exception', () => false)
    const columnHeaders = [
      'Number',
      '👁',
      'Name',
      'Description',
      'Source',
      'Status',
      'Stage',
      'Created Date',
      'Issue Type',
      'Site Name',
      'Highest Risk Score',
      'Conclusion of NC Risk Assessment',
      'Level 1 Immediate Cause',
      'Level 2 Immediate Cause',
      'Immediate Cause Sub Category',
      'Level 1 Root Cause',
      'Level Root 2 Cause',
      'Root Cause Sub Category',
      'Date Closed',
      'Product Grouping',
      'Material or Item',
      'Material Description',
      'Batch ID/Lot No',
      'Disposition Type',
      'Disposition Justification',
      'Release from Investigation',
      'Reoccurring',
      'J&J Functional Area',
      'J&J Functional Area 1',
      'J&J Functional Area 2',
      'Investigation Number',
      'Action Plan Number (APN)',
      'Related Correction and State (ACT)',
      'Title (ACT)',
      'Action Type (ACT)',
      'Stage (ACT)',
      'Related Effectiveness Review and Status',
      'Laboratory Investigation: Record Number',
      'Laboratory Investigation: Confirmed OOS/OOT/OOL',
      'Related CAPA and State',
      'Title (CAPA)'
    ];

    // Step 1: Login and navigate
    GQ.login();
    const Product = GQ.Planets.Product;
    Product.openLandingPage();
    Product.ProductFamilies.openLandingPage();
    Product.ProductFamilies.toggleFilter();
    Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
    Product.ProductFamilies.ProductFamily.Content.open();

    const QR = Product.ProductFamilies.ProductFamily.Content.QualityRecords;
    QR.openLandingPage();
    QR.NonConformances();
    QR.APRPQRView.open();


    // Wait for UI/table to load
    cy.wait(2000);

    // Step 2: Assert each specified column exists in the DOM and log visibility status
    columnHeaders.forEach(header => {
      cy.log(`Checking column: ${header}`);
      cy.contains(header, { timeout: 10000 }).should('exist').then($el => {
        if ($el.is(':visible')) {
          cy.log(`Column "${header}" is visible`);
        }
        else{
          cy.log(`Column "${header}" is not visible`);
        }
      });

    });

    // QR.APRPQRView.refresh()

    // // Step 3: Logout
    // GQ.logout();
  });

});
