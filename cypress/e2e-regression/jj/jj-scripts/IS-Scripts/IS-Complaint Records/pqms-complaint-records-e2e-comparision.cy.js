import { GQTest } from '../../../jj-pages/GQTest'
const {clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')

describe('Intellistreamer Comparision for PQMS Complaint Records', () => {
  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'
    
  before(() => {
    clearReportFile(reportFilePath)
  });

    it('Comparision for PQMS Complaint Records', () => {

        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Cypress06 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress06 - Streamer Test')

         cy.checkforErrorPopup()

        // Post Market
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.openLandingPage()

        // Open Complaint Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.openLandingPage()

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.columnHeader(), ['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.sorting()


        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        // Download UI file  
        cy.downloadExcelFile()

        const dateFields = [
            "JNJ_AWARE_DT",
            'aware_date'
        ];

        const columnMapping = {
            "oid": 'object_id',
            "TRACKING_NO": 'tracking_number',
            "PROD_NM": 'product_name',
            "PROD_FMLY_NM": 'product_family_name_source',
            "LOT_NO": 'lot_number',
            "CMPL_INVG_TITLE": 'cmpl_investigation_title',
            "SERIOUSNESS": 'seriousness',
            "ISSUE_STATUS": 'issue_status',
            "JNJ_AWARE_DT": 'aware_date',
            "CAT_LVL1_DESC": 'category_level_1_description',
            "CAT_LVL2_DESC": 'category_level_2_description',
            "CAT_LVL3_DESC": 'category_level_3_description',
            "PROD_MFG": 'product_manufacturing',
            "PROD_MFG_GRP": 'product_manufacturing_group',
            "ROOT_CAUSE_LVL1_DESC": 'root_cause_level_1_description',
            "ROOT_CAUSE_LVL2_DESC": 'root_cause_level_2_description'

        };
        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_pqms_complaint_info_202505231126.csv',
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