import { GQTest} from "../../../../jj-pages/GQTest"
// Sprint 20
describe('Sprint 20', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('AT LegendBio Material', () => {
 
        // Login
        GQ.login('AT LegendBio')
        // Product planet
        GQ.Planets.Product.openLandingPage()
 
        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

         // Click Product
        GQ.Planets.Product.ProductFamilies.clickProduct()
 
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.open()
        // Verify Grant Access to External Partners in  field picker
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.SelectFieldpicker()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.Refresh()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.filter()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.download()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.expandrow(2)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.relatedobject.open()
 
        // verify Documents tab records meet implicit criteria #17693
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.relatedobject.SelectFieldpicker()

        // verify Materials tab records meet implicit criteria #17713
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.relatedobject.material.open()  
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.relatedobject.material.SelectFieldpicker()

        // verify Change Controls tab records meet implicit criteria #17752
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.relatedobject.changecontrol.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.relatedobject.changecontrol.SelectFieldpicker()

        // verify Nonconformances tab records meet implicit criteria #17752
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.relatedobject.Nonconformance.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.relatedobject.Nonconformance.SelectFieldpicker()

        // verify CAPAs tab records meet implicit criteria #17752
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.relatedobject.CAPAs.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.relatedobject.CAPAs.SelectFieldpicker()
   
   GQ.logout()
    })
})
