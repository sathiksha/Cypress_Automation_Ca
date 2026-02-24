import { GQTest } from '../../jj-pages/GQTest'
// Sprint 20
describe('Sprint 20', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('Automation Testing: Allows APR/PQR view of Release Data', () => {
 
        // Login
        GQ.login()
        // Product planet
        GQ.Planets.Product.openLandingPage()
 
        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()
 
        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()      // Open Product Planet and navigate to the Product Families
 
        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.APRPQR.open()
     
        let expectedColumnsQXD = [
         'Material', 'Batch Number', 'Manufacturing Date', 'Analysis', 'Display Result', 'Display Units', 'Measurement','Concatenated Analysis Measurement', 'Site', 'Test Verification', 'Limit 1', 'Limit 2',  'Entered value', 'Out of Spec', 'Material Description', 'Material Type', 'Batch Name', 'Vendor Batch', 'Formulation', 'Release Status', 'Decision Date', 'QC Data Decision', 'Quantity', 'Units', 'QC Order', 'QC Type', 'SMD Ref', 'Spec ID', 'Spec Version ID', 'Parameter List Version', 'Parameter List Variant', 'Test Replicate', 'Method Reference', 'Worksheet ID', 'Logbook Ref', 'Seq', 'Result Replicate', 'Retention Time', 'COA Report Flag', 'Batch/Sample Event', 'Test Event', 'COA Limit']
       
         // Read column
        cy.getColumnsAndTypes(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.APRPQR.columnHeaderID())
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
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.APRPQR.closeselector();

    const columnNames = [
        'Site',
        'Test Verification',
        'Material Type',
        'QC Type',
        'Analysis',
        'Measurement'
    ];

    // Utility: Create exact match regex for column names
    function getColumnRegex(columnName) {
    return new RegExp(
        '^' + columnName
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // escape special characters
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
        .scrollIntoView()
        .click({ force: true });
        cy.get('img[src*="left.png"]').click();
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
        .scrollIntoView()
        .click({ force: true });
        cy.get('img[src*="right.png"]').click();
        cy.get('img[src*="up_first.png"]').click();
    });
    }

    // Step 1: Move columns to left
    cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.APRPQR.gridId()).rightclick();
    cy.contains('Columns...').click({ force: true });

    columnNames.forEach(moveColumnToLeft);

    cy.get('td.button').contains('Apply').click();

    // Step 2: Move columns to right and bring to top
    cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.APRPQR.gridId()).rightclick();
    cy.contains('Columns...').click({ force: true });

    columnNames.forEach(moveColumnToRightAndTop);

    cy.get('td.button').contains('Apply').click();
    // Step 3: Verify Multichoice picker
    const namesList2 = [
        'QC Type',
        'Material Type',
        'Test Verification',
        'Site',
        'Analysis',
        'Measurement'
    ];

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.APRPQR.checkMultiChoicePickerColumns(namesList2);

    const namesList = [    
        'Material'
    ];
 
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.APRPQR.checkMultiChoicePickerColumns(namesList);
    
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.APRPQR.filterbutton();
        // Logout
    GQ.logout()
    
    })
})