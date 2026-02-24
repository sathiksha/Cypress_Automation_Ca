import { GQTest } from '../../jj-pages/GQTest'
describe('00. Product', () => {
  Cypress.config('defaultCommandTimeout', 180000);
  it('Tabs and Views', () => {
    const GQ = new GQTest()
    // Login
    GQ.login()
    // Open Product Planet to view the Product Families page
    GQ.Planets.Product.openLandingPage()

    // Product Families Tab
    let page = GQ.Planets.Product.ProductFamilies
    page.openLandingPage()
    // All View
    page.setViewAll()
    // Expand first Record
    page.expandRecord(0)
    // All View
    page.setViewAssignedToMe()
    page.setViewRelatedToMe()
    // Expand first Record
    page.expandRecord(0)


    // Products Tab
    page = GQ.Planets.Product.Products
    page.openLandingPage()

    // All View
    page.setViewAll()
    // Expand first Record
    page.expandRecord(0)
    // All View
    page.setViewAssignedToMe()
    // All View
    page.setViewRelatedToMe()
    // Expand first Record
    page.expandRecord(0)


    // Open Small Molecules
    page = GQ.Planets.Product.SmallMolecules;
    page.SmallMoleculesOpen()
    // Set All View
    page.setViewAll()
    // Expand first Record
    page.expandRecord(0)

    // Set Assigned to Me
    page.setViewAssignedToMe()

    // Open Large Molecules
    page = GQ.Planets.Product.LargeMolecules
    page.LargeMoleculesOpen()
    // Set All View
    page.setViewAll()
    // Expand first Record

    page.expandRecord(0)
    // Set Assigned to me View
    page.setViewAssignedToMe()

    // Logout
    GQ.logout()
  })
})