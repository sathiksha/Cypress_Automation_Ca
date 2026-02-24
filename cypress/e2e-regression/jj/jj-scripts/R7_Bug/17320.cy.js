import { GQTest } from '../../jj-pages/GQTest';
// Sprint 4
require('cypress-xpath');

describe('17320', () => {
    const GQ = new GQTest();

    it('Forecast', () => {
        // Step 1: User login
        GQ.login();

        

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        //Laboratory Information
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

        //Release Data
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.openLandingPage()
     GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Forecasts.open()
    })
})