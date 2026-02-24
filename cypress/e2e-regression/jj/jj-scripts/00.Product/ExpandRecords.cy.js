import { GQTest } from '../../jj-pages/GQTest'
describe('00. Product', () => {
  Cypress.config('defaultCommandTimeout', 180000)
  it('Expand Records', () => {
    const GQ = new GQTest()
    // Login
    GQ.login()
    // Open Product Planet to view the Product Families page
    GQ.Planets.Product.openLandingPage()
    let page = GQ.Planets.Product.ProductFamilies
    page.openLandingPage()
    // Expand first Record
    page.expandRecord(0)

    // Open Small Molecules
    page = GQ.Planets.Product.SmallMolecules;
    page.openLandingPage()
    // Set All View
    // page.setViewAll() (By default All)

    // Expand first Record
    page.expandRecord(0)
    // Open Large Molecules
    page = GQ.Planets.Product.LargeMolecules
    page.openLandingPage()
    // Set All View
    //page.setViewAll()
    // Expand first Record
    page.expandRecord(0)

  })
})
