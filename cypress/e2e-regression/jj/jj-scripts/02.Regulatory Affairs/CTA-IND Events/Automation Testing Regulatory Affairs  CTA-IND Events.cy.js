import { GQTest } from '../../../jj-pages/GQTest'

describe('02. Regulatory Affairs', () => {
  Cypress.config('defaultCommandTimeout', 180000);

  it('Regulatory Affairs CTA-IND Events: Validate Columns and Right-Click Menu', () => {
    const GQ = new GQTest();

    // Login
    GQ.login();

    // Open Regulatory Affairs
    GQ.Planets.RegulatoryAffairs.openLandingPage();

    // RIMDocs Records - Parent Tab Name
    GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.openLandingPage();

    GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.refresh();

    let expectedColumnsQXF = [
      'Event ID',
      'Product Family Name',
      'Therapeutic Area',
      'Event Name',
      'Event Country',
      'Event Closed As',
      'Event Closed',
      'Application Code',
      'Application Name',
      'Protocol Number',
      'Application Status',
      'Procedure Type'
    ];

    cy.getColumnsAndTypes(
      GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.getColumnID()
    ).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.forEach((obj) => {
        availableCols.push(obj.textContent);
      });
      cy.log(availableCols);
      for (let i = 0; i < expectedColumnsQXF.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXF[i]);
      }
      GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.fieldpicker();
      GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.details();
      GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.readDetails()

      GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTA_INDEvents.openRecordByIndex(1);

    });

    // Logout after test completes
    GQ.logout();
  });

  it('Product Planet: Navigate to APALUTAMIDE Regulatory Records', () => {
    const GQ = new GQTest();

    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.Product.openLandingPage();

    // Product Families must be visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');

    // Products must be visible
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');

    // Large Molecules must be visible
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');

    // Small Molecules must be visible
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    // Open specific Product Family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

    // Open Regulatory Records for APALUTAMIDE
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage();

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.CTA_INDEvents.openLandingPage()


    let RegulatoryAffairs = [
      'Event ID',
      'Product Family Name',
      'Therapeutic Area',
      'Event Name',
      'Event Country',
      'Event Closed As',
      'Event Closed',
      'Application Code',
      'Application Name',
      'Protocol Number',
      'Application Status',
      'Procedure Type'
    ];

    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.CTA_INDEvents.getColumnID()
    ).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.forEach((obj) => {
        availableCols.push(obj.textContent);
      });
      cy.log(availableCols);
      for (let i = 0; i < RegulatoryAffairs.length; i++) {
        expect(availableCols).to.include(RegulatoryAffairs[i]);
      }
    })
    //   cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs||scClass=VLayout||index=1||length=7||classIndex=0||classLength=1||scClassIndex=1||scClassLength=7]/body/layoutBody/member[Class=QScreen_CTAIND_Events||scClass=VLayout||index=5||length=7||classIndex=0||classLength=1||scClassIndex=5||scClassLength=7]/body/layoutBody/member[Class=QScreen_Filtered_5||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_Selector_GR||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=product_family_name]/').rightclick()
    // cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs||scClass=VLayout||index=1||length=7||classIndex=0||classLength=1||scClassIndex=1||scClassLength=7]/body/layoutBody/member[Class=QScreen_CTAIND_Events||scClass=VLayout||index=5||length=7||classIndex=0||classLength=1||scClassIndex=5||scClassLength=7]/body/layoutBody/member[Class=QScreen_Filtered_5||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_Selector_GR||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/headerContextMenu[Class=Menu||index=0||length=1||classIndex=0||classLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[title=Columns...||7]/col[fieldName=title||1]').click()
    // cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs||scClass=VLayout||index=1||length=7||classIndex=0||classLength=1||scClassIndex=1||scClassLength=7]/body/layoutBody/member[Class=QScreen_CTAIND_Events||scClass=VLayout||index=5||length=7||classIndex=0||classLength=1||scClassIndex=5||scClassLength=7]/body/layoutBody/member[Class=QScreen_Filtered_5||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_Selector_GR||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/fieldPickerWindow/fieldPicker/availableFieldsGrid/body/row[name=application_id||$9g=Application%20ID%20||1]/col[fieldName=%249g||0]').should('be.visible')

    //   GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.CTA_INDEvents.openRecordByIndex(1)

    GQ.logout()
  });
  it('Admin binder Regulatory Records', () => {
    const GQ = new GQTest();

    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.Product.openLandingPage();

    // Product Families must be visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');

    // Products must be visible
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');

    // Large Molecules must be visible
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');

    // Small Molecules must be visible
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    // Open specific Product Family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.CTA_INDEvents.openLandingPage()
    let RegulatoryAffair = [
      'Event ID',
      'Product Family Name',
      'Therapeutic Area',
      'Event Name',
      'Event Country',
      'Event Closed As',
      'Event Closed',
      'Application Code',
      'Application Name',
      'Protocol Number',
      'Application Status',
      'Procedure Type'
    ];

    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.CTA_INDEvents.getColumnID()
    ).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.forEach((obj) => {
        availableCols.push(obj.textContent);
      });
      cy.log(availableCols);
      for (let i = 0; i < RegulatoryAffair.length; i++) {
        expect(availableCols).to.include(RegulatoryAffair[i]);
      }
    })
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.CTA_INDEvents.fieldpicker()
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.CTA_INDEvents.details()
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.CTA_INDEvents.readDetails()

    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.CTA_INDEvents.openRecordByIndex(1)

    GQ.logout()
  })

  it('User data binder', () => {
    const GQ = new GQTest();

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
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('ANTI-TAU');

    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('TEST');
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.openLandingPage()
    let RegulatoryAffairss = [
      'Event ID',
      'Product Family Name',
      'Therapeutic Area',
      'Event Name',
      'Event Country',
      'Event Closed As',
      'Event Closed',
      'Application Code',
      'Application Name',
      'Protocol Number',
      'Application Status',
      'Procedure Type'
    ];

    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.getColumnID()
    ).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.forEach((obj) => {
        availableCols.push(obj.textContent);
      });
      cy.log(availableCols);
      for (let i = 0; i < RegulatoryAffairss.length; i++) {
        expect(availableCols).to.include(RegulatoryAffairss[i]);
      }
    })
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.fieldpicker();
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.details();
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.readetails();
    
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.openRecordByIndex(1)

    GQ.logout()
  })

  it('Product specific binder', () => {
    const GQ = new GQTest();
    // Login 
    GQ.login()

    // Open Product Planet
    GQ.Planets.Product.openLandingPage()

    // Product Families must be visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

    // Products must be visible
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

    // Large Molecules must be visible
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

    // Small Molecules must be visible
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Open APALUTAMIDE
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

    // Refresh
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

    // Select the linked binder
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

    // Check if the 'Create Product Specific Folder' Button exists
    cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.SelectorGridBarButtons.CreateProductSpecificFolder).should('be.visible')

    // Create Product Specific Folder
    GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.createProductSpecificFolder('Test123', ['Regulatory Affairs'])

    // Click Plus
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

    // Click Child
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.open()

    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.openLandingPage()

    let RegulatoryAffai = [
      'Event ID',
      'Product Family Name',
      'Therapeutic Area',
      'Event Name',
      'Event Country',
      'Event Closed As',
      'Event Closed',
      'Application Code',
      'Application Name',
      'Protocol Number',
      'Application Status',
      'Procedure Type'
    ];

    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.getColumnID()
    ).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.forEach((obj) => {
        availableCols.push(obj.textContent);
      });
      cy.log(availableCols);
      for (let i = 0; i < RegulatoryAffai.length; i++) {
        expect(availableCols).to.include(RegulatoryAffai[i]);
      }
    })
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.fieldpicker();
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.details();
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.readDetails();
    GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.CTA_INDEvents.openRecordByIndex(1)

    GQ.logout()
  })
})