import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for CAPAs Implementation', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });


    it('Data Comparison for CAPAs Implementation', () => {

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

        // Open CAPA Implementation
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.opencapaImplementation()

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.headerIDofCAPAImplementation(), ['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.sortingofCAPAImplementation()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            "createddate",
            "created_date",
            "completion_date",
            "days_required"
        ];

        const columnMapping = {
            itemRef: ["itemnumber"],
            itemName: ["itemname"],
            description: ["description"],
            related_capas: ["related_capa"],
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
            dbFilePath: 'cypress/qaExcelData/is_product_family_comet_capa_implementation_202505260811.csv',
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

