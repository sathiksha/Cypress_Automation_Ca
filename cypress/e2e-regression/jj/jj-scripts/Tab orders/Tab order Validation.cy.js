import { GQTest } from '../../jj-pages/GQTest'
describe('Tab and ColumnOrder', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Planets', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        GQ.Planets.Documents.openLandingPage()

        GQ.Planets.Documents.expandrecord.openLandingPage(1)

        cy.validateTabsAndColumns('Documents', 'Documents')


        cy.changePlanet('Regulatory Affairs')

        GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.openARecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.RegulatoryAffairs.Products.openLandingPage()

        GQ.Planets.RegulatoryAffairs.Products.expandrecord(1)

        cy.validateTabsAndColumns('Regulatory Affairs', 'Products')

        GQ.Planets.RegulatoryAffairs.Applications.open()

        GQ.Planets.RegulatoryAffairs.Applications.openARecord(1)

        cy.validateTabsAndColumns('Regulatory Affairs', 'Applications')

        GQ.Planets.RegulatoryAffairs.Registration.openLandingPage()

        GQ.Planets.RegulatoryAffairs.Registration.expandrecord(1)

        cy.validateTabsAndColumns('Regulatory Affairs', 'Registrations')

        GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.LOCProdcutListOpen()
        GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.LOCProductListRecordOpen()
        cy.wait(3000)

        cy.validateTabsAndColumns('Regulatory Affairs', 'Registrations');
        GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.ExecludedLocProductsOpen()

        GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.ExecludedLocProductsOpenRecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Registrations');

        GQ.Planets.RegulatoryAffairs.Packageset.openLandingPage()

        GQ.Planets.RegulatoryAffairs.Packageset.expandrecord(1)

        cy.validateTabsAndColumns('Regulatory Affairs', 'Package Sets');

        GQ.Planets.RegulatoryAffairs.CTAINDEvents.openLandingPage()

        GQ.Planets.RegulatoryAffairs.CTAINDEvents.openARecord()

        cy.validateTabsAndColumns('Regulatory Affairs', 'CTA-IND Events');

        GQ.Planets.RegulatoryAffairs.BLANDA.openLandingPage()

        GQ.Planets.RegulatoryAffairs.BLANDA.expandrecord(1)

        cy.validateTabsAndColumns('Regulatory Affairs', 'BLA-NDA Events');


        cy.changePlanet('Post Market')
        GQ.Planets.PostMarket.Complaints.openLandingPage()
        GQ.Planets.PostMarket.Complaints.Complaints.OpenRecord()
        cy.validateTabsAndColumns('Post Market', 'Complaints');

        GQ.Planets.PostMarket.Complaints.ComplaintRecords.openLandingPage()
        GQ.Planets.PostMarket.Complaints.Complaints.OpenRecord()
        cy.validateTabsAndColumns('Post Market', 'Complaint Records');


        cy.changePlanet('Quality Management')

        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()
        GQ.Planets.QualityManagement.ChangeControls.ChangeControlOpenRecords()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()

        GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.AssessmentExecutionsOpen()
        cy.wait(3000)
        GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.AssessmentExecutionsopenARecord()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()

        GQ.Planets.QualityManagement.ChangeControls.Implementations.open()
        cy.wait(3000)
        GQ.Planets.QualityManagement.ChangeControls.Implementations.expandrecord(1)
        cy.validateTabsAndColumns('Quality Management', 'Change Controls');

        GQ.Planets.QualityManagement.Escalations.openLandingPage()
        GQ.Planets.QualityManagement.Escalations.EscalationsOpenRecord()
        cy.validateTabsAndColumns('Quality Management', 'Escalations');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()

        GQ.Planets.QualityManagement.Escalations.Assessments.AssessmentsOpenPage()
        GQ.Planets.QualityManagement.Escalations.Assessments.openARecord()
        cy.validateTabsAndColumns('Quality Management', 'Escalations');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()

        GQ.Planets.QualityManagement.Escalations.Meetings.open()
        GQ.Planets.QualityManagement.Escalations.Meetings.openARecord()
        cy.validateTabsAndColumns('Quality Management', 'Escalations');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()


        GQ.Planets.QualityManagement.NonConformances.Nonconformances.NonconformancesOpenPage()
        GQ.Planets.QualityManagement.NonConformances.Nonconformances.expandrecord(1)
        cy.validateTabsAndColumns('Nonconformances', 'Nonconformances');

        GQ.Planets.QualityManagement.NonConformances.Containments.open()
        GQ.Planets.QualityManagement.NonConformances.Containments.openARecord()
        cy.validateTabsAndColumns('Nonconformances', 'Containments');
        GQ.Planets.QualityManagement.NonConformances.Containments.minimizeRecord()

        GQ.Planets.QualityManagement.NonConformances.NCInvestigations.open()
        GQ.Planets.QualityManagement.NonConformances.NCInvestigations.openARecord()
        cy.validateTabsAndColumns('Nonconformances', 'NC Investigations');
        GQ.Planets.QualityManagement.NonConformances.Containments.minimizeRecord()

        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.open()
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.OpenARecord()
        cy.validateTabsAndColumns('Nonconformances', 'Supplemental Investigations');
        GQ.Planets.QualityManagement.NonConformances.Containments.minimizeRecord()

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.open()
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.expandtherecord(1)
        cy.validateTabsAndColumns('Nonconformances', 'Laboratory Investigations');

        GQ.Planets.QualityManagement.NonConformances.NCCorrections.open()
        GQ.Planets.QualityManagement.NonConformances.NCCorrections.OpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'NC Corrections');
        GQ.Planets.QualityManagement.NonConformances.Containments.minimizeRecord()

        GQ.Planets.QualityManagement.NonConformances.Actions.open()
        GQ.Planets.QualityManagement.NonConformances.Actions.OpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Actions');
        GQ.Planets.QualityManagement.NonConformances.Containments.minimizeRecord()

        GQ.Planets.QualityManagement.NonConformances.RiskAssessments.open()
        GQ.Planets.QualityManagement.NonConformances.RiskAssessments.openRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Risk Assessments');
        GQ.Planets.QualityManagement.NonConformances.Containments.minimizeRecord()



        GQ.Planets.QualityManagement.CAPAs.openLandingPage()
        GQ.Planets.QualityManagement.CAPAs.CAPAsSubTab.OpenRecords()
        cy.validateTabsAndColumns('CAPAs', 'CAPAs');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()

        GQ.Planets.QualityManagement.CAPAs.InterimControls.openLandingPage()
        GQ.Planets.QualityManagement.CAPAs.InterimControls.OpenRecord()
        cy.validateTabsAndColumns('CAPAs', 'Interim Controls');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()

        GQ.Planets.QualityManagement.CAPAs.CAPAInvestigation.open()
        GQ.Planets.QualityManagement.CAPAs.CAPAInvestigation.OpenRecord()
        cy.validateTabsAndColumns('CAPAs', 'CAPA Investigations');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()

        GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigation.open()
        GQ.Planets.QualityManagement.CAPAs.SupplementalInvestigation.openRecord()
        cy.validateTabsAndColumns('CAPAs', 'Supplemental Investigations');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()

        GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.open()
        GQ.Planets.QualityManagement.CAPAs.CAPAImplementation.openRecord()
        cy.validateTabsAndColumns('CAPAs', 'CAPA Implementation');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()

        GQ.Planets.QualityManagement.CAPAs.Actions.open()
        GQ.Planets.QualityManagement.CAPAs.Actions.openRecords()
        cy.validateTabsAndColumns('CAPAs', 'Actions');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()

        GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.open()
        GQ.Planets.QualityManagement.CAPAs.EffectivenessPlan.openRecord()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Plan');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()

        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.open()
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.openRecord()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Review');
        GQ.Planets.QualityManagement.ChangeControls.closeRecord()



        GQ.Planets.QualityManagement.Audits.openLandingPage()
        GQ.Planets.QualityManagement.Audits.openRecord()
        cy.validateTabsAndColumns('Audits', 'Audits');
        GQ.Planets.QualityManagement.Audits.maximizeSelector()

        GQ.Planets.QualityManagement.Audits.AuditObservations.openLandingPage()
        GQ.Planets.QualityManagement.Audits.AuditObservations.expandRecord('1')
        cy.validateTabsAndColumns('Audits', 'Audits Observations');
        GQ.Planets.QualityManagement.Audits.maximizeSelector()


        GQ.Planets.QualityManagement.Accounts.open()
        GQ.Planets.QualityManagement.Accounts.expandrecord('1')
        cy.validateTabsAndColumns('Accounts', 'Accounts');



        cy.changePlanet('Laboratory Information')

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudiesOpenRecord()
        cy.validateTabsAndColumns('Laboratory Information', 'Stability Stuides');

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.open()
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.expandRecordByIndex('1')
        cy.validateTabsAndColumns('Laboratory Information', 'Specifications');

        cy.changePlanet('Manufacturing')

        GQ.Planets.Manufacturing.Materials.MaterialOpenRecords()
        cy.validateTabsAndColumns('Manufacturing', 'Materials');

        GQ.Planets.Manufacturing.Batches.open()
        GQ.Planets.Manufacturing.Batches.BatchesOpenRecords()
        cy.validateTabsAndColumns('Manufacturing', 'Batches');

        GQ.Planets.Manufacturing.BatchFlows.openLandingPage()
        GQ.Planets.Manufacturing.BatchFlows.BatchFlowsRecordOpen()
        cy.validateTabsAndColumns('Manufacturing', 'Batch Flow');



        cy.changePlanet('Risk')

        GQ.Planets.Product.ProductFamilies.toggleFilter()
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('My Product Complete')
        GQ.Planets.Risk.byProduct.ProductRecordOpen()

        cy.wait(5000)
        cy.validateTabsAndColumns('Risk', 'Product');


        cy.changePlanet('Product')

        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content and Document

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.DocumentsRecordOpen()

        cy.validateTabsAndColumns('Documents', 'Documents')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openRegulatoryAffairs()


        // CTD Submission
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.CTDSubmissionRecordOpen()

        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')


        // module 2

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module2.PrdouctModule2Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.QualityOverallSummary.openARecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.NonClinicalSummary.ProductNonClinicalSummaryOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.NonClinicalSummary.NonClinicalSummaryRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.ClinicalSummary.ProductClinicSummaryOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.ClinicalSummary.ClinicalSummaryRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        //module 3
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module3.Module3Open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugProduct.DrugProductRecoreOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugSubstance.DrugSubstanceOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.DrugSubstance.DrugProductRecoreOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.RegionalInformation.RegionalInformationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.RegionalInformation.RegionalInformationRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Appendices.AppendicesOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Appendices.AppendicesRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        //module4

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module4.Module4Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module4.openARecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        //module 5
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module5.Module5Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Module5.openARecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        //nomodule
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.nonmodule.nonmoduleOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.nonmodule.openARecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.ProductRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Products')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Application.Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Application.openARecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Applications')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.registrations.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.registrations.expandrecord('1')
        cy.validateTabsAndColumns('Regulatory Affairs', 'Registrations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.packageSet.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.packageSet.expandrecord('1')
        cy.validateTabsAndColumns('Regulatory Affairs', 'Package Sets')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.CTA_INDEvents.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.CTA_INDEvents.OpenRecords()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTA-IND Events')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.expandrecord('1')
        cy.validateTabsAndColumns('Regulatory Affairs', 'BLA-NDA Events')



        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.postMarketTab.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.postMarketTab.ComplaintsOpenRecord()
        cy.validateTabsAndColumns('Post Market', 'Complaints')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.postMarketTab.ComplaintsRecordTabOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.postMarketTab.ComplaintsRecordTabRecordOpen()
        cy.validateTabsAndColumns('Post Market', 'Complaint Records')


        //Quality Management

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openFirstRecord()

        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.CloseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.APRPQRMenuOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.APRPQRMenuRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.CloseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.ParentCCImplementations()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.ParentCCImplementationsRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.CloseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.ChildCCImplementation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.ChildCCImplementationRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.CloseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.openARecord()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.openARecord()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')



        //Escalations
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.EscalationsTab.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.EscalationsTab.OpenRecord()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.EscalationsTab.AssessmentsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.EscalationsTab.AssessmentsRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Quality Management', 'Escalations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.EscalationsTab.MeetingOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.EscalationsTab.MeetingRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.NonconformancesRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Nonconformances', 'Nonconformances')
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.MinimizeRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.ContainmentsMenu()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.ContainmentsRecordOpen()

        cy.validateTabsAndColumns('Nonconformances', 'Containments')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.NcInvestigation()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.NcInvestigationRecordOpen()

        cy.validateTabsAndColumns('Nonconformances', 'NC Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.SupplimentInvestigation()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.SupplimentInvestigationRecordOpen()

        cy.validateTabsAndColumns('Nonconformances', 'Supplemental Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.LaboratoryInvestigation()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.LaboratoryInvestigationRecordOpen()

        cy.validateTabsAndColumns('Nonconformances', 'Laboratory Investigations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrection()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.NCCorrectionRecordOpen()

        cy.validateTabsAndColumns('Nonconformances', 'NC Corrections')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.ActionsMenu()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.ActionsOpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Actions')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.RiskAssessment()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.ProductRistAssesementRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Risk Assessments')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.OpenARecord()
        cy.validateTabsAndColumns('CAPAs', 'CAPAs')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.InterimControl()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.InterimControlRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Interim Controls')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.CAPAInvestigation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.CAPAInvestigationRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('CAPAs', 'CAPA Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.SupplemenetalInvestigation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.SupplemenetalInvestigationRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Supplemental Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplemtation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.CAPAImplemtationRecordOPen()
        cy.wait(3000)
        cy.validateTabsAndColumns('CAPAs', 'CAPA Implementation')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.Actions()
        cy.wait(6000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.CAPAActionRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Actions')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.EffectivenessPlan()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.EffectivenssPlanRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Plan')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.EffectivenssReview()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.CAPAs.EffectivenssReviewRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Review')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Audits.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Audits.openRecord()
        cy.validateTabsAndColumns('Audits', 'Audits')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Audits.AuditObservations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Audits.AuditObservations.AuditObservationsOpenRecord()
        cy.validateTabsAndColumns('Audits', 'Audits Observations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Accounts.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Accounts.openRecord()
        cy.validateTabsAndColumns('Accounts', 'Accounts')


        //laboratory Information
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.OpenRecord()
        cy.validateTabsAndColumns('Laboratory Information', 'Stability Stuides')
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.MinimizeRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.OpenARecord()
        cy.validateTabsAndColumns('Laboratory Information', 'Specifications')


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.OpenRecord()
        cy.validateTabsAndColumns('Manufacturing', 'Materials')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.OpenRecord()
        cy.validateTabsAndColumns('Manufacturing', 'Batches')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openARecord('1')
        cy.validateTabsAndColumns('Manufacturing', 'Batch Flow')

    })

    it('Admin Binder Smart Content', () => {
        const GQ = new GQTest();
        // Login
        GQ.login()

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')


        //Content and Document

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.DocumentAllOpen()

        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.SmartContentDocumentOpenRecord()

        cy.validateTabsAndColumns('Documents', 'Documents')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.open()

        //CTD Submission
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Module1RecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')




        //   module 2

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.module2Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.QualityOVerallRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonClinicalSummaryOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonClinicalSummaryOpenRecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ClinicalSummaryOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ClinicalSummaryRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')


        //module 3
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Module3Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.DrugProductRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.DrugSubstance()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.DrugSubstanceRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegionalInformation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegionalInformationRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Appendices()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.AppendicesRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        // module4

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules4Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules4RecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        // module 5
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules5Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules5ReocordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        //nomodule
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonModulesOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonModulesRecordOpne()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ProductMenu()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ProductRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Products')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ApplicationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ApplicationRecordopen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Applications')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegistrationsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegistrationsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Registrations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.PackageSetsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.PackageSetsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Package Sets')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.CTAINDEvents()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.CTAINDEventsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTA-IND Events')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.BLANDAEvents()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.BLANDAEventsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'BLA-NDA Events')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.ComplaintsRecordOpen()
        cy.validateTabsAndColumns('Post Market', 'Complaints')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.ComplaintsRecordMenuOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.ComplaintsRecordMenuRecordOpen()
        cy.validateTabsAndColumns('Post Market', 'Complaint Records')

        // Quality Management

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ChangeControlRecordopen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentExecutionOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentExecutionRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Implementations()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ImplementationsRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')

        //Escalations
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Escalationopen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.EscalationRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Quality Management', 'Escalations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.MeetingOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.MeetingRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NonconformancesOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NonconformancesRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Nonconformances')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Containments()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ContainmentsRecordsOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Containments')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NcInvestigationsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NcInvestigationsRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'NC Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SupplementalInvestigations()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SupplementalInvestigationsRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Supplemental Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.LaboratoryInvestigationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.LaboratoryInvestigationRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Laboratory Investigations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NCCorrectionsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NCCorrectionRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'NC Corrections')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Actions()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ActionsOpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Actions')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.RiskAssessmentsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.RiskAssessmentRecordOpen()
        cy.wait(10000)
        cy.validateTabsAndColumns('Nonconformances', 'Risk Assessments')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPARecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPAs')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.InterimControlsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.InterimControlsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Interim Controls')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAInvestigation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAInvestigationRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPA Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPASupplementalInvestigation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPASupplementalInvestigationRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Supplemental Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAImplemtation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAImplemtationRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPA Implementation')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAactionsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAactionsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Actions')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessPlan()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessPlanRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Plan')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessReview()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessReviewRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Review')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AuditsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AuditsRecordOpen()
        cy.wait(6000)
        cy.validateTabsAndColumns('Audits', 'Audits')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SmartContentAuditSObservationMenuOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AuditsObservationRecordOpen()
        cy.wait(6000)
        cy.validateTabsAndColumns('Audits', 'Audits Observations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AccountOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AccountRecordOpen()
        cy.validateTabsAndColumns('Accounts', 'Accounts')

        //laboratory Information 
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SmartContentLaboratoryInformationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SmartContentStabilityStudiesRecordOpen()
        cy.validateTabsAndColumns('Laboratory Information', 'Stability Stuides')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ManufacturingOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.MaterialRecordOpen()
        cy.validateTabsAndColumns('Manufacturing', 'Materials')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Batchopen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.BatchsOpenRecord()
        cy.validateTabsAndColumns('Manufacturing', 'Batches')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.BatchFlowOPen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.BatchFlowRecordOpen()
        cy.validateTabsAndColumns('Manufacturing', 'Batch Flow')

    })

    it('User Binder Smart Content', () => {
        const GQ = new GQTest();
        // Login
        GQ.login()

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')


        //Content and Document

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.DocumentAllOpen()

        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.SmartContentDocumentOpenRecord()

        cy.validateTabsAndColumns('Documents', 'Documents')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.open()

        //CTD Submission
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Module1RecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')




        //   module 2

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.module2Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.QualityOVerallRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonClinicalSummaryOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonClinicalSummaryOpenRecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ClinicalSummaryOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ClinicalSummaryRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')


        //module 3
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Module3Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.DrugProductRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.DrugSubstance()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.DrugSubstanceRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegionalInformation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegionalInformationRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Appendices()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.AppendicesRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        // module4

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules4Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules4RecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        // module 5
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules5Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules5ReocordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        //nomodule
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonModulesOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonModulesRecordOpne()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ProductMenu()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ProductRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Products')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ApplicationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ApplicationRecordopen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Applications')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegistrationsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegistrationsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Registrations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.PackageSetsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.PackageSetsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Package Sets')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.CTAINDEvents()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.CTAINDEventsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTA-IND Events')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.BLANDAEvents()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.BLANDAEventsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'BLA-NDA Events')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.ComplaintsRecordOpen()
        cy.validateTabsAndColumns('Post Market', 'Complaints')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.ComplaintsRecordMenuOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.ComplaintsRecordMenuRecordOpen()
        cy.validateTabsAndColumns('Post Market', 'Complaint Records')

        // Quality Management

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ChangeControlRecordopen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentExecutionOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentExecutionRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Implementations()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ImplementationsRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')

        //Escalations
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Escalationopen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.EscalationRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Quality Management', 'Escalations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.MeetingOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.MeetingRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NonconformancesOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NonconformancesRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Nonconformances')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Containments()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ContainmentsRecordsOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Containments')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NcInvestigationsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NcInvestigationsRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'NC Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SupplementalInvestigations()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SupplementalInvestigationsRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Supplemental Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.LaboratoryInvestigationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.LaboratoryInvestigationRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Laboratory Investigations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NCCorrectionsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NCCorrectionRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'NC Corrections')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Actions()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ActionsOpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Actions')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.RiskAssessmentsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.RiskAssessmentRecordOpen()
        cy.wait(10000)
        cy.validateTabsAndColumns('Nonconformances', 'Risk Assessments')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPARecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPAs')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.InterimControlsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.InterimControlsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Interim Controls')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAInvestigation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAInvestigationRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPA Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPASupplementalInvestigation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPASupplementalInvestigationRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Supplemental Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAImplemtation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAImplemtationRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPA Implementation')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAactionsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAactionsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Actions')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessPlan()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessPlanRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Plan')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessReview()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessReviewRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Review')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AuditsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AuditsRecordOpen()
        cy.wait(6000)
        cy.validateTabsAndColumns('Audits', 'Audits')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SmartContentAuditSObservationMenuOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AuditsObservationRecordOpen()
        cy.wait(6000)
        cy.validateTabsAndColumns('Audits', 'Audits Observations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AccountOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AccountRecordOpen()
        cy.validateTabsAndColumns('Accounts', 'Accounts')

        //laboratory Information 
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SmartContentLaboratoryInformationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SmartContentStabilityStudiesRecordOpen()
        cy.validateTabsAndColumns('Laboratory Information', 'Stability Stuides')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ManufacturingOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.MaterialRecordOpen()
        cy.validateTabsAndColumns('Manufacturing', 'Materials')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Batchopen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.BatchsOpenRecord()
        cy.validateTabsAndColumns('Manufacturing', 'Batches')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.BatchFlowOPen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.BatchFlowRecordOpen()
        cy.validateTabsAndColumns('Manufacturing', 'Batch Flow')

    })

    it('Product Binder Smart Content', () => {
        const GQ = new GQTest();
        // Login
        GQ.login()

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectqualitymanagement();
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

        //Content and Document

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.DocumentAllOpen()

        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.SmartContentDocumentOpenRecord()

        cy.validateTabsAndColumns('Documents', 'Documents')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.open()

        //CTD Submission
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Module1RecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')




        //   module 2

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.module2Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.QualityOVerallRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonClinicalSummaryOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonClinicalSummaryOpenRecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ClinicalSummaryOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ClinicalSummaryRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')


        //module 3
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Module3Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.DrugProductRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.DrugSubstance()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.DrugSubstanceRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegionalInformation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegionalInformationRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Appendices()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.AppendicesRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        // module4

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules4Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules4RecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        // module 5
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules5Open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.Modules5ReocordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        //nomodule
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonModulesOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.NonModulesRecordOpne()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ProductMenu()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ProductRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Products')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ApplicationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.ApplicationRecordopen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Applications')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegistrationsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.RegistrationsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Registrations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.PackageSetsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.PackageSetsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'Package Sets')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.CTAINDEvents()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.CTAINDEventsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTA-IND Events')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.BLANDAEvents()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.RegulatoryRecordsSubnous.BLANDAEventsRecordOpen()
        cy.validateTabsAndColumns('Regulatory Affairs', 'BLA-NDA Events')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.ComplaintsRecordOpen()
        cy.validateTabsAndColumns('Post Market', 'Complaints')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.ComplaintsRecordMenuOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.PostMarket.ComplaintsRecordMenuRecordOpen()
        cy.validateTabsAndColumns('Post Market', 'Complaint Records')

        // Quality Management

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ChangeControlRecordopen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentExecutionOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentExecutionRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Implementations()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ImplementationsRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')

        //Escalations
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Escalationopen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.EscalationRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AssessmentRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Quality Management', 'Escalations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.MeetingOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.MeetingRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NonconformancesOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NonconformancesRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Nonconformances')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Containments()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ContainmentsRecordsOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Containments')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NcInvestigationsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NcInvestigationsRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'NC Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SupplementalInvestigations()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SupplementalInvestigationsRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Supplemental Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.LaboratoryInvestigationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.LaboratoryInvestigationRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'Laboratory Investigations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NCCorrectionsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.NCCorrectionRecordOpen()
        cy.validateTabsAndColumns('Nonconformances', 'NC Corrections')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Actions()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ActionsOpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Actions')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.RiskAssessmentsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.RiskAssessmentRecordOpen()
        cy.wait(10000)
        cy.validateTabsAndColumns('Nonconformances', 'Risk Assessments')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPARecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPAs')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.InterimControlsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.InterimControlsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Interim Controls')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAInvestigation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAInvestigationRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPA Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPASupplementalInvestigation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPASupplementalInvestigationRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Supplemental Investigations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAImplemtation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAImplemtationRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPA Implementation')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAactionsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAactionsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Actions')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessPlan()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessPlanRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Plan')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessReview()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.CAPAEffectivenessReviewRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Review')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AuditsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AuditsRecordOpen()
        cy.wait(6000)
        cy.validateTabsAndColumns('Audits', 'Audits')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SmartContentAuditSObservationMenuOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AuditsObservationRecordOpen()
        cy.wait(6000)
        cy.validateTabsAndColumns('Audits', 'Audits Observations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AccountOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.AccountRecordOpen()
        cy.validateTabsAndColumns('Accounts', 'Accounts')

        //laboratory Information 
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SmartContentLaboratoryInformationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.SmartContentStabilityStudiesRecordOpen()
        cy.validateTabsAndColumns('Laboratory Information', 'Stability Stuides')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.ManufacturingOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.MaterialRecordOpen()
        cy.validateTabsAndColumns('Manufacturing', 'Materials')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.Batchopen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.BatchsOpenRecord()
        cy.validateTabsAndColumns('Manufacturing', 'Batches')


        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.BatchFlowOPen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.QualityMangementTab.BatchFlowRecordOpen()
        cy.validateTabsAndColumns('Manufacturing', 'Batch Flow')

    })

    it('Admin Binder Linked Content', () => {
        const GQ = new GQTest();
        // Login
        GQ.login()

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()
        // Content and Document

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.LinkedContentDocumentOpen()

        cy.validateTabsAndColumns('Documents', 'Documents')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.AdminLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.openRecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.AdminBinderLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.openARecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Regulatory Affairs', 'Products')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.AdminLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.openRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Regulatory Affairs', 'Applications')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.linkSibling(1)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.OpenRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Post Market', 'Complaints')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.closeRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.ComplaintsRecords.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.ComplaintsRecords.openRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Post Market', 'Complaint Records')
        // Quality Management

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.openRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.minimize()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.AssessmentsExecution()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.AssessmentExecutionRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.minimize()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.ImplementationsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.ImplementationsRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.minimize()

        //Escalations
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.EscalationRecordOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.ColseRecord()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.AssessmentOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.AssessmentsRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.MeetingOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.MeetingRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.NonconformancesOpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Nonconformances')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.OpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Containments')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.NCInvestigationLinkSibiling()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.OpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'NC Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.SupplementalInvestigationLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.SupplementalInvestigationOpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Supplemental Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.openRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Laboratory Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.NCCorrectionLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.openRecord()
        cy.validateTabsAndColumns('Nonconformances', 'NC Corrections')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.ActionLinkedSbiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.OpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Actions')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.RiskAssessmentsLinkSiblink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.openRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Risk Assessments')


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPARecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPAs')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.InterimControlsLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.InterimControlsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Interim Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.CAPAInvestigationsLinkSiblink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.CAPAInvestigationsRecordOpen()

        cy.validateTabsAndColumns('CAPAs', 'CAPA Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()



        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.CAPASupplementalInvestigationsLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.CAPASupplementalInvestigationsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Supplemental Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.CAPAImplementationLinkedSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.CAPAImplementationRecord()
        cy.validateTabsAndColumns('CAPAs', 'CAPA Implementation')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.CAPALinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.CAPARecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Actions')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Plan')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Review')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditRecordOpen()

        cy.validateTabsAndColumns('Audits', 'Audits')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.OpenRecord()
        cy.validateTabsAndColumns('Audits', 'Audits Observations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.AccountRecords()
        cy.validateTabsAndColumns('Accounts', 'Accounts')
        ///laboratory Information 

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.StabilityStudiesLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.StabilityStudiesRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Laboratory Information', 'Stability Stuides')


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.open()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.SpecificationLinkSibiling()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.SpecificationsRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Laboratory Information', 'Specifications')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Materials.MaterialsSiblinglink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Materials.MaterialsOpenRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Manufacturing', 'Materials')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.BatchesMenu.BatchOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.BatchesMenu.BatchSibilingLink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.BatchesMenu.BatchRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Manufacturing', 'Batches')


    })

    it('User Binder Linked Content', () => {
        const GQ = new GQTest();
        // Login
        GQ.login()

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()
        // Content and Document

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.LinkedContentDocumentOpen()


        cy.validateTabsAndColumns('Documents', 'Documents')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.AdminLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.openRecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.open()
        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.ProductBinderLinkSibling()
        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.productBinderOpenRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Regulatory Affairs', 'Products')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.open()
        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.ProductBinderApplicationOpenRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Regulatory Affairs', 'Applications')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.ProductBinderLinkSibling()
        cy.wait(2000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.ComplaintsRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Post Market', 'Complaints')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.ProductBinderCloseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.ComplaintsRecords.ProductBinderComplaintsRecordOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.ComplaintsRecords.ProductBinderRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Post Market', 'Complaint Records')
        // Quality Management

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.openRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.minimize()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.AssessmentsExecution()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.AssessmentExecutionRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.minimize()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.ImplementationsOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.ImplementationsRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.minimize()

        //Escalations
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.ProductBinderSibilingLink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.EscalationRecordOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.ColseRecord()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.AssessmentOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.AssessmentsSibilinkLink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.AssessmentsRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.MeetingOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.MeetingRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.NonconformancesOpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Nonconformances')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.OpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Containments')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.NCInvestigationLinkSibiling()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.OpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'NC Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.SupplementalInvestigationLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.SupplementalInvestigationOpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Supplemental Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.openRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Laboratory Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.NCCorrectionLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.openRecord()
        cy.validateTabsAndColumns('Nonconformances', 'NC Corrections')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.ActionLinkedSbiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.OpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Actions')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.RiskAssessmentsLinkSiblink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.openRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Risk Assessments')


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPARecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPAs')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.InterimControlsLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.InterimControlsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Interim Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.CAPAInvestigationsLinkSiblink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.CAPAInvestigationsRecordOpen()

        cy.validateTabsAndColumns('CAPAs', 'CAPA Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()



        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.CAPASupplementalInvestigationsLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.CAPASupplementalInvestigationsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Supplemental Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.CAPAImplementationLinkedSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.CAPAImplementationRecord()
        cy.validateTabsAndColumns('CAPAs', 'CAPA Implementation')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.CAPALinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.CAPARecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Actions')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Plan')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Review')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditRecordOpen()

        cy.validateTabsAndColumns('Audits', 'Audits')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.OpenRecord()
        cy.validateTabsAndColumns('Audits', 'Audits Observations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.AccountRecords()
        cy.validateTabsAndColumns('Accounts', 'Accounts')
        //laboratory Information 

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.ProductBinderStabilityStudiesRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Laboratory Information', 'Stability Stuides')


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.ProductBinderSpecificationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.ProductBinderSpecificationLinkSibiling()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.ProductBinderSpecificationRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Laboratory Information', 'Specifications')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Materials.ProductBinderLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Materials.ProductBinderMaterialsOpenRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Manufacturing', 'Materials')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.BatchesMenu.ProductBinderBatchOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.BatchesMenu.ProductBinderBatchLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.BatchesMenu.ProductBinderBatchRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Manufacturing', 'Batches')

    })

    it('Product Binder Linked Content', () => {
        const GQ = new GQTest();
        // Login
        GQ.login()

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectqualitymanagement();
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ProductIcon()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()
        // Content and Document

        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.ProductLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.ProductDocumentOpen()
        cy.validateTabsAndColumns('Documents', 'Documents')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.AdminLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.openRecord()
        cy.validateTabsAndColumns('Regulatory Affairs', 'CTD')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.open()
        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.ProductBinderLinkSibling()
        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.productBinderOpenRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Regulatory Affairs', 'Products')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.ProductApplicationSibiling()
        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Applications.ProductBinderApplicationOpenRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Regulatory Affairs', 'Applications')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.ProductBinderLinkSibling()
        cy.wait(2000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.Complaints.ComplaintsRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Post Market', 'Complaints')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.ProductBinderCloseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.ComplaintsRecords.ProductBinderComplaintsRecordOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.PostMarket.ComplaintsRecords.ProductBinderRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Post Market', 'Complaint Records')
        // Quality Management

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.open()
        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.ProductChangeControlLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.openRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.minimize()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.AssessmentsExecution()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.AssessmentExecutionsLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.AssessmentExecutionRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.minimize()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.ImplementationsOpen()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.ImplementationsLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.ImplementationsRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Change Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.minimize()

        //Escalations
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.ProductBinderSibilingLink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.EscalationRecordOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.ColseRecord()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.AssessmentOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.AssessmentsSibilinkLink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.AssessmentsRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.ColseRecord()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.MeetingOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.MeetingLinkSibiling()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.MeetingRecordOpen()
        cy.validateTabsAndColumns('Quality Management', 'Escalations')


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.NonconformancesLinkSibiling()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.NonconformancesOpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Nonconformances')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.ContainmentsLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Containments.OpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Containments')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.NCInvestigationLinkSibiling()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCInvestigations.OpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'NC Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.SupplementalInvestigationLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.SupplementalInvestigations.SupplementalInvestigationOpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Supplemental Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.LaboratoryInvestigationsLinkSibiling()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.LaboratoryInvestigations.openRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Laboratory Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.NCCorrectionLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NCCorrections.openRecord()
        cy.validateTabsAndColumns('Nonconformances', 'NC Corrections')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.ActionLinkedSbiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.Actions.OpenRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Actions')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.NonconformancesSubTab.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.RiskAssessmentsLinkSiblink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Nonconformances.RiskAssessments.openRecord()
        cy.validateTabsAndColumns('Nonconformances', 'Risk Assessments')


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPALinkSibiling()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPARecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'CAPAs')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.InterimControlsLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.InterimControls.InterimControlsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Interim Controls')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.CAPAInvestigationsLinkSiblink()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAInvestigations.CAPAInvestigationsRecordOpen()

        cy.validateTabsAndColumns('CAPAs', 'CAPA Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()



        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.CAPASupplementalInvestigationsLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.SupplementalInvestigations.CAPASupplementalInvestigationsRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Supplemental Investigations')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.CAPAImplementationLinkedSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.CAPAImplementation.CAPAImplementationRecord()
        cy.validateTabsAndColumns('CAPAs', 'CAPA Implementation')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.CAPALinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.Actions.CAPARecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Actions')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Plan')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanLinkSibling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.EffectivenessPlan.EffectivenessPlanRecordOpen()
        cy.validateTabsAndColumns('CAPAs', 'Effectiveness Review')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.CAPAs.ColseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditRecordOpen()

        cy.validateTabsAndColumns('Audits', 'Audits')
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.ColseRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.AuditObservationLinkSibiling()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.AuditObservation.OpenRecord()
        cy.validateTabsAndColumns('Audits', 'Audits Observations')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Audits.ColseRecord()

        //Records not available
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.open()
        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Accounts.AccountRecords()
        // cy.validateTabsAndColumns('Accounts', 'Accounts')
        //laboratory Information 

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.LaboratoryInformationLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.ProductBinderStabilityStudiesRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Laboratory Information', 'Stability Stuides')


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.ProductBinderSpecificationOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.ProductBinderSpecificationLinkSibiling()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.Specifications.ProductBinderSpecificationRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Laboratory Information', 'Specifications')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Materials.ProductBinderLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.Materials.ProductBinderMaterialsOpenRecord()
        cy.wait(3000)
        cy.validateTabsAndColumns('Manufacturing', 'Materials')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.BatchesMenu.ProductBinderBatchOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.BatchesMenu.ProductBinderBatchLinkSibiling()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Manufacturing.BatchesMenu.ProductBinderBatchRecordOpen()
        cy.wait(3000)
        cy.validateTabsAndColumns('Manufacturing', 'Batches')


    });

});