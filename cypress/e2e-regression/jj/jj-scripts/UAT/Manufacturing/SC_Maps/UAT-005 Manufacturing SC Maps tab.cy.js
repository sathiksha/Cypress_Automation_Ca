import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('UAT/5.0', () => {
        it('UAT-005 Manufacturing SC Maps tab', () => {

            // Login
            GQ.login()

            // Manufacturing planet
            GQ.Planets.Manufacturing.openLandingPage()

            // SC maps
            GQ.Planets.Manufacturing.SCMaps.open()

            // Wait
            cy.wait(1000)

            // Logut
            GQ.logout()
            
        })
    })

}