import { GQTest } from '../../jj-pages/GQTest'
// Sprint 7
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Sprint 7', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('13737-Bug-Other user group cannot de-link Documents TruVault in Linked Content for User Data blue binder', () => {

        // Login
        GQ.login('PQM360 System Administrator')

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('Test')

        // Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.readDocuments()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.readRegulatoryAffairs()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.readPostMarket()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.readQualityManagement()
        ).should('be.visible')
        
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.readLaboratoryInformation()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.readManufacturing()
        ).should('be.visible')


        // Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.linkSibling(0)

        // Logout
        GQ.logout()

        // Login
        GQ.login('PQM360 General User - Restricted')

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('Test')

        // Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.readDocuments()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.readRegulatoryAffairs()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.readPostMarket()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.readQualityManagement()
        ).should('be.visible')
        
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.readLaboratoryInformation()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.readManufacturing()
        ).should('be.visible')


        // Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.linkSibling(0)

        // Logout
        GQ.logout()

        // Login
        GQ.login('PQM 360 Regulatory Managers')

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('Test')

        // Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.readDocuments()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.readRegulatoryAffairs()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.readPostMarket()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.readQualityManagement()
        ).should('be.visible')
        
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.readLaboratoryInformation()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.readManufacturing()
        ).should('be.visible')


        // Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.linkSibling(0)

        // Logout
        GQ.logout()



    })
})
}