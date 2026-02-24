import { GQTest } from "../../../../jnj-pages/GQTest.js";

describe("Default view of Supplemental Investigations", () => {
  const GQ = new GQTest();

  it("Default view of Supplemental Investigations - Planet", () => {
    // Login
    GQ.Login();

    //Open Quality Management Planet
    GQ.Planets.openPlanet("Quality Management");

    //Open Nonconformances page
    GQ.Planets.QualityManagement.Nonconformances.open();

    //Open SupplementalInvestigations page
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.open();

    //Refresh
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.refresh();

    //check Header Icons
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.checkHeaderIcons();

    // Verify All Filter
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.verifyDefaultFilter();

    // Verify Related to Me Filter
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.VerifyFilterRelatedToMe();

    //Verify Related to Me and Open
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.VerifyFilterRelatedToMeAndOpen();

    //select All Filter
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.selectAllFilter();

    //click Chart Icon
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.clickChartIcon();

    //Click Analytics
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.open();

    //analytics Refresh
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.clickFacetPicker();

    //remove Row Attributes
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.removeRowAttributes();

    //remove Column Attributes
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.removeColumnAttributes();

    //add Row Attributes
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.checkFilterFunctionality();

    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.refresh();

    //Click Status
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Status.open();

    //Status Refresh
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Status.refresh();

    //check Graphs
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Status.checkGraphs();

    //Click Assignee
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.open();

    //Assignee Refresh
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.refresh();

    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.filter();

    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.clickChartIcon();

    //Check Column availability
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.openARecord();

    //Click Details Tab
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.openDetails();

    //check Forms and Fields
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.checkRelatedObjects();

    //minimize the record
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.minimizeARecord();

    //Right Click the record
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.rightClickARecord();

    //Add Bookmark
    GQ.Planets.QualityManagement.Nonconformances.SupplementalInvestigations.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Supplemental Investigations - Product > Content", () => {
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

    //Open SupplementalInvestigations page
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.clickFacetPicker();

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.removeRowAttributes();

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.removeColumnAttributes();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Status.checkGraphs();

    //Click Assignee
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.open();

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.refresh();

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.filter();

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.SupplementalInvestigations.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Supplemental Investigations - Product > Admin Data Binder > Smart Content", () => {
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

    //Open SupplementalInvestigations page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.clickFacetPicker();

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.removeRowAttributes();

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.removeColumnAttributes();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Status.checkGraphs();

    //Click Assignee
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.open();

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.refresh();

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.filter();

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Supplemental Investigations - Product > Admin Data Binder > Linked Content", () => {
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

    //Open SupplementalInvestigations page
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkRelatedObjects();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Supplemental Investigations - Product > User Data Binder > Smart Content", () => {
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

    //Open SupplementalInvestigations page
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.clickFacetPicker();

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.removeRowAttributes();

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.removeColumnAttributes();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Status.checkGraphs();

    //Click Assignee
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.open();

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.refresh();

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.filter();

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Supplemental Investigations - Product > User Data Binder > Linked Content", () => {
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

    //Open SupplementalInvestigations page
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkRelatedObjects();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Supplemental Investigations - Product > Product Specific Binder > Smart Content", () => {
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

    //Open SupplementalInvestigations page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.closeSidePane();

    //Open All
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.clickAll();

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkHeaderIcons();

    //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.clickChartIcon();

    //Click Analytics
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.open();

    //analytics Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.refresh();

    //click FacetPicker
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.clickFacetPicker();

    //remove Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.removeRowAttributes();

    //remove Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.removeColumnAttributes();

    //add Row Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.addRowAttributes();

    //add Column Attributes
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.addColumnAttributes();

    //click filter
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.clickFilter();

    //Validate Filter Functionality
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.checkFilterFunctionality();

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Analytics.refresh();

    //Click Status
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Status.open();

    //Status Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Status.refresh();

    //check Graphs
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Status.checkGraphs();

    //Click Assignee
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.open();

    //Assignee Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.refresh();

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.filter();

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.checkFilterFunctionality();

    // //click Chart Icon
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.Assignee.clickChartIcon();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkRelatedObjects();

    //minimize the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.minimizeARecord();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.SupplementalInvestigations.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });

  it("Default view of Supplemental Investigations - Product > Product Specific Binder > Linked Content", () => {
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

    //Open SupplementalInvestigations page
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.open();

    //Close Side Pane
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.closeSidePane();

    //Link a Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.linkAContent();

    //Refresh
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.refresh();

    // check Header Icons
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkColumns();

    //open a Record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.openARecord();

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkFormsandFieldsAvailablity();

    //Open related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.openRelatedObjects();

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.checkRelatedObjects();

    //Maximize Selector
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.maximizeSelector();

    //Right Click the record
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.rightClickARecord();

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.QualityManagement.Nonconformances.SupplementalInvestigations.addBookmark();

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality();
    //Logout
    GQ.Logout();
  });
});
