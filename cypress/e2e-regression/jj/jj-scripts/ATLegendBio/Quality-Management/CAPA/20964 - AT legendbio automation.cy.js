import { GQTest } from "../../../../jj-pages/GQTest";
import { LegendBio } from "../../../../jj-pages/AT LegendBio/LegendBio"
const GQ = new GQTest();
const ATLegendBio = new LegendBio()

describe('Related Objects of CAPAs Main noun', () => {
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > Related Objects > Extensions > Related Objects tab for LegendBio users', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.CAPAsMain.open()

        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.open()

        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.refresh()

        //Open a Record
        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.togglefilter()

        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.openProductFamilyByText('CAPA-001606')

        //Related Objects
        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.RelatedObjects.open();

        //Extensions
        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.RelatedObjects.Extentions()
       
        //Extention Related objects
        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.RelatedObjects.Extensionrelatedobject.open(0)

        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.RelatedObjects.Extensionrelatedobject.Relatedobjectextention.openrelated()
       
        //Verify Extenstions RelatedObject tabs
         const tabNames = [
            'Parent Investigation', 
            'Parent Action',
            'Parent Effectiveness Review',
            'Source CAPA',
            'Source Audit',
            'Source Audit Observations'
        ]
        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.RelatedObjects.Extensionrelatedobject.Relatedobjectextention.check(tabNames)

        //Close Record
        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.closeARecord();

        // Logout
        GQ.logout()
        

        
        
    })
})
