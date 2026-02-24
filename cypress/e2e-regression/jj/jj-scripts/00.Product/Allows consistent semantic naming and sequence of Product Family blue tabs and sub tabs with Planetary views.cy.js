import { GQTest } from '../../jj-pages/GQTest'
import productPage from '../../jj-pages/productPage';
require('cypress-xpath')
describe('Semantic Naming', () => {
    const GQ = new GQTest;
    const productTab = new productPage()

    it('Testing Document and Regulatory Affairs Planet', () => {

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



        //Documents        
        productTab.checkDefaultBlueTabSelectedAs('Documents')
        //Regulatory Affairs
        productTab.getBlueTabOf('Regulatory Affairs')

        productTab.checkDefaultSubTabIsSelectedAs('CTD/Submission Records')
        
        productTab.getsubTabOf('Products')
        productTab.getsubTabOf('Applications')
        productTab.getsubTabOf('Registrations')
        productTab.getsubTabOf('Package Sets')
        productTab.getsubTabOf('CTA-IND Events')
        productTab.getsubTabOf('BLA-NDA Events')
    })

    it('Testing Quality Management Planet', () => {
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
        //Quality Management
        productTab.getBlueTabOf('Quality Management')
        productTab.checkDefaultSubTabIsSelectedAs('Change Controls')
        productTab.getsubTabOf('Escalations')
        productTab.getsubTabOf('Nonconformances').click()
        //Quality Management subTab Nonconformances
        productTab.checkDefaultNonconformancesSubTabIsSelectedAs('Nonconformances')
        productTab.getNonconformancesubTabOf('Containments')
        productTab.getNonconformancesubTabOf('NC Investigations')
        productTab.getNonconformancesubTabOf('Supplemental Investigations')
        productTab.getNonconformancesubTabOf('Laboratory Investigations')
        productTab.getNonconformancesubTabOf('NC Corrections')
        productTab.getNonconformancesubTabOf('Actions')
        productTab.getNonconformancesubTabOf('Risk Assessments')
        productTab.getsubTabOf('CAPAs').click()
        //Quality Management subTab CAPAs
        productTab.checkDefaultCAPASubTabIsSelectedAs('CAPAs')
        productTab.getCAPAsubTabOf('Interim Controls')
        productTab.getCAPAsubTabOf('CAPA Investigations')
        productTab.getCAPAsubTabOf('Supplemental Investigations')
        productTab.getCAPAsubTabOf('CAPA Implementation')
        productTab.getCAPAsubTabOf('Actions')
        productTab.getCAPAsubTabOf('Effectiveness Plan')
        productTab.getCAPAsubTabOf('Effectiveness Review')
        productTab.getsubTabOf('Audits').click()
        //Quality Management subTab Audits
        productTab.checkDefaultAuditsSubTabIsSelectedAs('Audits')
        productTab.getAuditsubTabOf('Audit Observations')
        productTab.getsubTabOf('Accounts')
        productTab.getsubTabOf('by User')
    })
    it('Testing Manufacturing Planet', () => {
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

        // Manufacturing (Non GxP)
        productTab.getBlueTabOf('Manufacturing')
        productTab.checkDefaultSubTabIsSelectedAs('Materials')
        productTab.getsubTabOf('Batches')
        productTab.getsubTabOf('Batch Flows')
        productTab.getsubTabOf('SC Maps')

    })

    it('Testing Post Market and Laboratory Information Planet', () => {
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
        //Post Market
        productTab.getBlueTabOf('Post Market')
        productTab.checkDefaultSubTabIsSelectedAs('Complaints')
        productTab.getsubTabOf('Complaint Records')
        productTab.getsubTabOf('AIMI Analytics')
        // Laboratory Information
        productTab.getBlueTabOf('Laboratory Information')
        productTab.checkDefaultSubTabIsSelectedAs('Stability Studies')
        productTab.getsubTabOf('Stability Data')
        productTab.getsubTabOf('Release Data')
        productTab.getsubTabOf('Specifications')

        // Logout
        // GQ.logout()
    })

    it('Testing Binders in the Product Family', () => {
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

        // Select the Admin binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')
        productTab.getBlueTabOf('Quality Management')
        productTab.checkForbyUser()

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        //Product Specifc Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.viewProductSpecificBinder()
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')
        cy.wait(5000)
        productTab.checkForbyUser()
        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // User Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Data Binder')
        productTab.checkForbyUser()

        // Logout
        GQ.logout()
    })


})

