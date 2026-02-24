import { GQTest } from '../../jj-pages/GQTest'
describe('00. Product', () => {
  Cypress.config('defaultCommandTimeout', 180000);
  it('Products Tabs', () => {
    const GQ = new GQTest()
    // Login
    GQ.login()

    // Open Product Planet
    GQ.Planets.Product.openLandingPage()

    // Navigate to Product Families Tab
    GQ.Planets.Product.ProductFamilies.openLandingPage()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Open APALUTAMIDE
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
  
    // Content
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

    // Home
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.open()

    // History
    GQ.Planets.Product.ProductFamilies.ProductFamily.History.open()

    // Notes
    GQ.Planets.Product.ProductFamilies.ProductFamily.Notes.open()

    // Roles
    GQ.Planets.Product.ProductFamilies.ProductFamily.Roles.open()

    // DocWriter
    // GQ.Planets.Product.ProductFamilies.ProductFamily.DocWriter.open()

    // DocWriter
    GQ.Planets.Product.ProductFamilies.ProductFamily.ActionItems.open()

    // Logout
    GQ.logout()
  })
})