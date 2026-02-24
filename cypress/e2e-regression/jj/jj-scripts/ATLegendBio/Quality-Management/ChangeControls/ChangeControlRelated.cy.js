import { GQTest} from "../../../../jj-pages/GQTest"
// Sprint 20
describe('Sprint 20', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('AT LegendBio ChangeControl Related Object', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.expandrow(2)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.changecontrolrelatedobject.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.changecontrolrelatedobject.showLegendBio()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectImapctedDocuments.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectImapctedDocuments.showLegendBio()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectImpactedProducts.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectImpactedProducts.showLegendBio()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectImpactedEquipments.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectImpactedEquipments.showLegendBio()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectImpactedOrganization.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectImpactedOrganization.showLegendBio()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectAssessmentExecution.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectAssessmentExecution.showLegendBio()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectImplementation.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectImplementation.showLegendBio()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectCAPAs.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectCAPAs.showLegendBio()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectNonconformance.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectNonconformance.showLegendBio()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectBatches.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.relatedobjectBatches.showLegendBio()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.AssessmentExecution.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.AssessmentExecution.expandrow(2)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.AssessmentExecution.relatedobject()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.AssessmentExecution.changecontrol()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.AssessmentExecution.changecontrolshowlegendBio()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.AssessmentExecution.CMCGLOBAL()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.AssessmentExecution.CMCGLOBALShowlegendBio()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.Implementations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.Implementations.expandrow(2)


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.Implementations.relatedobject()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.QualityManagement.Nonconformancechangecontrol.Implementations.changecontrolshowlegendBio()
        GQ.logout()
    })
})