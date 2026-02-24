import { GQTest } from '../../../jj-pages/GQTest'
const {clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for PQMS Complaint', () => {

  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

    it('Intellistreamer Comparision for PQMS Complaint ', () => {

        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Cypress02 – Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress02 - Streamer Test')

         cy.checkforErrorPopup()

        // Post Market
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.openLandingPage()

        // open Complaints
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.openComplaints()

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.Complaints.columnHeader(), ['Oid'])

        // Sorting
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.Complaints.sorting()


        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        // Download UI file  
        cy.downloadExcelFile()

        const dateFields = [
            "JNJ_AWARE_DT",
            'jnj_awareness_date',
            "ISS_ENTRD_GCC",
            'issue_entered_gcc',
            "ISS_ENTRD_PQMS",
            'issue_entered_pqms',
            "ISS_CLS_DT",
            'issue_closed_date'
        ];

        const columnMapping = {
            "TRACKING_NO": 'tracking_number',
            "PROD_NM": 'product_name',
            "PROD_FMLY_NM": 'product_family_name_source',
            "LOT_NO": 'lot_number',
            "COMPANY": 'company',
            "REGION": 'region',
            "ISSUE_STATUS": 'issue_status',
            "JNJ_AWARE_DT": 'jnj_awareness_date',
            "ISS_ENTRD_GCC": 'issue_entered_gcc',
            "ISS_ENTRD_PQMS": 'issue_entered_pqms',
            "ISS_CLS_DT": 'issue_closed_date'

        };
        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_pqms_complaint_202505231124.csv',
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

