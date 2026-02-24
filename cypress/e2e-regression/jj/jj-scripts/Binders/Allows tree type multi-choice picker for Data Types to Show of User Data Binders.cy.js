import { Test } from 'mocha';
import { GQTest } from '../../jj-pages/GQTest';
require('cypress-xpath');

describe('Admin Data Binder Workflow Test', () => {
    const GQ = new GQTest();
    const dropdown = GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.dropdown;  // Store dropdown element

    it('should perform the admin data binder workflow', () => {
        // Login before each test to avoid repetition
        GQ.login();

        // Navigate to the Landing Page
        GQ.NavBar.ElementLibrary.openLandingPage();

        // Navigate to Data Management
        GQ.NavBar.ElementLibrary.DataManagement.open();

        // Open User Data Binder and perform actions
        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.open();
        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.toggleSelector();
        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.selectRowByText('Testing user data binder');

        // Dropdown interactions
        dropdown.openLandingPage();
        dropdown.selectqualitymanagement();
        dropdown.save();
        dropdown.SmartContent();

        // Nonconformance tabs visibility check
        dropdown.Nonconformances.openlandingpage();
        const nonConformanceTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ];

        nonConformanceTabs.forEach(tab => {
            cy.contains(tab).should('be.visible');
        });

        // CAPA tabs visibility check
        dropdown.CAPAS.openlandingpage();
        const capTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'CAPA Implementation',
            'Effectiveness Plan',
            'Effectiveness Review'
        ];

        capTabs.forEach(tab => {
            cy.contains(tab).should('be.visible');
        });

        // Audits tabs visibility check
        dropdown.Audits.openlandingpage();
        const auditTabs = [
            'Audits',
            'Audit Observations'
        ];

        auditTabs.forEach(tab => {
            cy.contains(tab).should('be.visible');
        });
        // Logout after each test
        GQ.logout();
    });
});
