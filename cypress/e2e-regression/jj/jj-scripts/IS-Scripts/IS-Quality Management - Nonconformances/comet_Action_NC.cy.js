import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for QM comet Action', () => {
  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

  before(() => {
    clearReportFile(reportFilePath)
  });
  it('Data Comparison for COMET Action', () => {

    // Login
    GQ.login()

    // Open Product Planet
    GQ.Planets.Product.openLandingPage()

    // Product Families must be visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

    // Products must be visible
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

    // Large Molecules must be visible
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

    // Small Molecules must be visible
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Open AMIVANTAMAB
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('CypressTC3 – Streamer Test')


    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openNonConformances()

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openActions()

    // Sorting
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ActionSorting()

    cy.wait(2000)

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ActionSorting()

    // Clear Downloads Folder
    cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = [
      'createddate',
      'expected_completion_date',
      'complete_date',
      'createddate',
      'created_date',
      'due_date',
      'completion_date'

    ];

    const columnMapping = {

      itemRef: ["itemnumber"],
      itemName: ["itemname"],
      sqx_nonconformance_number: ["related_nc"],
      action_status: ["status"],
      record_stage: ["stage"],
      createddate: ["created_date"],
      description: ["description"],
      plan_type: ["action_type"],
      sqx_action_plan_number: ["related_action_plan"],
      sqx_action_plan_type: ["related_action_plan_type"],
      nc_material_or_item: ["material_or_item"],
      ownerid_name: ["itemowner"],
      sqx_user_name: ['assignee'],
      due_date: ['due_date'],
      completion_date: ['completion_date'],
      remark: ['completion_comment']
    };

    cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/excelData/is_product_family_comet_nc_action_202504301602.csv',
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

