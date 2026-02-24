import { GQTest } from '../../jj-pages/GQTest'
// Sprint 2
describe('Sprint 2', () => {
    const GQ = new GQTest();
    it('Multi-choice picker doesn\'t work when Advance Filtering has been applied', () => {

        // Login Step
        GQ.login()

        // Open Laboratory Information planet
        GQ.Planets.LaboratoryInformation.openLandingPage()

        // Assertion that the Stability Data tab is available
        cy.getSC(
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.tabLocator()
        ).should('be.visible')

        // Click on Stability Data
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.openLandingPage()

        // Toggle Filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.toggleFilter()

        // Opens Advanced Criteria
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.openAdvancedCriteria(
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.batchNumberHeaderID()
        )

        // Add Criteria
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData
        .addAdvancedCriteria('Batch Number','contains','LAS2M00', 1)

        // Add Criteria
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData
        .addAdvancedCriteria('Batch Number','contains','JJS4I', 2)

        // Save Criteria
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData
        .saveAdvancedCriteria()

         // Toggle Filter
         GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.toggleFilter()

         // Toggle Filter
         GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.toggleFilter()

        // Test the dropdown columns
        cy.autoTestOnly(
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.batchNumberHeaderID(),
            {

              'Analysis' : [0,1],
              'Measurement' : [0,1],
              'Manufacture Site': [0,1],
              'Condition': [0,1],
              'Time Point': [0,1],
              'Limit Type ID': [0,1]
            }
          );

        // Logout
        GQ.logout()

})
})
