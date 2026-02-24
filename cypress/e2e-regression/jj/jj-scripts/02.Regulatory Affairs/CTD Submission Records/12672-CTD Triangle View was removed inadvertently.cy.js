import { GQTest } from '../../../jj-pages/GQTest'
// Sprint 5
require('cypress-xpath')
describe('Sprint 5', () => {
    const GQ = new GQTest();
    it('12672 CTD Triangle View was removed inadvertently', () => {
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

        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage()

        // Check the visibility of the CTD Triangle element
        cy.contains('CTD Triangle')  // Ensure the element exists before checking visibility
            .should('be.visible');  // Now check if it is visible

    })
})
