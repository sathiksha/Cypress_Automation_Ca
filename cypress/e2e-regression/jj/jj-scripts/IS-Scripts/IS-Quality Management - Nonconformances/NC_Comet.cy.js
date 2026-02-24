import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for NC_NC_Comet', () => {
  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

  before(() => {
    clearReportFile(reportFilePath)
  });

  it('Data Comparison for NC Comet', () => {

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

    // Add Oid Column
    cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ncCometHeaderID(), ['Oid'])

    // Sorting
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ncCometSorting()

    // Clear Downloads Folder
    cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = [
      'createddate',
      'expected_completion_date',
      'complete_date',
      'occurrence_date',
      'aware_date',
      'open_date',
      'due_date'

    ];

    const columnMapping = {
      itemRef: 'itemnumber',
      itemName: 'itemname',
      description: 'description',
      status: 'status',
      record_stage: 'stage',
      ownerid_name: 'itemowner',
      type_of_issue: 'issue_type',
      jnj_source: 'itemsource',
      reoccurring: 'recurring',
      sqx_defect_code_name: 'failure_mode',
      is_part_impacted: 'potential_product_impact',
      org_site: 'site_name',
      createddate: 'created_date',
      occurrence_date: 'occurrence_date',
      aware_date: 'aware_date',
      open_date: 'open_date',
      due_date: 'due_date',
      material_or_item: 'material_or_item',
      material_description: 'material_description',
      batch_id_or_lot_number: 'batch_id_or_lot_no',
      itemDescription: 'user_comments'
    };

    cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/qaExcelData/is_product_family_comet_nc_nonconformance_202505261227.csv',
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

