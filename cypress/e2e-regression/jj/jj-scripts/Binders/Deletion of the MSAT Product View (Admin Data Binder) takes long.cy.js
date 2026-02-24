import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
if (!Cypress.env("onlyRunReadOnlyTests")) {
  describe("Bug Tracking Test", () => {
    it("7555-Deletion of the MSAT Product View (Admin Data Binder) takes long", () => {
      const GQ = new GQTest();
      // Login to Products
      GQ.login();

      // Open Product
      GQ.Planets.Product.openLandingPage();

      // Product Families
      GQ.Planets.Product.ProductFamilies.openLandingPage();

      // Toggle Filter
      GQ.Planets.Product.ProductFamilies.toggleFilter();

      // Open 'APALUTAMIDE'
      GQ.Planets.Product.ProductFamilies.openProductFamilyByText("APALUTAMIDE");

      GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

      // Check out MSAT Product View – Copy
      GQ.Planets.Product.ProductFamilies.ProductFamily.checkoutUserDataBinder(
        "MSAT Product View - Bruvin Demo"
      );

      // Refresh
      GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

      // Click the checked out one
      GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow(
        "MSAT Product View - Bruvin Demo"
      );

      // Duplicate
      GQ.Planets.Product.ProductFamilies.ProductFamily.duplicate();

      // Refresh
      GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

      GQ.Planets.Product.ProductFamilies.ProductFamily.toggleSelector();

      // Click the checked out one
      GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow(
        "MSAT Product View - Bruvin Demo"
      );

      // Open Home
      GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.open();

      // Change Name
      GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.setName(
        "MSAT Product View - Cypress Test Admin Binder"
      );

      // Save
      GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.save();

      // Refresh
      GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

      GQ.Planets.Product.ProductFamilies.ProductFamily.toggleSelector();

      // Select the Changed One
      GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow(
        "MSAT Product View - Cypress Test Admin Binder"
      );


      // Refresh
      GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

      // Element Library
      GQ.NavBar.ElementLibrary.openLandingPage();

      // Data Management
      GQ.NavBar.ElementLibrary.DataManagement.open();

      // Admin Data Binder
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.open();

      // Toggle Selector
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.toggleSelector();
      
      // Search for the created one
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRow(
        "MSAT Product View - Cypress Test Admin Binder"
      );

      //Verify the Binder Selected
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.verifyRowSelected(
        "MSAT Product View - Cypress Test Admin Binder"
      );

      // // RightClick Binder
      // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.rightclickBinder();

      // // Release
      // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.makeObsolete();

      // Delete >>> Delete button not available
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteRow('MSAT Product View - Cypress Test Admin Binder');

      // Refresh
      GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector();

      // Logout
      GQ.logout();
    });
  });
}
