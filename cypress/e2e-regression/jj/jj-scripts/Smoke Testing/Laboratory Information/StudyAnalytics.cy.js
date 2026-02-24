import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('StudyAnalytics', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Laboratory Information
        GQ.Planets.LaboratoryInformation.openLandingPage()

        // Open Stability Data
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()

        // Open Record
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openRecord('Study-241051')

        // Analysis
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.clickAnalysis()

        // Select an analysis
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.selectRow()

        // By Measurement
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.byMeasurement()

        // By Condition
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.byCondition()

        // By Time point
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.byTimepoint()

        // Related Test Method
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.relatedTestMethod()

        // Related Specifications
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.relatedSpecs()

        // Logout
        GQ.logout()
    })
})