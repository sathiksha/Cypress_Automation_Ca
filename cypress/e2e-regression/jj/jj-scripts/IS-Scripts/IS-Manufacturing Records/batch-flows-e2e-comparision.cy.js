import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Batch Flows ', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });
    it('Batch Flows', () => {

        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Cypress01 - Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress01 - Streamer Test')

        cy.checkforErrorPopup()

        //Manufacturing
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()

        //
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openLandingPage()

        cy.wait(2000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.selectAllInDropdown()

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.headerID(), ['Oid'])

        //Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.sorting()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            'mfg_dt',
            'last_goods_receipt'
        ]

        const columnMapping = {
            batch_code: 'batch_code',
            localized_batch_code: 'localized_batch_code',
            product_code: 'product_code',
            sc_node_code: 'supply_chain_node',
            output_plant_description: 'plant_name',
            productcode_description: 'product_code_description',
            product_type: 'product_type',
            cdl_disposition_status: 'disposition_status',
            cdl_gtin_code: 'entered_result',
            mfg_dt: 'last_goods_receipt',
            pkg_dt: 'packaging_date',
            qa_release_dt: 'qa_release_date',
            cdl_batch_mfg_dt: 'date_of_manufacture',
            cdl_slif_expn: 'shelf_life_expiry_date',
            cdl_tech_compln_dt: 'teco_date',
            cdl_vendr_btch_no: 'vendor_batch_no',
            cdl_vendr_acct_no: 'vendor_acct_no',
            cdl_vendr_nm: 'vendor_name'
        };

        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_manufacturing_batch_flow_202505231221.csv',
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

