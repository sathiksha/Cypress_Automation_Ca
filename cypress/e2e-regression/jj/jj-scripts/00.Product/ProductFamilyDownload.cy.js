import { GQTest } from '../../jj-pages/GQTest'
describe('00. Product', () => {
  Cypress.config('defaultCommandTimeout', 180000);
  it('Product Family Download', () => {
    const GQ = new GQTest()
    // Login
    GQ.login()

    // Open Product Planet
    GQ.Planets.Product.openLandingPage()

  // Navigate to Product Families Tab
    let page = GQ.Planets.Product.ProductFamilies
    page.openLandingPage()

    // Row Count

    cy.getRowCount(page.rowCountLocator()).then((num)=>{
      page.clickDownload()
      cy.verifyDownload('Results.xlsx', { timeout: Cypress.env('downloadTimeout') * 1000 });
      cy.log(num)
    })
    // Delete Downloads folder
    cy.deleteDownloadsFolder();
   
    // Logout
    GQ.logout()
  })
})