import { Test } from 'mocha';
import { GQTest } from '../../jj-pages/GQTest';
require('cypress-xpath');

// Sprint 7
describe('Sprint 7', () => {
     const GQ = new GQTest();
     it('BUG: Combination Product filter lacks "Select All", "Clear All" and blank options', () => {
          // Login
          GQ.login();

          GQ.Planets.Product.openLandingPage()

          GQ.Planets.Product.Products.openLandingPage()

          GQ.Planets.Product.Products.setViewAll()

          GQ.Planets.Product.Products.rightclickthecolumn()

          GQ.Planets.Product.Products.clickoncolumn()

          GQ.Planets.Product.Products.combinationproduct()

          GQ.Planets.Product.Products.apply()

          GQ.Planets.Product.Products.togglefilter()

          GQ.Planets.Product.Products.selectcombinationfilter()

          cy.contains('Select All').should('be.visible')

          cy.contains('Clear All').should('be.visible')

          GQ.Planets.Product.Products.selectall()
          
          GQ.Planets.Product.Products.clearall()




     })

})