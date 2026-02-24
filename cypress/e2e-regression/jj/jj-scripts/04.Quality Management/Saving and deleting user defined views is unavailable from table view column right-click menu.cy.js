import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Bug Tracking Tests', () => {
    it('9092 - Saving and deleting user defined views is unavailable from table view column right-click menu', () => {
        // Login 
        GQ.login('PQM360 General User')

        // Open Product
        GQ.Planets.Product.openLandingPage()

        // Toggle filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Complaints tab
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        // Quality Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.trackWise()

   
        //Right Click on Column Header
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.columnHeaderrightClick()

        // Click Saved Views
        cy.contains('Saved views').click()

        //Click Save View
        cy.contains('Save View...').click()

        //Sample View Naming
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.viewName();

        //Save
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.clickSave()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.trackWise()

        //Right Click on Column Header
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.columnHeaderrightClick()

        //Click Saved Views
        cy.contains('Saved views').click()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.columnHeaderrightClick()

        //click Check box
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.clickCheck()

        //Delete Saved View
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.deleteSavedView()
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.clickYes()


        // Logout
        GQ.logout()

    })
})