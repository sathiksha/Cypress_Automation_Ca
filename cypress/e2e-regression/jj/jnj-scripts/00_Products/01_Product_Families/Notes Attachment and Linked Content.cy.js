import { GQTest } from '../../../jnj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Linked Content, Notes or Attachments Validation For Binders', () => {
    const GQ = new GQTest();
    it('Linked Content, Notes or Attachments Validation For Binders -- MSAT Product View - Cypress Test Admin Binder', () => {

        //Login
        GQ.Login()
        
        // Open Product
        GQ.Planets.openPlanet('Product')

        //Toggle Filter
        GQ.Planets.Product.ProductFamily.toggleFilter()

        // Open Product Family
        GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

        // Click Admin Data Binder
        GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

        // Attachments
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.open()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.CheckAttachmentIcon()

        // Create New Attachment
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.createNewAttachment('Robot.js')

        // Wait
        cy.wait(5000)

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.CheckAttachmentIcon()



        // Select the created Attachment
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.selectAttachment()

        // Trigger Delete
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.deleteAttachment()

        

        // // Click Yes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.clickYes()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.CheckAttachmentIcon()


        // Notes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.open()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.CheckNotesIcon()

        // Create New Notes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.addNewNote()

        // Refresh
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.refresh()

        // Wait
        cy.wait(5000)



        // Open the created Note
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.openNoteRecord('A New Note')

        // Enter Details
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.enterDetails('Note Name', "Sample")

        // Enter Details
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.saveAllData()

        

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.CheckNotesIcon()

        // Delete
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.deleteNoteFolder('Note Name')

        // Click Yes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.clickYes()

        

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.CheckNotesIcon()

        // Linked Content
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

        // Link Sibling
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.linkSibling()

        // Link First Record
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.linkRecordByIndex(0)

        // Wait
        cy.wait(5000)

        // Delete first record
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.deleteRecordByIndex(0)

        // Wait
        cy.wait(5000)

        // Logout
        GQ.Logout()

    })
    it('Linked Content, Notes or Attachments Validation For Binders -- MSAT Product View - Cypress Test User Data Binder', () => {

        //Login
        GQ.Login()
        
        // Open Product
        GQ.Planets.openPlanet('Product')

        //Toggle Filter
        GQ.Planets.Product.ProductFamily.toggleFilter()

        // Open Product Family
        GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

        // Click Admin Data Binder
        GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

        // Attachments
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.open()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.CheckAttachmentIcon()

        // Create New Attachment
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.createNewAttachment('Robot.js')

        // Wait
        cy.wait(5000)

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.CheckAttachmentIcon()



        // Select the created Attachment
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.selectAttachment()

        // Trigger Delete
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.deleteAttachment()

        

        // // Click Yes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.clickYes()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.CheckAttachmentIcon()


        // Notes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.open()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.CheckNotesIcon()

        // Create New Notes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.addNewNote()

        // Refresh
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.refresh()

        // Wait
        cy.wait(5000)



        // Open the created Note
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.openNoteRecord('A New Note')

        // Enter Details
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.enterDetails('Note Name', "Sample")

        // Enter Details
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.saveAllData()

        

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.CheckNotesIcon()

        // Delete
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.deleteNoteFolder('Note Name')

        // Click Yes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.clickYes()

        

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.CheckNotesIcon()

        // Linked Content
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

        // Link Sibling
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.linkSibling()

        // Link First Record
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.linkRecordByIndex(0)

        // Wait
        cy.wait(5000)

        // Delete first record
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.deleteRecordByIndex(0)

        // Wait
        cy.wait(5000)

        // Logout
        GQ.Logout()

    })
    it('Linked Content, Notes or Attachments Validation For Binders -- MSAT Product View - Cypress Test Product Specific Binder', () => {

        //Login
        GQ.Login()
        
        // Open Product
        GQ.Planets.openPlanet('Product')

        //Toggle Filter
        GQ.Planets.Product.ProductFamily.toggleFilter()

        // Open Product Family
        GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

        // Click Admin Data Binder
        GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Product Specific Binder')

        // Attachments
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.open()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.CheckAttachmentIcon()

        // Create New Attachment
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.createNewAttachment('Robot.js')

        // Wait
        cy.wait(5000)

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.CheckAttachmentIcon()



        // Select the created Attachment
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.selectAttachment()

        // Trigger Delete
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.deleteAttachment()

        

        // // Click Yes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.clickYes()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.CheckAttachmentIcon()


        // Notes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.open()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.CheckNotesIcon()

        // Create New Notes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.addNewNote()

        // Refresh
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.refresh()

        // Wait
        cy.wait(5000)



        // Open the created Note
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.openNoteRecord('A New Note')

        // Enter Details
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.enterDetails('Note Name', "Sample")

        // Enter Details
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.saveAllData()

        

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.CheckNotesIcon()

        // Delete
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.deleteNoteFolder('Note Name')

        // Click Yes
        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.clickYes()

        

        GQ.Planets.Product.ProductFamily.AdminDataBinder.Notes.CheckNotesIcon()

        // Linked Content
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

        // Link Sibling
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.linkSibling()

        // Link First Record
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.linkRecordByIndex(0)

        // Wait
        cy.wait(5000)

        // Delete first record
        GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.deleteRecordByIndex(0)

        // Wait
        cy.wait(5000)

        // Logout
        GQ.Logout()

    })
})
