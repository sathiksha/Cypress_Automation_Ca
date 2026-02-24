import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')


describe('Intellistreamer Comparision for Stability studies ', () => {

  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'


  before(() => {
    clearReportFile(reportFilePath)
  });

  it('Stability studies ', () => {

    // Login
    GQ.login()

    // Open Product Planet
    GQ.Planets.Product.openLandingPage()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Open Cypress06 - Streamer Test
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress06 - Streamer Test')


    cy.checkforErrorPopup()

    //Open Laboratory Records
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

    //Open Stability Study
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.openLandingPage();

    //Choose Predefined filter to ALL
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.predefinedFilterToAll()

    //Add Oid Column
    cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.headerID(), ['Oid'])

    // Sorting
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.sorting()

    // Clear Downloads Folder
    cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = [
      'packaging_date',
      'manufacture_date',
      'start_date',
      'S_MANUFACTURE_DATE',
      'U_PACKAGING_DATE',
      'S_START_DATE'
    ];

    const columnMapping = {
      STUDY_ID: 'study',
      STUDYDESC: 'study_description',
      STUDY_STATUS: 'study_status',
      PRODUCT_DESCRIPTION: 'product_or_material_description',
      ACTIVE_FLAG: 'active',
      U_STABILITY_STUDY_TYPE: 'stability_study_type',
      U_PROTOCOL_NUMBER: 'protocol_number',
      U_BATCH_NUMBER: 'batch_number',
      S_MANUFACTURE_DATE: 'manufacture_date',
      S_MANUFACTURE_LOCATION: 'manufacture_location',
      U_PACKAGING_SITE: 'packaging_site',
      U_PACKAGING_DATE: 'packaging_date',
      U_INITIATED_SITE: 'initiated_site',
      U_PRODUCTION_SITE: 'stability_site',
      S_START_DATE: 'start_date',
      U_SHELF_LIFE: 'shelf_life'
    };


    cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/qaExcelData/is_product_family_laboratory_study_202505231106.csv',
      columnMapping,
      dateFields
    }).then((result) => {
      writeReportFile(result, reportFilePath)
    })

    // Logout
    GQ.logout()

  })

  //Rename report with Time stamp
  after(() => {
    renameReportFile()
  });
})