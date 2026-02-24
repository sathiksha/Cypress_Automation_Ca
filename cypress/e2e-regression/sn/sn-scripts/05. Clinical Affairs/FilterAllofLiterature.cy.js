import { GQTest } from '../../sn-pages/GQTest';
describe('05. Clinical Affairs', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterAllofLiterature', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // ClinicalAffairs
        GQ.Planets.ClinicalAffairs.open()

        // Literature tab
        GQ.Planets.ClinicalAffairs.Literature.open()

        // All tab
        GQ.Planets.ClinicalAffairs.Literature.All.open()

        // // Toggle Filter
        // GQ.Planets.ClinicalAffairs.Literature.All.toggleFilter()

        // Filter fields
        cy.autoTestAll(
            GQ.Planets.ClinicalAffairs.Literature.All.nameColumn(),
            []
        )

        // Toggle Filter
        GQ.Planets.ClinicalAffairs.Literature.All.toggleFilter()
        
        // Logout
        GQ.logout()

    })
})
