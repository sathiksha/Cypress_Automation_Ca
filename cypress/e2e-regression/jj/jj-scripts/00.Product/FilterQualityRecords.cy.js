import { GQTest } from '../../jj-pages/GQTest'
describe('00. Product', () => {
  Cypress.config('defaultCommandTimeout', 180000);
  it('Filter Quality Records', () => {
    const GQ = new GQTest();
    // Login
    GQ.login();

    GQ.Planets.Product.openLandingPage()

    // Product Families
    GQ.Planets.Product.ProductFamilies.openLandingPage()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Product Record
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

    //Open Quality Management
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

    //Open All
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openAll()

    // Auto Test All
    cy.autoTestAll(
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.gridID()
      , {})

    // Logout
    GQ.logout()
  })
})