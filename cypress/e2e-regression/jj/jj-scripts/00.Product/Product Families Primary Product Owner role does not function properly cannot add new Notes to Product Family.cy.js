import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
describe('Sprint 3', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('Product Families Primary Product Owner role does not function properly cannot add new Notes to Product Family', () => {

        // Login
        GQ.login()

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        // Roles 
        GQ.Planets.Product.ProductFamilies.ProductFamily.Roles.open()

        // Check Primary owner
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Roles.checkPrimaryOwner()
        ).should('exist')

        // NOTES
        GQ.Planets.Product.ProductFamilies.ProductFamily.Notes.open()

        // Create Notes
        GQ.Planets.Product.ProductFamilies.ProductFamily.Notes.createNotesIcon()

        // Select Notes
        GQ.Planets.Product.ProductFamilies.ProductFamily.Notes.selectNoteByText('A New Note')

        // Delete Note
        GQ.Planets.Product.ProductFamilies.ProductFamily.Notes.DeleteNote()

        // Logout
        GQ.logout()

    })
})