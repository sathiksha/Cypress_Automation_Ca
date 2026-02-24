import { GQTest } from '../../../jj-pages/GQTest'
// Sprint 4
describe('Sprint 4', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('truVAULT Record table view Standard w Relation Type shows title Relation Type instead of title Relationship Type', () => {

        // Login
        GQ.login()

        // Documents
        GQ.Planets.Documents.openLandingPage()

        // Read Documents tab
        cy.getSC(
            GQ.Planets.Documents.Documents.readTabHeader()
        ).should('be.visible')

        // Documents tab
        GQ.Planets.Documents.Documents.openLandingPage()

        // Open Record
        GQ.Planets.Documents.Documents.openRecordByIndex(3)  

        // Related planets view
        GQ.Planets.Documents.Documents.Document.RelatedObjects.open()

        // Documents
        GQ.Planets.Documents.Documents.Document.RelatedObjects.Documents.open()

        // Read Relationship name column
        cy.getSC(
            GQ.Planets.Documents.Documents.Document.RelatedObjects.Documents.readRelationshipTypeColumn()
        ).invoke('text').then((text)=>{
            cy.wrap(text).should('equal','Relationship Type')
        })

    })
})