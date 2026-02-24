import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('UAT/5.0', () => {
    it('UAT-016 Quality Management data view - Nonconformance', () => {

    // Login
    GQ.login('PQM360 General User')

    // Quality management planet
    GQ.Planets.QualityManagement.openLandingPage()

    // Nonconformances
    GQ.Planets.QualityManagement.NonConformances.openLandingPage()

    // View Trackwise
    GQ.Planets.QualityManagement.NonConformances.viewTrackwise()

    // Comet
    GQ.Planets.QualityManagement.NonConformances.viewComet()

    // Toggle Filter
    GQ.Planets.QualityManagement.NonConformances.Comet.toggleFilter()

    // Select Record
    GQ.Planets.QualityManagement.NonConformances.Comet.selectRecordByText('NC-016839')

    // Rleated Objects
    GQ.Planets.QualityManagement.NonConformances.Comet.CometRecord.RelatedObjects.open()

    // Navigate to product planet
    GQ.NavBar.navigateToProduct()

    // Product families
    GQ.Planets.Product.ProductFamilies.openLandingPage()

    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Select Product Family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

    // Content 
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

    // Quality records
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

    // Nonconfomances
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.open()

    // Filtered
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.open()

    // View Trackwise
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.viewTrackwise()

    // View Comet
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.viewComet()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.toggleFilter()

    // Select Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.selectRecordByText('NC-046726')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.Record.openRelatedObjects()


    
    // Logout
    GQ.logout()



    })
})

}
