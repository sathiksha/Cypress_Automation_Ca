import { GQTest } from "../../../jnj-pages/GQTest.js";

describe("Default view of Package Sets", () => {
  const GQ = new GQTest();

  it("Default view of Package Sets - Planet", () => {
    // Login
    GQ.Login();

    //Open Planet
    GQ.Planets.openPlanet("Regulatory Affairs");

    //Open page
    GQ.Planets.RegulatoryAffairs.PackageSets.open();

    //Refresh
    GQ.Planets.RegulatoryAffairs.PackageSets.refresh();

    //Verify Default Predefined Filter
    GQ.Planets.RegulatoryAffairs.PackageSets.verifyDefaultFilter();

    //Verify All Predefined Filter
    GQ.Planets.RegulatoryAffairs.PackageSets.selectAllFilter();

    //check Header Icons
    GQ.Planets.RegulatoryAffairs.PackageSets.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.RegulatoryAffairs.PackageSets.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.RegulatoryAffairs.PackageSets.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.RegulatoryAffairs.PackageSets.openARecord();

    //Click Details Tab
    GQ.Planets.RegulatoryAffairs.PackageSets.openDetails();

    //check Forms and Fields
    GQ.Planets.RegulatoryAffairs.PackageSets.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.RegulatoryAffairs.PackageSets.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.RegulatoryAffairs.PackageSets.checkRelatedObjects();

    //minimize the record
    GQ.Planets.RegulatoryAffairs.PackageSets.minimizeARecord();

    //Logout
    GQ.Logout();
  });

  it("Default view of Package Sets - Product > Content", () => {
    // Login
    GQ.Login();

    // Open Product
    GQ.Planets.openPlanet("Product");

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter();

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open("APALUTAMIDE");

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open();

    //Open page
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.open();

    //Open Package sets
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.open();

    //Open All
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.clickAll();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.closeSidePane();

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.refresh();

    //check Header Icons
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.PackageSets.minimizeARecord();

    //Logout
    GQ.Logout();
  });

  it("Default view of Package Sets - Product > Admin Data Binder > Smart Content", () => {
    // Login
    GQ.Login();

    // Open Product
    GQ.Planets.openPlanet("Product");

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter();

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open("APALUTAMIDE");

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open(
      "MSAT Product View - Cypress Test Admin Binder"
    );

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.closeSidePane();

    //Open Regulatory Affairs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.open();

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.open();

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.refresh();

    //check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.PackageSets.minimizeARecord();

    //Logout
    GQ.Logout();
  });

  it("Default view of Package Sets - Product > User Data Binder > Smart Content", () => {
    // Login
    GQ.Login();

    // Open Product
    GQ.Planets.openPlanet("Product");

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter();

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open("APALUTAMIDE");

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open(
      "MSAT Product View - Cypress Test User Data Binder"
    );

    // User Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open();

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.closeSidePane();

    //Open Regulatory Affairs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.open();

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.open();

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.refresh();

    //check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.PackageSets.minimizeARecord();

    //Logout
    GQ.Logout();
  });

  it("Default view of Package Sets - Product > Product Specific Binder > Smart Content", () => {
    // Login
    GQ.Login();

    // Open Product
    GQ.Planets.openPlanet("Product");

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter();

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open("APALUTAMIDE");

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open(
      "MSAT Product View - Cypress Test Product Specific Binder"
    );

    // Product Specific Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open();

    //Open Product Specific Binder Regulatory Affairs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.open();

    //close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.closeSidePane();

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.open();

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.refresh();

    //check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.PackageSets.minimizeARecord();

    //Logout
    GQ.Logout();
  });
});
