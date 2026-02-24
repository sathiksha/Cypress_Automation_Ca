import { GQTest } from '../../jj-pages/GQTest'
// Sprint 2
describe('Sprint 3', () => {
    const GQ = new GQTest();
    it('11576-Test Case-Allows PQM360 Business Administrator to add or delete Attachments and Notes in any Product Specific Binder (green binder)', () => {

        // Login Step
        GQ.login('PQM360 Business Administrator')

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

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

        // Select Any Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        // Check if the 'Create Product Specific Folder' Button exists
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.SelectorGridBarButtons.CreateProductSpecificFolder).should('be.visible')

        // Create Product Specific Folder
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.createProductSpecificFolder('Sample',['Documents','Products'])

        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
        
        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        // Attachments
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.open()

        // Create New Attachment
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.createNewAttachment('Robot.js')

        // Select the created Attachment
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.selectAttachment()

        // Trigger Delete
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.deleteAttachment()

        // Click Yes
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.clickYes()

        // Notes
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Notes.open()

        // Create New Notes
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Notes.addNewNote()

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Notes.refresh()

        // Open the created Note
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Notes.openNoteRecord('A New Note')

        // Enter Details
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Notes.enterDetails('Note Name',"Sample")

        // Enter Details
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Notes.saveAllData()

        // Delete
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Notes.deleteNoteFolder('Note Name')

        // Click Yes
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Notes.clickYes()

        // Delete the entire Green Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.deleteRowWithYes()

        // Logout
        GQ.logout()

})
})
