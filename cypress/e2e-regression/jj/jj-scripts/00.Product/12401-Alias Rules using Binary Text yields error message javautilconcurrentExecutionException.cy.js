import { GQTest } from '../../jj-pages/GQTest'
// Sprint 4
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Sprint 4', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('Alias Rules using Binary Text yields error message javautilconcurrentExecutionException', () => {

        // Login
        GQ.login()

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('BORTEZOMIB')

        // Content tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        // Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.openLandingPage()

        // Alias Rule
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.open()

        // Enter the filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.newFilter_fieldContainsValue(0,'_Binary Text','dosepak')

        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.open()

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.refresh()

        // Alias Rule
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.open()

        // Clear Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.clearFilter_fieldContainsValue(0,'[ None ]')

        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.open()

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.refresh()
        
        // Logout
        GQ.logout()

    })
})
}
