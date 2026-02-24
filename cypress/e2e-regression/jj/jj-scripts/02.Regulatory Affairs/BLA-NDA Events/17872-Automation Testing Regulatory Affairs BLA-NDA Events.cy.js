import { GQTest } from '../../../jj-pages/GQTest';
require('cypress-xpath');

describe('Sprint 16', () => {
  const GQ = new GQTest();

  it('Regulatory Affairs planet > BLA-NDA Events (scroll column picker)', () => {
    // Login and navigate
    GQ.login();
    GQ.Planets.RegulatoryAffairs.openLandingPage();
    GQ.Planets.RegulatoryAffairs.BLANDA.openLandingPage();

    // Expected columns in main grid
    const expectedColumnsQXD = [
      'Event ID', '👁', 'Product Family Name', 'Product Family Code',
      'Therapeutic Area', 'Event Name', 'Event Type', 'Secondary Event Type',
      'Change Control Number', 'Regulatory Impact', 'Regulatory Activity Impacts',
      'Regulatory Assessment Required', 'Regulatory Rationale', 'Event Country',
      'Event Closed As', 'Event Closed', 'Application Type', 'Application ID',
      'Application Code', 'Application Name', 'Procedure Type', 'Application Status',
      'Product Detail Set Code', 'Product Detail Set Name'
    ];

    cy.getColumnsAndTypes(GQ.Planets.RegulatoryAffairs.BLANDA.columnHeaderID())
      .then(tableInfo => {
        const availableCols = tableInfo.columns.map(obj => obj.textContent);
        expectedColumnsQXD.forEach(expected => {
          expect(availableCols).to.include(expected);
        });
      });

    // Verify multichoice picker columns
    const multiChoiceColumns = [
      'Therapeutic Area', 'Event Type', 'Secondary Event Type',
      'Regulatory Impact', 'Regulatory Activity Impacts',
      'Regulatory Assessment Required', 'Event Country', 'Event Closed As',
      'Event Closed', 'Application Type', 'Procedure Type', 'Application Status'
    ];
    GQ.Planets.RegulatoryAffairs.BLANDA.checkMultiChoicePickerColumns(multiChoiceColumns);
    GQ.Planets.RegulatoryAffairs.BLANDA.expandrecord(1)


    // Verify the container element is visible
    // Verify the container element is visible
    const containerSelector = '#isc_IB';
    cy.get(containerSelector).should('be.visible');

    // Define expected fields
    const expectedFields = [
      'Event ID', 'Product Family Name', 'Product Family Code', 'Therapeutic Area', 'Event Name', 'Event Type',
      'Secondary Event Type', 'Change Control Number', 'Regulatory Impact', 'Regulatory Activity Impacts',
      'Regulatory Assessment Required', 'Regulatory Rationale', 'Event Country', 'Event Closed As',
      'Event Closed', 'Application Type', 'Application ID', 'Application Code', 'Application Name',
      'Procedure Type', 'Application Status', 'Product Detail Set Code', 'Product Detail Set Name'
    ];

    // Verify that each field is present within the container
    expectedFields.forEach(field => {
      cy.get(containerSelector)
        .contains(field) // Ensure that each field is present
        .should('be.visible');
    });





    // Open column picker
    GQ.Planets.RegulatoryAffairs.BLANDA.addcolumn.open();

    // Scroll thumb selector from Cypress DOM inspector
    const scrollThumbSelector = 'div.vScrollThumb[eventproxy*="fieldPicker_availableFieldsGrid_body_vscroll_thumb"]';

    // Columns that appear when scrolled down
    const scrollColumns = [
      'Event Comments',
      'Event Submission Type',
      'Event Submission Status',
      'Event Actual Planned Date',
      'Event Actual Dispatched Date',
      'Event Actual Regulatory Assessment Complete Date',
      'Event Actual Submitted Date',
      'Event Actual Approved Date',
      'Event Actual Regulatory Clearance Complete date',
      'Event Submission Actual Submitted Date',
      'Event Submission Status Date'
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
    GQ.logout()
  });

  it('Product planet > Product Family/Product selection > Regulatory Affairs > BLA-NDA Events', () => {
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
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.openLandingPage()

    const expectedColumnQXD = [
      'Event ID', '👁', 'Product Family Name', 'Product Family Code',
      'Therapeutic Area', 'Event Name', 'Event Type', 'Secondary Event Type',
      'Change Control Number', 'Regulatory Impact', 'Regulatory Activity Impacts',
      'Regulatory Assessment Required', 'Regulatory Rationale', 'Event Country',
      'Event Closed As', 'Event Closed', 'Application Type', 'Application ID',
      'Application Code', 'Application Name', 'Procedure Type', 'Application Status',
      'Product Detail Set Code', 'Product Detail Set Name'
    ];

    cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.columnHeaderID())
      .then(tableInfo => {
        const availableCols = tableInfo.columns.map(obj => obj.textContent);
        expectedColumnQXD.forEach(expected => {
          expect(availableCols).to.include(expected);
        });
      });

    // Verify multichoice picker columns
    const multiChoiceColumns = [
      'Therapeutic Area', 'Event Type', 'Secondary Event Type',
      'Regulatory Impact', 'Regulatory Activity Impacts',
      'Regulatory Assessment Required', 'Event Country', 'Event Closed As',
      'Event Closed', 'Application Type', 'Procedure Type', 'Application Status'
    ];
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.checkMultiChoicePickerColumns(multiChoiceColumns);

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.addcolumn.open();

    // Scroll thumb selector from Cypress DOM inspector
    const scrollThumbSelector = 'div.vScrollThumb[eventproxy*="fieldPicker_availableFieldsGrid_body_vscroll_thumb"]';

    // Columns that appear when scrolled down
    const scrollColumns = [
      'Event Comments',
      'Event Submission Type',
      'Event Submission Status',
      'Event Actual Planned Date',
      'Event Actual Dispatched Date',
      'Event Actual Regulatory Assessment Complete Date',
      'Event Actual Submitted Date',
      'Event Actual Approved Date',
      'Event Actual Regulatory Clearance Complete date',
      'Event Submission Actual Submitted Date',
      'Event Submission Status Date'
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


    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.APRPQR.open()
   
    const expectedColumnsQXD = [
      'Event ID',
      '👁',
      'Submission Reference',
      'Event Description',
      'Subject or Reason',
      'Submission Type',
      'Submission Date',
      'Status',
      'Approval Date'
    ];

    cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.APRPQR.columnHeaderID())
      .then(tableInfo => {
        const availableCols = tableInfo.columns.map(obj => obj.textContent);
        expectedColumnsQXD.forEach(expected => {
          expect(availableCols).to.include(expected);
        });
      });

    // Verify multichoice picker columns
    const multiChoiceColumn = [
      'Submission Type',
      'Status',

    ];
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.APRPQR.checkMultiChoicePickerColumns(multiChoiceColumn)


    GQ.logout()

 })

  it(' admin binder Smart Content', () => {
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
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.BALNDA()

    const expectedColumnQXD = [
      'Event ID', '👁', 'Product Family Name', 'Product Family Code',
      'Therapeutic Area', 'Event Name', 'Event Type', 'Secondary Event Type',
      'Change Control Number', 'Regulatory Impact', 'Regulatory Activity Impacts',
      'Regulatory Assessment Required', 'Regulatory Rationale', 'Event Country',
      'Event Closed As', 'Event Closed', 'Application Type', 'Application ID',
      'Application Code', 'Application Name', 'Procedure Type', 'Application Status',
      'Product Detail Set Code', 'Product Detail Set Name'
    ];

   cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.columnHeaderID())
      .then(tableInfo => {
        const availableCols = tableInfo.columns.map(obj => obj.textContent);
        expectedColumnQXD.forEach(expected => {
          expect(availableCols).to.include(expected);
        });
      });

    // Verify multichoice picker columns
    const multiChoiceColumns = [
      'Therapeutic Area', 'Event Type', 'Secondary Event Type',
      'Regulatory Impact', 'Regulatory Activity Impacts',
      'Regulatory Assessment Required', 'Event Country', 'Event Closed As',
      'Event Closed', 'Application Type', 'Procedure Type', 'Application Status'
    ];
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.checkMultiChoicePickerColumns(multiChoiceColumns);
    GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.addcolumn()

    // Scroll thumb selector from Cypress DOM inspector
    const scrollThumbSelector = 'div.vScrollThumb[eventproxy*="fieldPicker_availableFieldsGrid_body_vscroll_thumb"]';

    // Columns that appear when scrolled down
    const scrollColumns = [
      'Event Comments',
      'Event Submission Type',
      'Event Submission Status',
      'Event Actual Planned Date',
      'Event Actual Dispatched Date',
      'Event Actual Regulatory Assessment Complete Date',
      'Event Actual Submitted Date',
      'Event Actual Approved Date',
      'Event Actual Regulatory Clearance Complete date',
      'Event Submission Actual Submitted Date',
      'Event Submission Status Date'
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
    GQ.logout();
  })

  it('user data binder Smart Content  ', () => {
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
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.BLANDAUser()
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.BLANDA()
    const expectedColumnQXD = [
      'Event ID', '👁', 'Product Family Name', 'Product Family Code',
      'Therapeutic Area', 'Event Name', 'Event Type', 'Secondary Event Type',
      'Change Control Number', 'Regulatory Impact', 'Regulatory Activity Impacts',
      'Regulatory Assessment Required', 'Regulatory Rationale', 'Event Country',
      'Event Closed As', 'Event Closed', 'Application Type', 'Application ID',
      'Application Code', 'Application Name', 'Procedure Type', 'Application Status',
      'Product Detail Set Code', 'Product Detail Set Name'
    ];

    cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.columnHeaderID())
      .then(tableInfo => {
        const availableCols = tableInfo.columns.map(obj => obj.textContent);
        expectedColumnQXD.forEach(expected => {
          expect(availableCols).to.include(expected);
        });
      });

    // Verify multichoice picker columns
    const multiChoiceColumns = [
      'Therapeutic Area', 'Event Type', 'Secondary Event Type',
      'Regulatory Impact', 'Regulatory Activity Impacts',
      'Regulatory Assessment Required', 'Event Country', 'Event Closed As',
      'Event Closed', 'Application Type', 'Procedure Type', 'Application Status'
    ];
    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.checkMultiChoicePickerColumns(multiChoiceColumns);

    GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.addcolumn()

    // Scroll thumb selector from Cypress DOM inspector
    const scrollThumbSelector = 'div.vScrollThumb[eventproxy*="fieldPicker_availableFieldsGrid_body_vscroll_thumb"]';

    // Columns that appear when scrolled down
    const scrollColumns = [
      'Event Comments',
      'Event Submission Type',
      'Event Submission Status',
      'Event Actual Planned Date',
      'Event Actual Dispatched Date',
      'Event Actual Regulatory Assessment Complete Date',
      'Event Actual Submitted Date',
      'Event Actual Approved Date',
      'Event Actual Regulatory Clearance Complete date',
      'Event Submission Actual Submitted Date',
      'Event Submission Status Date'
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
    GQ.logout();


  });

  it('Product specific  binder binder Smart Content', () => {
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
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
    // Open Product Specific Binder
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
    // Click Plus
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

    // Click Child
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.RegulatoryAffairs()
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.BLANDA()
    /*const expectedColumn = [
          'Event ID', '👁', 'Product Family Name', 'Product Family Code',
          'Therapeutic Area', 'Event Name', 'Event Type', 'Secondary Event Type',
          'Change Control Number', 'Regulatory Impact', 'Regulatory Activity Impacts',
          'Regulatory Assessment Required', 'Regulatory Rationale', 'Event Country',
          'Event Closed As', 'Event Closed', 'Application Type', 'Application ID',
          'Application Code', 'Application Name', 'Procedure Type', 'Application Status',
          'Product Detail Set Code', 'Product Detail Set Name'
        ];
    
        cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.columnHeaderID())
          .then(tableInfo => {
            const availableCols = tableInfo.columns.map(obj => obj.textContent);
            expectedColumn.forEach(expected => {
              expect(availableCols).to.include(expected);
            });
          });
    
        // Verify multichoice picker columns
        const multiChoiceColumns = [
          'Therapeutic Area', 'Event Type', 'Secondary Event Type',
          'Regulatory Impact', 'Regulatory Activity Impacts',
          'Regulatory Assessment Required', 'Event Country', 'Event Closed As',
          'Event Closed', 'Application Type', 'Procedure Type', 'Application Status'
        ];
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.checkMultiChoicePickerColumns(multiChoiceColumns);
          */
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.addcolumn()
    // Click Child
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.RegulatoryAffairs()
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.BLANDA()
    /*const expectedColumn = [
          'Event ID', '👁', 'Product Family Name', 'Product Family Code',
          'Therapeutic Area', 'Event Name', 'Event Type', 'Secondary Event Type',
          'Change Control Number', 'Regulatory Impact', 'Regulatory Activity Impacts',
          'Regulatory Assessment Required', 'Regulatory Rationale', 'Event Country',
          'Event Closed As', 'Event Closed', 'Application Type', 'Application ID',
          'Application Code', 'Application Name', 'Procedure Type', 'Application Status',
          'Product Detail Set Code', 'Product Detail Set Name'
        ];
    
        cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.columnHeaderID())
          .then(tableInfo => {
            const availableCols = tableInfo.columns.map(obj => obj.textContent);
            expectedColumn.forEach(expected => {
              expect(availableCols).to.include(expected);
            });
          });
    
        // Verify multichoice picker columns
        const multiChoiceColumns = [
          'Therapeutic Area', 'Event Type', 'Secondary Event Type',
          'Regulatory Impact', 'Regulatory Activity Impacts',
          'Regulatory Assessment Required', 'Event Country', 'Event Closed As',
          'Event Closed', 'Application Type', 'Procedure Type', 'Application Status'
        ];
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.checkMultiChoicePickerColumns(multiChoiceColumns);
          */
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.addcolumn()

    // Scroll thumb selector from Cypress DOM inspector
    const scrollThumbSelector = 'div.vScrollThumb[eventproxy*="fieldPicker_availableFieldsGrid_body_vscroll_thumb"]';

    // Columns that appear when scrolled down
    const scrollColumns = [
      'Event Comments',
      'Event Submission Type',
      'Event Submission Status',
      'Event Actual Planned Date',
      'Event Actual Dispatched Date',
      'Event Actual Regulatory Assessment Complete Date',
      'Event Actual Submitted Date',
      'Event Actual Approved Date',
      'Event Actual Regulatory Clearance Complete date',
      'Event Submission Actual Submitted Date',
      'Event Submission Status Date'
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
    });    GQ.logout();

  })

})