import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Stability Data ', () => {

  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

  before(() => {
    clearReportFile(reportFilePath)
  });

  it('Stability data ', () => {

    // Login
    GQ.login()

    // Open Product Planet
    GQ.Planets.Product.openLandingPage()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // OpenCypress03 - Streamer Test
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress03 - Streamer Test')

    cy.checkforErrorPopup()


    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.StabilityData.openLandingPage()

    cy.wait(2000)

    //Add Oid Column
    cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.StabilityData.headerID(), ['Oid'])

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.StabilityData.Oid()

    // Clear Downloads Folder
    cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = [];

    const columnMapping = {
      STUDY_ID: 'study_id',
      BATCH_NUMBER: 'batch_number',
      MATERIAL: 'material',
      SAMPLE_ID: 'sample_id',
      MANUFACTURE_SITE_STR: 'manufacture_site',
      STABILITY_SITE: 'stability_site',
      PARAMETER_LIST_ID_STR: 'analysis',
      PARAMETER_STR: 'measurement',
      CONDITION: 'itemcondition',
      TIME_POINT: 'time_point',
      RESULT_DISPLAYED: 'display_result',
      RESULT_ENTERED: 'entered_result',
      RESULT_UNITS: 'units',
      LIMIT_TYPE_ID: 'limit_type_id',
      COA_LIMIT: 'coa_limit',
      VERIFICATION_STATUS: 'verification_status'
    };

    cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/qaExcelData/is_product_family_laboratory_stability_data_202505231102.csv',
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

