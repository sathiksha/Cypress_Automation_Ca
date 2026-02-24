import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();

if (!Cypress.env('onlyRunReadOnlyTests')) {
  describe('UAT/5.0', () => {
    it('UAT-003 Manufacturing Data APR-PQR view AC-2 3 4.cy.js', () => {

      // Login
      GQ.login();

      // Product planet
      GQ.Planets.Product.openLandingPage();

      // Click on filter icon
      GQ.Planets.Product.ProductFamilies.toggleFilter();

      // Select apalutamide
      GQ.Planets.Product.ProductFamilies.openProductFamilyByText("APALUTAMIDE");

      // Content
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();

      // Manufacturing records
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage();

      // Batch flows
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openLandingPage();

      // Filter
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.open();

      // APR/PQR
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.clickAPRPQR();

      // Dropdown
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.viewDropdown();

      // Standard from Dropdown
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.clickStandard();

      // All from Dropdown
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.clickAll();

      // Filter Icon
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.clickFilterItemsIcon();

      // Filter on batch code column and type 007
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.clickBatchCodeColumn('077');

      // Download
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.download();

      // Cancel
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.clickCancel();

      cy.deleteDownloadsFolder();

      // Select a record
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.selectRecordByIndex(0);

      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.warning()

      // Check for warning dialog
      // cy.get('body').then($body => {
      //   if ($body.find('//Dialog[ID="isc_globalWarn"]/okButton/').length > 0) {
      //     cy.getSC('//Dialog[ID="isc_globalWarn"]/okButton/').click();
      //   }
      // });

      // Batch Flow
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openLandingPage();

      // Maximize Selector
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.clickMaximizeSelector();

      // 21GN602 Filter
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.clickBatchCodeColumn('21GN602');

      // Select a record
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.selectRecordByIndex(0);

      // Check for warning dialog again
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.warning();
      // cy.get('body').then($body => {
      //   if ($body.find('//Dialog[ID="isc_globalWarn"]/okButton/').length > 0) {
      //     cy.getSC('//Dialog[ID="isc_globalWarn"]/okButton/').click();
      //   }
      // });

      // Related Object
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.RelatedObjects.open();

      // Logout
      GQ.logout();
    });
  });
}
