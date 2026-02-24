import { GQTest } from "../../../../jj-pages/GQTest";
import { LegendBio } from "../../../../jj-pages/AT LegendBio/LegendBio"
const GQ = new GQTest();
const ATLegendBio = new LegendBio()

describe('Related Objects of Audits and Audit Observations', () => {
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Audits > Audits (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.AuditsMain.open()

        ATLegendBio.QualityManagement.AuditsMain.Audits.open()

        ATLegendBio.QualityManagement.AuditsMain.Audits.refresh()

        //Open a Record
        ATLegendBio.QualityManagement.AuditsMain.Audits.openARecord(0)

        //Related Objects
        ATLegendBio.QualityManagement.AuditsMain.Audits.RelatedObjects.open();

        //Verify RelatedObjects tabs

        const tabNames = [
            'Audit Observations',
            'Nonconformances',
            'CAPAs'
        ]

        ATLegendBio.QualityManagement.AuditsMain.Audits.RelatedObjects.checkTabs(tabNames);

        //Close Record
        ATLegendBio.QualityManagement.AuditsMain.Audits.closeARecord();

        // Logout
        GQ.logout()
    })
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Audits > Audits Observations (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.AuditsMain.open()

        ATLegendBio.QualityManagement.AuditsMain.AuditsObservations.open()

        ATLegendBio.QualityManagement.AuditsMain.AuditsObservations.refresh()

        //Open a Record
        ATLegendBio.QualityManagement.AuditsMain.AuditsObservations.openARecord(0)

        //Related Objects
        ATLegendBio.QualityManagement.AuditsMain.AuditsObservations.RelatedObjects.open();

        //Verify RelatedObjects tabs
        const tabNames = [
            'Audits',
            'Documents',
            'CAPAs'
        ]

        ATLegendBio.QualityManagement.AuditsMain.AuditsObservations.RelatedObjects.checkTabs(tabNames);

        //Close Record
        ATLegendBio.QualityManagement.AuditsMain.AuditsObservations.closeARecord();

        // Logout
        GQ.logout()
    })
})