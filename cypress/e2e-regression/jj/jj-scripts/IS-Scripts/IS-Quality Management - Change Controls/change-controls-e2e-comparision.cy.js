import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Trackwise Change Controls', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });

    it('Data Comparison for Trackwise Change Controls', () => {

        // Login
        GQ.login();

        // Navigation
        GQ.Planets.Product.openLandingPage();

        // Filter and Open Product Family
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open Cypress02 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress02 - Streamer Test');

        cy.checkforErrorPopup()

        // Navigate to CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.selectTrackwise();

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.headerID(), ['Oid'])

        //Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.sorting()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            'cc_approval_date',
            'creation_date',
            'current_target_closing_date',
            'CC_APPROVAL_DATE',
            'CREATION_DATE',
            'CURRENT_TARGET_CLOSING_DATE'
        ];

        const columnMapping = {
            itemRef: 'itemnumber',
            itemName: 'itemname',
            PROJECT_NAME: 'change_type',
            TYPE_OF_CHANGE: 'type_of_change',
            STATE: 'state',
            SITE_NAME: 'site_name',
            SITES_AFFECTED: 'sites_affected',
            CC_LEVEL: 'cc_level',
            CC_APPROVAL_DATE: 'cc_approval_date',
            CREATION_DATE: 'creation_date',
            CURRENT_TARGET_CLOSING_DATE: 'current_target_closing_date',
            MATERIAL_OR_ITEM: 'material_or_item',
            MATERIAL_DESCRIPTION: 'material_description',
            BATCH_ID_OR_LOT_NUMBER: 'batch_id_or_lot_number',
            INTERNATIONAL_NAME: 'international_name',
            ASSIGNED_TO: 'assigned_to',
            QA_APPROVER: 'qa_approver',
            GCCB_APPROVER: 'gccb_approver',
            itemDescription: 'user_comments'

        };
        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_trackwise_change_control_202505231536.csv',
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

