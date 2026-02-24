import { GQTest } from '../../jj-pages/GQTest'
// Sprint 4
require('cypress-xpath')
describe('Sprint 4', () => {
    const GQ = new GQTest();
    it('Filtering on pivot chart - multi-choice picker dropdown shows the database column title', () => {

        // Login
        GQ.login()

        // Navigate to Quality Management planet
        GQ.Planets.QualityManagement.openLandingPage()

        // Navigate to Nonconformances tab
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        // Navigate to Laboratory Investigations subtab
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.openLandingPage()

        // Click toggle filter
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.toggleFilter()

        // Click dropdown 
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.clickDropdownOf('Sample Type')

        // Click Clear all
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.clickClearAll()

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.verifyClearAll()

        // Somewhere else
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        // Click pie-chart
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.clickPieChart()

        cy.waitForSCDone()

        // Click Analytics tab
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.Analytics.open()

        // Click Filter icon
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.Analytics.clickFilterIcon()

        // Click dropdown
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.Analytics.clickDropdownOf('Sample Type')

        // Click clear all
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.Analytics.clickClearAll()

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.Analytics.verifyClearAll()

        // Somewhere else
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()


        // Logout
        GQ.logout()


    
    
    })
})
 