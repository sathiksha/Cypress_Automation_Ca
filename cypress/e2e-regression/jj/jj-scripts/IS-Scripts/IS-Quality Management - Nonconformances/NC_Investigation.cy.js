import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for NC Investigation', () => {
  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

  before(() => {
    clearReportFile(reportFilePath)
  });

  it('Data Comparison for NC Investigations', () => {

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

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openInvestigation()

    // Sorting
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.sortInvestigation()

    cy.wait(2000)

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.sortInvestigation()

    // Clear Downloads Folder
    cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = [
      'createddate',
      'completed_on',
      'created_date'
    ];

    const columnMapping = {
      itemRef: 'itemnumber',
      qn_5w1h_what: 'what',
      sqx_nonconformance_number: 'source_nc',
      createddate: 'created_date',
      ownerid_name: 'itemowner',
      status_formula: 'status',
      record_stage: 'stage',
      recordtypeid_name: 'inv_type',
      completed_by: 'completed_by',
      completed_on: 'completed_on',
    };

    cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/excelData/is_product_family_comet_nc_investigation_202505021436.csv',
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

