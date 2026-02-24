import { GQTest } from '../../../jj-pages/GQTest'
describe('00. Product', () => {
  Cypress.config('Consistent semantic naming og Documents as a Related Objects ', 180000);
  it('Filter Product Records', () => {
    const GQ = new GQTest()
        // Step 1: User login
        GQ.login();

        // Navigate to Records planet 
        GQ.Planets.Documents.openLandingPage()

        // Open any record
        GQ.Planets.Documents.expandrecord.openLandingPage(2);
        GQ.Planets.Documents.expandrecord.RelatedObjects()
        cy.contains('Documents').should('be.visible')
        cy.contains('Materials').should('be.visible')
        GQ.Planets.Product.openLandingPage()
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');
        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();
        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.ExpandRecord.openLandingPage(1)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.ExpandRecord.relatedobject()
        cy.contains('Documents').should('be.visible')
        cy.contains('Materials').should('be.visible')
        GQ.logout();



    })

    it('COMET Nonconformances Related Object Tabs', () => {
        // Step 1: User login
        GQ.login();

        GQ.Planets.QualityManagement.openLandingPage()
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()
        GQ.Planets.QualityManagement.NonConformances.Nonconformances.open()
        GQ.Planets.QualityManagement.NonConformances.Nonconformances.expandrecord(2)
        GQ.Planets.QualityManagement.NonConformances.Nonconformances.relatedobject()
        cy.contains('Immediate Causes').should('be.visible')
        cy.contains('NC Investigations').should('be.visible')
        cy.contains('Laboratory Investigations').should('be.visible')
        cy.contains('CAPAs').should('be.visible')
        cy.contains('Change Controls').should('be.visible')
        cy.contains('Escalations').should('be.visible')
        cy.get('td.multiLayoutButtonText').contains('Documents').should('be.visible')
        GQ.Planets.QualityManagement.NonConformances.Nonconformances.others()
        GQ.Planets.QualityManagement.NonConformances.Nonconformances.dropdown()
        cy.contains('Containments ').should('be.visible')
        cy.contains('NC Corrections').should('be.visible')
        cy.contains('Risk Assessments').should('be.visible')
        cy.get('.menuTitleField > div').contains('Audits').should('be.visible')
        cy.get('.menuTitleField > div').contains('Audit Observations').should('be.visible')
        cy.contains('Team Members').should('be.visible')
        cy.contains('Extensions').should('be.visible')
        GQ.logout();
    })


    it('COMET CAPAs Related Object Tabs', () => {
        // Step 1: User login
        GQ.login();

        GQ.Planets.QualityManagement.openLandingPage();
        GQ.Planets.QualityManagement.CAPAs.openLandingPage();
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.openLandingPage();
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.expandrecord(2);
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.relatedobject()
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.documents(); // Documents
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.InterimControls // Interim Controls
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.CAPAIMP() // CAPA Investigations
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.CAPAInvestigations(); // CAPA Implementation
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.Actions(); // Actions
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.EffectivenesReviews() // Effectiveness Reviews
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.TeamMembers()// Team Members
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.nonconformance()// Nonconformances
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.Batches() // Batches
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.Extension() // Extension
        GQ.Planets.Product.openLandingPage()
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.expandrecord.openLandingPage(2)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.expandrecord.relatedobject()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.expandrecord.documents()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.expandrecord.CAPAInvestigations()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.expandrecord.Actions()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.expandrecord.CAPAIMP()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.expandrecord.Batches()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.expandrecord.EffectivenesReviews()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.expandrecord.TeamMembers()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.expandrecord.Extension()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.expandrecord.nonconformance()
        GQ.logout();
    })

    it('COMET Audit Observations Related Object Tabs', () => {
        // Step 1: User login
        GQ.login();
        GQ.Planets.QualityManagement.openLandingPage();
        GQ.Planets.QualityManagement.Audits.openLandingPage()
        GQ.Planets.QualityManagement.Audits.AuditObservations.openLandingPage()
        GQ.Planets.QualityManagement.Audits.AuditObservations.expandrecord(2)
        GQ.Planets.QualityManagement.Audits.AuditObservations.RelatedObject()
        GQ.Planets.QualityManagement.Audits.AuditObservations.Audits()
        GQ.Planets.QualityManagement.Audits.AuditObservations.Documents()
        GQ.Planets.QualityManagement.Audits.AuditObservations.CAPAs()
        GQ.logout();
    })

    it('Specifications Related Object Tabs', () => {
        // Step 1: User login
        GQ.login();
        GQ.Planets.LaboratoryInformation.openLandingPage()
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.open()
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.selectRecordByIndex(2)
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.relatedobject()
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.Documents()
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.StabilityStudies()
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.Batches()
        GQ.Planets.Product.openLandingPage()
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.selectRecordByIndex(1);
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.Relatedobjects()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.Documents()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.StabilityStudies()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.Batches()
        GQ.logout();
})









