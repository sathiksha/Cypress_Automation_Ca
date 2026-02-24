import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Remove Audits as a Related Object of COMET Audits', () => {
            const GQ = new GQTest();
            // Login
        GQ.login();

        // Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Change controls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        // Audits
        GQ.Planets.QualityManagement.Audits.openLandingPage()

        // Audits Sub Tab
        GQ.Planets.QualityManagement.Audits.Audits.openLandingPage()

        // Open Record
        GQ.Planets.QualityManagement.Audits.Audits.openRecordByIndex(0)

        // Related Planets
        GQ.Planets.QualityManagement.Audits.Audits.RelatedObjects.open()

        // Audits Observation
        cy.getSC(
            GQ.Planets.QualityManagement.Audits.Audits.RelatedObjects.readAuditObservationTab()
        ).should('be.visible')

        // Nonconformances
        cy.getSC(
            GQ.Planets.QualityManagement.Audits.Audits.RelatedObjects.readNonconformancesTab()
        ).should('be.visible')

        // CAPAs Sub Tab
        cy.getSC(
            GQ.Planets.QualityManagement.Audits.Audits.RelatedObjects.readCAPAsTab()
        ).should('be.visible')

        // Maximize Selector
        GQ.Planets.QualityManagement.Audits.Audits.maximizeSelector()

        // Logout
        GQ.logout()

    })
})