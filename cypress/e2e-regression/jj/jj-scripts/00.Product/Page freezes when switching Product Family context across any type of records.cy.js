import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
describe('Bug Tracking Test', () => {
    it('7567-Page freezes when switching Product Family context across any type of records (TVV, RimDocs, Quality, Batch Explorer, etc...)', () => {
        const GQ = new GQTest();
        // Login to Products
        GQ.login();

        // Open Product
        GQ.Planets.Product.openLandingPage()

        //Open Product Planet
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Apalutamide
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Click data
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectParent()

        //Click Home
        GQ.Planets.Product.ProductFamilies.ProductFamily.Home.open()

        // Details Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Home.Details.openLandingPage()

        // Click to Maximise
        GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

        // Open Apalutamide
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Click data
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectParent()

        // Click Contents
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        // Related Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.openLandingPage()

        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.Filtered.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.Filtered.AllFilterOption()

        // Expand Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.Filtered.ChildProductRecord.open()


        // File Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.Filtered.ChildProductRecord.file.openLandingPage()

        // Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.Filtered.ChildProductRecord.RelatedObjects.openLandingPage()

        //Logout
        GQ.logout()
    })
})
