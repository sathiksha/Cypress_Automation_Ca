import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Study Batch Related Objects', () => {

        const GQ = new GQTest();
         // Login
        GQ.login();

        GQ.Planets.LaboratoryInformation.openLandingPage()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openRecord('Study-230627')

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.open()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickBatches()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.selectBatchByIndex(0)

        GQ.logout()
    })
})