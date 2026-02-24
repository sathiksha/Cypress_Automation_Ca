import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Comet CAPA', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });

    it('Data Comparison for Comet CAPA', () => {

        // Login
        GQ.login();

        // Navigation
        GQ.Planets.Product.openLandingPage();

        // Filter and Open Product Family
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        //Open Cypress08 - Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress08 - Streamer Test');

        // Navigate to CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openLandingPage();

        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.headerID(),['Oid'])

        // Sort
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.sorting();

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            'createddate',
            'created_date',
            'expected_completion_date',
            'expected_capa_implementation_date',
            'complete_date',
            'completed_on',
        ];

        const columnMapping = {
            itemRef: 'itemnumber',
            itemName: 'itemname',
            description: 'description',
            sqx_source_nc_number: 'source_nc',
            capa_type: 'capa_type',
            sqx_capa_coordinator_name: 'coordinator',
            ownerid_name: 'itemowner',
            status: 'status',
            record_stage: 'stage',
            createddate: 'created_date',
            expected_completion_date: 'expected_capa_implementation_date',
            complete_date: 'completed_on',
            completed_by_name: 'completed_by',
            material_or_item: 'material_or_item',
            material_description: 'material_description',
            batch_id_or_lot_number: 'batch_id_or_lot_no',
            itemDescription: 'user_comments'

        };
        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_comet_capa_202505232232.csv',
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

