import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Data Comparison  Change Controls Implementation', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });

    it('Data Comparison  Change Controls Implementation', () => {

        // Login
        GQ.login();

        // Navigation
        GQ.Planets.Product.openLandingPage();

        // Filter and Open Product Family
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open Cypress01 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress01 - Streamer Test');

        cy.checkforErrorPopup()

        // Navigate to CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.open()

 GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.open()

 GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.togglefilter()

 GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Functionalarea1()
     GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.sorting()

      // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
           'due_date',
           'task_completion_date'
        ];

        const columnMapping = {
           'Number': 'itemnumber',
'Title': 'title',
'Description': 'description',
'Task Type': 'task_type',
'Task Subtype': 'task_subtype',
'Assignee': 'assignee',
'Due Date': 'due_date',
'Status': 'status',
'J&J Site Name': 'jj_site_name',
'Functional Area': 'functional_area',
'Functional Area 1': 'functional_area_1',
'Functional Area 2': 'functional_area_2',
'Task Results': 'task_results',
'Change Order': 'change_order',
'Related Change': 'related_change',
'Related Nonconformance': 'related_nonconformance',
'Task Completion Date': 'task_completion_date',


        };
        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/excelData/is_product_family_comet_change_control_implementation_202510161048.csv',
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


