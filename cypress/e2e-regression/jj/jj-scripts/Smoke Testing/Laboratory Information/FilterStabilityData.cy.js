import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('Filter Stability Data', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Laboratory Information
        GQ.Planets.LaboratoryInformation.openLandingPage()

        // Open Stability Data
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.openLandingPage()

        // Refresh
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.refresh()

        // AutoTest All
        // cy.autoTestAll(
        //     GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.gridID(),{}
        // )

        // Logout
        GQ.logout()
    })
})