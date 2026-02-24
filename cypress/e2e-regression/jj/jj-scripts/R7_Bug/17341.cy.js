import { GQTest } from '../../jj-pages/GQTest'
require('cypress-xpath')
describe('17341', () => {
    const GQ = new GQTest();


 it('Product family', () => {

     GQ.login()

       GQ.Planets.Product.openLandingPage()

        // Open product family 
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        //Open APALUTAMIDE        
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.openLandingPage()
 cy.get('div.normal[eventproxy="isc_HStack_66"]')
      .as('documentsGridBar')
      .should('be.visible');
  cy.get('@documentsGridBar')
      .find('img[title="Insight"], [aria-label="Insight"], .insight-icon')
      .should('not.exist');
 })
})