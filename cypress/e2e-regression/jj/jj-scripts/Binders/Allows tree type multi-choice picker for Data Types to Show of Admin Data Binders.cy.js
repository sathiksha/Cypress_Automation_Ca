import { Test } from 'mocha';
import { GQTest } from '../../jj-pages/GQTest';
// Sprint 4
require('cypress-xpath');

describe('Allows tree type multi-choice picker for "Data Types to Show" of Admin Data Binders', () => {
    const GQ = new GQTest();

    it('Allows tree type multi-choice picker for "Data Types to Show" of Admin Data Binders', () => {

        // Login
        GQ.login();

        // Navigate to the Landing Page
        GQ.NavBar.ElementLibrary.openLandingPage();

        // Navigate to Data Management
        GQ.NavBar.ElementLibrary.DataManagement.open();

        // Open Admin Data Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.open();

        // Search for the created item (TESTING FOR ADMIN DATA)
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRowByText('TESTING FOR ADMIN DATA');
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.openLandingPage()
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.selectqualitymanagement()
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.save()
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.SmartContent()
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.Nonconformances.openlandingpage()
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
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.CAPAS.openlandingpage()
        const capTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            // 'Supplemental Investigations',
            'CAPA Implementation',
            //'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ];

        capTabs.forEach(tab => {
            cy.contains(tab).should('be.visible');
        });
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.Audits.openlandingpage()
        const auditTabs = [
            'Audits',
            'Audit Observations'
        ];

        auditTabs.forEach(tab => {
            cy.contains(tab).should('be.visible');
        });
        GQ.logout();


        // Debug: Log each level of the object chain to see if it's defined
    })
})