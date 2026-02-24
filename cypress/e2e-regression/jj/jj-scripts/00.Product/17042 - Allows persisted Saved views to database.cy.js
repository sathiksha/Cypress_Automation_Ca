import { GQTest } from '../../jj-pages/GQTest'
// Sprint 15
describe('Sprint 15', () => {
    const GQ = new GQTest();
    it('Persisted Saved Viewed to database', () => {

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
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.openAdvancedCriteria()
        
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.batchNumberHeaderID()

        // Add Criteria
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData
        .addAdvancedCriteria('Batch Number','contains','LAS2M00', 1)

        // Save Criteria
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.saveAdvancedCriteria()

        //Save View  to database
        //Right click on column name
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.rightclick() 

          //Saved Views
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.savedviews()

          //Save view
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.saveview()

          //Types test
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.typestest()

          //Save Button
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.savebutton()

        // Logout
        GQ.logout()


        //Checking the saved filters

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

        //Saved View  to database
        //Right click on any column name 
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.rightclick()

          //Saved Views
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.savedviews()

          //Reload Saved View
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.reloadsaved()


        // Toggle Filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.toggleFilter()

        // Opens Advanced Criteria
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.advancedcriteria()

        // Advanced Filtering
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.advancedfiltering()
        
        
    const expectedValues = ['LAS2M00'];
    expectedValues.forEach(value => {
      cy.checkInputValue(value);
    });

        // Save Criteria
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.saveAdvancedCriteria()

        GQ.logout();

})
})
