import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
if (!Cypress.env("onlyRunReadOnlyTests")) {
describe('Bug Tracking Tests', () => {
    it('8373-Product Owner role does not have ability to check-out product-specific binder green', () => {
        // Login
        GQ.login('PQM360 Product Owner')

        // // Open Product
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()
    
        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()
    
        // Open 'APALUTAMIDE'
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // select Admin Data Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('MSAT Product View - Cypress Test Admin Binder')

        // Create Green folder
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.createProductSpecificFolder('test',['Regulatory Affairs','Documents'])

        // Click plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

        // checkBinderOpenedorNot
        // GQ.Planets.Product.ProductFamilies.ProductFamily.checkBinderOpenedorNot('MSAT Product View - Cypress Test Admin Binder')

        // Select specific folder
        GQ.Planets.Product.ProductFamilies.ProductFamily.rightClickSpecificFolder('test')

        // Check out
        GQ.Planets.Product.ProductFamilies.ProductFamily.checkOutSpecificFolder()

        // Delete Specific folder
        GQ.Planets.Product.ProductFamilies.ProductFamily.deleteSpecificFolder('test')

        // Logout
        GQ.logout()

    })
})
}
