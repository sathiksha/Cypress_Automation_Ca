import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('Form sections are non-editable for Specifications', () => {
        const GQ = new GQTest();
        // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.Product.openLandingPage()
    
    cy.wait(2000);
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

    // Laboratory Records
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

    // Specifications
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.openLandingPage()

    // Expand First Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.Filtered.expandRecordByIndex(0)

    // Check if Read-Only 

     cy.expectToBeReadOnly(
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.Filtered.ExpandedRecord.Details.specificationField
    )


    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.Filtered.checkContentReadOnly()
    
    // Go to Lab Info
    GQ.NavBar.navigateToLaboratoryInformation()

    // Open Specifications
    GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.open()

    // Expand first Record
    GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.expandRecordByIndex(0)

    // Check if Read-Only 
    cy.expectToBeReadOnly(
      GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.ExpandedSpecification.Details.specificationField
    )

    // Logout
    GQ.logout();

})
})

