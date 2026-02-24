import { GQTest } from '../../jj-pages/GQTest'
// Sprint 15
require('cypress-xpath')
describe('Allows Default view and APR/PQR View of Batch FLows', () => {
  const GQ = new GQTest();
it('BatchFlows from Planet', () => {
// Login
GQ.login();
// Open Quality Management
GQ.Planets.Manufacturing.openLandingPage();
// Batch Flows
GQ.Planets.Manufacturing.BatchFlows.openLandingPage();

let expectedColumnsQXD = [
    'O/P Batch Code', 
    'O/P Localized Batch Code', 
    'O/P Product Code', 
    'O/P Process Order', 
    'O/P Product Code Description', 
    'O/P Product Type', 
    'O/P Plant Code', 
    'O/P Plant Name', 
    'O/P Source System', 
    'Last Good Receipt', 
    'O/P Process Stage', 
    'O/P Process Step', 
    'Discovery Method', 
    'Flow ID', 
    'Flow Type', 
    'Next Flow ID', 
    'Previous Flow ID'];

// Read column
cy.getColumnsAndTypes(GQ.Planets.Manufacturing.BatchFlows.getColumnID()
    ).then(tableInfo => {
    let availableCols = [];
    tableInfo.columns.map(obj => {
        availableCols.push(obj.textContent);
    });
    cy.log(availableCols);
    for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i]);
    }
});
//Verify Multichoice picker
const namesList = [
    'O/P Product Type', 
    'O/P Plant Code', 
    'O/P Plant Name', 
    'O/P Source System', 
    'O/P Process Stage', 
    'O/P Process Step', 
    'Discovery Method',
    'Flow Type'
];

GQ.Planets.Manufacturing.BatchFlows.checkMultiChoicePickerColumns(namesList);

GQ.Planets.Manufacturing.BatchFlows.toggleFilterIcon();
// All
GQ.Planets.Manufacturing.BatchFlows.all();
// Finished Goods
GQ.Planets.Manufacturing.BatchFlows.finishedGoods();
// Final API
GQ.Planets.Manufacturing.BatchFlows.finalAPI();
// Non-Batch MGD
GQ.Planets.Manufacturing.BatchFlows.nonBatchMgd();
// Standard
GQ.Planets.Manufacturing.BatchFlows.standard();
// Refresh
GQ.Planets.Manufacturing.BatchFlows.refresh();

// Verify Bookmark functionality
GQ.Planets.Manufacturing.BatchFlows.rightClickBookmark(0);

GQ.Planets.Manufacturing.BatchFlows.checkBookmarkFunationality();
//GQ.Planets.Manufacturing.BatchFlows.openARecord(0);

})
it('BatchFlows from Admin Data Binder', () => {
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
    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.open();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.batchFlows();

let expectedColumnsQXD = [
    'O/P Batch Code', 
    'O/P Localized Batch Code', 
    'O/P Product Code', 
    'O/P Process Order', 
    'O/P Product Code Description', 
    'O/P Product Type', 
    'O/P Plant Code', 
    'O/P Plant Name', 
    'O/P Source System', 
    'Last Good Receipt', 
    'O/P Process Stage', 
    'O/P Process Step', 
    'Discovery Method', 
    'Flow ID', 
    'Flow Type', 
    'Next Flow ID', 
    'Previous Flow ID'];

// Read column
cy.getColumnsAndTypes(
       GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.getColumnID()
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
const namesList = [
    'O/P Product Type', 
    'O/P Plant Code', 
    'O/P Plant Name', 
    'O/P Source System', 
    'O/P Process Stage', 
    'O/P Process Step', 
    'Discovery Method',
    'Flow Type'
];

GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.batchFlowsMultiChoicePicker(namesList);
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.batchFlowstoggleFilterIcon();


// Toggle Filter Menu Button

GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.filterMenu();


// All
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.all();
// Finished Goods
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.finishedGoods();
// Final API
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.finalAPI();
// Non-Batch MGD
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.nonBatchMgd();
// Standard
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.standard();
// Refresh
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.refresh();

// // Verify Bookmark functionality
// GQ.Planets.Manufacturing.BatchFlows.rightClickBookmark(0);
// GQ.Planets.Manufacturing.BatchFlows.checkBookmarkFunationality();
// GQ.Planets.Manufacturing.BatchFlows.openARecord();

GQ.logout();

})
it('BatchFlows from User Data Binder', () => {
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
    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.open();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.batchFlows();

    // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.open()
    // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.ManufacturingBatchflows.open()

let expectedColumnsQXD = [
    'O/P Batch Code', 
    'O/P Localized Batch Code', 
    'O/P Product Code', 
    'O/P Process Order', 
    'O/P Product Code Description', 
    'O/P Product Type', 
    'O/P Plant Code', 
    'O/P Plant Name', 
    'O/P Source System', 
    'Last Good Receipt', 
    'O/P Process Stage', 
    'O/P Process Step', 
    'Discovery Method', 
    'Flow ID', 
    'Flow Type', 
    'Next Flow ID', 
    'Previous Flow ID'];

// Read column
cy.getColumnsAndTypes(
       GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.getColumnID()
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
const namesList = [
    'O/P Product Type', 
    'O/P Plant Code', 
    'O/P Plant Name', 
    'O/P Source System', 
    'O/P Process Stage', 
    'O/P Process Step', 
    'Discovery Method',
    'Flow Type'
];

GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.batchFlowsMultiChoicePicker(namesList);
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.batchFlowstoggleFilterIcon();

// Toggle Filter Menu Button

GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.filterMenu();

//  GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.checkMultiChoicePickerColumns(namesList);
//  GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.toggleFilterIcon();

// All
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.all();
// Finished Goods
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.finishedGoods();
// Final API
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.finalAPI();
// Non-Batch MGD
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.nonBatchMgd();
// Standard
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.standard();
// Refresh
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.refresh();

// // Verify Bookmark functionality
// GQ.Planets.Manufacturing.BatchFlows.rightClickBookmark(0);
// GQ.Planets.Manufacturing.BatchFlows.checkBookmarkFunationality();
// GQ.Planets.Manufacturing.BatchFlows.openARecord();

GQ.logout();

})
it('BatchFlows from Product Speific Binder', () => {
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
    // Open Product Specific Binder
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
    // Click Plus
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
 
    // Click Child
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')
    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.open();
    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.batchFlows();


let expectedColumnsQXD = [
    'O/P Batch Code', 
    'O/P Localized Batch Code', 
    'O/P Product Code', 
    'O/P Process Order', 
    'O/P Product Code Description', 
    'O/P Product Type', 
    'O/P Plant Code', 
    'O/P Plant Name', 
    'O/P Source System', 
    'Last Good Receipt', 
    'O/P Process Stage', 
    'O/P Process Step', 
    'Discovery Method', 
    'Flow ID', 
    'Flow Type', 
    'Next Flow ID', 
    'Previous Flow ID'];

// Read column
cy.getColumnsAndTypes(
       GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.getColumnID()
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
const namesList = [
    'O/P Product Type', 
    'O/P Plant Code', 
    'O/P Plant Name', 
    'O/P Source System', 
    'O/P Process Stage', 
    'O/P Process Step', 
    'Discovery Method',
    'Flow Type'
];

GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.batchFlowsMultiChoicePicker(namesList);
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.batchFlowstoggleFilterIcon();

// Toggle Filter Menu Button
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.filterMenu();

// All
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.all();
// Finished Goods
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.finishedGoods();
// Final API
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.finalAPI();
// Non-Batch MGD
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.nonBatchMgd();
// Standard
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.standard();
// Refresh
GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.refresh();

// // Verify Bookmark functionality
// GQ.Planets.Manufacturing.BatchFlows.rightClickBookmark(0);
// GQ.Planets.Manufacturing.BatchFlows.checkBookmarkFunationality();
// GQ.Planets.Manufacturing.BatchFlows.openARecord();

GQ.logout();

})
it('BatchFlows from Product Family', () => {
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
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openLandingPage()


let expectedColumnsQXD = [
    'O/P Batch Code', 
    'O/P Localized Batch Code', 
    'O/P Product Code', 
    'O/P Process Order', 
    'O/P Product Code Description', 
    'O/P Product Type', 
    'O/P Plant Code', 
    'O/P Plant Name', 
    'O/P Source System', 
    'Last Good Receipt', 
    'O/P Process Stage', 
    'O/P Process Step', 
    'Discovery Method', 
    'Flow ID', 
    'Flow Type', 
    'Next Flow ID', 
    'Previous Flow ID'];

// Read column
cy.getColumnsAndTypes(
       GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.headerID()
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
const namesList = [
    'O/P Product Type', 
    'O/P Plant Code', 
    'O/P Plant Name', 
    'O/P Source System', 
    'O/P Process Stage', 
    'O/P Process Step', 
    'Discovery Method',
    'Flow Type'
];

GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.checkMultiChoicePickerColumns(namesList);
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.batchtoggleFilter();

// All
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.batchAll();
// Finished Goods
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.batchFinishedGoods();
// Final API
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.batchFinalAPI();
// Non-Batch MGD
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.batchNonBatchMgd();
// Standard
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.batchStandard();

// // Verify Bookmark functionality
// GQ.Planets.Manufacturing.BatchFlows.rightClickBookmark(0);
// GQ.Planets.Manufacturing.BatchFlows.checkBookmarkFunationality();
// GQ.Planets.Manufacturing.BatchFlows.openARecord();

GQ.logout();

})
it('APR/PQR View of BatchFlows from Product Family', () => {
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
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.aprpqrView()


let expectedColumnsQXD = [

"O/P Batch Code",
"O/P Localized Batch Code", 
"O/P Vendor Batch No.", 
"O/P Product Code", 
"O/P Process Order", 
"O/P Product Code Description",
"O/P International Brand", 
"O/P Product Type", 
"O/P Disposition Status", 
"O/P Plant Code", 
"O/P Plant Name", 
"O/P Source System",
"O/P Last Good Receipt", 
"O/P Date of Manufacture", 
"O/P Packaging Date", 
"O/P QA Release Date", 
"O/P Shelf Life Exp Date", 
"O/P TECO Date", 
"I/P Batch Code", 
"I/P Localized Batch Code", 
"I/P Vendor Batch No.", 
"I/P Product Code", 
"I/P Product Code Description", 
"I/P Product Type", 
"I/P Plant Code", 
"I/P Plant Name", 
"I/P Last Good Receipt", 
"I/P Date of Manufacture", 
"I/P QA Release Date", 
"I/P Shelf Life Exp Date", 
"I/P TECO Date"];

// Read column
cy.getColumnsAndTypes(
       GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.aprpqrHeaderID()
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
const namesList = [
    'O/P Product Type',
    'O/P Disposition Status', 
    'O/P Plant Code', 
    'O/P Plant Name', 
    "O/P Source System",
    'I/P Product Type', 
    'I/P Plant Code', 
    'I/P Plant Name'
];

GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.aprPqrCheckMultiChoicePickerColumns(namesList);


GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.aprPqrfilterMenu();

// All
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.all()
// Finished Goods
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.finishedGoods();
// Final API
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.finalAPI();
// Non-Batch MGD
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.nonBatchMgd();
// Standard
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.standard();

// // Verify Bookmark functionality
// GQ.Planets.Manufacturing.BatchFlows.rightClickBookmark(0);
// GQ.Planets.Manufacturing.BatchFlows.checkBookmarkFunationality();
// GQ.Planets.Manufacturing.BatchFlows.openARecord();

GQ.logout();

})

})

