import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for NC Containments Data', () => {
  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

  before(() => {
    clearReportFile(reportFilePath)
  });

  it('Data Comparison for NC Containments', () => {

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

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openContainments()


    // Sorting
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.containmentsSorting()

    cy.wait(2000)

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.containmentsSorting()

    // Clear Downloads Folder
    cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = [
      'due_date',
      'compliancequestompletion_date',
      'completion_date',
      'createddate',
      'created_date'
    ];

    const columnMapping = {
      itemRef: 'itemnumber',
      description: 'description',
      sqx_nonconformance_name: 'source_nc',
      sqx_user_name: 'assignee',
      due_date: 'due_date',
      status: 'status',
      compliancequestontainment_summary: 'containment_summary',
      compliancequestompletion_date: 'completion_date',
      createddate: 'created_date',
      createdbyid_name: 'created_by',
      jnj_sqx_responsible_person_full_name: 'responsible_person',

    };

    cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/excelData/is_product_family_comet_nc_containment_202505021658.csv',
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

