import { Test } from 'mocha';
import { GQTest } from '../../jj-pages/GQTest';
// Sprint 4
require('cypress-xpath');

describe('COMET Laboratory Investigations Related Object Tabs:', () => {
    const GQ = new GQTest();

    it('Allows Related Objects of Stability Studies', () => {
        // Step 1: User login
        GQ.login();
        GQ.Planets.Product.openLandingPage()

        GQ.Planets.Product.Products.openLandingPage()

        GQ.Planets.Product.Products.setViewAll()

        GQ.Planets.Product.Products.rightclickthecolumn()

        GQ.Planets.Product.Products.clickoncolumn()

        GQ.Planets.Product.Products.OIDcolumn();

})
})