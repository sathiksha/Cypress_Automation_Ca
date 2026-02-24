import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('Ingest and display Manufacturing Site in Release data view', () => {
        const GQ = new GQTest();
        
        GQ.login('PQM360 General User')

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

        // Click Contents
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        // Manufacturing Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()
        
        // Assert
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.selectLocator()).should('not.be.visible')

        // Logout
        GQ.logout()
    })
})