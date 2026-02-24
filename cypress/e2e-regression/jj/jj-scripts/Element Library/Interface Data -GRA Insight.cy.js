import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 3', () => {
    const GQ = new GQTest();
    it('11290-Test Case for Assimilation of Regulatory CTA -IND from GRA Insight', () => {

        // Login 
        GQ.login()

        // Go to element library
        GQ.NavBar.ElementLibrary.openLandingPage()

        // Click Interface data
        GQ.NavBar.ElementLibrary.InterfaceData.open()

        // GRA Insight
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.openLandingPage()

        // QXF should be visible
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.locator).should('be.visible')

        // QXD should be visible
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.locator).should('be.visible')

        // QXF
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.openLandingPage()

        // Verify CTA-IND is visible
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryCTAIND.locator).should('be.visible')

        // Open CTA-IND
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryCTAIND.openLandingPage()
        
        let expectedColumnsQXF = [
            'Event Comments',
            'Event ID',
            'Application Status Date',
            'Product Family Name',
            'Application Name',
            'Event Country',
            'Protocol Number',
            'Event Name',
            'Event Description',
            'Application Code',
            'Application Description',
            'Application Status',
            'Procedure Type',
            'Therapeutic Area',
            'Protocol Title',
            'Event Closed As',
            'Event Closed',
            'Event URL',
            'Load Date'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryCTAIND.eventCommentsHeaderID
        )
        .then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXF.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXF[i])
            }
        })


        // QXD
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.openLandingPage()

        // Verify CTA-IND is visible
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryCTAIND.locator).should('be.visible')

        // Open CTA-IND
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryCTAIND.openLandingPage()
        
        let expectedColumnsQXD = [
            'Event Comments',
            'Event ID',
            'Application Status Date',
            'Product Family Name',
            'Application Name',
            'Event Country',
            'Protocol Number',
            'Event Name',
            'Event Description',
            'Application Code',
            'Application Description',
            'Application Status',
            'Procedure Type',
            'Therapeutic Area',
            'Protocol Title',
            'Event Closed As',
            'Event Closed',
            'Event URL',
            'Event Load Date'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryCTAIND.eventCommentsHeaderID
        )
        .then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }
        })
        // Logout
        GQ.logout()

    })
})
