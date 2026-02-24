import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Batches ', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });
    it('Batches', () => {

        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Cypress04 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress04 - Streamer Test')

        cy.checkforErrorPopup()
        
        //Manufacturing
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()

        //
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.open()

        cy.wait(2000)

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.headerID(), ['Oid'])

        //Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.sorting()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            'last_good_receipt_date',
            'last_good_receipt',
        ]

        const columnMapping = {
            Output_Batch: 'o_p_batch_code',
            Output_Localized_Batch: 'o_p_localized_batch_code',
            Product_Code: 'o_p_product_code',
            Product_Code_Description: 'o_p_product_code_description',
            Product_Type: 'o_p_product_type',
            Output_Plant: 'o_p_plant_code',
            Output_Plant_Description: 'o_p_plant_name',
            Source_System: 'o_p_source_system',
            last_good_receipt_date: 'last_good_receipt',
            Process_Stage: 'o_p_process_stage',
            Process_Step: 'o_p_process_step',
            discovery_method: 'discovery_method',
            flow_id: 'flow_id',
            Flow_Type: 'flow_type',
            next_flow_id: 'next_flow_id',
            previous_flow_id: 'previous_flow_id'
        };


        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_manufacturing_batch_202505231219.csv',
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

