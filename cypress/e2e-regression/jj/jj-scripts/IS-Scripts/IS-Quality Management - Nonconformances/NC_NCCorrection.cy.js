import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for NC Supplemental Investigation', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });

    it('Data Comparison for NC Supplemental Investigation', () => {

        // Login
        GQ.login();

        // Navigation
        GQ.Planets.Product.openLandingPage();

        // Filter and Open Product Family
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('CypressTC3 – Streamer Test');

        // Navigate to CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.NonConformances()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.NCcorrection()

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.NCSorting()

        cy.wait(2000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.NCSorting()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            "createddate",
            "created_date",
            "completion_date",
            "completion_date",

        ];

        const columnMapping = {
            itemRef: ["itemnumber"],
            itemName: ["itemname"],
            description: ["description"],
            related_nonconformances: ["related_nc"],
            jnj_action_category: ["action_category"],
            plan_type: ["action_plan_type"],
            jnj_pv_relevant: ["pv_relevant"],
            user_name: ["assignee"],
            approved: ["approved"],
            days_required: ["days_required"],
            createddate: ["created_date"],
            completed: ["is_complete"],
            completion_date: ["completion_date"],
            completed_by: ["completed_by"],
        };

        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/excelData/is_product_family_comet_nc_correction_202504301805.csv',
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

