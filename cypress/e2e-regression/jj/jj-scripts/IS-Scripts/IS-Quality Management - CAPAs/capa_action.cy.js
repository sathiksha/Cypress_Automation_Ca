import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for CAPAs Action', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });


    it('Data Comparison for CAPA Action', () => {

        // Login
        GQ.login();

        // Navigation
        GQ.Planets.Product.openLandingPage();

        // Filter and Open Product Family
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open Cypress03 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress03 - Streamer Test');

        // Navigate to Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        // Open CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openLandingPage()

        // Open CAPA Action
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openAction()

        // Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.headerIDoFAction(), ['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.sortingofAction()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            "completion_date",
            "due_date",
            "createddate",
            "created_date"
        ];

        const columnMapping = {
            itemRef: ["itemnumber"],
            title: ["itemname"],
            sqx_capa_number: ["related_capa"],
            action_status: ["status"],
            record_stage: ["stage"],
            createddate: ["created_date"],
            description: ["description"],
            plan_type: ["action_type"],
            sqx_action_plan_number: ["related_action_plan"],
            sqx_action_plan_type: ["related_action_plan_type"],
            capa_material_or_item: ["material_or_item"],
            ownerid_name: ["itemowner"],
            sqx_user_name: ["assignee"],
            due_date: ["due_date"],
            completion_date: ["completion_date"],
            remark: ["completion_comment"],
        };

        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_comet_capa_action_202505260825.csv',
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

