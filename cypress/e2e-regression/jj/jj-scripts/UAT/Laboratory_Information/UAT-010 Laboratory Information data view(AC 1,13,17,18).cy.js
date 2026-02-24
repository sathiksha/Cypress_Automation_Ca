import { GQTest } from "../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
describe('UAT/5.0', () => {
    it('UAT-010 Laboratory Information data view(AC 1,13,17,18)', () => {

        // Login
        GQ.login('PQM360 General User')

        // Laboratory Info Planet
        GQ.Planets.LaboratoryInformation.openLandingPage()

        // Laboratory Records
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.openLandingPage()
        cy.wait(9000)
        // Stability Data
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.openLandingPage()

        // Toggle Filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.toggleFilter()

        // Search 201821
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.searchByText('201821')

        // Release data
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.ReleaseData.openLandingPage()

        // Toggle Filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.ReleaseData.toggleFilter()

        // Search EID971
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.ReleaseData.searchByText('EID971')

        // Specification
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.open()

        // Toggle filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.toggleFilter()

        // Search 00015300
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.selectrecordByText('00015300')

        // Stability Studies
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()

        // Toggle Filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter()

        // // Search 231147
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.searchByText('231147')

        // // Open 231147
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openStudyID('Study-231147')

        // // Related Objects
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.open()

        // // Change Controls
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickChangeControls()

        // // Record 2215183
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.ChangeControl.selectRecord('2215183')

        // // Related Objects
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.ChangeControl.RelatedObjects.open()

        // // Assessments
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.ChangeControl.RelatedObjects.openAssessmentPlans()

        // // CAPA
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.ChangeControl.RelatedObjects.openCAPA()

        // // Nonconformances
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.ChangeControl.RelatedObjects.openNonConformances()

        // // Escalation
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.ChangeControl.RelatedObjects.openEscalations()

        // // Accounts
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.ChangeControl.RelatedObjects.openAccounts()

        // // Batches
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.ChangeControl.RelatedObjects.openBatches()

        // // Specifications
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.ChangeControl.RelatedObjects.openSpecifications()

        // // Test Methods
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.ChangeControl.RelatedObjects.openTestMethods()

        // // Click to maximise
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickMaximizeSelector()

        // Search 231149
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.searchByText('Study-231149')

        // Open 231149
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openStudyID('Study-231149')

        // Related Objects
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.open()

        // Nonconfromance
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickQualityevents()

        // Trakwise
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.viewTrackwise()

        // Toggle Filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.toggleFilter()

        // Search 2305195
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.searchByText('2305195')

        // Open 2305195
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.openRecord('2305195')

        // Related Objects
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.RelatedObjects.open()

        // Change Records
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.RelatedObjects.openChangeControl()

        // Escalation
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.RelatedObjects.openEscalations()

        // Nonconformances
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.RelatedObjects.openNonConformances()

        // CAPA
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.RelatedObjects.openCAPA()

        // Accounts
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.RelatedObjects.openAccounts()

        // Batches
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.RelatedObjects.openBatches()

        // Click To Maximize
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.maximizeSelector()

        // Comet
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.NonConformances.viewComet()

        // Logout
        GQ.logout()



    })
})


