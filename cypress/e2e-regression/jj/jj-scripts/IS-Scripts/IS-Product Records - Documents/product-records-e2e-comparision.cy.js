import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Products Records', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });
    it('Data Comparison for Products Records', () => {

        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Cypress09 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress09 - Streamer Test')

        // Products Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.openLandingPage()

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.headerID(), ['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.sorting()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        // Download UI file  
        cy.downloadExcelFile()

        const dateFields = [
            "EFFECTIVE_DATE",
            "effective_date"
        ];

        const columnMapping = {
            "oid": "object_id",
            "itemRef": "itemnumber",
            "itemName": "itemname",
            "VERSION_JJ": "version",
            "AUTHOR": "author",
            "STATUS": "status",
            "EFFECTIVE_DATE": "effective_date",
            "DOCUMENT_TYPE": "document_type",
            "DOCUMENT_SUB_TYPE": "document_sub_type",
            "OWNING_SEGMENTS": "owning_segments",
            "OWNING_ORGANIZATION": "owning_organization",
            "OWNING_DEPARTMENT": "owning_department",
            "IMPACTED_LOCATIONS": "impacted_location",
            "LEGACY_DOCUMENT_NUMBER": "legacy_document_number",
        };


        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_product_202505261130.csv',
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

