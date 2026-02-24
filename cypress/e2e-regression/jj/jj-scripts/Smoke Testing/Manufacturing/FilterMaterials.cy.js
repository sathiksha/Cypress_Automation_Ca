import { GQTest } from'../../../jj-pages/GQTest'
describe('07. Manufacturing', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Filter Materials', () => {
    const GQ = new GQTest();
    // Login
    GQ.login();

    // Open Manufacturing
    GQ.Planets.Manufacturing.openLandingPage()

    // Materials
    GQ.Planets.Manufacturing.Materials.openLandingPage()

    // // Toggle filter
    GQ.Planets.Manufacturing.Materials.toggleFilter()

    // // Auto Test All
    cy.autoTestAll(
        GQ.Planets.Manufacturing.Materials.gridID(),
        {}
    )

    GQ.logout()

    })
})