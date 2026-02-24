import { GQTest } from '../../jj-pages/GQTest'
// Sprint 4
describe('Sprint 4', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('Predefined filters for COMET nouns and sub nouns are not visible within the main Quality Management planet', () => {

        // Login
        GQ.login()

        // Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Change controls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        // Nonconformances
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        // Nonconformances Sub tab
        GQ.Planets.QualityManagement.NonConformances.Nonconformances.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Nonconformances.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Nonconformances.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Nonconformances.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Nonconformances.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // Containments Sub tab
        GQ.Planets.QualityManagement.NonConformances.Containments.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Containments.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Containments.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Containments.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        // NC Investigation Sub tab
        GQ.Planets.QualityManagement.NonConformances.NCInvestigations.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.NCInvestigations.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.NCInvestigations.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.NCInvestigations.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.NCInvestigations.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // Supplemental Investigation sub tab
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        // Laboratory Investigation Sub tab
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // NC correction Sub Tab
        GQ.Planets.QualityManagement.NonConformances.NCCorrections.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.NCCorrections.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.NCCorrections.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.NCCorrections.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.NCCorrections.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // Actions Sub Tab
        GQ.Planets.QualityManagement.NonConformances.Actions.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Actions.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Actions.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Actions.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Actions.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // Risk Assessments Sub Tab
        GQ.Planets.QualityManagement.NonConformances.Actions.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Actions.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Actions.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Actions.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Actions.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // Accounts
        GQ.Planets.QualityManagement.Suppliers.openLandingPage()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.Suppliers.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.Suppliers.readRelatedToMeMenuList()
        ).should('be.visible')

        // Audits
        GQ.Planets.QualityManagement.Audits.openLandingPage()

        // Audits page
        GQ.Planets.QualityManagement.Audits.Audits.openLandingPage()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.Audits.Audits.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.Audits.Audits.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.Audits.Audits.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.Audits.Audits.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // Audit Observation 
        GQ.Planets.QualityManagement.Audits.AuditObservations.openLandingPage()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.Audits.AuditObservations.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.Audits.AuditObservations.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.Audits.AuditObservations.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.Audits.AuditObservations.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // CAPAS
        GQ.Planets.QualityManagement.CAPAs.openLandingPage()

        // CAPAS sub tab
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.openLandingPage()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // Interim Controls sub tab
        GQ.Planets.QualityManagement.CAPAs.InterimControls.openLandingPage()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.InterimControls.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.InterimControls.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.InterimControls.readRelatedToMeandOpenMenuList()
        ).should('be.visible')


        // CAPA Investigation sub tab
        GQ.Planets.QualityManagement.CAPAs.CAPAInvestigation.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAInvestigation.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAInvestigation.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAInvestigation.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAInvestigation.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')


        // // CAPA Investigation sub tab
        GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigation.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigation.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigation.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigation.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        // CAPA Implementation sub tab
        GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // Actions sub tab
        GQ.Planets.QualityManagement.CAPAs.Actions.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.Actions.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.Actions.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.Actions.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.Actions.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // Effectiveness Plan
        GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // Effectiveness Review sub tab

        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.open()

        // Check the Predefined filter list
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.readAllMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.readRelatedToMeMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.readRelatedToMeandOpenMenuList()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.readRelatedToMeandInApprovalMenuList()
        ).should('be.visible')

        // Logout 
        GQ.logout()
        
    })
})
