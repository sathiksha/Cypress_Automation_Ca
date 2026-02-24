import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for NC Lab Investigation', () => {
  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

  before(() => {
    clearReportFile(reportFilePath)
  });
  it('Data Comparison for NC Lab Investigation', () => {

    // Login
    GQ.login();

    // Navigation
    GQ.Planets.Product.openLandingPage();

    // Filter and Open Product Family
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('CypressTC3 – Streamer Test');

    // Navigate to CAPA

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openNonConformances()

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.laboratoryInvestigation()


    // Sorting
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.sortLI()

    cy.wait(2000)

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.sortLI()

    // Clear Downloads Folder
    cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = [
      'date_occurred'

    ];

    const columnMapping = {
      itemRef: 'itemnumber',
      itemName: 'itemname',
      nonconformance_name: 'related_nc',
      date_occurred: 'date_occurred',
      laboratory_investigation1_type: 'itemtype',
      owner_full_name: 'itemowner',
      status: 'status',
      record_stage: 'stage',
      lims_reference_id: 'sample_id',
      sample_type: 'sample_type',
      test_method_procedure: 'test_method',
      test_method_version: 'test_method_version',
      method: 'technique',

    };

    cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/excelData/is_product_family_comet_nc_laboratory_investigation_202505021841.csv',
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

