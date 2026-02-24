import { GQTest } from '../../jj-pages/GQTest'
require('cypress-xpath')
describe('Allows Stability Data, Release Data (eLIMS) and Specifications (TruVault) as Related Object of Batches and Batch Flows', () => {
  const GQ = new GQTest();
it('BatchFlows from Planet', () => {
    // Login
    GQ.login();
    // Open Quality Management
    GQ.Planets.Manufacturing.openLandingPage();
    // Batch Flows
    GQ.Planets.Manufacturing.BatchFlows.openLandingPage();

    GQ.Planets.Manufacturing.BatchFlows.openARecord(0);

            let tabNames = [
                'Batch Explorer',
                'Batch Flow',
                'Material Flow',
                'Related Objects'
            ]

    GQ.Planets.Manufacturing.BatchFlows.checkBatchesTabs(tabNames);

    GQ.Planets.Manufacturing.BatchFlows.openRelatedObjects();

    //Related Objects
    GQ.Planets.Manufacturing.BatchFlows.viewrelated();
        
    GQ.logout();

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

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openARecord(0);

    let tabNames = [
        'Batch Explorer',
        'Batch Flow',
        'Material Flow',
        'Related Objects'
    ]

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.checkBatchesTabs(tabNames);

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openRelatedObjects();

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.viewrelated();

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

 
    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openARecord(0);

    let tabNames = [
        'Batch Explorer',
        'Batch Flow',
        'Material Flow',
        'Related Objects'
    ]

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openRelatedObjects()

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.checkBatchesTabs(tabNames);

   GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.viewrelated();

    GQ.logout();
})
it('BatchFlows from Product Specific Binder', () => {
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

   
    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openARecord(0);

    let tabNames = [
        'Batch Explorer',
        'Batch Flow',
        'Material Flow',
        'Related Objects'
    ]

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openRelatedObjects()

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.checkBatchesTabs(tabNames);

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.viewrelated();
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


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openARecord(0);

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.checkBatchesTabs(tabNames);

         GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.viewrelated();

        GQ.logout();

})

//Batches
it('Batch from Planet', () => {
    // Login
    GQ.login();
    // Open Quality Management
    GQ.Planets.Manufacturing.openLandingPage();
    // Batch Flows
    GQ.Planets.Manufacturing.Batches.open();

    GQ.Planets.Manufacturing.Batches.openRecordByIndex(0);

            let tabNames = [
                'Batch Explorer',
                'Batch Flow',
                'Material Flow',
                'Related Objects'
            ]

    GQ.Planets.Manufacturing.Batches.checkBatchesTabs(tabNames);

    GQ.Planets.Manufacturing.Batches.openRelatedObjects();

    //Related Objects
    GQ.Planets.Manufacturing.Batches.viewrelated();

    GQ.logout();

})
it('Batch from Admin Data Binder', () => {
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

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openBatches();

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openBatchRecord(0);

    let tabNames = [
        'Batch Explorer',
        'Batch Flow',
        'Material Flow',
        'Related Objects'
    ]

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.checkBatchesTabs(tabNames);

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openBatchRelatedObjects();

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.viewrelated();


    //Linked Content

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open();

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.open();

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.open();

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.linkSibling(0);

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.openRecordByIndex(0);

    //Batch Explorer
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.viewbatch();

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.openRelatedObjects();

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.viewrelated();
    


    GQ.logout();

})
it('Batch from User Data Binder', () => {
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
    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openBatches();

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openBatchRecord(0);

    let tabNames = [
        'Batch Explorer',
        'Batch Flow',
        'Material Flow',
        'Related Objects'
    ]

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.checkBatchesTabs(tabNames);

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openBatchRelatedObjects();

   GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.viewrelated();


    //Linked Content

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open();

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.open();

    //Open Batches
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.openbatch();

    //Link Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.BinderBatches.linkSibling(0);

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.BinderBatches.openRecordByIndex(0);

    //Batch Explorer
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.BinderBatches.batchexplorer();

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.BinderBatches.openRelatedObjects();

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.BinderBatches.viewrelated();


    GQ.logout();

})
it('Batch from Product Specific Binder', () => {
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
    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openBatches();

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openBatchRecord(0);

    let tabNames = [
        'Batch Explorer',
        'Batch Flow',
        'Material Flow',
        'Related Objects'
    ]

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.checkBatchesTabs(tabNames);

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.openBatchRelatedObjects();

    GQ.Planets.Product.ProductFamilies.ProductFamily.ManufacturingBatchflows.viewrelated();

    //Linked Content

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open();

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.open();

    //Open Batches
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.open()
    //Link a Record
    // cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Manufacturing_1||scClass=VLayout||index=7||length=9||classIndex=0||classLength=1||scClassIndex=7||scClassLength=9]/body/layoutBody/member[Class=QScreen_Batches_1||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_B||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/linkObjectButton/icon').click()
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.BinderBatches.linkSibling(0);

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.BinderBatches.openRecordByIndex(0);

    //Batch Explorer
    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.BinderBatches.batchexplorer()

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.BinderBatches.openRelatedObjects();

    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Batches.BinderBatches.viewrelated();
    
    GQ.logout();

})
it('Batch from Product Family', () => {
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
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.open();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.expandrecord.openlandingpage(0);

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.expandrecord.checkBatchesTabs(tabNames);

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.expandrecord.relatedobject();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.expandrecord.viewrelated();

        GQ.logout();
})

})

