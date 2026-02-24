import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for QE NC-Trackwise ', () => {
  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

  before(() => {
    clearReportFile(reportFilePath)
  });

  it('Data Comparison for Quality Events NC-Trackwise', () => {

    // Login
    GQ.login()

    // Open Product Planet
    GQ.Planets.Product.openLandingPage()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Open Cypress03 – Streamer Test
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress03 - Streamer Test')

    // Open Quality Management
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

    // Open Nonconformances
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.NonConformances()

    //Select Trackwise
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.selectNcTrackwise()

    // Add Oid Column
    cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ncHeaderID(), ['Oid'])

    // Sorting
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ncTrackwiseSorting()

    // Clear Downloads Folder
    cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = [
      'createddate',
      'expected_completion_date',
      'complete_date',
      'due_date',
      'DATE_DUE',
      'creation_date',
      'CREATION_DATE'
    ];

    const columnMapping = {
      itemRef: 'itemnumber',
      itemName: 'itemname',
      DESCRIPTION_OF_ISSUE: 'description_of_issue',
      STATE: 'state',
      ASSIGNED_TO: 'assigned_to',
      PROJECT_NAME: 'itemowner',
      type_of_issue: 'issue_type',
      SOURCES: 'sources',
      RECURRING_ISSUE: 'recurring_issue',
      ASSIGNABLE_CAUSES: 'assignable_causes',
      PRODUCT_OR_PROCESS: 'product_or_process',
      IMPACT_CLASSIFICATION: 'impact_classification',
      PROJECT_NAME: 'event_type',
      SITE_NAME: 'site_name',
      CREATION_DATE: 'creation_date',
      DATE_DUE: 'date_due',
      material_or_item: 'material_or_item',
      MATERIAL_DESCRIPTION: 'material_description',
      BATCH_ID_OR_LOT_NUMBER: 'batch_id_or_lot_number',
      itemDescription: 'user_comments'
    };


    cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/qaExcelData/is_product_family_trackwise_quality_event_202505261204.csv',
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

