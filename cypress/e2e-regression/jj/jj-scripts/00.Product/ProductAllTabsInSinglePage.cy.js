import { GQTest } from '../../../jj-pages/GQTest'
describe('00. Product', () => {
  Cypress.config('defaultCommandTimeout', 180000);
  it('Product - all tabs in single page', () => {
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
  
    // Content
    page = page.ProductFamily.Content
    page.open()

    // Product Records
    page.ProductRecords.openLandingPage()

    // Manufacturing Records
    page.ManufacturingRecords.openLandingPage()

    // Laboratory Records
    page.LaboratoryRecords.openLandingPage()

    // Complaint Records
    page.ComplaintRecords.openLandingPage()

    // Regulatory Records
    page.RegulatoryRecords.openLandingPage()

    // Quality Records
    page.QualityRecords.openLandingPage()

    // Logout
    GQ.logout()
  })
})