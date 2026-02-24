import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('UAT/5.0', () => {
    it('UAT-013 Quality Data APR-PQR View', () => {

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

        // Quality records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        // Nonconfomances
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.open()

        // APR?PQR view
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.clickAPRPQRView()

        // Download
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.download()

        // Open Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.openRecordByIndex(0)

        // Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.Record.openRelatedObjects()

        // Click To maximize
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.maximizeSelector()

        // CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()

        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.clickAPRPQRView()

        // Download
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.download()

        // Open Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.openRecordByIndex(0)

        // Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.Record.openRelatedObjects()
        
        // Logout
        GQ.logout()

    })
})

}
