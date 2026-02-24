import { GQTest } from '../../jj-pages/GQTest'
// Sprint 6
require('cypress-xpath')
describe('Sprint 6', () => {
    const GQ = new GQTest();
    it('11288-Allows assimilation of Regulatory Products from GRA Insight', () => {

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

        // Verify Regulatory LOC is visible
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryLOCProduct.locator).should('be.visible')

        // Regulatory Products
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryProducts.locator).should('be.visible')

        // Open LOC Product
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryLOCProduct.openLandingPage()
        
        let expectedColumnsQXF = [
            'Product Family Name',
            'Product Family Code', 
            'Therapeutic Area',
            'International Birth Date',
            'Active Ingredients',
            'Application Code',
            'Application Name',
            'Application Status',
            'Application Status Date',
            'Application Type',
            'Application Url',
            'Reviewing Country',
            'Procedure Identifier',
            'Procedure Type',
            'Reference Country',
            'Application Comments',
            'Jnj Region',
            'Product',
            'Product Code',
            'Product Family Code',
            'Full Product Name',
            'Authorisation Number',
            'Authorisation Status',
            'Authorisation Status Date',
            'Authorising Health Authority',
            'Pds Country Status',
            'Pds Country Status Date',
            'Pds Name',
            'Initial Authorisation Date',
            'Mah',
            'Mah Last Updated',
            'Marketing Company',
            'Next Renewal Submission Deadline',
            'Registration Description',
            'Atc Code S',
            'Atc Code S Last Updated',
            'Country Trade Name',
            'Currently Marketed Registration Package Set Country',
            'Distributor Company',
            'Renewal Required',
            'Last Renewal Date',
            'Pds Code',
            'Package Set Description',
            'Package Set Name',
            'Package Set Status',
            'Import Company',
            'Country Specific Expiry Date',
            'Registration Id',
            'Registration Package Set Off Market Date',
            'Registration Package Set On Market Date',
            'Registration Url',
            'Shelf Life (Months)',
            'Sku Code',
            'Storage Conditions' 
        ]
        cy.wait(10000)
        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryLOCProduct.productID
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

        // Open Regulatory Product
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryProducts.openLandingPage()
        
        let expectedColumnQXF = [
            'Product ID',
            'Product Family ID',
            'Application ID',
            'Product Name',
            'Product Code',
            'Product Dose Form',
            'Indications / Intended Use',
            'Climate Zone I',
            'Climate Zone II',
            'Climate Zone III',
            'Climate Zone IVA',
            'Climate Zone IVB',
            'Product Status',
            'Is Removed Flag',
            'DL Created Date',
            'DL Last Updated Date'
        ]
        cy.wait(10000)
        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.RegulatoryProducts.productID
        )
        .then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent.trim())
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnQXF.length; i++) {
                expect(availableCols).to.include(expectedColumnQXF[i])
            }
        })


        // QXD
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.openLandingPage()

        // Verify LOC Product is visible
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryLOCProduct.locator).should('be.visible')

        // Verify Regulatory Product is visible
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryProducts.locator).should('be.visible')

        // Open LOC Product
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryLOCProduct.openLandingPage()
        
        let expectedColumnsQXD = [
            'Active Ingredients',
            'Application Code',
            'Application Comments',
            'Application Name',
            'Application Status',
            'Application Status Date',
            'Application Type',
            'Application URL',
            'ATC Code(s)',
            'ATC Code(s) Last Updated',
            'Authorization Number',
            'Authorization Status',
            'Authorization Status Date',
            'Authorizing Health Authority',
            'Country Trade Name',
            'Currently Marketed (Registration Package Set Country)',
            'Distributor Company',
            'Full Product Name',
            'Import Company',
            'Initial Authorization Date',
            'International Birth Date',
            'J&J Region',
            'Last Renewal Date',
            'MAH',
            'MAH Last Updated',
            'Marketing Company',
            'Next Renewal Submission Deadline',
            'Packaging Description',
            'Package Set Name',
            'Package Set Status',
            'PDS Code',
            'Country',
            'PDS Country Status',
            'PDS Country Status Date',
            'PDS Name',
            'Procedure Identifier',
            'Procedure Type',
            'Product',
            'Product Code(s)',
            'Product Family Code',
            'Product Family Name',
            'Reference Country',
            'Registration Description',
            'Registration ID',
            'Registration Package Set Off Market Date',
            'Registration Package Set On Market Date',
            'Registration URL',
            'Renewal Required',
            'Reviewing Country',
            'Shelf-Life',
            'SKU',
            'Storage Conditions (Drug Product)',
            'Therapeutic Area'
        ]
        cy.wait(10000)

        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryLOCProduct.productID
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

        // Open Regulatory Product
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryProducts.openLandingPage()
        
        let expectedColumnQXD = [
            'Associated Trade Names',
            'Product Family ID',
            'Family Code',
            'Therapeutic Area',
            'Active Ingredients',
            'Active Ingredients Translation',
            'Product Family URL',
            'Product Family Is Removed',
            'Product Family Created Date',
            'Product Family Last Updated Date',
            'Product Status',
            'Product Is Removed',
            'Product Created Date',
            'Product Family ID',
            'Product Last Updated Date',
            'Max Shelf Life - Climate Zone IVb',
            'Product ID',
            'Application ID',
            'Product Name',
            'Product Code / JNJ Number',
            'Product Dose Form',
            'Intended Use',
            'Max Shelf Life - Climate Zone I',
            'Max Shelf Life - Climate Zone II',
            'Max Shelf Life - Climate Zone III',
            'Max Shelf Life - Climate Zone IVa',
            'Product URL'
        ]
        cy.wait(10000)

        // Read column
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.RegulatoryProducts.productID
        )
        .then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnQXD[i])
            }
        })

        // Logout
        GQ.logout()

    })
})
