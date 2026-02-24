import { GQTest } from '../../../jj-pages/GQTest';
const { clearReportFile, appendValidationLine, renameReportFile } = require('../../../../../support/utils/reportHelper');
const Papa = require('papaparse');
require('cypress-xpath');

describe('Data Comparison Change Controls Implementation - Multiple Families', () => {
  const downloadsFolder = Cypress.config('downloadsFolder');
  const reportFilePath = 'cypress/reports/html/report.txt';

  const productFamilies = [
    'Cypress01 - Streamer Test',
    'Cypress03 - Streamer Test',
    'Cypress09 - Streamer Test',
    'Cypress10 - Streamer Test',
  ];

  const dbCsvFiles = [
    'cypress/qaExcelData/Cypress1.csv',
    'cypress/qaExcelData/Cypress3.csv',
    'cypress/qaExcelData/cypress09.csv',
    'cypress/qaExcelData/cypress10.csv',
  ];

  // Helper to get filtered DB CSV row count (exclude empty first column rows)
  function getDbCsvFilteredRowCount(csvData) {
    const parsed = Papa.parse(csvData.trim(), { skipEmptyLines: true });
    return parsed.data.slice(1).filter(row => row[0] && row[0].trim() !== '').length;
  }

  before(() => {
    clearReportFile(reportFilePath);
  });

  productFamilies.forEach((familyName, index) => {
    const dbFilePath = dbCsvFiles[index];

    it(`Validates UI count matches DB count for product family: ${familyName}`, () => {
      const GQInstance = new GQTest();

      // Login & navigate
      GQInstance.login();
      GQInstance.Planets.Product.openLandingPage();
      GQInstance.Planets.Product.ProductFamilies.toggleFilter();
      GQInstance.Planets.Product.ProductFamilies.openProductFamilyByText(familyName);
      cy.checkforErrorPopup();

      GQInstance.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage();
      GQInstance.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.open();
      GQInstance.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.open();

      // Get UI count from page text
      cy.getSC(GQInstance.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.getCount())
        .invoke('text')
        .then(text => {
          const uiCount = parseInt(text.trim().match(/[\d,]+/g)?.[0].replace(/,/g, ''));

          cy.log(`UI Count for ${familyName}: ${uiCount}`);

          // Read DB CSV file and count filtered rows
          cy.readFile(dbFilePath).then(dbCsvData => {
            const dbRowCount = getDbCsvFilteredRowCount(dbCsvData);

            cy.log(`DB Row Count for ${familyName}: ${dbRowCount}`);

            const match = (uiCount === dbRowCount) ? 'YES' : 'NO';

            let reportLine = `Family: ${familyName} | UI Rows: ${uiCount} | DB Rows: ${dbRowCount} | Match: ${match}`;
            if (match === 'NO') {
              reportLine += ' <-- MISMATCH FOUND!';
            }

       return appendValidationLine(reportLine, reportFilePath).then(() => {
  expect(uiCount).to.eq(dbRowCount);
});

          });
        });

      cy.wait(3000);
      GQInstance.logout();
    });
  });

  after(() => {
    renameReportFile();
  });
});
