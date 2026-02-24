import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Data Comparison  Change Controls COMET', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });

    it('Data Comparison  Change Controls COMET', () => {

        // Login
        GQ.login();

        // Navigation
        GQ.Planets.Product.openLandingPage();

        // Filter and Open Product Family
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open Cypress05 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress05 - Streamer Test');

        cy.checkforErrorPopup()

        // Navigate to CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.open()
 
 
 GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.SortingchangeCOMET()
 
        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
           'change_due_date'
        ];

        const columnMapping = {
           'Number': 'itemnumber',
'Title': 'title',
'Current State': 'current_state',
'Future State': 'future_state',
'Change Type': 'change_type',
'Lifecycle Stage': 'lifecycle_stage',
'Regulatory Signal': 'regulatory_signal',
'Change Category': 'change_category',
'Stability Indicating': 'stability_indicating',
'Reason for Change': 'reason_for_change',
'Owner': 'itemowner',
'Change Due Date': 'change_due_date',
'Change Risk Level': 'change_risk_level',
'Overall Change Risk Level': 'overall_change_risk_level',
'Status': 'status',
'Stage': 'stage',
'Workflow Status': 'workflow_status',
'Implementation Status': 'implementation_status',
'Implementation Check Outcome': 'implementation_check_outcome',
'Overall Implementation Check Outcome': 'overall_implementation_check_outcome',
'Legacy Reference Number': 'legacy_reference_number',
'Legacy CC Level': 'legacy_cc_level',
'Impacted Organizations': 'impacted_organizations',
'Impacted Material Item': 'impacted_material_item',
'Impacted Material Description': 'impacted_material_description',
'Impacted Batch No.': 'impacted_batch_number',
'Impacted Products': 'impacted_products',
'Impacted Documents': 'impacted_documents',
'Impacted Equipments': 'impacted_equipments',
'Impacted Site w/ Child CC#': 'impacted_site_w_or__child_cc_number',
'User Comments': 'user_comments',

        };
        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/excelData/is_product_family_comet_change_control_202510162001.csv',
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


