import { GQTest } from "../../../jnj-pages/GQTest.js";

describe("Default view of Registrations", () => {
  const GQ = new GQTest();

  it("Default view of Registrations - Planet", () => {
    // Login
    GQ.Login();

    //Open Planet
    GQ.Planets.openPlanet("Regulatory Affairs");

    //Open page
    GQ.Planets.RegulatoryAffairs.Registrations.open();

    //Refresh
    GQ.Planets.RegulatoryAffairs.Registrations.refresh();

    //Verify Default Predefined Filter
    GQ.Planets.RegulatoryAffairs.Registrations.verifyDefaultFilter();

    //Verify All Predefined Filter
    GQ.Planets.RegulatoryAffairs.Registrations.selectAllFilter();

    //check Header Icons
    GQ.Planets.RegulatoryAffairs.Registrations.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.RegulatoryAffairs.Registrations.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.RegulatoryAffairs.Registrations.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.RegulatoryAffairs.Registrations.openARecord();

    //Click Details Tab
    GQ.Planets.RegulatoryAffairs.Registrations.openDetails();

    //check Forms and Fields
    GQ.Planets.RegulatoryAffairs.Registrations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.RegulatoryAffairs.Registrations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.RegulatoryAffairs.Registrations.checkRelatedObjects();

    //minimize the record
    GQ.Planets.RegulatoryAffairs.Registrations.minimizeARecord();

    //Logout
    GQ.Logout();
  });

  it("Default view of Registrations - Product > Content", () => {
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

    //Open Registrations
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.open();

    //Open All
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.clickAll();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.closeSidePane();

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.refresh();

    //check Header Icons
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.minimizeARecord();

    //Logout
    GQ.Logout();
  });

  it("Default view of Registrations - Product > Admin Data Binder > Smart Content", () => {
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.closeSidePane();

    //Open Regulatory Affairs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.open();

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.open();

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.refresh();

    //check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.minimizeARecord();

    //Logout
    GQ.Logout();
  });

  it("Default view of Registrations - Product > User Data Binder > Smart Content", () => {
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.closeSidePane();

    //Open Regulatory Affairs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.open();

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.open();

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.refresh();

    //check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Registrations.minimizeARecord();

    //Logout
    GQ.Logout();
  });

  it("Default view of Registrations - Product > Product Specific Binder > Smart Content", () => {
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
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.closeSidePane();

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.open();

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.refresh();

    //check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Registrations.minimizeARecord();

    //Logout
    GQ.Logout();
  });
});
