import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Tabs and Views', () => {
            const GQ = new GQTest();
            // Login
        GQ.login();

        // Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Change controls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        // Audits
        GQ.Planets.QualityManagement.Audits.openLandingPage()

        // Audits Observation Sub Tab
        GQ.Planets.QualityManagement.Audits.AuditObservations.openLandingPage()

        // Open Record
        GQ.Planets.QualityManagement.Audits.AuditObservations.openRecordByIndex(0)

        // Related Objects
        GQ.Planets.QualityManagement.Audits.AuditObservations.RelatedObjects.open()

        // Check the tabs
        cy.getSC(
            GQ.Planets.QualityManagement.Audits.AuditObservations.RelatedObjects.readAuditsTab()
        ).should('be.visible')

        cy.getSC(
            GQ.Planets.QualityManagement.Audits.AuditObservations.RelatedObjects.readProductRecordsTab()
        ).should('be.visible')
        
        cy.getSC(
            GQ.Planets.QualityManagement.Audits.AuditObservations.RelatedObjects.readCAPAsTab()
        ).should('be.visible')
        
        // Logout 
        GQ.logout()

        




    })
})
