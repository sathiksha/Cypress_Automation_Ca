import { GQTest} from "../../../../jj-pages/GQTest"
// Sprint 20
describe('Sprint 20', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('AT LegendBio AuditObservation', () => {

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
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Refresh()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Filter()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Predefinedfilters()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Auditobservationchart.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Auditobservationchart.Analytics()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Auditobservationchart.Status()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Auditobservationchart.StatusOwner()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Auditobservationchart.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Auditobservationchart.showLegendBio()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Auditobservationchart.expandrow(2)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Auditobservationchart.Details()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.AuditObservation.Auditobservationchart.relatedobject()
        GQ.logout()





    })
})