import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for NC Risk Assessment', () => {
  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

  before(() => {
    clearReportFile(reportFilePath)
  });

  it('Data Comparison for NC Risk Assessment', () => {

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

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.riskAssessment()


    // Sorting
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.riskSorting()

    cy.wait(2000)

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.riskSorting()

    // Clear Downloads Folder
    cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = [
      'created_date',
      'createddate'
    ];

    const columnMapping = {
      itemRef: 'itemnumber',
      sqx_nonconformance_number: 'source_nc',
      sqx_risk_model_name: 'risk_model',
      risk_score_whole_number_txt: 'risk_score',
      conclusion: 'conclusion',
      createddate: 'created_date',
      createdbyid_name: 'created_by',
    };

    cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/excelData/is_product_family_comet_nc_risk_assessment_202505021528.csv',
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

