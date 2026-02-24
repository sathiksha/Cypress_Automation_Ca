const { defineConfig } = require('cypress');
const { isFileExist } = require('cypress-verify-download');
const readXlsx = require('./read-xlsx');
const { removeDirectory } = require('cypress-delete-downloads-folder');
const fs = require('fs');
const path = require('path');
const xlsx = require("xlsx");

module.exports = defineConfig({
  projectId: "wqxhi6",
  pageLoadTimeout: 150000,
  defaultCommandTimeout: 60000,
  responseTimeout: 300000,
  experimentalMemoryManagement: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Regression Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    json: true,
  },
  scCommandTimeout: 120000,
  // numTestsKeptInMemory: 0,
  // retries: 1,
  e2e: {
    experimentalRunAllSpecs: true,
    experimentalStudio: true,
    video: true,
    downloadsFolder: 'cypress/downloads',
    specPattern:
      [
        "cypress/e2e-regression/jj/jnj-scripts/**/*.cy.js",
        "!cypress/e2e-regression/jj/jj-scripts/Smoke Testing/**/*.cy.js",
        "!cypress/e2e-regression/jj/jj-scripts/bddFramework/**/*.cy.js",
        "!cypress/e2e-regression/jj/jj-scripts/IS-Scripts/**/*.cy.js",
      ],
    async setupNodeEvents(on, config) {
      const getCleanTimestamp = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hour = String(now.getHours()).padStart(2, '0');
        const minute = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}-${hour}${minute}`;
      };

      const timestamp = getCleanTimestamp();
      config.reporterOptions.reportPageTitle = `Regression Report - ${timestamp}`;

      on('task', {
        isFileExist,
        readXlsx: readXlsx.read,
        removeDirectory,
        readSheetNames(filePath) {
          const workbook = xlsx.readFile(filePath);
          return workbook.SheetNames; // return all sheet names
        },
        getLatestFile(dir) {
          const files = fs.readdirSync(dir)
            .map(name => ({
              name,
              time: fs.statSync(path.join(dir, name)).mtime.getTime()
            }))
            .sort((a, b) => b.time - a.time)
            .map(file => file.name);
          return files.length ? files[0] : null;
        },
        log(message) {
          console.log(message);
          return null;
        },
        renameReportFiles(receivedTimestamp) {
          const reportDir = path.join(__dirname, 'cypress', 'reports', 'html');
          const oldTxt = path.join(reportDir, 'report.txt');
          const newTxt = path.join(reportDir, `${receivedTimestamp}.txt`);
          if (fs.existsSync(oldTxt)) {
            fs.renameSync(oldTxt, newTxt);
            console.log(`Renamed report.txt to ${receivedTimestamp}.txt`);
          } else {
            console.warn('report.txt not found.');
          }
          return null;
        }
      });

      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});

