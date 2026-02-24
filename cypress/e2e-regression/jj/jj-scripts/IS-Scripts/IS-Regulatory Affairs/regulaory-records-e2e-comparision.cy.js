import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Regulatory Records', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });


    it('Data Comparison for Regulatory Records', () => {

        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Cypress02 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress02 – Streamer Test')

        // Regulatory Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage()

        //Switch to Filtered from CTD Traingle
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.RecordsList.open()

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.RecordsList.headerID(), ['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.RecordsList.sorting()


        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        // Download UI file  
        cy.downloadExcelFile()

        const dateFields = [];

        const columnMapping = {
            "oid": "object_id",
            "EDMS_Number": "edms_number",
            "ARTIFACT_NAME": "artifact_name",
            "A_CONTENT_TYPE": "file_type",
            "JJ_COMPOUND_ASSET": "compound_asset",
            "ECTD_SECTION": "ctd_section",
            "JJ_ECTD_LEAFTITLE": "ectd_leaf_title",
            "JJ_REGION_COUNTRY": "country_or_region",
            "PRIMARY_GROUP": "itemgroup",
            "SUBGROUP": "sub_group",
            "PRODUCT_GENERIC_NAME": "generic_name",
            "PRODUCT_TRADE_NAME": "trade_names",
            "PRODUCT_COMPOUND_ID": "compound_name",
            "A_STATUS": "status"
        };


        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/',
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

