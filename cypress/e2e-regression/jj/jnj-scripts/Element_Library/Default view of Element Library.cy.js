import { GQTest } from "../../jnj-pages/GQTest.js";

describe("Default view of Element Library", () => {
  const GQ = new GQTest();

  it("Default view of Element Library - Admin Data Binder", () => {
    // Login
    GQ.Login();

    //Open Element Library Landing Page
    GQ.ElementLibrary.open();

    //Open Data Management
    GQ.ElementLibrary.DataManagement.open();

    //Open Admin Data Binder
    GQ.ElementLibrary.DataManagement.AdminDataBinder.open();

    //Toggle Filter
    GQ.ElementLibrary.DataManagement.AdminDataBinder.toggleFilter();

    //Filter Admin Data Binder for Testing
    GQ.ElementLibrary.DataManagement.AdminDataBinder.filterRowByText(
      "Test New Admin Data Binder",
    );

    //Select Admin Data Binder for Testing
    GQ.ElementLibrary.DataManagement.AdminDataBinder.selectAdminDataBinder();

    //Select Data Types Dropdown
    GQ.ElementLibrary.DataManagement.AdminDataBinder.selectDataTypesDropdown();

    //Clear All Options in Dropdown
    GQ.ElementLibrary.DataManagement.AdminDataBinder.selectClearAll();

    //Save
    GQ.ElementLibrary.DataManagement.AdminDataBinder.clickSave();

    //Select Data Types Dropdown
    GQ.ElementLibrary.DataManagement.AdminDataBinder.selectDataTypesDropdown();

    //Select Document
    GQ.ElementLibrary.DataManagement.AdminDataBinder.selectDocuments();

    //Select Regulatory Affairs
    GQ.ElementLibrary.DataManagement.AdminDataBinder.selectRegulatoryAffairs();

    //Select Post Market
    GQ.ElementLibrary.DataManagement.AdminDataBinder.selectPostMarket();

    //Select Quality Management
    GQ.ElementLibrary.DataManagement.AdminDataBinder.selectQualityManagement();

    //Select Laboratory Information
    GQ.ElementLibrary.DataManagement.AdminDataBinder.selectLaboratoryInformation();

    //Select Manufacturing
    GQ.ElementLibrary.DataManagement.AdminDataBinder.selectManufacturing();

    //Select Risk
    GQ.ElementLibrary.DataManagement.AdminDataBinder.selectRisk();

    //Save
    GQ.ElementLibrary.DataManagement.AdminDataBinder.clickSave();

    //Open Smart Content
    GQ.ElementLibrary.DataManagement.AdminDataBinder.openSmartContent();

    //Open Documents
    GQ.ElementLibrary.DataManagement.AdminDataBinder.openDocuments();

    //Open Regulatory Affairs
    GQ.ElementLibrary.DataManagement.AdminDataBinder.openRegulatoryAffairs();

    //Check Sub nouns
    GQ.ElementLibrary.DataManagement.AdminDataBinder.checksubnouns(
      "regulatoryAffairs",
    );

    //Open Post Martket
    GQ.ElementLibrary.DataManagement.AdminDataBinder.openPostMarket();

    //Check Sub nouns
    GQ.ElementLibrary.DataManagement.AdminDataBinder.checksubnouns(
      "postMarket",
    );

    //Open Quality Management
    GQ.ElementLibrary.DataManagement.AdminDataBinder.openQualityManagement();

    //Check Sub nouns
    GQ.ElementLibrary.DataManagement.AdminDataBinder.checksubnouns(
      "qualityManagement",
    );

    //Open Laboratory Information
    GQ.ElementLibrary.DataManagement.AdminDataBinder.openLaboratoryInformation();

    //Check Sub Nouns
    GQ.ElementLibrary.DataManagement.AdminDataBinder.checksubnouns(
      "laboratoryInformation",
    );

    // Open Manufacturing
    GQ.ElementLibrary.DataManagement.AdminDataBinder.openManufacturing();

    //Check Sub nouns
    GQ.ElementLibrary.DataManagement.AdminDataBinder.checksubnouns(
      "manufacturing",
    );

    //Open Risk Documents
    GQ.ElementLibrary.DataManagement.AdminDataBinder.openRiskDocuments();

    //Logout
    GQ.Logout();
  });

  it("Default view of Element Library - User Data Binder", () => {
    // Login
    GQ.Login();

    //Open Element Library Landing Page
    GQ.ElementLibrary.open();

    //Open Data Management
    GQ.ElementLibrary.DataManagement.open();

    //Open User Data Binder
    GQ.ElementLibrary.DataManagement.UserDataBinder.open();

    //Toggle Filter
    GQ.ElementLibrary.DataManagement.UserDataBinder.toggleFilter();

    //Filter User Data Binder for Testing
    GQ.ElementLibrary.DataManagement.UserDataBinder.filterRowByText(
      "Test New User Data Binder",
    );

    //Select User Data Binder for Testing
    GQ.ElementLibrary.DataManagement.UserDataBinder.selectUserDataBinder();

    //Select Data Types Dropdown
    GQ.ElementLibrary.DataManagement.UserDataBinder.selectDataTypesDropdown();

    //Clear All Options in Dropdown
    GQ.ElementLibrary.DataManagement.UserDataBinder.selectClearAll();

    //Save
    GQ.ElementLibrary.DataManagement.UserDataBinder.clickSave();

    //Select Data Types Dropdown
    GQ.ElementLibrary.DataManagement.UserDataBinder.selectDataTypesDropdown();

    //Select Document
    GQ.ElementLibrary.DataManagement.UserDataBinder.selectDocuments();

    //Select Regulatory Affairs
    GQ.ElementLibrary.DataManagement.UserDataBinder.selectRegulatoryAffairs();

    //Select Post Market
    GQ.ElementLibrary.DataManagement.UserDataBinder.selectPostMarket();

    //Select Quality Management
    GQ.ElementLibrary.DataManagement.UserDataBinder.selectQualityManagement();

    //Select Laboratory Information
    GQ.ElementLibrary.DataManagement.UserDataBinder.selectLaboratoryInformation();

    //Select Manufacturing
    GQ.ElementLibrary.DataManagement.UserDataBinder.selectManufacturing();

    //Select Risk
    GQ.ElementLibrary.DataManagement.UserDataBinder.selectRisk();

    //Save
    GQ.ElementLibrary.DataManagement.UserDataBinder.clickSave();

    //Open Smart Content
    GQ.ElementLibrary.DataManagement.UserDataBinder.openSmartContent();

    //Open Documents
    GQ.ElementLibrary.DataManagement.UserDataBinder.openDocuments();

    //Open Regulatory Affairs
    GQ.ElementLibrary.DataManagement.UserDataBinder.openRegulatoryAffairs();

    //Check Sub nouns
    GQ.ElementLibrary.DataManagement.UserDataBinder.checksubnouns(
      "regulatoryAffairs",
    );

    //Open Post Martket
    GQ.ElementLibrary.DataManagement.UserDataBinder.openPostMarket();

    //Check Sub nouns
    GQ.ElementLibrary.DataManagement.UserDataBinder.checksubnouns("postMarket");

    //Open Quality Management
    GQ.ElementLibrary.DataManagement.UserDataBinder.openQualityManagement();

    //Check Sub nouns
    GQ.ElementLibrary.DataManagement.UserDataBinder.checksubnouns(
      "qualityManagement",
    );

    //Open Laboratory Information
    GQ.ElementLibrary.DataManagement.UserDataBinder.openLaboratoryInformation();

    //Check Sub Nouns
    GQ.ElementLibrary.DataManagement.UserDataBinder.checksubnouns(
      "laboratoryInformation",
    );

    // Open Manufacturing
    GQ.ElementLibrary.DataManagement.UserDataBinder.openManufacturing();

    //Check Sub nouns
    GQ.ElementLibrary.DataManagement.UserDataBinder.checksubnouns(
      "manufacturing",
    );

    //Open Risk Documents
    GQ.ElementLibrary.DataManagement.UserDataBinder.openRiskDocuments();

    //Logout
    GQ.Logout();
  });
});
