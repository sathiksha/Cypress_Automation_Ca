import { GQTest} from "../../../jj-pages/GQTest"
// Sprint 7
describe('Sprint 20', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('AT LegendBio Documents', () => {
 
        // Login
         GQ.login('AT LegendBio')
        // Product planet
        GQ.Planets.Product.openLandingPage()
 
        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Click Product
        GQ.Planets.Product.ProductFamilies.clickProduct()
 
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.open()
        // verify Grid Bar options: Refresh, Filter, Download (#17693)
        // verify default table view is displayed (#17693)
        // verify records meet implicit criteria (#17693)

        // Verify Grant Access to External Partners in field picker
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.SelectFieldpicker()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.Refresh()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.filter()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.download()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.expandrow(2)

        // verify File tab opens in read-only mode when row expanded (#17693)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.file()

        // verify Details tab opens in read-only mode when row expanded (#17693)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.Details()

        // verify Related Objects tab is visible when row expanded (#17693)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.relatedobject.open()
        GQ.logout()
    })
})
