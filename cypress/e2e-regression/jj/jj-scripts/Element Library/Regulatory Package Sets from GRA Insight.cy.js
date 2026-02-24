import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 4', () => {
    const GQ = new GQTest();
    it('11329-Test Case-Allows assimilation of Regulatory Package Sets from GRA Insight', () => {

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
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryPackageSets.locator).should('be.visible')

        // Open CTA-IND
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryPackageSets.openLandingPage()
        
        let expectedColumnsQXF = [
            'Product Detail Set ID',
            'Product Family Name',
            'Pds Name',
            'Pds Code',
            'Pds Status',
            'Package Set Name',
            'Package Set Name Last Updated',
            'Package Set Status',
            'Package Set Status Date',
            'Package Set Qc Status',
            'Package Set Date Qced',
            'Package Set Last Updated',
            'Package Set Description',
            'Package Set Comments',
            'Shelf Life Type',
            'Shelf Life',
            'Shelf Life Unit',
            'Shelf Life Category',
            'Storage Conditions',
            'Status',
            'Status Date',
            'Qc Status',
            'Qc Date',
            'Active Ingredient Name',
            'API Storage Container',
            'API Storage Conditions',
            'API Shelf Life',
            'API Shelf Unit',
            'API Status',
            'API Status Date',
            'Active Ingredients Qc Status',
            'Active Ingredients Date Qced',
            'API Retest',
            'API Retest Unit',
            'Tab Name',
            'Load Date',
            'Application Code'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryPackageSets.tableHeaderID
        )
        .then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            for (let i = 0; i < expectedColumnsQXF.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXF[i])
            }
        })


        // QXD
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.openLandingPage()

        // Verify CTA-IND is visible
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryPackageSets.locator).should('be.visible')

        // Open CTA-IND
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryPackageSets.openLandingPage()
        
        let expectedColumnsQXD = [
            'Active Ingredient Name',
            'Active Ingredients QC Date',
            'Active Ingredients QC Status',
            'API Retest',
            'API Retest Unit',
            'API Shelf Life',
            'API Shelf Unit',
            'API Status',
            'API Status Date',
            'API Storage Conditions',
            'API Storage Container',
            'Application Code',
            'Load Date',
            'Package Set Comments',
            'Package Set QC Date',
            'Package Set Description',
            'Package Set Last Updated',
            'Package Set Name',
            'Package Set Name Last Updated',
            'Package Set QC Status',
            'Package Set Status',
            'Package Set Status Date',
            'Product Detail Set Code',
            'Product Detail Set Name',
            'Product Detail Set Status',
            'Product Detail Set ID',
            'Product Family Code',
            'Family Name',
            'QC Date',
            'QC Status',
            'Shelf Life',
            'Shelf Life Category',
            'Shelf Life Type',
            'Shelf Life Unit',
            'Status',
            'Status Date',
            'Storage Conditions',
            'Tab Name'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryPackageSets.tableHeaderID
        )
        .then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }
        })
        // Logout
        GQ.logout()

    })
})
