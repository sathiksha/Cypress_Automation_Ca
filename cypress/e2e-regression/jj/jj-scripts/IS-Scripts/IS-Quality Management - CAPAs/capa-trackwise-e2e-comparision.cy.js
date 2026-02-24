import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Trackwise CAPAs', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });

    it('Data Comparison for Trackwise CAPAs', () => {

        // Login
        GQ.login();

        // Navigation
        GQ.Planets.Product.openLandingPage();

        // Filter and Open Product Family
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open Cypress08 - Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress08 - Streamer Test');

        cy.checkforErrorPopup()

        // Navigate to CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.CAPA()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.selectTrackwise()

        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.headerID(), ['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.sorting()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            "CREATION_DATE",
            "creation_date",
            "DATE_DUE",
            "date_due"
        ];

        const columnMapping = {
            itemRef: ["itemnumber"],
            itemName: ["itemname"],
            STATE: ["state"],
            ORIGINATOR: ["originator"],
            ASSIGNED_TO: ["assigned_to"],
            CREATION_DATE: ["creation_date"],
            DATE_DUE: ["date_due"],
            material_or_item: ["material_or_item"],
            material_description: ["material_description"],
            BATCH_ID_OR_LOT_NUMBER: ["batch_id_or_lot_number"],
            itemDescription: ["user_comments"]


        };
        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_trackwise_capa_202505231733.csv',
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

