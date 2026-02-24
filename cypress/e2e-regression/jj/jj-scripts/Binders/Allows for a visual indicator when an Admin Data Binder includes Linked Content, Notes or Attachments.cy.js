import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 3', () => {
    const GQ = new GQTest();
    it('11591-Test case-Allows for a visual indicator when an Admin Data Binder includes Linked Content, Notes or Attachments', () => {

        // Login 
        GQ.login()

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

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        // Attachments
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.open()

        // Create New Attachment
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.createNewAttachment('Robot.js')

        // Wait
        cy.wait(5000)
        
       

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

        // Wait
        cy.wait(5000)

       

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

        // Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.open()

        // Link Sibling
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.linkSibling()

        // Link First Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.linkRecordByIndex(0)

        // Wait
        cy.wait(5000)

        // Delete first record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.deleteRecordByIndex(0)

        // Wait
        cy.wait(5000)

        // Logout
        GQ.logout()

    })
})
