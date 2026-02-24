import { GQTest } from "../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('UAT/5.0', () => {
    it('UAT-012 Combination Product Property for Products', () => {

    // Login
 GQ.login('PQM360 Product Owner')

    // Product planet
    GQ.Planets.Product.openLandingPage()

    // Product families
    GQ.Planets.Product.ProductFamilies.openLandingPage()

    // add Column Combination Product
    cy.addColumn(GQ.Planets.Product.ProductFamilies.columnHeader(),['Combination Product'])

    // Creat My Family test
    GQ.Planets.Product.ProductFamilies.createProductFamily_SmallMolecules('My Family Test','1234','Active','Oncology')

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Select Product Family
    GQ.Planets.Product.ProductFamilies.selectProductFamilyByText('My Family Test')

    // Home
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.open()

    // Edit product
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.editProductFamily('My Family Test Complete','11111','Biotherapeutics','Complete','Yoga','Oct 07 2024','Oct 08 2024')

    // Maximize
    GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

    // Select Product
    GQ.Planets.Product.ProductFamilies.selectParentByText('My Family Test Complete')

    // Creat My Family test
    GQ.Planets.Product.ProductFamilies.createNewSiblingProduct('My Product Test','1234','Small Molecule','Grow','Active','Therapy')

    // Click Plus sign
    GQ.Planets.Product.ProductFamilies.clickPlusIcon('My Family Test Complete')

    // Open My Product Test
    GQ.Planets.Product.ProductFamilies.openProduct('My Product Test')

    // Edit product
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.editSiblingProductFamily('My Product Complete','55555','Biotherapeutics','Complete','Yoga','Oct 07 2024','Oct 08 2024')

    // Maximize selector
    GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

    // Delete Product
    // GQ.Planets.Product.ProductFamilies.deleteProductFamilyByText('My Family Test Complete') - 12483 - Product owner cannot delete the Product Family

    // Select Product Family
    GQ.Planets.Product.ProductFamilies.selectProductFamilyByText('APALUTAMIDE')

    // Content 
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()
    
    // Navigate tabs
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()

    // Quality Records
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openEscalations()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openNonconformances()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.open()
    
    // Maximise
    GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

    // Logout
    GQ.logout()

   // Login
    GQ.login('PQM360 Product Owner')
    // Product planet
    GQ.Planets.Product.openLandingPage()
    
    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Select Product Family
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

    // Content 
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()
    
    // Navigate tabs
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()

    // Quality Records
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openEscalations()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openNonconformances()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.open()
    
    // Maximise
    GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

    // Logout
    GQ.logout()

    // Login
    GQ.login('PQM360 Business Administrator')

    // Product planet
    GQ.Planets.Product.openLandingPage()
    

    // Product families
    GQ.Planets.Product.ProductFamilies.openLandingPage()

     // add Column Combination Product
    cy.addColumn(GQ.Planets.Product.ProductFamilies.columnHeader(),['Combination Product'])

    // Creat My Family test
    GQ.Planets.Product.ProductFamilies.createProductFamily_SmallMolecules('My Family Test','1234','Active','Oncology')

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Select Product Family
    GQ.Planets.Product.ProductFamilies.selectProductFamilyByText('My Family Test')

    // Home
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.open()

    // Edit product
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.editProductFamily('My Family Test Complete','11111','Biotherapeutics','Complete','Yoga','Oct 07 2024','Oct 08 2024')

    // Maximize
    GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

    // Select Product
    GQ.Planets.Product.ProductFamilies.selectParentByText('My Family Test Complete')

    // Creat My Family test
    GQ.Planets.Product.ProductFamilies.createNewSiblingProduct('My Product Test','1234','Small Molecule','Grow','Active','Therapy')

    // Click Plus sign
    GQ.Planets.Product.ProductFamilies.clickPlusIcon('My Family Test Complete')

    // Open My Product Test
    GQ.Planets.Product.ProductFamilies.openProduct('My Product Test')

    // Edit product
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.editSiblingProductFamily('My Product Complete','55555','Biotherapeutics','Complete','Yoga','Oct 07 2024','Oct 08 2024')

    // Maximize selector
    GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

    // Delete Product
    GQ.Planets.Product.ProductFamilies.deleteProductFamilyByText('My Family Test Complete')

    // Logout
    GQ.logout()

    // // Login
    GQ.login('PQM360 System Administrator')

    // Product planet
    GQ.Planets.Product.openLandingPage()

    // Product families
    GQ.Planets.Product.ProductFamilies.openLandingPage()

     // add Column Combination Product
    cy.addColumn(GQ.Planets.Product.ProductFamilies.columnHeader(),['Combination Product'])

    // Creat My Family test
    GQ.Planets.Product.ProductFamilies.createProductFamily_SmallMolecules('My Family Test','1234','Active','Oncology')

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Select Product Family
    GQ.Planets.Product.ProductFamilies.selectProductFamilyByText('My Family Test')

    // Home
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.open()

    // Edit product
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.editProductFamily('My Family Test Complete','11111','Biotherapeutics','Complete','Yoga','Oct 07 2024','Oct 08 2024')

    // Maximize
    GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

    // Select Product
    GQ.Planets.Product.ProductFamilies.selectParentByText('My Family Test Complete')

    // Creat My Family test
    GQ.Planets.Product.ProductFamilies.createNewSiblingProduct('My Product Test','1234','Small Molecule','Grow','Active','Therapy')

    // Click Plus sign
    GQ.Planets.Product.ProductFamilies.clickPlusIcon('My Family Test Complete')

    // Open My Product Test
    GQ.Planets.Product.ProductFamilies.openProduct('My Product Test')

    // Edit product
    GQ.Planets.Product.ProductFamilies.ProductFamily.Home.editSiblingProductFamily('My Product Complete','55555','Biotherapeutics','Complete','Yoga','Oct 07 2024','Oct 08 2024')

    // Maximize selector
    GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

    // Delete Product
    GQ.Planets.Product.ProductFamilies.deleteProductFamilyByText('My Family Test Complete')

    // Logout
    GQ.logout()



    })
})

}
