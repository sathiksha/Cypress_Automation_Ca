import { GQTest } from '../../jj-pages/GQTest';
require('cypress-xpath');

describe('Sprint 9', () => {
  const GQ = new GQTest();
  it('Allows streaming of licensed Product Families (ONLY)', () => {
    GQ.login()

    // Open Product Planet
    GQ.Planets.Product.openLandingPage()

    // Product Families must be visible
    cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

    // Products must be visible
    cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

    // Large Molecules must be visible
    cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

    // Small Molecules must be visible
    cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter();

    // Open APALUTAMIDE product family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.streamproductfamily()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.clickCheckBox()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.save()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.clickCheckBox()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.save()


  })
})
