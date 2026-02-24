import { GQTest } from "../../../../jj-pages/GQTest";
import { LegendBio } from "../../../../jj-pages/AT LegendBio/LegendBio"


describe('19554-AT LegendBio Quality Management Nonconformances Related Objects', () => {
    const GQ = new GQTest();
    const ATLegendBio = new LegendBio()
    Cypress.config('defaultCommandTimeout', 180000);
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > Nonconformances (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        // Open Landing Page
        ATLegendBio.QualityManagement.openLandingPage()

        // Click on Nonconformances
        ATLegendBio.QualityManagement.NonConformancesMain.open()

         // Click on Nonconformances sub noun
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.open()

         // Click on Refresh Icon
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.refresh()

        //Open a Record
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.openARecord()

        //Related Objects
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.openRelatedObjects()

        //Verify RelatedObjects tabs
        const tabNames = [
            'Immediate Causes',
            'NC Investigations',
            'Laboratory Investigations',
            'CAPAs',
            'Actions',
            'Change Controls',
            'Batches',
            'Documents'
        ]

        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.checkRelatedObjects(tabNames)

        // Logout
        GQ.logout()
    }),

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > Containments (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        // Open Landing Page
        ATLegendBio.QualityManagement.openLandingPage()

        // Click on Nonconformances
        ATLegendBio.QualityManagement.NonConformancesMain.open()

         // Click on Containments sub noun
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.openSubnoun()

         // Click on Refresh Icon
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.refreshSubnoun()

        //Open a Record
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.openASubnounRecord()

        //Related Objects
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.openRelatedObjects()

        //Verify RelatedObjects tabs
        const tabNames = [
            'Nonconformances'            
        ]

        ATLegendBio.QualityManagement.NonConformancesMain.Containments.checkRelatedObjects(tabNames)

        // Logout
        GQ.logout()
    }),

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > NCInvestigations (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        // Open Landing Page
        ATLegendBio.QualityManagement.openLandingPage()

        // Click on Nonconformances
        ATLegendBio.QualityManagement.NonConformancesMain.open()

         // Click on NCInvestigations sub noun
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.openSubnoun()

         // Click on Refresh Icon
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.refreshSubnoun()

        //Open a Record
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.openASubnounRecord()

        //Related Objects
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.openRelatedObjects()

        //Verify RelatedObjects tabs
        const tabNames = [
            'Nonconformances',
            'Immediate Causes',
            'NC Corrections'            
        ]

        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.checkRelatedObjects(tabNames)

        // Logout
        GQ.logout()
    }),

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > SupplementalInvestigations (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        // Open Landing Page
        ATLegendBio.QualityManagement.openLandingPage()

        // Click on Nonconformances
        ATLegendBio.QualityManagement.NonConformancesMain.open()

         // Click on SupplementalInvestigations sub noun
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.openSubnoun()

         // Click on Refresh Icon
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.refreshSubnoun()

        //Open a Record
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.openASubnounRecord()

        //Related Objects
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.openRelatedObjects()

        //Verify RelatedObjects tabs
        const tabNames = [            
            'NC Investigations'            
        ]

        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.checkRelatedObjects(tabNames)

        // Logout
        GQ.logout()
    }),

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > LaboratoryInvestigations (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        // Open Landing Page
        ATLegendBio.QualityManagement.openLandingPage()

        // Click on Nonconformances
        ATLegendBio.QualityManagement.NonConformancesMain.open()

         // Click on LaboratoryInvestigations sub noun
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.openSubnoun()

         // Click on Refresh Icon
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.refreshSubnoun()

        //Open a Record
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.openASubnounRecord()

        //Related Objects
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.openRelatedObjects()

        //Verify RelatedObjects tabs
        const tabNames = [            
            'Specifications',
            'Test Methods',
            'Nonconformances',
            'Stability Studies',
            'Batches'            
        ]

        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.checkRelatedObjects(tabNames)

        // Logout
        GQ.logout()
    }),

     it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > NCCorrections (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        // Open Landing Page
        ATLegendBio.QualityManagement.openLandingPage()

        // Click on Nonconformances
        ATLegendBio.QualityManagement.NonConformancesMain.open()

         // Click on NCCorrections sub noun
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.openSubnoun()

         // Click on Refresh Icon
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.refreshSubnoun()

        //Open a Record
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.openASubnounRecord()

        //Related Objects
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.openRelatedObjects()

        //Verify RelatedObjects tabs
        const tabNames = [            
            'NC Investigations',
            'Actions',
            'Nonconformances',
            'Immediate Causes'                     
        ]

        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.checkRelatedObjects(tabNames)

        // Logout
        GQ.logout()
    }),

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > Actions (sub-tab) for LegendBio users only > Related Objects', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        // Open Landing Page
        ATLegendBio.QualityManagement.openLandingPage()

        // Click on Nonconformances
        ATLegendBio.QualityManagement.NonConformancesMain.open()

         // Click on Actions sub noun
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.openSubnoun()

         // Click on Refresh Icon
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.refreshSubnoun()

        //Open a Record
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.openASubnounRecord()

        //Related Objects
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.openRelatedObjects()

        //Verify RelatedObjects tabs
        const tabNames = [            
            'NC Corrections'                               
        ]

        ATLegendBio.QualityManagement.NonConformancesMain.Actions.checkRelatedObjects(tabNames)

        // Logout
        GQ.logout()
    })
})