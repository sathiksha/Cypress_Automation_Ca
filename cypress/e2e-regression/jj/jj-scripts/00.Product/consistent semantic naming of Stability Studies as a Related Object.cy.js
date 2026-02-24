import { GQTest } from '../../jj-pages/GQTest';
// Sprint 4
require('cypress-xpath');
describe('COMET Laboratory Investigations Related Object Tabs', () => {
    const GQ = new GQTest();

    it('Allows Related Objects of Stability Studies', () => {
        // Step 1: User login
        GQ.login();

        GQ.Planets.QualityManagement.openLandingPage()

        // Change controls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        // Nonconformances
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.open()

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.expandtherecord(3);

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.Relatedobject()
        const stabilityStudyTabs = [

            //'Specifications',
            'Test Methods',
            'Nonconformances',
            'Stability Studies',
            //'Batches'

        ];

        // Step 5: Verify that each tab is visible
        stabilityStudyTabs.forEach(tab => {
            cy.contains(tab).should('be.visible');
        });
        GQ.Planets.Product.openLandingPage()
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.laboratoryInvestigation()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.expandrecord(2)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.relatedobjects()
        const stabilityStudTabs = [

            //'Specifications',
            'Test Methods',
            'Nonconformances',
            'Stability Studies',
            //'Batches'

        ];

        // Step 5: Verify that each tab is visible
        stabilityStudTabs.forEach(tab => {
            cy.contains(tab).should('be.visible');
        });

        GQ.logout();
    });
    it('Specifications Related Object Tabs', () => {
        // Step 1: User login
        GQ.login();
        // Open Laboratory Information
        GQ.Planets.LaboratoryInformation.openLandingPage()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.open()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.expandRecordByIndex(2)

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.ExpandedSpecification.RelatedObjects.open()
        const SpecificationsTabs = [

            'Documents',

            'Batches',
            'Stability Studies'


        ];

        // Step 5: Verify that each tab is visible
        SpecificationsTabs.forEach(tab => {
            cy.contains(tab).should('be.visible');
        });

        GQ.Planets.Product.openLandingPage()
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.selectRecordByIndex(1);

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.Relatedobjects()

        const laSpecificationsTabs = [

            'Documents',
            'Batches',
            'Stability Studies'
        ];

        // Step 5: Verify that each tab is visible
        laSpecificationsTabs.forEach(tab => {
            if (tab === 'Documents') {
                cy.get('td.multiLayoutButtonNoLeftBorderTextSelected')
                    .should('contain.text', tab)
                    .and('be.visible');
            } else {
                cy.get('td.multiLayoutButtonText')
                    .should('contain.text', tab)
                    .and('be.visible');
            }
        });

        GQ.logout();
    });
    it('Batches Related Object Tab', () => {
        // Step 1: User login
        GQ.login();
        // Open Laboratory Information
        GQ.Planets.Manufacturing.openLandingPage()

        GQ.Planets.Manufacturing.batches.openLandingPage()

        GQ.Planets.Manufacturing.batches.expandrecord(2);

        GQ.Planets.Manufacturing.batches.relatedobject()

        GQ.Planets.Manufacturing.Nonconformance.openLandingPage()

        GQ.Planets.Manufacturing.Escalations.openLandingPage()

        GQ.Planets.Manufacturing.CAPAs.openLandingPage()

        GQ.Planets.Manufacturing.ChangeControls.openLandingPage()

        GQ.Planets.Manufacturing.stabilityStudies.openLandingPage()

        GQ.Planets.Manufacturing.Complaints.openLandingPage()

        GQ.Planets.Product.openLandingPage()

        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.expandrecord.openlandingpage(1)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.expandrecord.relatedobject()
        
        const batchesTabs = [

            'Nonconformances',
            'Escalations',
            'CAPAs',
            'Change Controls',
            'Stability Studies',
            'Complaints'
        ];

        // Step 5: Verify that each tab is visible
        batchesTabs.forEach(tab => {
            if (tab === 'Nonconformances') {
                cy.get('td.multiLayoutButtonNoLeftBorderTextSelected')
                    .should('contain.text', tab)
                    .and('be.visible');
            } else {
                cy.get('td.multiLayoutButtonText')
                    .should('contain.text', tab)
                    .and('be.visible');
            }
        });

        GQ.logout();

        //cy.contains('Escalations').should('be.visible')
    })

    it('Batch Flows Related Object Tabs', () => {
        // Step 1: User login
        GQ.login();
        // Open Laboratory Information
        GQ.Planets.Manufacturing.openLandingPage()

        GQ.Planets.Manufacturing.BatchFlows.openLandingPage()

        GQ.Planets.Manufacturing.BatchFlows.expandrecord(1)

        GQ.Planets.Manufacturing.BatchFlows.relatedobject()

        GQ.Planets.Manufacturing.BatchFlows.Nonconformance()

        GQ.Planets.Manufacturing.BatchFlows.Escalations()

        GQ.Planets.Manufacturing.BatchFlows.CAPAs()

        GQ.Planets.Manufacturing.BatchFlows.ChangeControls()

        GQ.Planets.Manufacturing.BatchFlows.stabilityStudies()

        GQ.Planets.Manufacturing.BatchFlows.Complaints()

        GQ.Planets.Product.openLandingPage()

        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openLandingPage()
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.expandrecord(1)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.relatedobject()

         const batchFlowTabs = [
            'Nonconformances',
            'Escalations',
            'CAPAs',
            'Change Controls',
            'Stability Studies',
            'Complaints'
        ];

        // Step 5: Verify that each tab is visible
        batchFlowTabs.forEach(tab => {
            if (tab === 'Nonconformances') {
                cy.get('td.multiLayoutButtonNoLeftBorderTextSelected')
                    .should('contain.text', tab)
                    .and('be.visible');
            } else {
                cy.get('td.multiLayoutButtonText')
                    .should('contain.text', tab)
                    .and('be.visible');
            }
        });
        GQ.logout();

    })
})
