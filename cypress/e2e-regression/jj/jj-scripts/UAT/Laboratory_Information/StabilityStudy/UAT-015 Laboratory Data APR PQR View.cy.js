import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('UAT/5.0', () => {
    it('UAT-015 Laboratory Data APR PQR View', () => {

        // Login
        GQ.login('PQM360 General User')

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Select Product Family
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content 
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        // Laboratory records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

        // Studies
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.openLandingPage()

        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.open()

        // APR/PQR view
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.APRPQRView.open()

        // Click To Hide
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.clickToHideSelector()

        // Toggle filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.APRPQRView.toggleFilter()

        // Select Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.APRPQRView.selectStudyRecordByText('Study-231998')

        // Analysis Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.Analysis.open()

        // Details tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.Details.open()

        // Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.RelatedObjects.open()

        // Protocols Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.RelatedObjects.openProtocolTab()

        // Specification tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.RelatedObjects.openSpecificationsTab()

        // Test Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.RelatedObjects.openTestMethodsTab()

        // Change Controls tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.RelatedObjects.openChangeControlsTab()

        // Non Conformances Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.RelatedObjects.openNonConformances()

        // Batch tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.RelatedObjects.openBatchTab()

        // Samples tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.RelatedObjects.openSamplesTab()
        
        // click To maximise
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.maximizeSelector()

        // Toggle filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.APRPQRView.toggleFilter()

        // Download
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.APRPQRView.download()

        // Relaese data Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.openLandingPage()

        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Filtered.openLandingPage()

        // APR/PQR view
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Filtered.APRPQRView.open()

        // Click To Hide
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Filtered.clickToHideSelector()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Filtered.APRPQRView.toggleFilter()

        // Search record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Filtered.APRPQRView.searchRecordByText('FAT06')

        // Download
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Filtered.APRPQRView.download()
        
        // Logout
        GQ.logout()



    })
})

}
