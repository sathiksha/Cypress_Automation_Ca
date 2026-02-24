import { GQTest } from '../../../jj-pages/GQTest'
describe('00. Product', () => {
  Cypress.config('defaultCommandTimeout', 180000);
  it('Filter Quality Records', () => {
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

    // Close Selector
    page = page.ProductFamily
    page.closeSelector()
  
    // Navigate to Quality Records
    page = page.Content.QualityRecords
    page.openLandingPage()

    // Change Controls
    page = page.ChangeControls
    page.open()

    // // Trackwise
    // page = page.Trackwise
    // page.open()

     // Filtered
     page = page.Filtered
     page.open()

    // Auto Test All
    cy.autoTestAll(
      page.gridID()
    , { })

    // Logout
    GQ.logout()
  })
})