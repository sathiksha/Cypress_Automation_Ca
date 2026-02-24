import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterInternalReferenceProjects', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.Core.open()

        // Optiqs360 Records
        GQ.Planets.Core.InternalReferenceProjects.open()

        // // Toggle filter
        // GQ.Planets.Core.InternalReferenceProjects.toggleFilter()

        // Filter columns
        cy.autoTestAll(
            GQ.Planets.Core.InternalReferenceProjects.titleColumn(),
            []
        )

        // Toggle filter
        GQ.Planets.Core.InternalReferenceProjects.toggleFilter()
        
        // Logout
        GQ.logout()

    })
})