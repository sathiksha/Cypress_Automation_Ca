// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
// Alternatively you can use CommonJS syntax:
// require('./commands')


before(function () {

    const runLabel = Cypress.env('runLabel');
    if (runLabel) {
        Cypress.env('RUN_LABEL', runLabel); // Use the value from Cypress.env
    } else {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        Cypress.env('RUN_LABEL', `${year}${month}${day}${hours}${minutes}`); // Set to yyyymmddhhmm
    }

    cy.intercept(
        { url: '/globalq/**', middleware: true },
        // decorate all requests with headers that indicate that source being
        // cypress tests and the full path to the test name
        (req) => {
            req.headers['x-source'] = 'cypress';
            if (Cypress.env('testContext') !== '') {
                req.headers['x-source-description'] = Cypress.currentTest.titlePath.join("->") + ' (' + Cypress.env('testContext') + ')';
            } else {
                req.headers['x-source-description'] = Cypress.currentTest.titlePath.join("->");
            }
            req.headers['x-run-label'] = Cypress.env('RUN_LABEL');
        }
    )
});

// Ignore JS Errors globally
if (Cypress.env('ignoreJSErrors')) {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
}