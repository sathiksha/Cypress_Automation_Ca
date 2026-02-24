import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
if (!Cypress.env("onlyRunReadOnlyTests")) {
    describe('Bug Tracking Tests', () => {
        it('8974-When a Green Binder is created by a Product Owner the option to Check-In needs to be available from Rightclick command', () => {
            // Login 
            GQ.login()

            // // Open Product
            GQ.Planets.Product.openLandingPage()

            // Product Families
            GQ.Planets.Product.ProductFamilies.openLandingPage()

            // Toggle Filter
            GQ.Planets.Product.ProductFamilies.toggleFilter()

            // Open 'APALUTAMIDE'
            GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

            // select Admin Data Binder
            cy.wait(2000);
            GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('MSAT Product View - Cypress Test Admin Binder')

            // Create Green folder
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.createProductSpecificFolder('test', ['Regulatory Affairs', 'Documents'])

            // Click plus
            GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

            // checkBinderOpenedorNot
            GQ.Planets.Product.ProductFamilies.ProductFamily.checkBinderOpenedorNot('MSAT Product View - Cypress Test Admin Binder')

            // Select specific folder
            // GQ.Planets.Product.ProductFamilies.ProductFamily.rightClickSpecificFolder('test')

            // 

            // Delete Specific folder
            GQ.Planets.Product.ProductFamilies.ProductFamily.deleteSpecificFolder('test')

            // Logout
            GQ.logout()





        })
    })
}
