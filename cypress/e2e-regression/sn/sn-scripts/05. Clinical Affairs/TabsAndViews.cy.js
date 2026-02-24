import { GQTest } from '../../sn-pages/GQTest';
describe('05. Clinical Affairs', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Tabs And  Views', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // ClinicalAffairs
        GQ.Planets.ClinicalAffairs.open()

        // Literature search tab
        GQ.Planets.ClinicalAffairs.LiteratureSearchProjects.open()

        // Literature tab
        GQ.Planets.ClinicalAffairs.Literature.open()

        // All tab
        GQ.Planets.ClinicalAffairs.Literature.All.open()

        // Duplicates tab
        GQ.Planets.ClinicalAffairs.Literature.Duplicates.open()

        // Logout
        GQ.logout()

    })
})
