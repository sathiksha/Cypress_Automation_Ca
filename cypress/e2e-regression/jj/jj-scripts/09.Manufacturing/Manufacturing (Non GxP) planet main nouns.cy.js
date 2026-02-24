import { GQTest } from '../../jj-pages/GQTest'
describe('Laboratory Information planet Testing', () => {
    const GQ = new GQTest();

    it('Automated Testing of Laboratory Information planet tabs', () => {

        // Login
        GQ.login()

        // Open Manufacturing
        GQ.Planets.Manufacturing.openLandingPage()

        const expectedTabs = ['Materials', 'Batches', 'Batch Flows', 'SC Maps']

        cy.verifyTabsavailable(expectedTabs)
   
        // Logout
        GQ.logout()

    })

})