import { GQTest } from "../../../../jnj-pages/GQTest.js";

describe("Default view of CAPAs", () => {
  const GQ = new GQTest();

  it("Default view of CAPAs - Planet", () => {
    // Login
    GQ.Login();

    //Open Quality Management Planet
    GQ.Planets.openPlanet("Quality Management");

    //Open CAPAs page
    GQ.Planets.QualityManagement.CAPAs.open();

    //Open CAPAs page
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.open();

    //Refresh
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.refresh();

    //check Header Icons
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.checkHeaderIcons();

    // Verify All Filter
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.verifyDefaultFilter();

    // Verify Related to Me Filter
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.VerifyFilterRelatedToMe();

    //Verify Related to Me and Open
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.VerifyFilterRelatedToMeAndOpen();

    //Verify Related to Me and In Approval
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.VerifyFilterRelatedToMeAndInApproval();

    //select All Filter
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.selectAllFilter();

    //click Chart Icon
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.clickChartIcon();

    //Click Analytics
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Analytics.open();

    //analytics Refresh
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Analytics.clickFacetPicker();

    //remove Row Attributes
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Analytics.removeRowAttributes();

    //remove Column Attributes
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Analytics.removeColumnAttributes();

    //add Row Attributes
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Analytics.checkFilterFunctionality();

    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Analytics.refresh();

    //Click Status
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Status.open();

    //Status Refresh
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Status.refresh();

    //check Graphs
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Status.checkGraphs();

    //Click Owner
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Owner.open();

    //Owner Refresh
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Owner.refresh();

    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Owner.filter();

    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Owner.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.Owner.clickChartIcon();

    //Check Column availability
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.openARecord();

    //check Forms and Fields
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.checkRelatedObjects();

    //minimize the record
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.minimizeARecord();

    //Right Click the record
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.rightClickARecord();

    //Add Bookmark
    GQ.Planets.QualityManagement.CAPAs.cometCAPAs.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of CAPAs - Product > Content", () => {
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

    //Open CAPAs page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.open();

    //Open cometCAPAs page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Analytics.clickFacetPicker();

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Analytics.removeRowAttributes();

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Analytics.removeColumnAttributes();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Status.checkGraphs();

    //Click Owner
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Owner.open();

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Owner.refresh();

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Owner.filter();

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Owner.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.Owner.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of CAPAs - Product > Admin Data Binder > Smart Content", () => {
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
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.open();

    //Open Actions page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.clickFacetPicker();

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.removeRowAttributes();

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.removeColumnAttributes();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Status.checkGraphs();

    //Click Owner
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.open();

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.refresh();

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.filter();

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of CAPAs - Product > Admin Data Binder > Linked Content", () => {
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

    //Open CAPAs page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.open();

    //Open CAPAs page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkRelatedObjects();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of CAPAs - Product > User Data Binder > Smart Content", () => {
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

    //Open CAPAs page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.open();

    //Open CAPAs page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.clickFacetPicker();

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.removeRowAttributes();

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.removeColumnAttributes();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Status.checkGraphs();

    //Click Owner
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.open();

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.refresh();

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.filter();

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of CAPAs - Product > User Data Binder > Linked Content", () => {
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

    //Open CAPAs page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.open();

    //Open CAPAs page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkRelatedObjects();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of CAPAs - Product > Product Specific Binder > Smart Content", () => {
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

    //Open CAPAs page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.open();

    //Open CAPAs page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.clickFacetPicker();

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.removeRowAttributes();

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.removeColumnAttributes();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Status.checkGraphs();

    //Click Owner
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.open();

    //Owner Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.refresh();

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.filter();

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.Owner.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of CAPAs - Product > Product Specific Binder > Linked Content", () => {
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

    //Open CAPAs page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.open();

    //Open CAPAs page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.checkRelatedObjects();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.CAPAs.cometCAPAs.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });
});
