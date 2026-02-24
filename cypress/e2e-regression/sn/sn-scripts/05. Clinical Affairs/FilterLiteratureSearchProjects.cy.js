import { GQTest } from '../../sn-pages/GQTest';
describe('05. Clinical Affairs', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterLiteratureSearchProjects', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // ClinicalAffairs
        GQ.Planets.ClinicalAffairs.open()

        // Literature search tab
        GQ.Planets.ClinicalAffairs.LiteratureSearchProjects.open()

        // Toggle Filter
        GQ.Planets.ClinicalAffairs.LiteratureSearchProjects.toggleFilter()

        // Filter fields
        cy.autoTestAll(
            GQ.Planets.ClinicalAffairs.LiteratureSearchProjects.titleColumn(),
            []
        )

        // Logout
        GQ.logout()

    })
})
