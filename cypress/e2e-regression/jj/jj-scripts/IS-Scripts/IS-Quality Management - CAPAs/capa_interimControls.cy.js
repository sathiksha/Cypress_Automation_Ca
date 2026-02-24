import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for CAPAs Interim Controls', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });


    it('Data Comparison for CAPAs Interim Controls', () => {

        // Login
        GQ.login();

        // Navigation
        GQ.Planets.Product.openLandingPage();

        // Filter and Open Product Family
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open Cypress09 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress09 - Streamer Test');

        // Navigate to Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        //Open CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openLandingPage()

        //Click Interim Controls
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.interimControl()

        //Add Oid column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.headerIDofIC(),['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.sortingOfIc()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            "completion_date",
            "due_date",
            "compliancequestompletion_date",
            "createddate",
            "created_date",

        ];

        const columnMapping = {
            itemRef: ["itemnumber"],
            description: ["description"],
            sqx_capa_number: ["source_capa"],
            sqx_user_name: ["assignee"],
            due_date: ["due_date"],
            status: ["status"],
            compliancequestontainment_summary: ["containment_summary"],
            compliancequestompletion_date: ["completion_date"],
            createddate: ["created_date"],
            createdbyid_name: ["created_by"],
            jnj_sqx_responsible_person_full_name: ["responsible_person"],

        };
        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_comet_capa_interim_control_202505260742.csv',
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

