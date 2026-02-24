import { Test } from 'mocha';
import { GQTest } from '../../../jj-pages/GQTest';
require('cypress-xpath');

describe('Sprint 6', () => {
    const GQ = new GQTest();


    it('Admin Data Binder - CTD Triangle View Validation', () => {
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
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
        // Select Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        //GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.CTDTriangle.openLandingPage();

        // Initialize total sum variable
        let totalRowCount = 0;

        // Module 1: Regulatory Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module1.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module1.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Module1 = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Module1);
                totalRowCount += Module1;  // Add to total sum
            });

        // Module 2: Summaries & Overviews
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module2.open();
        cy.wait(25000);
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.QualityOverallSummary.open();
        cy.wait(5000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.QualityOverallSummary.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let QualityOverallSummary = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(QualityOverallSummary);
                totalRowCount += QualityOverallSummary;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.NonClinicalSummary.open();
        cy.wait(25000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.NonClinicalSummary.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let NonClinicalSummary = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(NonClinicalSummary);
                totalRowCount += NonClinicalSummary;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.ClinicalSummary.open();
        cy.wait(15000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.ClinicalSummary.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let ClinicalSummary = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(ClinicalSummary);
                totalRowCount += ClinicalSummary;
            });

        // Module 3: Quality
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module3.open();
        cy.wait(15000);
        // Sub-sections of Module 3
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugProduct.open();
        // cy.wait(15000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugProduct.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let DrugProduct = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(DrugProduct);
                totalRowCount += DrugProduct;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugSubstance.open();
        cy.wait(25000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugSubstance.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let DrugSubstance = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(DrugSubstance);
                totalRowCount += DrugSubstance;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.RegionalInformation.open();
        cy.wait(15000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.RegionalInformation.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let RegionalInformation = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(RegionalInformation);
                totalRowCount += RegionalInformation;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Appendices.open();
        cy.wait(15000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Appendices.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Appendices = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Appendices);
                totalRowCount += Appendices;
            });

        // Module 4: Non-Clinical Study Reports
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module4.open();
        cy.wait(19000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module4.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Module4 = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Module4);
                totalRowCount += Module4;
            });

        // Module 5: Clinical Study Reports
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module5.open();
        cy.wait(30000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module5.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Module5 = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Module5);
                totalRowCount += Module5;
            });

        // Non-Module Specific Items
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.nonmodule.open();
        cy.wait(30000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.nonmodule.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let nonmodule = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(nonmodule);
                totalRowCount += nonmodule;
            });

        // Get the total row count and compare

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.gettotalrowcount.FilterToggle();

        cy.wait(30000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.gettotalrowcount.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let gettotalrowcount = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log('Expected Total Row Count:', totalRowCount);
                cy.log('Actual Total Row Count:', gettotalrowcount);

                // Compare the expected and actual total row count
                expect(totalRowCount).to.equal(gettotalrowcount);
            });
        GQ.logout();
    });




    it('User data binder CTD Triangle View Validation', () => {
        let totalRowCount = 0; // Initialize totalRowCount to 0 at the start

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
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage();

        // Module 1: Regulatory Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module1.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module1.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Module1 = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Module1);
                totalRowCount += Module1;  // Add to total sum
            });

        // Module 2: Summaries & Overviews
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module2.open();
        cy.wait(20000);
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.QualityOverallSummary.open();
        cy.wait(5000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.QualityOverallSummary.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let QualityOverallSummary = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(QualityOverallSummary);
                totalRowCount += QualityOverallSummary;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.NonClinicalSummary.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.NonClinicalSummary.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let NonClinicalSummary = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(NonClinicalSummary);
                totalRowCount += NonClinicalSummary;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.ClinicalSummary.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.ClinicalSummary.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let ClinicalSummary = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(ClinicalSummary);
                totalRowCount += ClinicalSummary;
            });

        // Module 3: Quality
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module3.open();
        cy.wait(20000);

        // Sub-sections of Module 3
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugProduct.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugProduct.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let DrugProduct = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(DrugProduct);
                totalRowCount += DrugProduct;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugSubstance.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugSubstance.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let DrugSubstance = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(DrugSubstance);
                totalRowCount += DrugSubstance;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.RegionalInformation.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.RegionalInformation.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let RegionalInformation = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(RegionalInformation);
                totalRowCount += RegionalInformation;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Appendices.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Appendices.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Appendices = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Appendices);
                totalRowCount += Appendices;
            });

        // Module 4: Non-Clinical Study Reports
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module4.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module4.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Module4 = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Module4);
                totalRowCount += Module4;
            });

        // Module 5: Clinical Study Reports
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module5.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module5.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Module5 = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Module5);
                totalRowCount += Module5;
            });

        // Non-Module Specific Items
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.nonmodule.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.nonmodule.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let nonmodule = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(nonmodule);
                totalRowCount += nonmodule;
            });

        // Get the total row count and compare
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.gettotalrowcount.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.gettotalrowcount.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let gettotalrowcount = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log('Expected Total Row Count:', totalRowCount);
                cy.log('Actual Total Row Count:', gettotalrowcount);

                // Compare the expected and actual total row count
                expect(totalRowCount).to.equal(gettotalrowcount);
            });
        GQ.logout()
    })



    it('ProductSpecific binder', () => {
        // Declare the totalRowCount variable before using it
        let totalRowCount = 0;  // Initialize the totalRowCount to 0

        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('ANTI-TAU');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MM Test Admin Data Binder for Alias Rules');

        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinders.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinders.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinders.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinders.selectall();
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MM Test Admin Data Binder for Alias Rules');

        // Click Child
        // GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinders.Expandrecord();
        GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.openLandingPage()

        // Module 1: Regulatory Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module1.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module1.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Module1 = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Module1);
                totalRowCount += Module1;  // Add to total sum
            });

        // Module 2: Summaries & Overviews
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module2.open();
        cy.wait(20000);
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.QualityOverallSummary.open();
        cy.wait(5000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.QualityOverallSummary.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let QualityOverallSummary = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(QualityOverallSummary);
                totalRowCount += QualityOverallSummary;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.NonClinicalSummary.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.NonClinicalSummary.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let NonClinicalSummary = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(NonClinicalSummary);
                totalRowCount += NonClinicalSummary;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.ClinicalSummary.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.ClinicalSummary.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let ClinicalSummary = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(ClinicalSummary);
                totalRowCount += ClinicalSummary;
            });

        // Module 3: Quality
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module3.open();
        cy.wait(20000);

        // Sub-sections of Module 3
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugProduct.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugProduct.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let DrugProduct = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(DrugProduct);
                totalRowCount += DrugProduct;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugSubstance.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugSubstance.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let DrugSubstance = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(DrugSubstance);
                totalRowCount += DrugSubstance;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.RegionalInformation.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.RegionalInformation.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let RegionalInformation = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(RegionalInformation);
                totalRowCount += RegionalInformation;
            });

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Appendices.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Appendices.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Appendices = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Appendices);
                totalRowCount += Appendices;
            });

        // Module 4: Non-Clinical Study Reports
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module4.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module4.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Module4 = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Module4);
                totalRowCount += Module4;
            });

        // Module 5: Clinical Study Reports
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module5.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module5.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let Module5 = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(Module5);
                totalRowCount += Module5;
            });

        // Non-Module Specific Items
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.nonmodule.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.nonmodule.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let nonmodule = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log(nonmodule);
                totalRowCount += nonmodule;
            });

        // Get the total row count and compare
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.gettotalrowcount.open();
        cy.wait(20000);
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.gettotalrowcount.getRowCount())
            .invoke('text').then((text) => {
                text = text.trim();
                let gettotalrowcount = parseInt(text.match(/[\d,]+/g)?.[0].replace(/,/g, ''));
                cy.log('Expected Total Row Count:', totalRowCount);
                cy.log('Actual Total Row Count:', gettotalrowcount);

                // Compare the expected and actual total row count
                expect(totalRowCount).to.equal(gettotalrowcount);
            });
        GQ.logout()
    })


})
