import { GQTest } from "../../../../jnj-pages/GQTest.js";

describe("Default view of Risk Assessments", () => {
  const GQ = new GQTest();

  it("Default view of Risk Assessments - Planet", () => {
    // Login
    GQ.Login();

    //Open Quality Management Planet
    GQ.Planets.openPlanet("Quality Management");

    //Open Nonconformances page
    GQ.Planets.QualityManagement.Nonconformances.open();

    //Open RiskAssessments page
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.open();

    //Refresh
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.refresh();

    //check Header Icons
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.checkHeaderIcons();

    // Verify All Filter
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.verifyDefaultFilter();

    // Verify Related to Me Filter
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.VerifyFilterRelatedToMe();

    //select All Filter
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.selectAllFilter();

    //click Chart Icon
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.clickChartIcon();

    //Click Analytics
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.Analytics.open();

    //analytics Refresh
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickFacetPicker();

    //add Row Attributes
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.Analytics.checkFilterFunctionality();

    //click Chart Icon
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickChartIcon();

    //Check Column availability
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.openARecord();

    //check Forms and Fields
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.checkFormsandFieldsAvailablity();

    //minimize the record
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.minimizeARecord();

    //Right Click the record
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.rightClickARecord();

    //Add Bookmark
    GQ.Planets.QualityManagement.Nonconformances.RiskAssessments.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Risk Assessments - Product > Content", () => {
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
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open();

    //Open Nonconformances page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.open();

    //Open RiskAssessments page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickFacetPicker();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.Analytics.checkFilterFunctionality();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.checkFormsandFieldsAvailablity();

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessments.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Risk Assessments - Product > Admin Data Binder > Smart Content", () => {
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

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open();

    //Open Nonconformances page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.open();

    //Open RiskAssessments page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickFacetPicker();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.checkFilterFunctionality();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkFormsandFieldsAvailablity();

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Risk Assessments - Product > Admin Data Binder > Linked Content", () => {
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

    // Admin Data Binder - Linked Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open();

    //Open page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.open();

    //Open Nonconformances page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.open();

    //Open RiskAssessments page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.checkFormsandFieldsAvailablity();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Risk Assessments - Product > User Data Binder > Smart Content", () => {
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
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open();

    //Open Nonconformances page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.open();

    //Open RiskAssessments page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickFacetPicker();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.checkFilterFunctionality();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkFormsandFieldsAvailablity();

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Risk Assessments - Product > User Data Binder > Linked Content", () => {
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

    // User Data Binder  - Linked Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open();

    //Open page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open();

    //Open Nonconformances page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.open();

    //Open RiskAssessments page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.checkFormsandFieldsAvailablity();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Risk Assessments - Product > Product Specific Binder > Smart Content", () => {
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

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open();

    //Open Nonconformances page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.open();

    //Open RiskAssessments page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickFacetPicker();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.checkFilterFunctionality();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.Analytics.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.checkFormsandFieldsAvailablity();

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.RiskAssessments.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Risk Assessments - Product > Product Specific Binder > Linked Content", () => {
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

    // Product Specific Binder  - Linked Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open();

    //Open page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.open();

    //Open Nonconformances page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.open();

    //Open RiskAssessments page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.checkFormsandFieldsAvailablity();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.RiskAssessments.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });
});
