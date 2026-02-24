import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for CAPAs Effectiveness Review', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });

    it('Data Comparison for CAPAs Effectiveness Review', () => {

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

        // Open CAPA Effectiveness Review
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openEffectivenessReview()

        //Add Oid Column
        cy.addColumn( GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.headerIDoFEffectivenessReview(),['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.sortingofEffectivenessReview()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            "review_completed_on",
            "reviewed_on"

        ];

        const columnMapping = {
            itemRef: ["itemnumber"],
            review: ["itemname"],
            sqx_capa_number: ["source_capa"],
            source_nc: ["source_nc"],
            approval_status: ["approval_status"],
            status: ["status"],
            review_completed_on: ["reviewed_on"],
            reviewed_by: ["reviewed_by"],
            resolution: ["resolution"],
            jnj_ownername: ["itemowner"],
            number_of_extensions_requested: ["extensions_requested"],
            number_of_extensions_granted: ["extensions_granted"],
            effectiveness_plan_number: ["related_effectiveness_plan"],
            effectiveness_plan_status: ["effectiveness_plan_status"],
            effectiveness_plan_outcome: ["effectiveness_plan_outcome"],


        };
        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_comet_effectiveness_review_202505260900.csv',
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

