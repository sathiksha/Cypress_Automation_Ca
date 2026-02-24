import { GQTest } from "../../../jj-pages/GQTest";
// Sprint 15
require('cypress-xpath')
describe('Sprint 15', () => {
  const GQ = new GQTest();
  it('Regulatory Applications from Planet', () => {
    // Login
    GQ.login();
    // Open Regulatory Affairs
    GQ.Planets.RegulatoryAffairs.openLandingPage();
    GQ.Planets.RegulatoryAffairs.Applications.open();

    let expectedColumnsQXD = [
      'Application ID',
      '👁',
      'Product Family Code',
      'Product Family Name',
      'Application Code',
      'Application Name',
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Application Status Date',
      'Procedure Identifier',
      'Procedure Type',
      'Application Description',
      'Application Comments'];

    // Read column
    cy.getColumnsAndTypes(GQ.Planets.RegulatoryAffairs.Applications.getColumnID()).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.map(obj => {
        availableCols.push(obj.textContent);
      });
      cy.log(JSON.stringify(availableCols));
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i]);
      }
    });
    //Verify Multichoice picker
    const namesList = [
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Procedure Type'
    ];

    GQ.Planets.RegulatoryAffairs.Applications.checkMultiChoicePickerColumns(namesList);
    GQ.Planets.RegulatoryAffairs.Applications.toggleFilterIcon();
    // Active
    GQ.Planets.RegulatoryAffairs.Applications.active();
    // All
    GQ.Planets.RegulatoryAffairs.Applications.all();
    // Bookmark Option
    GQ.Planets.RegulatoryAffairs.Applications.rightClickBookmark(0);
    GQ.Planets.RegulatoryAffairs.Applications.checkBookmarkFunationality();
    GQ.Planets.RegulatoryAffairs.Applications.openARecord(0);
    // Form FIelds
    const form = [
      'Application ID:',
      'Application Code:',
      'Application Name:',
      'Application Type:',
      'Application Reviewing Country:',
      'Application Countries:',
      'Procedure Identifier:',
      'Procedure Type:',
      'Application Description:',
      'Application Comments:',
      'Application Status:',
      'Application Status Date:'];

    GQ.Planets.RegulatoryAffairs.Applications.checkformsfields(form);
    GQ.logout();

  })
  it('Regulatory Applications from Product Family', () => {
    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.Product.openLandingPage();

    // Ensure that Product Families are visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    // Open APALUTAMIDE product family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

    // Open product landing page and expand the record

    //GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();

    // Open Regulatory Affairs
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.AdminRegulatoryRecordOpen();
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.open();

    let expectedColumnsQXD = [
      'Application ID',
      '👁',
      'Product Family Code',
      'Product Family Name',
      'Application Code',
      'Application Name',
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Application Status Date',
      'Procedure Identifier',
      'Procedure Type',
      'Application Description',
      'Application Comments'];

    // Read column
    cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.getColumnID()).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.map(obj => {
        availableCols.push(obj.textContent);
      });
      cy.log(JSON.stringify(availableCols));
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i]);
      }
    });
    //Verify Multichoice picker
    const namesList = [
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Procedure Type'
    ];

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.checkMultiChoicePickerColumns(namesList);
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.toggleFilterIcon();
    // Active
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.active();
    // All
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.all();
    // Bookmark Option
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.rightClickBookmark(0);
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.checkBookmarkFunationality();
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.openARecord(0);
    // Form FIelds
    const form = [
      'Application ID:',
      'Application Code:',
      'Application Name:',
      'Application Type:',
      'Application Reviewing Country:',
      'Application Countries:',
      'Procedure Identifier:',
      'Procedure Type:',
      'Application Description:',
      'Application Comments:',
      'Application Status:',
      'Application Status Date:'];

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.checkformsfields(form);
    GQ.logout();

  })
  it('Regulatory Applications from Admin Data Binder -> Smart Content', () => {
    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.Product.openLandingPage();

    // Ensure that Product Families are visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    // Open APALUTAMIDE product family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
    cy.wait(3000)
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderRegulatoryOpen();
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderApplicationOpen();

    let expectedColumnsQXD = [
      'Application ID',
      '👁',
      'Product Family Code',
      'Product Family Name',
      'Application Code',
      'Application Name',
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Application Status Date',
      'Procedure Identifier',
      'Procedure Type',
      'Application Description',
      'Application Comments'];

    // Read column
    cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.SmartContentApplicationHeaderID()).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.map(obj => {
        availableCols.push(obj.textContent);
      });
      cy.log(JSON.stringify(availableCols));
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i]);
      }
    });
    //Verify Multichoice picker
    const namesList = [
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Procedure Type'
    ];

    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.ApplicationcheckMultiChoicePickerColumns(namesList);
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderRefresh()
    cy.wait(2000)
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderToggleFilter();
    // Active
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderActive();

    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderToggleFilter();
    // All
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderAll();

    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderOpenRecord();

    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderApplicationDetailsSectionValidation();

    // Bookmark Option
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderDetailsSectionClose()

    // GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.BookmarkValidation()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.rightClickBookmarkAdminBinder();
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.checkBookmarkFunationality();
    GQ.logout();

  })
  it('Regulatory Applications from Admin Data Binder -> Linked Content', () => {
    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.Product.openLandingPage();

    // Ensure that Product Families are visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    // Open APALUTAMIDE product family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
    // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.AdminProductOpen()

    //  Linked Content

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LinkedOpen()

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.RegulatoryOpen()

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.ApplicationsOpen()

    let expectedColumnsQXD = [
      'Application ID',
      '👁',
      'Product Family Code',
      'Product Family Name',
      'Application Code',
      'Application Name',
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Application Status Date',
      'Procedure Identifier',
      'Procedure Type',
      'Application Description',
      'Application Comments'];

    // Read column
    cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderHeaderId()).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.map(obj => {
        availableCols.push(obj.textContent);
      });
      cy.log(JSON.stringify(availableCols));
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i]);
      }
    });


    //Verify Multichoice picker
    const namesList = [
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Procedure Type'];

    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.AdminBinderLinkedMutliColumnChecker(namesList);

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.AdminBinderLinkedRefresh()


    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.AdminBinderLinkedRecordOpen();

    cy.wait(3000)
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.LinkedApplicationFormValidation();

    GQ.logout();

  })
  it('Regulatory Applications from User Data Binder-> Smart Content', () => {
    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.Product.openLandingPage();

    // Ensure that Product Families are visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    // Open APALUTAMIDE product family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder');
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.UserSpecificOpen()
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.SmartContentRegulatoryTabOpen();
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.SmartContentApplicationOpen();

    let expectedColumnsQXD = [
      'Application ID',
      '👁',
      'Product Family Code',
      'Product Family Name',
      'Application Code',
      'Application Name',
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Application Status Date',
      'Procedure Identifier',
      'Procedure Type',
      'Application Description',
      'Application Comments'];

    // Read column
    cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.SmartContentApplicationHeaderID()).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.map(obj => {
        availableCols.push(obj.textContent);
      });
      cy.log(JSON.stringify(availableCols));
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i]);
      }
    });
    //Verify Multichoice picker
    const namesList = [
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Procedure Type'
    ];

    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.SmartContentApplcationcheckMultiChoicePickerColumns(namesList);

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.SmartContentToggleFilter();
    // Active
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.SmartContentActive();
    // All

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.SmartContentToggleFilter();
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.SmartContentAll();
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.SmartContentOpenRecord();

    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.SmartContentApplicationDetailsSectionValidation();
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.smartContentDetailsSecionClose()

    // GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.BookmarkValidation()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.rightClickBookmarkforSmartContent();
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.checkBookmarkFunationality();
    GQ.logout();

  })
  it('Regulatory Applications from User Data Binder -> Linked Content', () => {
    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.Product.openLandingPage();

    // Ensure that Product Families are visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    // Open APALUTAMIDE product family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder');
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.UserSpecificOpen()
    //Linked Content
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LinkedOpen()

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.RegulatoryOpen()

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.ApplicationsOpen()

    let expectedColumnsQXD = [
      'Application ID',
      '👁',
      'Product Family Code',
      'Product Family Name',
      'Application Code',
      'Application Name',
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Application Status Date',
      'Procedure Identifier',
      'Procedure Type',
      'Application Description',
      'Application Comments'];

    // Read column
    cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.LinkedApplicationHeaderID()
    ).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.map(obj => {
        availableCols.push(obj.textContent);
      });
      cy.log(JSON.stringify(availableCols));
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i]);
      }
    });


    //Verify Multichoice picker
    const namesList = [
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Procedure Type'];

    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.LinkedApplcationcheckMultiChoicePickerColumns(namesList);


    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.UserBinderOpenRecord();
    cy.wait(3000)

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.UserBinderOpenRecord();
    cy.wait(3000)

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.UserBinderFormValidation();

    GQ.logout();

  })
  it('Regulatory Applications from Product Specific Binder -> Smart Content', () => {
    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.Product.openLandingPage();

    // Ensure that Product Families are visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    // Open APALUTAMIDE product family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.UserSpecificOpen()
    // Open Product Specific Binder
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
    // Click Plus
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

    // Click Child
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.applications.openLandingPage()


    let expectedColumnsQXD = [
      'Application ID',
      '👁',
      'Product Family Code',
      'Product Family Name',
      'Application Code',
      'Application Name',
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Application Status Date',
      'Procedure Identifier',
      'Procedure Type',
      'Application Description',
      'Application Comments'];

    // Read column
    cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.ProductSpecificTableHeaderID()).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.map(obj => {
        availableCols.push(obj.textContent);
      });
      cy.log(JSON.stringify(availableCols));
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i]);
      }
    });
    //Verify Multichoice picker
    const namesList = [
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Procedure Type'
    ];

    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.SmartContentApplcationcheckMultiChoicePickerColumns(namesList);
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.SmartContentToggleFilter();
    // Active
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.SmartContentActive();
    // All

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.SmartContentToggleFilter();
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.SmartContentAll();
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.SmartContentOpenRecord();

    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.SmartContentApplicationDetailsSectionValidation();
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.smartContentDetailsSecionClose()

    // GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.BookmarkValidation()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.rightClickBookmarkforSmartContent();
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Applications.checkBookmarkFunationality();
    GQ.logout();

  })
  it('Regulatory Applications from Product Specific Binder -> Linked Content', () => {
    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.Product.openLandingPage();

    // Ensure that Product Families are visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    // Open APALUTAMIDE product family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.UserSpecificOpen()
    // Open Product Specific Binder
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
    // Click Plus
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

    // Click Child
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LinkedOpen()

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.RegulatoryOpen()

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.ApplicationsOpen()

    let expectedColumnsQXD = [
      'Application ID',
      '👁',
      'Product Family Code',
      'Product Family Name',
      'Application Code',
      'Application Name',
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Application Status Date',
      'Procedure Identifier',
      'Procedure Type',
      'Application Description',
      'Application Comments'];

    // Read column
    cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.LinkedApplicationHeaderID()).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.map(obj => {
        availableCols.push(obj.textContent);
      });
      cy.log(JSON.stringify(availableCols));
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i]);
      }
    });


    //Verify Multichoice picker
    const namesList = [
      'Application Type',
      'Application Reviewing Country',
      'Application Countries',
      'Application Status',
      'Procedure Type'];


    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.ProductBinderLinkSibling()
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.LinkedApplcationcheckMultiChoicePickerColumns(namesList);
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.productBinderOpenRecord();
    cy.wait(3000)
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.productBinderOpenRecord();
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.UserBinderFormValidation();

    GQ.logout();

  })
})
