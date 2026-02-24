import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Study Details Related Objects', () => {
        // Object
        const GQ = new GQTest();
        
         // Login
        GQ.login();

        // Laboratory Information
        GQ.Planets.LaboratoryInformation.openLandingPage()

        // Stability Studies
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()

        // Open a record
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openRecord('Study-230627')

        // Related Objects
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.open()

        // Specifications
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickSpecifications()

        // Test Methods
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickTestMethods()

        // Change Controls
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickChangeControls()

        // // Quality Events
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords
        // .StabilityStudies.StabilityStudy.RelatedObjects.clickQualityEvents()

        // Batches
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickBatches()

        // Samples
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickSamples()

        // Select a sample
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.selectSampleByIndex(0)

        GQ.logout()

    })
})