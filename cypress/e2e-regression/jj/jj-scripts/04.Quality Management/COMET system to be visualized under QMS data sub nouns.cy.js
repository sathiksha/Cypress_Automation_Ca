import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
describe('Sprint 3', () => {
    const GQ = new GQTest();
    it('Allows QMS data sub nouns of the new COMET system to be visualized with the QMS data of the legacy Trackwise system', () => {

        // Login Step
        GQ.login()
    
        // Quality Mangement planet
        GQ.Planets.QualityManagement.openLandingPage()

        //  Change Controls
       cy.getSC(
            GQ.Planets.QualityManagement.ChangeControls.changeControlsTabLocator()
        ).should('be.visible')

        // Escalation
        cy.getSC(
            GQ.Planets.QualityManagement.Escalations.escalationsTabLocator()
        ).should('be.visible')

        // Read Audits
        cy.getSC(
            GQ.Planets.QualityManagement.Audits.AuditsTabLocator()
        ).should('be.visible')

        // Read
        cy.getSC(
            GQ.Planets.QualityManagement.Suppliers.readAccountsTab()
        ).should('be.visible')

        // Read Nonconformances
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.readNonconformancesTab()
        ).should('be.visible')

        // Read CAPAs
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.readCAPAsTab()
        ).should('be.visible')

        // Change Control
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        // Change Control
        // Trackwise 
        cy.getSC(
            GQ.Planets.QualityManagement.ChangeControls.readTrackwiseMenuList()
        ).should('be.visible')

        // Comet
        cy.getSC(
            GQ.Planets.QualityManagement.ChangeControls.readCometMenuList()
        ).should('be.visible')

        // Click Anywhere else
        GQ.Planets.QualityManagement.ChangeControls.openView()

        // Click Escalation
        GQ.Planets.QualityManagement.Escalations.openLandingPage()

        // Trackwise 
        cy.getSC(
            GQ.Planets.QualityManagement.Escalations.readTrackwiseMenuList()
        ).should('be.visible')

        // Comet
        cy.getSC(
            GQ.Planets.QualityManagement.Escalations.readCometMenuList()
        ).should('be.visible')

        // Audits
        GQ.Planets.QualityManagement.Audits.openLandingPage()

        // Audit Observation
        cy.getSC(
            GQ.Planets.QualityManagement.Audits.AuditObservations.readAuditObservationLocator()
        ).should('be.visible')

        // Comet
        cy.getSC(
            GQ.Planets.QualityManagement.Audits.readCometMenuList()
        ).should('be.visible')

        // Trackwise 
        cy.getSC(
            GQ.Planets.QualityManagement.Audits.readTrackwiseMenuList()
        ).should('be.visible')

        // Accounts
        GQ.Planets.QualityManagement.Suppliers.openLandingPage()

        // read comet
        cy.getSC(
            GQ.Planets.QualityManagement.Suppliers.readCometMenuList()
        ).should('be.visible')
    
        // Read Trackwise
        cy.getSC(
            GQ.Planets.QualityManagement.Suppliers.readTrackwiseMenuList()
        ).should('be.visible')

        // Navigate to Nonconformances
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        // Non conformances Sub tab
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.readNonconforancesSubTab()
        ).should('be.visible')

        // Containments
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.readContainmentsTab(   )
        ).should('be.visible')

        // NC Investigations
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.readNCInvestigationsTab()
        ).should('be.visible')
        
        // Supplemantal Investigations
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.readSupplementalInvestigationsTab()
        ).should('be.visible')

        // Laboratory Investigation
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.readLaboratoryInvestigationsTab()
        ).should('be.visible')

        // NC Corrections
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.readNCCorrectionsTab()
        ).should('be.visible')

        // Actions
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.readActionsTab()
        ).should('be.visible')

        // Risk Assessments
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.readRiskAssessmentsTab()
        ).should('be.visible')

        // CAPAs
        GQ.Planets.QualityManagement.CAPAs.openLandingPage()

        // CAPAs sub tab
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.readCAPAsSubTab()
        ).should('be.visible')

        // Interim Controls
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.readInterimControlsTab()
        ).should('be.visible')

        // CAPAs Investigations
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.readCAPAsInvestigationsTab()
        ).should('be.visible')
        
        // Supplemental Investigation
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.readSupplementalInvestigationsTab()
        ).should('be.visible')

        // CAPA Implementation
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.readCAPAImplementationsTab()
        ).should('be.visible')

        // ACtions
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.readActionsTab()
        ).should('be.visible')

        // Effectiveness plan
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.readEffectivenessPlanTab()
        ).should('be.visible')

        // Effectiveness Review
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.readEffectivenessReviewTab()
        ).should('be.visible')

        // Logout
        GQ.logout()




    })
})