import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 3', () => {
    const GQ = new GQTest();
    it('12253-Test Case- Row expand to zoom in Linked Content selector in User Data Binder and Product Specific Binder shows editable form view.cy', () => {

        // Login 
        GQ.login()

        // Post Market
        GQ.Planets.PostMarket.openLandingPage()

        // Complaints Visible
        cy.getSC(GQ.Planets.PostMarket.Complaints.Complaints.locator).should('be.visible')

        // Complaint Records Visible
        cy.getSC(GQ.Planets.PostMarket.Complaints.ComplaintRecords.locator).should('be.visible')

        // AIMI Analytics Visible
        cy.getSC(GQ.Planets.PostMarket.Complaints.AIMIAnalytics.locator).should('be.visible')

        // Open Complaints
        GQ.Planets.PostMarket.Complaints.Complaints.openLandingPage()

        // Expand First Record
        GQ.Planets.PostMarket.Complaints.Complaints.expandRecordByIndex(0)

        // Details Visible
        cy.getSC(GQ.Planets.PostMarket.Complaints.Complaints.ExpandedComplaint.Details.locator).should('be.visible')
       
        // Expect This to be read-only
        cy.expectToBeReadOnly(
            GQ.Planets.PostMarket.Complaints.Complaints.ExpandedComplaint.Details.trackingNumberField
        )

        // Navigate to Laboratory Information
        GQ.NavBar.navigateToLaboratoryInformation()

        // Stability Data Visible
        cy.getSC(GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.locator).should('be.visible')

        // Stability Studies Visible
        cy.getSC(GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.locator).should('be.visible')

        // Release Data Visible
        cy.getSC(GQ.Planets.LaboratoryInformation.LaboratoryRecords.ReleaseData.locator).should('be.visible')

        // Specifications Visible
        cy.getSC(GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.locator).should('be.visible')

        // Open Stability Studies
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()

        // Toggle Filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.selectStudyRecord('Study-251217')
        
        cy.wait(3000);
        // Details Visible
        cy.getSC(GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.ExpandedStabilityStudy.Details.locator).should('be.visible')
       
        // Open Details
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.ExpandedStabilityStudy.Details.open()

        // Expect This to be read-only
        cy.expectToBeReadOnly(
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.ExpandedStabilityStudy.Details.studyIDField
        )

        // Open Specifications
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.open()

        // Expand First Record By Index
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.expandRecordByIndex(0)

        // Details Visible
        cy.getSC(GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.ExpandedSpecification.Details.locator).should('be.visible')

        // Expect This to be read-only
        cy.expectToBeReadOnly(
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.ExpandedSpecification.Details.specificationField
        )

        // Manufacturing Planet
        GQ.NavBar.navigateToManufacturing()

        // Materials & Batch Flows Visible
        cy.getSC(GQ.Planets.Manufacturing.HeaderMaterialsAndBatchFlows).should('be.visible')

        // Order Release Dashboard Visible
        cy.getSC(GQ.Planets.Manufacturing.HeaderOrderReleaseDashboard.locator).should('be.visible')

        // Materials Visible
        cy.getSC(GQ.Planets.Manufacturing.Materials.locator).should('be.visible')

        // Open Materials
        GQ.Planets.Manufacturing.Materials.openLandingPage()

        // Open Record by index
        GQ.Planets.Manufacturing.Materials.openRecordByIndex(0)

        // Details Visible
        cy.getSC(GQ.Planets.Manufacturing.Materials.Material.Details.locator).should('be.visible')

        // Open Details
        GQ.Planets.Manufacturing.Materials.Material.Details.open()

        // Expect This to be read-only
        cy.expectToBeReadOnly(
            GQ.Planets.Manufacturing.Materials.Material.Details.productCodeField
        )

        // Maximize Selector
        GQ.Planets.Manufacturing.Materials.Material.maximizeSelector()

        // Open Batches
        GQ.Planets.Manufacturing.Batches.open()

        // Open Record by index
        GQ.Planets.Manufacturing.Batches.openRecordByIndex(0)

        // Details Visible
        cy.getSC(GQ.Planets.Manufacturing.Batches.Details.locator).should('be.visible')

        // Open Details
        GQ.Planets.Manufacturing.Batches.Details.open()

        // Expect This to be read-only
        cy.expectToBeReadOnly(
            GQ.Planets.Manufacturing.Batches.Details.nameField
        )

        // Product
        GQ.NavBar.navigateToProduct()

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

        // User Data Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('MSAT Product View - Cypress Test User Data Binder')

        // Logout   
        GQ.logout()

    })
})
