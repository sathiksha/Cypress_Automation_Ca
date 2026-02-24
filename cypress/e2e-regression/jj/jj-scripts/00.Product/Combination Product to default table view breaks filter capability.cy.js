

import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();

describe('Bug Tracking Test', () => {
    it('12737- Combination Product to default table view breaks filter capability', () => {
        const GQ = new GQTest();
        // Login to Products
        GQ.login();

        // Open Product
        GQ.Planets.Product.openLandingPage()

             
        // Add column Combination Product 
        cy.addColumn( GQ.Planets.Product.ProductFamilies.columnHeader(), ['Combination Product'])

        // Toggle filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        //GQ.Planets.Product.ProductFamilies.checkmultiPickerIcon()

        
        // Logout
        // GQ.logout()
    })
})