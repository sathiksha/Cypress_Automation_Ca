import { GQTest } from '../../jj-pages/GQTest'
require('cypress-xpath')
describe('Sprint 12 - Allows "Source of Change", "Reference Number" and "Supplementary Info" to be available in Field Picker for use in Documents', () => {
    const GQ = new GQTest();
    it('Allows "Source of Change", "Reference Number" and "Supplementary Info" - Admin Binder', () => {

        // Login
        GQ.login()

        // Navigate to the Documents planet
        GQ.Planets.Documents.openLandingPage()

        // Click Documents tab
        GQ.Planets.Documents.Documents.openLandingPage()

        // Add 'Source of Change, Reference Number, Supplementary Info Column'
        cy.addColumn(GQ.Planets.Documents.Documents.numberColumnHeader(), ['Source of Change', 'Reference Number', 'Supplementary Info'])

        // Home
        GQ.NavBar.Home.openLandingPage()

        // Click product planet
        GQ.Planets.Product.openLandingPage()

        // Open product family 
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        //Open APALUTAMIDE        
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the Admin binder -Smart Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test')

        // Click documents tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.openLandingPage()

        // Add column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.headerID(), ['Source of Change', 'Reference Number', 'Supplementary Info'])

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        //Open Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.open()

        // Add column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.lcHeaderID(), ['Source of Change', 'Reference Number', 'Supplementary Info'])

        // Logout
        GQ.logout()

    })
    it('Allows "Source of Change", "Reference Number" and "Supplementary Info" - User Data Binder', () => {
        // Login
        GQ.login()

        // Home
        GQ.NavBar.Home.openLandingPage()

        // Click product planet
        GQ.Planets.Product.openLandingPage()

        // Open product family 
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        //Open APALUTAMIDE        
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        //Select User Data Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Data Binder')

        // Click documents tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.openLandingPage()

        // Add column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.headerID(), ['Source of Change', 'Reference Number', 'Supplementary Info'])

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        //Open Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.open()

        // Add column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.lcHeaderID(), ['Source of Change', 'Reference Number', 'Supplementary Info'])

        // Logout
        GQ.logout()

    })
    it('Allows "Source of Change", "Reference Number" and "Supplementary Info" - Product Specific Binder', () => {

        // Login
        GQ.login()

        // Home
        GQ.NavBar.Home.openLandingPage()

        // Click product planet
        GQ.Planets.Product.openLandingPage()

        // Open product family 
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')
        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.productBinderSelect()

        // Click documents tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.DocuemntAllFilterOpen()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.All()

        // Add column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.headerID(), ['Source of Change', 'Reference Number', 'Supplementary Info'])

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        //Open Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.open()

        // Add column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.lcHeaderID(), ['Source of Change', 'Reference Number', 'Supplementary Info'])

        // Logout
        GQ.logout()

    }) 

})

