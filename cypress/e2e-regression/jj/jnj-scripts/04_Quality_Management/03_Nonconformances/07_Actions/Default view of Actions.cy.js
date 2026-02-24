import { GQTest } from "../../../../jnj-pages/GQTest.js";

describe("Default view of Actions", () => {
  const GQ = new GQTest();

  it("Default view of Actions - Planet", () => {
    // Login
    GQ.Login();

    //Open Quality Management Planet
    GQ.Planets.openPlanet("Quality Management");

    //Open Nonconformances page
    GQ.Planets.QualityManagement.Nonconformances.open();

    //Open Actions page
    GQ.Planets.QualityManagement.Nonconformances.Actions.open();

    //Refresh
    GQ.Planets.QualityManagement.Nonconformances.Actions.refresh();

    //check Header Icons
    GQ.Planets.QualityManagement.Nonconformances.Actions.checkHeaderIcons();

    // Verify All Filter
    GQ.Planets.QualityManagement.Nonconformances.Actions.verifyDefaultFilter();

    // Verify Related to Me Filter
    GQ.Planets.QualityManagement.Nonconformances.Actions.VerifyFilterRelatedToMe();

    //Verify Related to Me and Open
    GQ.Planets.QualityManagement.Nonconformances.Actions.VerifyFilterRelatedToMeAndOpen();

    //Verify Related to Me and In Approval
    GQ.Planets.QualityManagement.Nonconformances.Actions.VerifyFilterRelatedToMeAndInApproval();

    //select All Filter
    GQ.Planets.QualityManagement.Nonconformances.Actions.selectAllFilter();

    //click Chart Icon
    GQ.Planets.QualityManagement.Nonconformances.Actions.clickChartIcon();

    //Click Analytics
    GQ.Planets.QualityManagement.Nonconformances.Actions.Analytics.open();

    //analytics Refresh
    GQ.Planets.QualityManagement.Nonconformances.Actions.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.QualityManagement.Nonconformances.Actions.Analytics.clickFacetPicker();

    //add Row Attributes
    GQ.Planets.QualityManagement.Nonconformances.Actions.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.QualityManagement.Nonconformances.Actions.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.QualityManagement.Nonconformances.Actions.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.Nonconformances.Actions.Analytics.checkFilterFunctionality();

    GQ.Planets.QualityManagement.Nonconformances.Actions.Analytics.refresh();

    //Click Status
    GQ.Planets.QualityManagement.Nonconformances.Actions.Status.open();

    //Status Refresh
    GQ.Planets.QualityManagement.Nonconformances.Actions.Status.refresh();

    //check Graphs
    GQ.Planets.QualityManagement.Nonconformances.Actions.Status.checkGraphs();

    //Click Owner
    GQ.Planets.QualityManagement.Nonconformances.Actions.Owner.open();

    //Owner Refresh
    GQ.Planets.QualityManagement.Nonconformances.Actions.Owner.refresh();

    GQ.Planets.QualityManagement.Nonconformances.Actions.Owner.filter();

    GQ.Planets.QualityManagement.Nonconformances.Actions.Owner.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.QualityManagement.Nonconformances.Actions.Owner.clickChartIcon();

    //Check Column availability
    GQ.Planets.QualityManagement.Nonconformances.Actions.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Nonconformances.Actions.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.QualityManagement.Nonconformances.Actions.openARecord();

    //check Forms and Fields
    GQ.Planets.QualityManagement.Nonconformances.Actions.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.QualityManagement.Nonconformances.Actions.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.QualityManagement.Nonconformances.Actions.checkRelatedObjects();

    //minimize the record
    GQ.Planets.QualityManagement.Nonconformances.Actions.minimizeARecord();

    //Right Click the record
    GQ.Planets.QualityManagement.Nonconformances.Actions.rightClickARecord();

    //Add Bookmark
    GQ.Planets.QualityManagement.Nonconformances.Actions.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Actions - Product > Content", () => {
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

    //Open Actions page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Analytics.clickFacetPicker();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Status.checkGraphs();

    //Click Owner
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Owner.open();

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Owner.refresh();

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Owner.filter();

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Owner.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.Owner.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.Actions.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Actions - Product > Admin Data Binder > Smart Content", () => {
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

    //Open Actions page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.clickFacetPicker();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Status.checkGraphs();

    //Click Owner
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.open();

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.refresh();

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.filter();

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Actions - Product > Admin Data Binder > Linked Content", () => {
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

    //Open Actions page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkRelatedObjects();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Actions - Product > User Data Binder > Smart Content", () => {
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

    //Open Actions page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.clickFacetPicker();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Status.checkGraphs();

    //Click Owner
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.open();

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.refresh();

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.filter();

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.Actions.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Actions - Product > User Data Binder > Linked Content", () => {
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

    //Open Actions page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkRelatedObjects();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.Actions.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Actions - Product > Product Specific Binder > Smart Content", () => {
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

    //Open Actions page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.clickFacetPicker();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Status.checkGraphs();

    //Click Owner
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.open();

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.refresh();

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.filter();

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.Owner.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.Actions.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Actions - Product > Product Specific Binder > Linked Content", () => {
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

    //Open Actions page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.checkRelatedObjects();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.Actions.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });
});
