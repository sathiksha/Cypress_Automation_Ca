import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('Filter Release Data', () => {
        const GQ = new GQTest();
         // Login
    GQ.login();

    // Open Laboratory Information
    GQ.Planets.LaboratoryInformation.openLandingPage()

    // Open Release Data
    GQ.Planets.LaboratoryInformation.LaboratoryRecords.ReleaseData.openLandingPage()

    // Auto Test
    cy.autoTestAll(GQ.Planets.LaboratoryInformation.LaboratoryRecords.ReleaseData.gridID(),{})

    GQ.logout()

    })
})