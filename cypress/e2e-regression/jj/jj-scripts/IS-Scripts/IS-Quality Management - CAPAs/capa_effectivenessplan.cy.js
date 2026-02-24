import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for CAPAs Effectiveness Plan', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });

    it('Data Comparison for CAPAs Effectiveness Plan', () => {

        // Login
        GQ.login();

        // Navigation
        GQ.Planets.Product.openLandingPage();

        // Filter and Open Product Family
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open Cypress08 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress08 - Streamer Test');

        // Navigate to Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        // Open CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openLandingPage()

        // Open CAPA Effectiveness Plan
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openEffectivenessPlan()

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.headerIDoFEffectivenessPlan(), ['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.sortingofEffectivenessPlan()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            "due_date",
            "due_date",
            "days_to_monitor",
            "days_required"
        ];

        const columnMapping = {
            itemRef: ["itemnumber"],
            itemName: ["itemname"],
            verification_plan: ["description"],
            sqx_capa_number: ["related_capa"],
            jnj_metric: ["metric"],
            days_to_monitor: ["days_to_monitor"],
            jnj_success_criteria: ["success_criteria"],
            outcome: ["outcome"],
            due_date: ["due_date"],
            status: ["status"],
            jnj_sqx_responsible_person_full_name: ["responsible_person"],
        };

        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_comet_effectiveness_plan_202505260852.csv',
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

