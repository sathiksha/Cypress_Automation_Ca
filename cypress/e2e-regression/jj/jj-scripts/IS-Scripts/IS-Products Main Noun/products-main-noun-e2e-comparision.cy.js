import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Products Main Noun ', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });
    it('Products main noun', () => {

        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Open Products
        GQ.Planets.Product.Products.openLandingPage()

        GQ.Planets.Product.Products.setViewAll()

        cy.wait(2000)

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.Products.headerID(), ['Combination Product', 'Last Modified Date', 'OID'])

        GQ.Planets.Product.Products.sorting()

        cy.advancedFiltering(GQ.Planets.Product.Products.traderNameHeader(), ['TREMFYA', 'TBD', 'PONVORY'])

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [];

        const columnMapping = {
            oid: 'primary_key',
            itemName: 'product',
            JJ_TradeName: 'trade_name',
            itemRef: 'formulations',
            physicalOwnerItemName: 'product_family',
            physicalOwnerItemRef: 'itemnumber',
            JJ_Type: 'itemtype',
            productFamilyTherapeuticArea: 'therapeutic_area',
            JJ_Stage: 'stage',
            JJ_Status: 'state'
        };

        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_pqm_product_202505261120.csv',
            columnMapping,
            dateFields
        }).then((result) => {
            writeReportFile(result, reportFilePath)
        })

        cy.wait(5000)
        // Logout
        GQ.logout()

    })

    //Rename report with Time stamp
    after(() => {
        renameReportFile()
    });
})

