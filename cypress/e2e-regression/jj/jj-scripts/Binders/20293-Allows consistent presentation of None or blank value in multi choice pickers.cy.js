import { GQTest } from '../../jj-pages/GQTest'
describe('20293-Allows consistent presentation of None or blank value in multi-choice pickers', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    const GQ = new GQTest();

    it('Documents', () => {
        // Login
        GQ.login();

        // Open Documents
        GQ.Planets.Documents.openLandingPage()

        // Toggle Filter
        GQ.Planets.Documents.Documents.toggleFilter();

        // Verify Multichoice picker
        // Document Sub Type Column
      GQ.Planets.Documents.Documents.checkDocumentSubtypeColumn()
        
    })
    it('Regulatory Affairs', () => {

        // Login
        GQ.login();

        // Open Regulatory Affairs / CTM Submission Records
        GQ.Planets.RegulatoryAffairs.openLandingPage()

        // Toggle Filter
        GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.toggleFilter();

        // Verify Multichoice picker
        // Group Column
        GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.checkGroupColumn()
    })
    it('Quality Management - Change Controls', () => {

        // Login
        GQ.login();

        // Open Quality Management / Change Controls
        GQ.Planets.QualityManagement.openLandingPage()

        // Change Control
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage();

        GQ.Planets.QualityManagement.ChangeControls.toggleFilter();

        // Verify Multichoice picker
        // Change Type Column
         GQ.Planets.QualityManagement.ChangeControls.checkChangeTypeColumn()
    })
    it('Quality Management - Change Controls - Assessment Execution', () => {

        // Login
        GQ.login();

        //Quality Management
        GQ.Planets.QualityManagement.openLandingPage();

        //Change Controls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage();

        // Open Assessment Execution
        GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.open();

        // Toggle Filter
        GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.toggleFilter();

        // Verify Multichoice picker
        // Assessment Risk Column
       GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.checkAssessmentRiskColumn()
    })
    it('Quality Management - Change Controls - Implementations', () => {

        // Login
        GQ.login();

        //Quality Management
        GQ.Planets.QualityManagement.openLandingPage();

        //Change Controls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage();
        
        //Open Implementations

        GQ.Planets.QualityManagement.ChangeControls.Implementations.open();

        // Toggle Filter
        GQ.Planets.QualityManagement.ChangeControls.Implementations.toggleFilter();

        // Verify Multichoice picker
        // Status Column
        GQ.Planets.QualityManagement.ChangeControls.Implementations.checkStatusColumn()
  
    })
    it('Quality Management - Escalations - Assessments', () => {

        // Login
        GQ.login();

        //Quality Management
        GQ.Planets.QualityManagement.openLandingPage();

        //Change Controls
        GQ.Planets.QualityManagement.Escalations.openLandingPage();

        // Open Assessment Execution
        GQ.Planets.QualityManagement.Escalations.Assessments.open();

        // Toggle Filter
        GQ.Planets.QualityManagement.Escalations.Assessments.toggleFilter();

        // Verify Multichoice picker
        // Related Escalation Level Column
       GQ.Planets.QualityManagement.Escalations.Assessments.checkRelatedEsclationLevelColumn()
    })
    it('Quality Management - Escalations - Meetings', () => {

        // Login
        GQ.login();

        //Quality Management
        GQ.Planets.QualityManagement.openLandingPage();

        //Change Controls
        GQ.Planets.QualityManagement.Escalations.openLandingPage();
        
        //Open Implementations

        GQ.Planets.QualityManagement.Escalations.Meetings.open();

        // Toggle Filter
        GQ.Planets.QualityManagement.Escalations.Meetings.toggleFilter();

        // Verify Multichoice picker
        // Relted Escalation Level Column
        GQ.Planets.QualityManagement.Escalations.Meetings.checkEsclationReltedLevelColunn()
        
  
    })
    it('Quality Management - Nonconformances ', () => {

        // Login
        GQ.login();

        // Open Quality Management / Nonconformances
        GQ.Planets.QualityManagement.openLandingPage()

        // NonConformances
        GQ.Planets.QualityManagement.NonConformances.openLandingPage();

        GQ.Planets.QualityManagement.NonConformances.toggleFilter();

        // Verify Multichoice picker
        // Issue Type Column
       GQ.Planets.QualityManagement.NonConformances.checkIssueTypeColumn()

    })
    it('Nonconformances - Laboratory Investigations ', () => {

        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Open Nonconformances
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        // Open Laboratory Investigation
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.openLandingPage();

        // Toggle Filter
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.toggleFilter();

        // Verify Multichoice picker
        // Type Column
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.checkTypeColumn()

    })
    it('Nonconformances - Risk Assessments', () => {

        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage();

        // Open Nonconformances
        GQ.Planets.QualityManagement.NonConformances.openLandingPage();

        //Open Risk Assessments

        GQ.Planets.QualityManagement.NonConformances.RiskAssessments.open();

        // Toggle Filter
        GQ.Planets.QualityManagement.NonConformances.RiskAssessments.toggleFilter();

        // Verify Multichoice picker
        // Risk Model Column
        GQ.Planets.QualityManagement.NonConformances.RiskAssessments.checkModelColumn()
         
    })
    it('Quality Management - CAPAs ', () => {

        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Open Laboratory Investigation
        GQ.Planets.QualityManagement.CAPAs.openLandingPage();

        // Toggle Filter
        GQ.Planets.QualityManagement.CAPAs.toggleFilter();

        // Verify Multichoice picker
        // CAPA Type Column
        GQ.Planets.QualityManagement.CAPAs.checkTypeColumn()
        

    })
    it('CAPAs - Actions', () => {

        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        //Open CAPAs

        GQ.Planets.QualityManagement.CAPAs.openLandingPage();

        //Open Actions

        GQ.Planets.QualityManagement.CAPAs.Actions.open();

        // Toggle Filter
        GQ.Planets.QualityManagement.CAPAs.Actions.toggleFilter();

        // Verify Multichoice picker
        // Stage Column
        GQ.Planets.QualityManagement.CAPAs.Actions.stageColumn()
        
    })
    it('Quality Management - Audits', () => {

        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Escalations
        GQ.Planets.QualityManagement.Audits.openLandingPage();

        cy.wait(2000);

        GQ.Planets.QualityManagement.Audits.toggleFilter();

        // Verify Multichoice picker
        // Audit Program Approval Status Column
        GQ.Planets.QualityManagement.Audits.checkApprovalCoumn()
        
    })
})