import { GQTest } from '../../../jj-pages/GQTest';
require('cypress-xpath');

describe('Sprint 6', () => {
  const GQ = new GQTest();


  it('Regulatory Affairs planet > Package Sets', () => {
    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.RegulatoryAffairs.openLandingPage()
    GQ.Planets.RegulatoryAffairs.Packageset.openLandingPage()

    let expectedColumnsQXD = [
      'Product Detail Set ID',
      '👁',
      'Product Detail Set Code',
      'Product Family Code',
      'Application Code',
      'Product Detail Set Name',
      'Product Detail Set Status',
      'Package Set Name',
      'Package Set Status',
      'Package Set Status Date',
      'Package Set QC Status',
      'Package Set QC Date',
      'Package Set Last Updated',
      'Function',
      'Manufacturer/Site',
      'API Shelf Life',
      'API Storage Condition',
      'API Shelf Life Unit',
      'API Storage Container',
      'Shelf Life',
      'Shelf Life Category',
      'Shelf Life Type',
      'Shelf Life Unit',
      'Storage Conditions',
      'Tab Name'
    ]
    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.RegulatoryAffairs.Packageset.columnHeaderID()
    ).then(tableInfo => {
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i])
      }
    })

    // Verify Multichoice picker
    const namesList = ['Product Detail Set Status', 'Package Set Status', 'Package Set QC Status', 'Function', 'Shelf Life Category', 'Shelf Life Type', 'Shelf Life Unit', 'Tab Name'];
    GQ.Planets.RegulatoryAffairs.Packageset.checkMultiChoicePickerColumns(namesList)

    GQ.Planets.RegulatoryAffairs.Packageset.rightclickoncolumn()
    GQ.Planets.RegulatoryAffairs.Packageset.clickoncolumn()
    const scrollThumbSelector = 'div.vScrollThumb[eventproxy*="fieldPicker_availableFieldsGrid_body_vscroll_thumb"]';

    // Columns that appear when scrolled down
    const scrollColumns = [
      'Application ID',
      'Component Form',
      'Package Item Material',
      //'Date QC'd',
      'Excipient Name',
      'Excipient Role',
      'Excipient Status',
      'In Process Controls',
      'Manufacturer Country',
      'Manufacturer QC Status',
      'Manufacturer Status',
      'Manufacturing Process Name',
      'Packaging Category',
      'Packaging Item Type',
      'Pack Set ID',
      'Product Family ID',
      'Product ID',
      'Registration ID',
      'Reviewing Country'
    ];

    const totalSteps = 1;       // Number of scroll moves
    const stepDistance = 25;    // How many pixels to move mouse per step
    const stepDelay = 800;      // Delay between scroll steps (ms)

    // Run scroll steps sequentially with increasing delay, no recursion
    Cypress._.times(totalSteps, step => {
      cy.wait(step * stepDelay).then(() => {
        cy.get(scrollThumbSelector)
          .trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientY: 50 + step * stepDistance })
          .trigger('mouseup', { force: true });

        // Verify visible columns after each scroll step
        scrollColumns.forEach(label => {
          cy.contains(label, { timeout: 0 }).then($el => {
            if ($el.length && $el.is(':visible')) {
              cy.wrap($el).should('be.visible');
            }
          });
        });
      });
    });

    GQ.Planets.RegulatoryAffairs.Packageset.QCStatuscolumn()
    GQ.Planets.RegulatoryAffairs.Packageset.clickonapply()

    const namesList1 = ['Product Detail Set Status', 'Package Set Status', 'Package Set QC Status', 'Shelf Life Category', 'Shelf Life Type', 'Shelf Life Unit', 'Tab Name', 'QC Status'];
    GQ.Planets.RegulatoryAffairs.Packageset.checkMultiChoicePickerColumns(namesList1)

    GQ.Planets.RegulatoryAffairs.Packageset.QCPASSED()

    GQ.Planets.RegulatoryAffairs.Packageset.clickonALL()

    const namesList2 = ['Product Detail Set Status', 'Package Set Status', 'Package Set QC Status', 'Shelf Life Category', 'Shelf Life Type', 'Shelf Life Unit', 'Tab Name', 'QC Status'];
    GQ.Planets.RegulatoryAffairs.Packageset.checkMultiChoicePickerColumns(namesList2)

    GQ.Planets.RegulatoryAffairs.Packageset.expandrow(2);


    // Click the matching row if needed
    cy.get('div[unselectable="on"][style*="margin-left:-22px"]')
      .should('have.length.greaterThan', 2)
      .eq(2)
      .should('be.visible')
      .click();



    // Details
    cy.contains('Details').should('exist');
    cy.contains('Family Name').should('exist');
    cy.contains('Application Code').should('exist');

    cy.contains('Shelf Life Type').should('exist');
    cy.contains('Shelf Life').should('exist');
    cy.contains('Shelf Life Unit').should('exist');
    cy.contains('Shelf Life Category').should('exist');
    cy.contains('Storage Conditions').should('exist');

    cy.contains('Active Ingredient Name').should('exist');
    cy.contains('API Storage Container').should('exist');
    cy.contains('API Storage Condition').should('exist');
    cy.contains('API Shelf Life').should('exist');
    cy.contains('API Shelf Life Unit').should('exist');
    cy.contains('API Status').should('exist');
    cy.contains('API Status Date').should('exist');
    cy.contains('Active Ingredients QC Status').should('exist');
    cy.contains('Active Ingredients QC Date').should('exist');
    cy.contains('API Retest').should('exist');
    cy.contains('API Retest Unit').should('exist');



    GQ.logout()
  })

  it(' Product planet > Product Family/Product selection > Regulatory Affairs > Package Sets', () => {
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
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage();
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.familyPackageset.openLandingPage()
    let expectedColumnsQXD = [
      'Product Detail Set ID',
      '👁',
      'Product Detail Set Code',
      'Product Family Code',
      'Application Code',
      'Product Detail Set Name',
      'Product Detail Set Status',
      'Package Set Name',
      'Package Set Status',
      'Package Set Status Date',
      'Package Set QC Status',
      'Package Set QC Date',
      'Package Set Last Updated',
      'Function',
      'Manufacturer/Site',
      'API Shelf Life',
      'API Storage Condition',
      'API Shelf Life Unit',
      'API Storage Container',
      'Shelf Life',
      'Shelf Life Category',
      'Shelf Life Type',
      'Shelf Life Unit',
      'Storage Conditions',
      'Tab Name'
    ]
    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.familyPackageset.columnHeaderID()
    ).then(tableInfo => {
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i])
      }
    })

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.familyPackageset.rightclickoncolumn()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.familyPackageset.clickoncolumn()
    const scrollThumbSelector = 'div.vScrollThumb[eventproxy*="fieldPicker_availableFieldsGrid_body_vscroll_thumb"]';

    // Columns that appear when scrolled down
    const scrollColumns = [
      'Application ID',
      'Component Form',
      'Package Item Material',
      //'Date QC'd',
      'Excipient Name',
      'Excipient Role',
      'Excipient Status',
      'In Process Controls',
      'Manufacturer Country',
      'Manufacturer QC Status',
      'Manufacturer Status',
      'Manufacturing Process Name',
      'Packaging Category',
      'Packaging Item Type',
      'Pack Set ID',
      'Product Family ID',
      'Product ID',
      'Registration ID',
      'Reviewing Country'
    ];

    const totalSteps = 1;       // Number of scroll moves
    const stepDistance = 25;    // How many pixels to move mouse per step
    const stepDelay = 800;      // Delay between scroll steps (ms)

    // Run scroll steps sequentially with increasing delay, no recursion
    Cypress._.times(totalSteps, step => {
      cy.wait(step * stepDelay).then(() => {
        cy.get(scrollThumbSelector)
          .trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientY: 50 + step * stepDistance })
          .trigger('mouseup', { force: true });

        // Verify visible columns after each scroll step
        scrollColumns.forEach(label => {
          cy.contains(label, { timeout: 0 }).then($el => {
            if ($el.length && $el.is(':visible')) {
              cy.wrap($el).should('be.visible');
            }
          });
        });
      });
    });


    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.familyPackageset.expandrecord(2)


    // Click the matching row if needed
    cy.get('div[unselectable="on"][style*="margin-left:-22px"]')
      .should('have.length.greaterThan', 2)
      .eq(2)
      .should('be.visible')
      .click();



    // Details
    cy.contains('Details').should('exist');
    cy.contains('Family Name').should('exist');
    cy.contains('Application Code').should('exist');

    cy.contains('Shelf Life Type').should('exist');
    cy.contains('Shelf Life').should('exist');
    cy.contains('Shelf Life Unit').should('exist');
    cy.contains('Shelf Life Category').should('exist');
    cy.contains('Storage Conditions').should('exist');

    cy.contains('Active Ingredient Name').should('exist');
    cy.contains('API Storage Container').should('exist');
    cy.contains('API Storage Condition').should('exist');
    cy.contains('API Shelf Life').should('exist');
    cy.contains('API Shelf Life Unit').should('exist');
    cy.contains('API Status').should('exist');
    cy.contains('API Status Date').should('exist');
    cy.contains('Active Ingredients QC Status').should('exist');
    cy.contains('Active Ingredients QC Date').should('exist');
    cy.contains('API Retest').should('exist');
    cy.contains('API Retest Unit').should('exist');

    GQ.logout()

  })
  it('APALUTAMIDE ADMIN PRODUCT', () => {
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
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.adminPackageset.openLandingPage()
    let expectedColumnsQXD = [
      'Product Detail Set ID',
      '👁',
      'Product Detail Set Code',
      'Product Family Code',
      'Application Code',
      'Product Detail Set Name',
      'Product Detail Set Status',
      'Package Set Name',
      'Package Set Status',
      'Package Set Status Date',
      'Package Set QC Status',
      'Package Set QC Date',
      'Package Set Last Updated',
      'Function',
      'Manufacturer/Site',
      'API Shelf Life',
      'API Storage Condition',
      'API Shelf Life Unit',
      'API Storage Container',
      'Shelf Life',
      'Shelf Life Category',
      'Shelf Life Type',
      'Shelf Life Unit',
      'Storage Conditions',
      'Tab Name'
    ]
    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.adminPackageset.columnHeaderID()
    ).then(tableInfo => {
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i])
      }
    })

    // Verify Multichoice picker
    const namesList = ['Product Detail Set Status', 'Package Set Status', 'Package Set QC Status'];
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.adminPackageset.checkMultiChoicePickerColumns(namesList)
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.adminPackageset.rightclickoncolumn()
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.adminPackageset.clickoncolumn()
    const scrollThumbSelector = 'div.vScrollThumb[eventproxy*="fieldPicker_availableFieldsGrid_body_vscroll_thumb"]';

    // Columns that appear when scrolled down
    const scrollColumns = [
      'Application ID',
      'Component Form',
      'Package Item Material',
      //'Date QC'd',
      'Excipient Name',
      'Excipient Role',
      'Excipient Status',
      'In Process Controls',
      'Manufacturer Country',
      'Manufacturer QC Status',
      'Manufacturer Status',
      'Manufacturing Process Name',
      'Packaging Category',
      'Packaging Item Type',
      'Pack Set ID',
      'Product Family ID',
      'Product ID',
      'Registration ID',
      'Reviewing Country'
    ];

    const totalSteps = 1;       // Number of scroll moves
    const stepDistance = 25;    // How many pixels to move mouse per step
    const stepDelay = 800;      // Delay between scroll steps (ms)

    // Run scroll steps sequentially with increasing delay, no recursion
    Cypress._.times(totalSteps, step => {
      cy.wait(step * stepDelay).then(() => {
        cy.get(scrollThumbSelector)
          .trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientY: 50 + step * stepDistance })
          .trigger('mouseup', { force: true });

        // Verify visible columns after each scroll step
        scrollColumns.forEach(label => {
          cy.contains(label, { timeout: 0 }).then($el => {
            if ($el.length && $el.is(':visible')) {
              cy.wrap($el).should('be.visible');
            }
          });
        });
      });
    });


    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_Package_Sets_1||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBody/member[Class=QScreen_Filtered_52||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_GRAInsight_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[oid=01987d7d-ce0b-7337-8ea0-dad2b968faa8||product_detail_set_id=22529222||0]/col[fieldName=%2472v||0]/valueicon').click()


    cy.get('div[unselectable="on"][style*="margin-left:-22px"]')
      .should('have.length.greaterThan', 2)
      .eq(2)
      .should('be.visible')
      .click();



    // Details
    cy.contains('Details').should('exist');
    cy.contains('Family Name').should('exist');
    cy.contains('Application Code').should('exist');

    cy.contains('Shelf Life Type').should('exist');
    cy.contains('Shelf Life').should('exist');
    cy.contains('Shelf Life Unit').should('exist');
    cy.contains('Shelf Life Category').should('exist');
    cy.contains('Storage Conditions').should('exist');

    cy.contains('Active Ingredient Name').should('exist');
    cy.contains('API Storage Container').should('exist');
    cy.contains('API Storage Condition').should('exist');
    cy.contains('API Shelf Life').should('exist');
    cy.contains('API Shelf Life Unit').should('exist');
    cy.contains('API Status').should('exist');
    cy.contains('API Status Date').should('exist');
    cy.contains('Active Ingredients QC Status').should('exist');
    cy.contains('Active Ingredients QC Date').should('exist');
    cy.contains('API Retest').should('exist');
    cy.contains('API Retest Unit').should('exist');





    GQ.logout()
  })

  it('user data binder binder', () => {
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
    // Select Refresh
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

    // Select New Binder
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('Attachment Tester')

    //Click Smart Content
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.userPackageset.openLandingPage()
    let expectedColumnsQXD = [
      'Product Detail Set ID',
      '👁',
      'Product Detail Set Code',
      'Product Family Code',
      'Application Code',
      'Product Detail Set Name',
      'Product Detail Set Status',
      'Package Set Name',
      'Package Set Status',
      'Package Set Status Date',
      'Package Set QC Status',
      'Package Set QC Date',
      'Package Set Last Updated',
      'Function',
      'Manufacturer/Site',
      'API Shelf Life',
      'API Storage Condition',
      'API Shelf Life Unit',
      'API Storage Container',
      'Shelf Life',
      'Shelf Life Category',
      'Shelf Life Type',
      'Shelf Life Unit',
      'Storage Conditions',
      'Tab Name'
    ]
    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.userPackageset.columnHeaderID()
    ).then(tableInfo => {
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i])
      }
    })

    // Verify Multichoice picker
    const namesList = ['Product Detail Set Status', 'Package Set Status', 'Package Set QC Status'];
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.userPackageset.checkMultiChoicePickerColumns(namesList)
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.userPackageset.rightclickoncolumn()
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.userPackageset.clickoncolumn()
    const scrollThumbSelector = 'div.vScrollThumb[eventproxy*="fieldPicker_availableFieldsGrid_body_vscroll_thumb"]';

    // Columns that appear when scrolled down
    const scrollColumns = [
      'Application ID',
      'Component Form',
      'Package Item Material',
      //'Date QC'd',
      'Excipient Name',
      'Excipient Role',
      'Excipient Status',
      'In Process Controls',
      'Manufacturer Country',
      'Manufacturer QC Status',
      'Manufacturer Status',
      'Manufacturing Process Name',
      'Packaging Category',
      'Packaging Item Type',
      'Pack Set ID',
      'Product Family ID',
      'Product ID',
      'Registration ID',
      'Reviewing Country'
    ];

    const totalSteps = 1;       // Number of scroll moves
    const stepDistance = 25;    // How many pixels to move mouse per step
    const stepDelay = 800;      // Delay between scroll steps (ms)

    // Run scroll steps sequentially with increasing delay, no recursion
    Cypress._.times(totalSteps, step => {
      cy.wait(step * stepDelay).then(() => {
        cy.get(scrollThumbSelector)
          .trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientY: 50 + step * stepDistance })
          .trigger('mouseup', { force: true });

        // Verify visible columns after each scroll step
        scrollColumns.forEach(label => {
          cy.contains(label, { timeout: 0 }).then($el => {
            if ($el.length && $el.is(':visible')) {
              cy.wrap($el).should('be.visible');
            }
          });
        });
      });
    });

    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_Package_Sets_1||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBody/member[Class=QScreen_Filtered_52||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_GRAInsight_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[oid=01987d7d-ce0b-7337-8ea0-dad2b968faa8||product_detail_set_id=22529222||0]/col[fieldName=%2472v||0]/valueicon').click()

    cy.get('div[unselectable="on"][style*="margin-left:-22px"]')
      .should('have.length.greaterThan', 2)
      .eq(2)
      .should('be.visible')
      .click();



    // Details
    cy.contains('Details').should('exist');
    cy.contains('Family Name').should('exist');
    cy.contains('Application Code').should('exist');

    cy.contains('Shelf Life Type').should('exist');
    cy.contains('Shelf Life').should('exist');
    cy.contains('Shelf Life Unit').should('exist');
    cy.contains('Shelf Life Category').should('exist');
    cy.contains('Storage Conditions').should('exist');

    cy.contains('Active Ingredient Name').should('exist');
    cy.contains('API Storage Container').should('exist');
    cy.contains('API Storage Condition').should('exist');
    cy.contains('API Shelf Life').should('exist');
    cy.contains('API Shelf Life Unit').should('exist');
    cy.contains('API Status').should('exist');
    cy.contains('API Status Date').should('exist');
    cy.contains('Active Ingredients QC Status').should('exist');
    cy.contains('Active Ingredients QC Date').should('exist');
    cy.contains('API Retest').should('exist');
    cy.contains('API Retest Unit').should('exist');

    GQ.logout()
  })
  it.only('Product specific  binder', () => {
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
  
    // Select Refresh
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');


    // Open Product Specific Binder
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.SelectAdminBinder();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.ProductSpecificBinderSelect()
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
    // Click Plus
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

    // Click Child
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.RegulatoryAffairs()
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Packageset()
    let expectedColumnsQXD = [
      'Product Detail Set ID',
      '👁',
      'Product Detail Set Code',
      'Product Family Code',
      'Application Code',
      'Product Detail Set Name',
      'Product Detail Set Status',
      'Package Set Name',
      'Package Set Status',
      'Package Set Status Date',
      'Package Set QC Status',
      'Package Set QC Date',
      'Package Set Last Updated',
      'Function',
      'Manufacturer/Site',
      'API Shelf Life',
      'API Storage Condition',
      'API Shelf Life Unit',
      'API Storage Container',
      'Shelf Life',
      'Shelf Life Category',
      'Shelf Life Type',
      'Shelf Life Unit',
      'Storage Conditions',
      'Tab Name'
    ]
    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.columnHeaderID()
    ).then(tableInfo => {
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i])
      }
    })
    const namesList = ['Product Detail Set Status', 'Package Set Status', 'Package Set QC Status'];
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.checkMultiChoicePickerColumns(namesList)
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.rightclickoncolumn()
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.clickoncolumn()
    const scrollThumbSelector = 'div.vScrollThumb[eventproxy*="fieldPicker_availableFieldsGrid_body_vscroll_thumb"]';

    // Columns that appear when scrolled down
    const scrollColumns = [
      'Application ID',
      'Component Form',
      'Package Item Material',
      //'Date QC'd',
      'Excipient Name',
      'Excipient Role',
      'Excipient Status',
      'In Process Controls',
      'Manufacturer Country',
      'Manufacturer QC Status',
      'Manufacturer Status',
      'Manufacturing Process Name',
      'Packaging Category',
      'Packaging Item Type',
      'Pack Set ID',
      'Product Family ID',
      'Product ID',
      'Registration ID',
      'Reviewing Country'
    ];

    const totalSteps = 1;       // Number of scroll moves
    const stepDistance = 25;    // How many pixels to move mouse per step
    const stepDelay = 800;      // Delay between scroll steps (ms)

    // Run scroll steps sequentially with increasing delay, no recursion
    Cypress._.times(totalSteps, step => {
      cy.wait(step * stepDelay).then(() => {
        cy.get(scrollThumbSelector)
          .trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientY: 50 + step * stepDistance })
          .trigger('mouseup', { force: true });

        // Verify visible columns after each scroll step
        scrollColumns.forEach(label => {
          cy.contains(label, { timeout: 0 }).then($el => {
            if ($el.length && $el.is(':visible')) {
              cy.wrap($el).should('be.visible');
            }
          });
        });
      });
    });

    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.CancelButton()

    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.RecordOpen()

    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.DetailsSectionValidation()


    GQ.logout()

  })
})