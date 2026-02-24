import { GQTest } from '../../jj-pages/GQTest'
// Sprint 4
require('cypress-xpath')
describe('Sprint 3', () => {
    const GQ = new GQTest();
    it('11291-Allows assimilation of Regulatory BLA-NDA from GRA Insight', () => {

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
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryBLANDA.locator).should('be.visible')

        // Open CTA-IND
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryBLANDA.openLandingPage()
        
        let expectedColumnsQXF = [
            'Application Code',
            'Application Comments',
            'Application Description',
            'Application ID',
            'Application Name',
            'Application Status',
            'Application Status Date',
            'Application Type',
            'Application URL',
            'Change Control Number',
            'Country Role',
            'Event Closed',
            'Event Closed As',
            'Event Country',
            'Event Description',
            'Event ID',
            'Event Name',
            'Event Type',
            'Event URL',
            'HA Submission Number',
            'Load Date',
            'Procedure Type',
            'Product Code / JNJ Number',
            'Product Detail Set Code',
            'Product Detail Set Name',
            'Product Family Code',
            'Product Family ID',
            'Product Family Name',
            'Product',
            'Reference Country',
            'Regulatory Activity Impacts',
            'Regulatory Assessment Required',
            'Regulatory Impact',
            'Regulatory Rationale',
            'Secondary Event Type',
            'Therapeutic Area',
            'Tracking Number'
        ]
        cy.wait(10000)
        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryBLANDA.eventCommentsHeaderID
        )
        .then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent.trim())
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXF.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXF[i])
            }
        })


        // QXD
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.openLandingPage()

        // Verify CTA-IND is visible
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryBLANDA.locator).should('be.visible')

        // Open CTA-IND
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryBLANDA.openLandingPage()
        
        let expectedColumnsQXD = [
            'Application Code',
            'Application Comments',
            'Application Description',
            'Application ID',
            'Application Name',
            'Application Status',
            'Application Status Date',
            'Application Type',
            'Application URL',
            'Change Control Number',
            'Country Role',
            'Event Closed',
            'Event Closed As',
            'Event Country',
            'Event Description',
            'Event ID',
            'Event Name',
            'Event Type',
            'Event URL',
            'HA Submission Number',
            'Load Date',
            'Procedure Type',
            'Product Code / JNJ Number',
            'Product Detail Set Code',
            'Product Detail Set Name',
            'Product Family Code',
            'Product Family ID',
            'Product Family Name',
            'Product',
            'Reference Country',
            'Regulatory Activity Impacts',
            'Regulatory Assessment Required',
            'Regulatory Impact',
            'Regulatory Rationale',
            'Secondary Event Type',
            'Therapeutic Area',
            'Tracking Number'
        ]
        cy.wait(10000)

        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryBLANDA.eventCommentsHeaderID
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
