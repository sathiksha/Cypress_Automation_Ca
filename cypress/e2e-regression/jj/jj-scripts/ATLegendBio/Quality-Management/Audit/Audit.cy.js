import { GQTest} from "../../../../jj-pages/GQTest"


// Sprint 20
describe('Sprint 20', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('AT LegendBio Audit', () => {

        // Login
        GQ.login('AT LegendBio')
        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Click Product
        GQ.Planets.Product.ProductFamilies.clickProduct()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.Refresh()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.Filter()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.Predefinedfilters()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.download()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.chart.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.chart.Analytics()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.chart.Status()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.chart.StatusOwner()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.chart.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.showLegendBio()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.expandrow(2)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.Details()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Audit.relatedobject()
        GQ.logout()


    })
})