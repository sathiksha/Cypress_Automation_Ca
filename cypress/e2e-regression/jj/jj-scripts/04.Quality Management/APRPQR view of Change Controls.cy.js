import { GQTest } from '../../jj-pages/GQTest';
require('cypress-xpath');
describe('Sprint 20 : APR/PQR View of Change Controls (COMET)', () => {
  const GQ = new GQTest();
    it('Allows APR/PQR view of Change Controls (COMET)', () => {
        // Login
        GQ.login()
        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControlsAPRPQR.open()
  
         let expectedColumnsQXD = [
            '👁','Number', 'Change Risk Level', 'Title', 'Change Category', 'Reason for Change', 'Status', 'Stage', 'Legacy Reference Number', 'Change Plan Approval Date', 'Impacted Site w/Child CC#', 'J&J Site Name', 'J&J Site Name (Impacted Organization)', 'Site/Function Details', 'Material Description', 'Material Item', 'Materials or Indirect Materials', 'Batch ID/Lot Number', 'Related Batches', 'Trackwise Type Of Change', 'Trackwise Source Of Change'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControlsAPRPQR.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumnsQXD.length; i++) {
                    expect(availableCols).to.include(expectedColumnsQXD[i])
                }
            })

            cy.wait(2000)
 
        // close the selector screen on left
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControlsAPRPQR.closeselector()

        const namesList = ['Change Risk Level', 'Change Category', 'Reason for Change', 'Status', 'Stage'];
 
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControlsAPRPQR.checkMultiChoicePickerColumns(namesList);

    const columnNames = [
                        'Material Item',
                        'J&J Site Name',
                        'J&J Site Name (Impacted Organization)',
                        'Impacted Site w/Child CC#'
    ];

    // Utility: Escape special characters and normalize whitespace
    function getColumnRegex(columnName) {
    return new RegExp(
        '^' + columnName
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        .replace(/\s+/g, '\\s*') + '$'
    );
    }

    // Move column from right to left
    function moveColumnToLeft(columnName) {
    cy.get('div[eventproxy*="currentView"][class="normal"]').within(() => {
        cy.get('input.textItemLite').clear().type(columnName + '{enter}');
    });
    cy.wait(3000);
    cy.get('div[eventproxy*="fieldPickerWindow_body"][class="windowBody"]').within(() => {
        cy.contains(getColumnRegex(columnName))
        .should('exist')
        .should('be.visible')
        .then($el => {
            cy.log(`Moving to left: ${$el.text()}`);
            cy.wrap($el).click();
            cy.get('img[src*="left.png"]').click();
        });
    });
    }

    // Move column from left to right and bring to top
    function moveColumnToRightAndTop(columnName) {
    cy.get('div[eventproxy*="availableView"][class="normal"]').within(() => {
        cy.get('input.textItemLite').clear().type(columnName + '{enter}');
    });
    cy.wait(3000);
    cy.get('div[eventproxy*="fieldPickerWindow_body"][class="windowBody"]').within(() => {
        cy.contains(getColumnRegex(columnName))
        .should('exist')
        .should('be.visible')
        .then($el => {
            cy.log(`Moving to right: ${$el.text()}`);
            cy.wrap($el).click();
            cy.get('img[src*="right.png"]').click();
            cy.get('img[src*="up_first.png"]').click();
        });
    });
    }

    // Step 1: Move columns to left
    cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControlsAPRPQR.gridId()).rightclick();
    cy.contains('Columns...').click({ force: true });

    columnNames.forEach(moveColumnToLeft);

    cy.get('td.button').contains('Apply').click();

    // Step 2: Move columns to right and bring to top
    cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControlsAPRPQR.gridId()).rightclick();
    cy.contains('Columns...').click({ force: true });

    columnNames.forEach(moveColumnToRightAndTop);

    cy.get('td.button').contains('Apply').click();

    // Step 3: Verify Multichoice picker
    const namesList2 = [
        'Impacted Site w/Child CC#',
        'J&J Site Name (Impacted Organization)',
        'J&J Site Name',
        'Material Item'
    ];

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControlsAPRPQR.checkMultiChoicePickerColumns(namesList2);    
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControlsAPRPQR.open()
 
        // Maximize selector
        GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()
 
        // Logout
        GQ.logout()

    })
})