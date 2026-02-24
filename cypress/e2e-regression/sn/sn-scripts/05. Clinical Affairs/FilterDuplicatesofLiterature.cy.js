import { GQTest } from '../../sn-pages/GQTest';
describe('05. Clinical Affairs', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterDuplicatesofLiterature', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // ClinicalAffairs
        GQ.Planets.ClinicalAffairs.open()

        // Literature tab
        GQ.Planets.ClinicalAffairs.Literature.open()

        // All tab
        GQ.Planets.ClinicalAffairs.Literature.Duplicates.open()

        // Toggle Filter
        GQ.Planets.ClinicalAffairs.Literature.Duplicates.toggleFilter()

        // Filter fields
        cy.autoTestAll(
            GQ.Planets.ClinicalAffairs.Literature.Duplicates.nameColumn(),
            []
        )

        // Logout
        GQ.logout()

    })
})
