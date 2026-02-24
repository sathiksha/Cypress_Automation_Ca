import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Bug Tracking Tests', () => {
    it('9103- APR and PQR view is available for Trackwise Escalations Audits and Suppliers', () => {
            // Login 
            GQ.login('PQM360 General User')

            // Open Product
            GQ.Planets.Product.openLandingPage()

            // Toggle filter
            GQ.Planets.Product.ProductFamilies.toggleFilter()

            // Complaints tab
            GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

            // Content
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

            // Quality Records
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

            // Change Controls
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.open()
            
            // CAPAs
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()

            // Filtered
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.open()
            
            // APR/PQR view
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.clickAPRPQRView()

            // Logout
            GQ.logout()

    })
})