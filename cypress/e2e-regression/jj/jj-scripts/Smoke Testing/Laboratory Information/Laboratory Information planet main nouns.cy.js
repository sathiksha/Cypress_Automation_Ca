import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('Laboratory Information planet main nouns', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Laboratory Information
        GQ.Planets.LaboratoryInformation.openLandingPage()

        const expectedTabs = ['Stability Studies', 'Stability Data', 'Release Data', 'Specifications']

        cy.verifyTabsavailable(expectedTabs)
        // Logout
        GQ.logout()

    })
})