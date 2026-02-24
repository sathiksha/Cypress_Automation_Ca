import { GQTest } from '../../../jj-pages/GQTest'
// Sprint 4
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Sprint 4', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('11712-Allows Linked Content for Admin Data Binders - PQM360 System Administrator', () => {

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
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('MSAT Product View - Cypress Test Admin Binder')

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

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.unlinkSibling(0)

        // Regulatory Affairs
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.open()

        // Read Columns
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.readCTDSubmissionRecords()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.readProducts()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.readApplications()
        ).should('be.visible')

        // CTD Submission Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.unlinkSibling(0)

        // Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.unlinkSibling(0)

        // Application
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.unlinkSibling(0)

        // Post Market
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.open()

        // Read Column
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.readComplaints()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.ComplaintsRecords.readComplaintsRecords()
        ).should('be.visible')

        // Complaints Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.unlinkSibling(0)

        // Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.open()

        // Read Columns
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.readChangeControls()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.readEscalations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.readNonconformances()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.readCAPAs()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.readAudits()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.readAccounts()
        ).should('be.visible')

        // Change Controls
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.unlinkSibling(0)

        // Escalations
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.linkSibling(0)

        // // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.unlinkSibling(0)

        // Nonconformances
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.readNonconformances()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.readContainments()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.readNCInvestigations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.readSupplementalInvestigations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.readLaboratoryInvestigations()
        ).should('be.visible')  

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.readNCCorrections()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.readActions()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.readRiskAssessments()
        ).should('be.visible')

        // Nonconformances Sub Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.unlinkSibling(0)

        // Containments
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.linkSibling(0)
       
        cy.waitForSCDone()
        
        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.refresh()

        // NC Investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.unlinkSibling(0)

        // Supplemental Investigations
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.unlinkSibling(0)


        // Laboratory investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.unlinkSibling(0)

        // NC Corrections
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.open()
    
        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.unlinkSibling(0)

        // Actions
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.unlinkSibling(0)

        // Risk Assessments
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.unlinkSibling(0)

        // CAPAs
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.open()

        // Read tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.readCAPAs()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.readInterimControl()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.readCAPAInvestigations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.readSupplementalInvestigations()
        ).should('be.visible')
        
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.readActions()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.readEffectivenessPlan()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.readEffectivenessReview()
        ).should('be.visible')

        // CAPAs Sub Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.readCAPAs()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.unlinkSibling(0)

        // Interim Controls
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.unlinkSibling(0)

        //CAPA Investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.unlinkSibling(0)

        // Supplementation Investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.refresh()

        // CAPA Implementation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.refresh()

        // Actions
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.refresh()

        // Effectiveness plan
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.refresh()

        // Effectineness Review
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.refresh()

        // Audits
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.readAudits()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.readAuditObservation()
        ).should('be.visible')

        // Auditssub tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.unlinkSibling(0) 

        // Audit Observation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.unlinkSibling(0)

        // Accounts
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.unlinkSibling(0)

        // Laboratory Information
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.readStabilityStudies()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.readStabilityData()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.readReleaseData()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.readSpecifications()
        ).should('be.visible')

        // Stability Studies tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.unlinkSibling(0)

        // Stability Data tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.unlinkSibling(0)

        // Release Data
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.unlinkSibling(0)

        // Specifications
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.unlinkSibling(0)

        // Manufacturing
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.open()

        // Read tab
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.readMaterials()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.readBatches()
        ).should('be.visible')

        // Materials
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.unlinkSibling(0)

        // Batches
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.unlinkSibling(0)

        // Click to maximize
        GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

        // Logout
        GQ.logout()

    })
    it('11712-Allows Linked Content for Admin Data Binders - PQM360 Product Owner', () => {

        // Login
        GQ.login('PQM360 Product Owner')

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('MSAT Product View - Cypress Test Admin Binder')

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

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.unlinkSibling(0)

        // Regulatory Affairs
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.open()

        // Read Columns
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.readCTDSubmissionRecords()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.readProducts()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.readApplications()
        ).should('be.visible')

        // CTD Submission Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.unlinkSibling(0)

        // Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.unlinkSibling(0)

        // Application
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.unlinkSibling(0)

        // Post Market
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.open()

        // Read Column
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.readComplaints()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.ComplaintsRecords.readComplaintsRecords()
        ).should('be.visible')

        // Complaints Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.unlinkSibling(0)

        // Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.open()

        // Read Columns
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.readChangeControls()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.readEscalations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.readNonconformances()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.readCAPAs()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.readAudits()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.readAccounts()
        ).should('be.visible')

        // Change Controls
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.unlinkSibling(0)

        // Escalations
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.unlinkSibling(0)

        // Nonconformances
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.readNonconformances()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.readContainments()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.readNCInvestigations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.readSupplementalInvestigations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.readLaboratoryInvestigations()
        ).should('be.visible')  

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.readNCCorrections()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.readActions()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.readRiskAssessments()
        ).should('be.visible')

        // Nonconformances Sub Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.unlinkSibling(0)

        // Containments
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.linkSibling(0)
       
        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.refresh()

        // NC Investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.unlinkSibling(0)

        // Supplemental Investigations
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.unlinkSibling(0)


        // Laboratory investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.unlinkSibling(0)

        // NC Corrections
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.open()
    
        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.unlinkSibling(0)

        // Actions
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.unlinkSibling(0)

        // Risk Assessments
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.unlinkSibling(0)

        // CAPAs
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.open()

        // Read tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.readCAPAs()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.readInterimControl()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.readCAPAInvestigations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.readSupplementalInvestigations()
        ).should('be.visible')
        
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.readActions()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.readEffectivenessPlan()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.readEffectivenessReview()
        ).should('be.visible')

        // CAPAs Sub Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.readCAPAs()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.unlinkSibling(0)

        // Interim Controls
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.unlinkSibling(0)

        //CAPA Investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.unlinkSibling(0)

        // Supplementation Investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.refresh()

        // CAPA Implementation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.refresh()

        // Actions
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.refresh()

        // Effectiveness plan
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.refresh()

        // Effectineness Review
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.refresh()

        // Audits
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.readAudits()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.readAuditObservation()
        ).should('be.visible')

        // Auditssub tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.unlinkSibling(0) 

        // Audit Observation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.unlinkSibling(0)

        // Accounts
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.unlinkSibling(0)

        // Laboratory Information
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.readStabilityStudies()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.readStabilityData()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.readReleaseData()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.readSpecifications()
        ).should('be.visible')

        // Stability Studies tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.unlinkSibling(0)

        // Stability Data tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.unlinkSibling(0)

        // Release Data
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.unlinkSibling(0)

        // Specifications
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.unlinkSibling(0)

        // Manufacturing
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.open()

        // Read tab
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.readMaterials()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.readBatches()
        ).should('be.visible')

        // Materials
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.unlinkSibling(0)

        // Batches
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.unlinkSibling(0)

        // Click to maximize
        GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

        // Logout
        GQ.logout()

    })
    it('11712-Allows Linked Content for Admin Data Binders - PQM360 Business Administrator', () => {

        // Login
        GQ.login('PQM360 Business Administrator')

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // cy.waitForSCDone()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.toggleSelector()

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('MSAT Product View - Cypress Test Admin Binder')

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

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.unlinkSibling(0)

        // Regulatory Affairs
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.open()

        // Read Columns
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.readCTDSubmissionRecords()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.readProducts()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.readApplications()
        ).should('be.visible')

        // CTD Submission Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.unlinkSibling(0)

        // Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.unlinkSibling(0)

        // Application
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.unlinkSibling(0)

        // Post Market
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.open()

        // Read Column
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.readComplaints()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.ComplaintsRecords.readComplaintsRecords()
        ).should('be.visible')

        // Complaints Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.unlinkSibling(0)

        // Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.open()

        // Read Columns
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.readChangeControls()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.readEscalations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.readNonconformances()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.readCAPAs()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.readAudits()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.readAccounts()
        ).should('be.visible')

        // Change Controls
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.unlinkSibling(0)

        // Escalations
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.unlinkSibling(0)

        // Nonconformances
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.readNonconformances()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.readContainments()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.readNCInvestigations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.readSupplementalInvestigations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.readLaboratoryInvestigations()
        ).should('be.visible')  

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.readNCCorrections()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.readActions()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.readRiskAssessments()
        ).should('be.visible')

        // Nonconformances Sub Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.unlinkSibling(0)

        // Containments
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.linkSibling(0)
       
        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.refresh()

        // NC Investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.unlinkSibling(0)

        // Supplemental Investigations
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.unlinkSibling(0)


        // Laboratory investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.unlinkSibling(0)

        // NC Corrections
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.open()
    
        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.unlinkSibling(0)

        // Actions
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.unlinkSibling(0)

        // Risk Assessments
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.unlinkSibling(0)

        // CAPAs
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.open()

        // Read tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.readCAPAs()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.readInterimControl()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.readCAPAInvestigations()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.readSupplementalInvestigations()
        ).should('be.visible')
        
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.readActions()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.readEffectivenessPlan()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.readEffectivenessReview()
        ).should('be.visible')

        // CAPAs Sub Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.readCAPAs()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAsSubTab.unlinkSibling(0)

        // Interim Controls
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.unlinkSibling(0)

        //CAPA Investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.unlinkSibling(0)

        // Supplementation Investigation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.refresh()

        // CAPA Implementation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.refresh()

        // Actions
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.refresh()

        // Effectiveness plan
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.refresh()

        // Effectineness Review
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.unlinkSibling(0)

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessReview.refresh()

        // Audits
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.readAudits()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.readAuditObservation()
        ).should('be.visible')

        // Auditssub tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditsSubTab.unlinkSibling(0) 

        // Audit Observation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.unlinkSibling(0)

        // Accounts
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.unlinkSibling(0)

        // Laboratory Information
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        // Read Tabs
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.readStabilityStudies()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.readStabilityData()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.readReleaseData()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.readSpecifications()
        ).should('be.visible')

        // Stability Studies tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.unlinkSibling(0)

        // Stability Data tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.unlinkSibling(0)

        // Release Data
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.unlinkSibling(0)

        // Specifications
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.unlinkSibling(0)

        // Manufacturing
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.open()

        // Read tab
        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.readMaterials()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.readBatches()
        ).should('be.visible')

        // Materials
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Materials.unlinkSibling(0)

        // Batches
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.open()

        // Link record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.linkSibling(0)

        // unLink record
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ManufacturingNonGxP.Batches.unlinkSibling(0)

        // Click to maximize
        GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

        // Logout
        GQ.logout()
    
    })
})
}