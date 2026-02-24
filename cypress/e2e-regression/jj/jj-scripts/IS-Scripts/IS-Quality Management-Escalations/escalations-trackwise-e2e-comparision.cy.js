import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')

describe('Intellistreamer Comparision for Trackwise Escalations', () => {
  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

  before(() => {
    clearReportFile(reportFilePath)
  });
  it('Intellistreamer Comparision for Trackwise Escalations', () => {
    // Login
    GQ.login();

    // Navigation
    GQ.Planets.Product.openLandingPage();

    // Filter and Open Product Family
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress02 - Streamer Test');

    cy.checkforErrorPopup()

    // Navigate to CAPA
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage();

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openEscalations()

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.selectTrackwise();

    // Sort
    cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.headerID(), ['Oid'])

    cy.wait(2000);

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.sortingForEscalations();

    // Clear Downloads Folder
    cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = [
      'CREATION_DATE',
      'creation_date'
    ];

    const columnMapping = {
      itemRef: 'itemnumber',
      itemName: 'itemname',
      DESCRIPTION_OF_ISSUE: 'description_of_issue',
      STATE: 'state',
      OPERATING_COMPANY: 'operating_company',
      SEGMENT: 'segment',
      CREATION_DATE: 'creation_date',
      ESCALATION_LEAD_OR_QUALITY_REP: 'escalation_lead_or_quality_rep',
      ACTION_PLAN_OR_PROPOSED_ACTION: 'action_plan_or_proposed_action',
      HIGHEST_ESCALATION_LEVEL_REACHED: 'highest_escalation_level_reached',
      itemDescription: 'user_comments'

    };
    cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/qaExcelData/is_product_family_trackwise_escalation_202505231552.csv',
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

