import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Bug Tracking Tests', () => {
    it('10622- Product Families and Product Team Information data was deleted with R5.0 deployment', () => {
        // Login
        GQ.login()

        // Product Planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()
        
        // Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Resperidone Product
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('RISPERIDONE')

        // Home
        GQ.Planets.Product.ProductFamilies.ProductFamily.Home.open()

        // Details Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.openLandingPage()

    })
})