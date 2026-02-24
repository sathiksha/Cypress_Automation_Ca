import { GQTest } from '../../jj-pages/GQTest';
require('cypress-xpath');

describe('Sprint 6', () => {
  const GQ = new GQTest();

  it('Allows user license assignment charts', () => {
    // Login
    GQ.login();

    // Navigate through menu
    GQ.Menu.show();
    GQ.Menu.domainsetup.open();
    GQ.Menu.domainsetup.dropdown();

    GQ.Menu.manage.open();
    GQ.Menu.manage.chart();
    GQ.Menu.manage.clickLastLoginDate();
    GQ.Menu.manage.orgnization();

    // Assert chart visibility using escaped selector
    cy.get('[id="isc_QChart_0$436"]').should('be.visible');
    GQ.Menu.manage.function()
    cy.get('[id="isc_QChart_1$436"]').should('be.visible');
    GQ.Menu.manage.department()
    cy.get('[id="isc_QChart_2$436"]').should('be.visible');
    GQ.Menu.manage.Site()
    cy.get('[id="isc_QChart_3$436"]').should('be.visible');
    GQ.Menu.manage.chart();
    cy.get('.grayHeaderButton').should('be.visible')

  });

})