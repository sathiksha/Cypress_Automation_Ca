import { GQTest } from '../../../sn-pages/GQTest';
describe('Element Library', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('RecordManagement - StandartTemplates', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Elemnt Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RecordManagement.open()

        // Standard Template
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.open()

        // Templates
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.open()

        // Read column
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.templatesID()
            ,{}    
        )

        // View templates/templates releases dropdown
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.viewTemplatesAndTemplatesReleases()

        // View template
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.viewTemplates()

        // View Templates Releases
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.viewTemplateReleases()

        // Select record
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.selectRecordByIndex(0)

        // Design
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.Template.Design.open()

        // Release
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.Template.Released.open()
        
        // Routings
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.Template.Routings.open()

        // Team
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.Template.Team.open()

        // Action
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.Template.Action.open()

        // Details
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.Template.Details.open()

        // Admin
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.Template.Admin.open()

        // History
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.Template.History.open()

        // click To maximise
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.Templates.Template.clickToMaximise()

        // Template Releases
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.TemplateReleases.open()

        // Column table
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.TemplateReleases.nameID()
            ,{}
        )

        // open Records
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.TemplateReleases.selectRecordByIndex(0)

        // TR Templates
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.TemplateReleases.Templates.open()

        // Read Column
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.TemplateReleases.Templates.nameID()
        )

        // TR Template Releases
        GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.TemplateReleases.TemplateReleases.open()

        // Read Column
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.RecordManagement.StandardTemplates.TemplateReleases.TemplateReleases.nameID()
        )


        // Logout
        GQ.logout()

    })
})