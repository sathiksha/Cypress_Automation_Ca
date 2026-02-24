import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for QM Trackwise Audit', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });


    it('Data Comparison for Trackwise Audit', () => {
        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Cypress04 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress04 - Streamer Test')


        //Open Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        //Open Audits
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.open()

        //Open Teackwise Audit
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.selectTrackwise()

        //Add Oid column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.trackwiseHeaderId(),['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.trackwiseSorting()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            'createddate',
            'expected_completion_date',
            'complete_date',
            'date_opened',
            'DATE_OPENED',
            'DATE_RESPONSE_DUE',
            'date_response_due'

        ];

        const columnMapping = {

            itemRef: 'itemnumber',
            itemName: 'itemname',
            STATE: 'state',
            SITE_NAME: 'site_name',
            AUDIT: 'internal_or_external',
            TYPE_OF_AUDIT: 'type_of_audit',
            AUDIT_DEPARTMENTS: 'audit_departments',
            ASSIGNED_TO: 'assigned_to',
            DATE_OPENED: 'date_opened',
            DATE_RESPONSE_DUE: 'date_response_due',
            itemDescription: 'user_comments',
        };

        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.CSV',
            dbFilePath: 'cypress/qaExcelData/is_product_family_trackwise_audit_202505261452.csv',
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

