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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.supplementalInvestigation()

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.SIsorting()

        cy.wait(2000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.SIsorting()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            "CREATION_DATE",
            "creation_date",
            "due_date"

        ];

        const columnMapping = {
            itemRef: ["itemnumber"],
            itemName: ["itemname"],
            description: ["description"],
            sqx_nonconformance_number: ["related_nc"],
            parent_investigation_number: ["parent_investigation"],
            due_date: ["due_date"],
            assignee_name: ["assignee"],
            status: ["status"],
        };

        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/excelData/is_product_family_comet_nc_supplemental_investigation_202504301635.csv',
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

