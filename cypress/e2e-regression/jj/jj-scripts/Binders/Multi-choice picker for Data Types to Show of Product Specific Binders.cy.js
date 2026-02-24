import { Test } from 'mocha';
import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Allows tree type multi-choice picker for "Data Types to Show" of Product Specific Binders', () => {
    const GQ = new GQTest();
    it('Allows tree type multi-choice picker for "Data Types to Show" of Product Specific Binders', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectqualitymanagement()
          // Click Plus
          GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
         
          // Click Child
          GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Expandrecord();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Nonconformances.openlandingpage()

        const nonConformanceTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ];
 
        nonConformanceTabs.forEach(tab => {
            cy.contains(tab).should('be.visible');
        });
 
        // Open CAPAs landing page
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.CAPAS.openlandingpage();
 
        // Check visibility of CAPAs Tabs
        const capTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
           // 'Supplemental Investigations',
            'CAPA Implementation',
            //'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ];
 
        capTabs.forEach(tab => {
            cy.contains(tab).should('be.visible');
        });
 
        // Open Audits landing page
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Audits.openlandingpage();
 
        // Check visibility of Audits Tabs
        const auditTabs = [
            'Audits',
            'Audit Observations'
        ];
 
        auditTabs.forEach(tab => {
            cy.contains(tab).should('be.visible');
        });
 
        // Logout
        GQ.logout();
    });
});
 


