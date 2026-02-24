import { GQTest } from '../../jj-pages/GQTest'
import productPage from '../../jj-pages/productPage';
// Sprint 3
require('cypress-xpath')

describe('Sprint 4', () => {
    const GQ = new GQTest();
    const productTab = new productPage()

    it('ProductSpecific binder', () => {

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
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');

        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectqualitymanagement();
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        // GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.expandrecord(1);
        // Open linked content
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.openlandingpage();

        // Regulatory Affairs
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.RegulatoryAffairs();


        //  Regulatory Affairs tabs
        productTab.checkDefaultSubTabIsSelectedAs('CTD/Submission Records')
        productTab.getsubTabOf('Products')
        productTab.getsubTabOf('Applications')

        // Post Market
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.PostMarket();

        // Iterate through PostMarket tabs
        productTab.checkDefaultSubTabIsSelectedAs('Complaints')
        productTab.getsubTabOf('Complaint Records')

        // Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.qualitymanagement();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.Nonconformances();

        // Nonconformance Tabs

        // Iterate through Nonconformance tabs
        productTab.getNonconformancesubTabOf('Containments')
        productTab.getNonconformancesubTabOf('NC Investigations')
        productTab.getNonconformancesubTabOf('Supplemental Investigations')
        productTab.getNonconformancesubTabOf('Laboratory Investigations')
        productTab.getNonconformancesubTabOf('NC Corrections')
        productTab.getNonconformancesubTabOf('Actions')
        productTab.getNonconformancesubTabOf('Risk Assessments')

        // CAPAs
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.CAPAS()


        // Iterate through CAPAs tabs
        productTab.getCAPAsubTabOf('Interim Controls')
        productTab.getCAPAsubTabOf('CAPA Investigations')
        productTab.getCAPAsubTabOf('Supplemental Investigations')
        productTab.getCAPAsubTabOf('CAPA Implementation')
        productTab.getCAPAsubTabOf('Actions')
        productTab.getCAPAsubTabOf('Effectiveness Plan')
        productTab.getCAPAsubTabOf('Effectiveness Review')
        // Audits
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.Audits();

        // Iterate through Audits tabs
        productTab.getAuditsubTabOf('Audit Observations')
        //Accounts
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.Accounts();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.LaboratoryInformation();

        // Laboratory Information Tabs


        // Iterate through Laboratory Information tabs
        productTab.checkDefaultSubTabIsSelectedAs('Stability Studies')
        productTab.getsubTabOf('Stability Data')
        productTab.getsubTabOf('Release Data')
        productTab.getsubTabOf('Specifications')

        // Manufacturing (Non GxP)
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.ManufacturingNonGxP();
        productTab.checkDefaultSubTabIsSelectedAs('Materials')
        productTab.getsubTabOf('Batches')
        GQ.logout();
    });
})
