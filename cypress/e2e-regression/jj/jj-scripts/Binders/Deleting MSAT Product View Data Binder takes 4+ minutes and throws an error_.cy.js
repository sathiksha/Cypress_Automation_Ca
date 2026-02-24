import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Bug Tracking Tests', () => {
    it('SYS-001- Bug fix on conversion user data binder to ADB', () => {
        
        // GQ
        const GQ = new GQTest();
        
        // Login to Products
        GQ.login();

        // Open Product
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()
    
        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()
    
        // Open 'APALUTAMIDE'
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
    
        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()
    
        // Check out MSAT Product View – Copy
        GQ.Planets.Product.ProductFamilies.ProductFamily.checkoutUserDataBinder('MSAT Product View - Original')
    
        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()
    
        // Click the checked out one
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Original')
    
        // Duplicate
        GQ.Planets.Product.ProductFamilies.ProductFamily.duplicate()
    
        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.toggleSelector()
    
        // Click the checked out one
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Original')
    
        // Open Home
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.open()
    
        // Change Name
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.setName('MSAT Product View - Cypress Test')
    
        // Save
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.save()
    
        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Filter Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.filterRecords('MSAT Product View - Cypress Test')

        // Select record
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('MSAT Product View - Cypress Test')
        
        // Delete User Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.deleteRowWithYes()
        
        // Select Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()
        
        //Logout
        GQ.logout()
   
    })
})
}
