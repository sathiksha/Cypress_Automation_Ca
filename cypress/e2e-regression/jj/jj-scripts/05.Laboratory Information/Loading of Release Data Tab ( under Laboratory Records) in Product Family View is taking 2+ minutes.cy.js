import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Bug Tracking Test', {retries:2}, () => {
    it('7466-Unable to save an attachment on Data Binders', () => {
        const GQ = new GQTest();
        // Login to Products
        GQ.login();

        // Open Product
        GQ.Planets.Product.openLandingPage()

        //Open Product Planet
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Apalutamide
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Click data
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectParent()

        // Click Contents
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        // Related Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

        // Release data
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.openLandingPage()

        // Test Lazy Count
        cy.testLazyCount(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Filtered.rowId()
        )

        //Logout
        GQ.logout()
    })
})
}
        
        
    
        