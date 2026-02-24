import { GQTest } from '../../jj-pages/GQTest'
describe('00. Product', () => {
  Cypress.config('defaultCommandTimeout', 180000);
  it('Filter Product Records', () => {
    const GQ = new GQTest()
    // Login
    GQ.login()

    // Open Product Planet
    GQ.Planets.Product.openLandingPage()

    // Navigate to Product Families Tab
    let page = GQ.Planets.Product.ProductFamilies
    page.openLandingPage()

    // Toggle Filter
    page.toggleFilter()

    // Open APALUTAMIDE
    page.openProductFamilyByText('APALUTAMIDE')

    // Navigate to ProductRecords
    page = page.ProductFamily.Content.ProductRecords
    page.openLandingPage()

    //  Filtered Tab
    // page = page.Filtered

    let id = page.gridID()
    // Auto Test All
    cy.autoTestAll(
      id
      , {})

    //   Logout
    GQ.logout()
  })
})