import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 3', () => {
    const GQ = new GQTest();
    it('11925-Test Case Allows assimilation of Regulatory Registrations from GRA Insight.js', () => {

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
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryApplications.locator).should('be.visible')

        // Open CTA-IND
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryApplications.openLandingPage()

        let expectedColumnsQXF = [
            "Application ID",
            "Product Family ID",
            "Country ID",
            "Application Status",
            "Application Status Date",
            "Application Type",
            "Application Countries",
            "Procedure Type",
            "Procedure Identifier",
            "Application Code",
            "Application Reviewing Country",
            "Application Name",
            "Application Description",
            "Application Comments",
            "Is Removed",
            "Created Date",
            "Last Updated Date"
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryApplications.headerID
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
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryApplications.locator).should('be.visible')

        // Open CTA-IND
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryApplications.openLandingPage()

        let expectedColumnsQXD = [
            "Application Status",
            "Product Family ID",
            "Country ID",
            "Application Type",
            "Procedure Type",
            "Last Updated Date",
            "Application Status Date",
            "Application Countries",
            "Application ID",
            "Application Reviewing Country",
            "Procedure Identifier",
            "Application Name",
            "Application Description",
            "Application Code",
            "Application Comments",
            "Is Removed",
            "Created Date"
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryApplications.headerID
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
