import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Bug Tracking Test', () => {
    it('7469-Performance of Admin Data Binder workflow state changes is much worse on PG than MSSQL Server', () => {
        
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

        // Toggle Selector
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

        // Fix
        GQ.Planets.Product.ProductFamilies.ProductFamily.toggleSelector()

        // Select the Changed One
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowWithUserName('MSAT Product View - Cypress Test', 'Optiqs Administrator')

        // Convert to Admin Data Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.convertToAdminDataBinder('MSAT Product View - Cypress Test', 'Optiqs Administrator')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Element Library
        GQ.NavBar.ElementLibrary.openLandingPage()

        // Data Management
        GQ.NavBar.ElementLibrary.DataManagement.open()

        // Admin Data Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.open()

        // Search for the created one
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRowByText('MSAT Product View - Cypress Test')

        // RightClick Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.rightClickBinder('MSAT Product View - Cypress Test')

        // Pull Back
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickPullBack()

        // RightClick Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.rightClickBinder('MSAT Product View - Cypress Test')

        // Check out
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickCheckOut()

        // RightClick Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.rightClickBinder('MSAT Product View - Cypress Test')

        // Check out
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickCheckIn()

        // RightClick Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.rightClickBinder('MSAT Product View - Cypress Test')

        // Release
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickRelease()


        // RightClick Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.rightClickBinder('MSAT Product View - Cypress Test')

        // Pull Back
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickPullBack()

        // RightClick Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.rightClickBinder('MSAT Product View - Cypress Test')

        // Checkout
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickCheckOut()

        // Try to Delete
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.deleteWithWarning('MSAT Product View - Cypress Test')

        // Refresh
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector()

        // Logout
        GQ.logout()
   
    })
})
}
       
       
       
       
       
       
   
   
    


