import { GQTest } from '../../jj-pages/GQTest'
describe('00. Product', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Product Regulatory Records Tabs', () => {
        const GQ = new GQTest()
        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Navigate to Product Families Tab
        // let page = GQ.Planets.Product.ProductFamilies
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Navigate to Quality Records
        // page = page.ProductFamily.Content.RegulatoryRecords
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage()

        // CTD Triangle
        // page = page.Filtered.CTDTriangle

        // Module 1
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod1.open()

        // Module 2
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod2.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod2.filterQualityOverallSummary()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod2.filterNonClinicalSummary()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod2.filterClinicalSummary()

        // Module 3
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod3.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod3.filterDrugProduct()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod3.filterDrugSubstance()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod3.filterRegionalInformation()
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod3.filterAppendices()

        // Module 4
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod4.open()

        // Module 5
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod5.open()

        // Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod5.openRecord()

        // Navigate through tabs
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.CTDTriangle.Mod5.navigateThroughTabs()

        // Go to Records List
        // page = GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Filtered.RecordsList
        // page.open()

        // Open a record
        // page.openRecord(3)

        // Logout
        GQ.logout()
    })
})