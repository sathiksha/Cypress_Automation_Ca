import { GQTest } from '../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Study Results', () => {

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

        // Click analysis
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.clickAnalysis()

        // Click record
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.clickPH()

        // Analysis
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.viewAnalysisInSecondDropdown()

        // Cockpit
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.viewCockpitInSecondDropdown()

        // STL - Import
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.viewSTLInSecondDropdown()

        // w/ Limit
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.viewWithLimitInThird()

        // Open Chart
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.Chart.open()

        // Open Facet Picker
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.Chart.toggleFacetPicker()

        // Chart Filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.Chart.toggleChartFilter()

        // Open Facet Picker
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.Chart.toggleFacetPicker()

        // Open Chart Filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.Chart.toggleChartFilter()

        // Close Facet Picker
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.Chart.toggleFacetPicker()

        // Close Chart Filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.Chart.toggleChartFilter()

    })
})