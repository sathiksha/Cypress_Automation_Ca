import { GQTest } from '../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Tabs And Views', () => {

        // Object
        const GQ = new GQTest();

        // Login
        GQ.login();

        // Laboratory Information
        GQ.Planets.LaboratoryInformation.openLandingPage()

        // Stability Studies
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()

        // All
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openAll()

        // All Studies With No Results
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openAllStudiesWithNoResults()

        // All Studies With Results
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openAllStudiesWithResults()

        // -NSX
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openNSX()

        // Stability Data
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.openLandingPage()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.openAll()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.verifyAndReport()

        // Specifications
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.open()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.openReleaseSpecificationIALDownloadView()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.openStandardSpecificationIALDownloadView()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.openStandardView()
        
        // Release Data
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.ReleaseData.openLandingPage()

    })
})