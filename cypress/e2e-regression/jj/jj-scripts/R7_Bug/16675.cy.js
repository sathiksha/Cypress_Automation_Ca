
import { GQTest } from '../../jj-pages/GQTest'
describe('16675', () => {



    it('BUG (DEV/PRE-QA): "Escalations ( to be deleted )" needs to be removed from Product planet > Product Family/Product selection > Quality Management > by User', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('My Family Test - Cypress')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.clickUser()

        GQ.logout()





    })
})