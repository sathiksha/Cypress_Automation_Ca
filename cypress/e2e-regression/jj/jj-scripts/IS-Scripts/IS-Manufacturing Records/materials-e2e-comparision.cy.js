import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Materials ', () => {
  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

  before(() => {
    clearReportFile(reportFilePath)
  });
  it('Materials', () => {
    // Login
    GQ.login()

    // Open Product Planet
    GQ.Planets.Product.openLandingPage()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Open CypressTC3 – Streamer Test
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('CypressTC2 – Streamer Test')

    //Manufacturing
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()

    //
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.openLandingPage()

    cy.wait(2000)

    //Add Oid Column
    cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.headerID(), ['Oid'])

    //Sorting
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.sorting()

    // Clear Downloads Folder
    cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = []

    const columnMapping = {
      Product_Code: 'product_code',
      Product_Code_Description: 'product_code_description',
      International_Brand: 'international_brand',
      Source_System: 'source_system',
      Destination_Market: 'destination_market',
      Product_Type: 'product_type',
      Process_Step: 'process_step',
      Process_Stage: 'process_stage'
    };

    cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/excelData/is_product_family_manufacturing_material_202505121434.csv',
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

