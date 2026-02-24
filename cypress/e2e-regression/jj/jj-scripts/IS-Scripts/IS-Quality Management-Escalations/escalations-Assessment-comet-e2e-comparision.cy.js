import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')

describe('Intellistreamer Comparision for COMET Escalations-Assessment', () => {
  const GQ = new GQTest();
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt'

  before(() => {
    clearReportFile(reportFilePath)
  });
  it('Intellistreamer Comparision for COMET Escalations-Assessment', () => {
    // Login
    GQ.login();

    // Navigation
    GQ.Planets.Product.openLandingPage();

    // Filter and Open Product Family
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress03 - Streamer Test');

    cy.checkforErrorPopup()

   
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage();

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openEscalations()

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openEscalationAssessment()
cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Escalations||scClass=VLayout||index=1||length=10||classIndex=0||classLength=1||scClassIndex=1||scClassLength=10]/body/layoutBody/member[Class=QScreen_Assessments||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/body/layoutBody/member[Class=QScreen_Filtered_15||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_Selector_Co_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=itemRef]/').click()

     cy.task('removeDirectory', downloadsFolder);

    cy.downloadExcelFile()

    const dateFields = [
    //   'CREATION_DATE',
    //   'creation_date'
    ];

   const columnMapping = {
  'Created By': 'created_by',
  'Escalation Criteria': 'escalation_criteria',
  'Related Escalation': 'related_escalation',
  'Related Escalation Level': 'related_escalation_level',
  'Product Quality Issue': 'product_quality_issue',
  'Regulatory Compliance Issue': 'regulatory_compliance_issue',
  'Non-GMP Issue': 'non-gmp_issue',
  'Issue Type': 'issue_type',
  'Event': 'event',
  'Event ID': 'event_id'
};

   cy.compareCsvFiles({
      downloadedFilePath: 'cypress/downloads/Results.csv',
      dbFilePath: 'cypress/excelData/Escalation-Assessment.csv',
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

