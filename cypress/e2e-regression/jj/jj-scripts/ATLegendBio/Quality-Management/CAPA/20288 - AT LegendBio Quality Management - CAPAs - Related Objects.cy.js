import { GQTest } from "../../../../jj-pages/GQTest";
import { LegendBio } from "../../../../jj-pages/AT LegendBio/LegendBio"
const GQ = new GQTest();
const ATLegendBio = new LegendBio()

describe('Related Objects of CAPAs Main noun', () => {
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > CAPAs (sub-tab) for LegendBio users only > Related Objects', () => {

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
        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.openARecord(0)

        //Related Objects
        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.RelatedObjects.open();

        //Verify RelatedObjects tabs

        const tabNames = [
            'Documents',
            'Interim Controls',
            'CAPA Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Reviews',
            'Team Members',
            'Nonconformances',
            'Batches',
            'Extensions'
        ]

        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.RelatedObjects.checkTabs(tabNames);

        //Close Record
        ATLegendBio.QualityManagement.CAPAsMain.CAPAs.closeARecord();

        // Logout
        GQ.logout()
    })
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > Interim Controls (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.CAPAsMain.open()

        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.open()

        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.refresh()

        //Open a Record
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.openARecord(0)

        //Related Objects
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.RelatedObjects.open();

        //Verify RelatedObjects tabs

        const tabNames = [
            'CAPAs'
        ]

        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.RelatedObjects.checkTabs(tabNames);

        //Close Record
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.closeARecord();

        // Logout
        GQ.logout()
    })
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > CAPA Investigations (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.CAPAsMain.open()

        ATLegendBio.QualityManagement.CAPAsMain.CAPAInvestigations.open()

        ATLegendBio.QualityManagement.CAPAsMain.CAPAInvestigations.refresh()

        //Open a Record
        ATLegendBio.QualityManagement.CAPAsMain.CAPAInvestigations.openARecord(0)

        //Related Objects
        ATLegendBio.QualityManagement.CAPAsMain.CAPAInvestigations.RelatedObjects.open();

        //Verify RelatedObjects tabs

        const tabNames = [
            'CAPAs',
            'Root Causes',
            'CAPA Implementations'
        ]

        ATLegendBio.QualityManagement.CAPAsMain.CAPAInvestigations.RelatedObjects.checkTabs(tabNames);

        //Close Record
        ATLegendBio.QualityManagement.CAPAsMain.CAPAInvestigations.closeARecord();

        // Logout
        GQ.logout()
    })
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > Supplemental Investigations (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.CAPAsMain.open()

        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.open()

        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.refresh()

        //Open a Record
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.openARecord(0)

        //Related Objects
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.RelatedObjects.open();

        //Verify RelatedObjects tabs

        const tabNames = [
            'CAPA Investigations'
        ]

        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.RelatedObjects.checkTabs(tabNames);

        //Close Record
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.closeARecord();

        // Logout
        GQ.logout()
    })
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > CAPA Implementation (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.CAPAsMain.open()

        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.open()

        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.refresh()

        //Open a Record
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.openARecord(0)

        //Related Objects
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.RelatedObjects.open();

        //Verify RelatedObjects tabs

        const tabNames = [
            'CAPA Investigations',
            'Actions',
            'Root Causes',
            'CAPAs',
        ]

        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.RelatedObjects.checkTabs(tabNames);

        //Close Record
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.closeARecord();

        // Logout
        GQ.logout()
    })
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > Actions (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.CAPAsMain.open()

        ATLegendBio.QualityManagement.CAPAsMain.Actions.open()

        ATLegendBio.QualityManagement.CAPAsMain.Actions.refresh()

        //Open a Record
        ATLegendBio.QualityManagement.CAPAsMain.Actions.openARecord(0)

        //Related Objects
        ATLegendBio.QualityManagement.CAPAsMain.Actions.RelatedObjects.open();

        //Verify RelatedObjects tabs

        const tabNames = [
            'CAPA Implementation'
        ]

        ATLegendBio.QualityManagement.CAPAsMain.Actions.RelatedObjects.checkTabs(tabNames);

        //Close Record
        ATLegendBio.QualityManagement.CAPAsMain.Actions.closeARecord();

        // Logout
        GQ.logout()
    })
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > Effectiveness Plan (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.CAPAsMain.open()

        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessPlan.open()

        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessPlan.refresh()

        //Open a Record
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessPlan.openARecord(0)

        //Related Objects
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessPlan.RelatedObjects.open();

        //Verify RelatedObjects tabs

        const tabNames = [
            'CAPAs'
        ]

        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessPlan.RelatedObjects.checkTabs(tabNames);

        //Close Record
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessPlan.closeARecord();

        // Logout
        GQ.logout()
    })
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > Effectiveness Review (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.CAPAsMain.open()

        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.open()

        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.refresh()

        //Open a Record
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.openARecord(0)

        //Related Objects
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.RelatedObjects.open();

        //Verify RelatedObjects tabs

        const tabNames = [
            'CAPAs'
        ]

        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.RelatedObjects.checkTabs(tabNames);

        //Close Record
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.closeARecord();

        // Logout
        GQ.logout()
    })
})