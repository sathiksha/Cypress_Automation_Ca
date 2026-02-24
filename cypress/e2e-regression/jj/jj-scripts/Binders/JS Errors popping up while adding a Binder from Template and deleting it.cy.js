import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest;
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Bug Tracking Test', () => {
    it('7467-JS Errors popping up while adding a Binder from Template and deleting it', () => {
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

        // Copy Template Binder icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.copyBinderFromTemplate('MSAT Product View - Original')

        // Select Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Original')

        // Delete User Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.deleteBinderByText('MSAT Product View - Original')

        // Select Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()
        
        //Logout
        GQ.logout()
    })
    })
}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            

           
            
        
