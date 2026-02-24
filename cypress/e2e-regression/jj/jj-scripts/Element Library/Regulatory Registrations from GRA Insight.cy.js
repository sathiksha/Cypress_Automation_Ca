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
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryRegistrations.locator).should('be.visible')

        // Open CTA-IND
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryRegistrations.openLandingPage()
        
        let expectedColumnsQXF = [
            "Agent Company",
            "Applicant",
            "Application Code",
            "Application ID",
            "Application Name",
            "Application Status",
            "Application Status Date",
            "Application Type",
            "Application URL",
            "ATC Code(s)",
            "ATC Code(s) Last Updated",
            "Authorization Number",
            "Authorization Status",
            "Authorization Status Date",
            "Authorizing Health Authority",
            "Co Rapporteur CP CMS ES",
            "Country Trade Name",
            "Currently Marketed Registration Package Set Country",
            "Distributor Company",
            "Expiration Date/Authorization Valid Until",
            "Full Product Name",
            "Import Company",
            "In Licensing From",
            "Initial/Original Authorization Date",
            "International Birth Date",
            "JNJ Region",
            "Last Renewal Date",
            "Load Date",
            "MAH",
            "MAH Last Updated",
            "Marketing Company",
            "National Code",
            "Next Renewal Submission Date (Expiration Date)",
            "Out Licensing To",
            "Package Set Name",
            "Package Set Status",
            "Package Set Status Date",
            "PDS Code",
            "PDS Country",
            "PDS Country Status",
            "PDS Country Status Date",
            "PDS Name",
            "Procedure Identifier",
            "Procedure Type",
            "Product",
            "Product Approval Date",
            'Product Code / JNJ Number',
            "Package Sets (Product Detail Set)",
            "Product Family Code",
            'Product Family ID',
            "Product Family Name",
            "Product ID",
            "Reference Country",
            "Registration Description",
            "Registration ID",
            "Registration Package Set On Market Date",
            "Registration Package Set Off Market Date",
            "Registration URL",
            "Renewal Required",
            "Reviewing Country",
            "SKU Code",
            "Subject To Additional Safety Monitoring",
            "Therapeutic Area"
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryRegistrations.productFamilyHeaderID
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
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryRegistrations.locator).should('be.visible')

        // Open CTA-IND
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryRegistrations.openLandingPage()
        
        let expectedColumnsQXD = [
            "Agent Company",
            "Applicant",
            "Application Code",
            "Application ID",
            "Application Name",
            "Application Status",
            "Application Status Date",
            "Application Type",
            "Application URL",
            "ATC Code(s)",
            "ATC Code(s) Last Updated",
            "Authorization Number",
            "Authorization Status",
            "Authorization Status Date",
            "Authorizing Health Authority",
            "Co Rapporteur CP CMS ES",
            "Country Trade Name",
            "Currently Marketed Registration Package Set Country",
            "Distributor Company",
            "Expiration Date/Authorization Valid Until",
            "Full Product Name",
            "Import Company",
            "In Licensing From",
            "Initial/Original Authorization Date",
            "International Birth Date",
            "JNJ Region",
            "Last Renewal Date",
            "Load Date",
            "MAH",
            "MAH Last Updated",
            "Marketing Company",
            "National Code",
            "Next Renewal Submission Date (Expiration Date)",
            "Out Licensing To",
            "Package Set Name",
            "Package Set Status",
            "Package Set Status Date",
            "PDS Code",
            "PDS Country",
            "PDS Country Status",
            "PDS Country Status Date",
            "PDS Name",
            "Procedure Identifier",
            "Procedure Type",
            "Product",
            "Product Approval Date",
            'Product Code / JNJ Number',
            "Package Sets (Product Detail Set)",
            "Product Family Code",
            'Product Family ID',
            "Product Family Name",
            "Product ID",
            "Reference Country",
            "Registration Description",
            "Registration ID",
            "Registration Package Set On Market Date",
            "Registration Package Set Off Market Date",
            "Registration URL",
            "Renewal Required",
            "Reviewing Country",
            "SKU Code",
            "Subject To Additional Safety Monitoring",
            "Therapeutic Area"
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryRegistrations.agentCompanyHeaderID
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
