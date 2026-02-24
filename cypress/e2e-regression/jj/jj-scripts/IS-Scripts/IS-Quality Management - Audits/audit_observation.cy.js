import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Audit Observation', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });

    it('Comparison for Audit Observation', () => {

        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Cypress03 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress03 - Streamer Test')

        //Open Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        //Open Audits
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.open()

        //Open Audit Observation
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.openAuditObservation()

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.headerID(), ['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.sorting()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            'completion_date_response',
            'response_completion_date',
            'due_date_response',
            'response_due_date',
        ];

        const columnMapping = {

            itemRef: 'itemnumber',
            itemName: 'itemname',
            description: 'description',
            related_audit: 'related_audits',
            observation_type: 'observation_type',
            finding_type: 'observation_classification',
            category_1: 'category_1',
            category_2: 'category_2',
            category_3: 'category_3',
            pv_relevant: 'pv_relevant',
            reoccurring: 'recurring',
            date_of_initial_response: 'date_of_initial_response',
            completion_date_response: 'response_completion_date',
            due_date_response: 'response_due_date',
            assignee_name: 'assignee',


        };
        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.CSV',
            dbFilePath: 'cypress/qaExcelData/is_product_family_comet_audit_observation_202505261439.csv',
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

