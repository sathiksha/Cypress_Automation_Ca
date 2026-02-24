import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
describe('UAT/4.1', () => {
    it('SYS-005 Download a sequential list of records BE', () => {
        // Login
        GQ.login()

        // Open Product
        GQ.Planets.Product.openLandingPage()

        // Open Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        cy.deleteDownloadsFolder();
        
        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()
        
        // Type Name
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('IBRUTINIB')
        
        // Select Parent record
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectParent('IBRUTINIB')
        
        // Manufacturing Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()

        // // Materials tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.openLandingPage()

        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.Filtered.openLandingPage()
        
        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.Filtered.toggleFilter()
        
        // Type Code
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.Filtered.searchByText('457512')
        
        // Open Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.Filtered.openRecord('457512')
        
        // Select batch
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.Filtered.Batches.open()
    
        // Download button
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.Filtered.Batches.downloadButton()

        // check for Warnings
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.Filtered.Batches.checkforWarnings()
 
        // Maximize
        GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()
        
        // Log out
        GQ.logout()
    })
})
