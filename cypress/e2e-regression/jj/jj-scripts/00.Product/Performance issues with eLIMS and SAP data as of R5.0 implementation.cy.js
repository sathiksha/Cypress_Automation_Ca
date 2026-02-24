import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 4', () => {
    const GQ = new GQTest();
    it('11584-Test Case-BUG (PROD)-Performance issues with eLIMS and SAP data as of R5.0 implementation', () => {
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



        // // Open Laboratory Information
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

        // Verify Studies
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.locator).should('be.visible')

        // Verify Stability Data
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.StabilityData.locator).should('be.visible')

        // Verify Release Data
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.locator).should('be.visible')

        // Verify Specifications
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.locator).should('be.visible')

        // Open Release Data
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.ReleaseDataOpen()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.AliasRuleMenuValidation()
        // Verify All
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.AllMenuValidation()
        // Verify Default View
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.FilterMenuValidation()
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Filtered.DefaultViewValidation()

        // Verify APQR View
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Filtered.APQRViewValidation()

        //  Open Manufacturing Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.ManufacturingRecordsopen()

        // Verify Materials
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.locator).should('be.visible')

        // Verify Batches
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.locator).should('be.visible')

        // Verify Batch Flows
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.locator).should('be.visible')

        // Verify SC Maps
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.SCMaps.locator).should('be.visible')

        // Open Batch Flows
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openLandingPage()

        // Verify Filtered
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.locator).should('be.visible')

        // Verify Alias Rule
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.AliasRule.locator).should('be.visible')

        // Verify All
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.All.locator).should('be.visible')

        // Verify Default View
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.defaultViewLocator).should('be.visible')

        // Verify APR PQR View
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.APQRViewLocator).should('be.visible')

        //Logout
        GQ.logout()

    })
})
