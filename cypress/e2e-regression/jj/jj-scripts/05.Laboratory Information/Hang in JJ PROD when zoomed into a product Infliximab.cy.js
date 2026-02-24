import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
describe('Bug Tracking Test', () => {
    it('8317-Hang in JJ PROD when zoomed into a product Infliximab', () => {
        const GQ = new GQTest()
        // Login to Products
        GQ.login()

        // Open Product
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()
    
        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()
    
        // Open 'APALUTAMIDE'
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('INFLIXIMAB')

        // Laboratory Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

        // Studies
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.openLandingPage()

        // Fitered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.All.open()

        // Toggle filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.All.toggleFilter()

        // SelectRecord
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.All.selectStudyRecord('Study-230889')
        
        // Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.All.openRelatedObjects()

        // Batch 
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.All.batches()

        // Expand batch
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.All.expandBatchByIndex(0)

        // Batch flow
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.All.Batchflow()

        // Log out
        GQ.logout()

        


    })
})