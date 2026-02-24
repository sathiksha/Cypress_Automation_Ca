import { GQTest } from '../../jj-pages/GQTest'
require('cypress-xpath')
describe('Laboratory Information planet Testing', () => {
    const GQ = new GQTest();

    it('Automated Testing of Laboratory Information planet tabs', () => {

        // Login
        GQ.login()

        // Open Laboratory Information
        GQ.Planets.LaboratoryInformation.openLandingPage()

        const expectedTabs = ['Stability Studies', 'Stability Data', 'Release Data', 'Specifications']

        cy.verifyTabsavailable(expectedTabs)
        // Logout
        GQ.logout()

    })
})