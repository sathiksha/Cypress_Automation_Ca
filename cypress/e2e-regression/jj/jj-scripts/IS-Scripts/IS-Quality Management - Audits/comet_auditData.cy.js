import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for QM COMET Audit', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });


    it('Data Comparison for Comet Audit', () => {
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

        //Open Audits - COMET
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.open()

        //Add Oid column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.cometAuditHeaderId(),['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.cometAuditSorting()


        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            'createddate',
            'expected_completion_date',
            'complete_date',
            'opened_dttm',
            'created_date',
            'actual_end_date',
            'start_date',
            'actual_end_date',
            'end_date',
        ];

        const columnMapping = {
            itemRef: 'itemnumber',
            itemName: 'itemname',
            opened_dttm: 'created_date',
            scope: 'detailed_scope_or_description',
            observation_type: 'system_name_or_description',
            audit: 'audit_type',
            aud_status: 'status',
            field_stage: 'stage',
            audit_program_approval_status: 'audit_program_approval_status',
            j_j_site_name: 'jj_site_name',
            plan_period: 'plan_period',
            actual_end_date: 'start_date',
            actual_end_date: 'end_date',
            lead_auditor: 'lead_auditor',
            originator_nm: 'itemowner',
            itemDescription: 'user_comments'
        };

        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.CSV',
            dbFilePath: 'cypress/qaExcelData/is_product_family_comet_audit_202505261458.csv',
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

