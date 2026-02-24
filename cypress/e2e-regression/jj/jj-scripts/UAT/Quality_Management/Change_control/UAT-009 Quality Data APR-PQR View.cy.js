import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('UAT/5.0', () => {
    it('UAT-009 Quality Data APR-PQR View', () => {

    // Login
    GQ.login('PQM360 General User')

    // Product planet
    GQ.Planets.Product.openLandingPage()

    // Click on filter icon
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Select apalutamide
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText("APALUTAMIDE")

    // Content
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

    // Qulality Records
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

    // Change Control
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.open()

    // Trakwise
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.viewTrackwise()

    // Alias Rule
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.AliasRule.open()

    // Remove inclusion Row
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.AliasRule.ClearInclusionTerm()

    // Type inclusion
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.AliasRule.typeInclusionTermByText('APALUTAMIDE,ERLEADA,56021927')

    // Remove exclusion
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.AliasRule.clearExclusionTerm()

    // Save
    cy.clickIfExists(
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.AliasRule.save()
    )

    // Filtered
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.open()

    // Toggle filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.toggleFilter()

    // Search 99
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.searchRecord('99')

    // Download
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.download()

    // All
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.open()

    // Toggle filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.toggleFilter()

    // Search
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.searchRecord('187162')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.openRecordByText('187162')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.open()

    // Change Control
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.openChangeControl()

    // Assessment
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.openAssessments()

    // CAPA
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.openCAPA()

    // Nonconformances
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.openNonConformances()

    // Click to maximiize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.maximizeSelector()

    // Search
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.searchRecord('1724264')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.openRecordByText('1724264')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.open()

    // Escalation
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.openEscalations()

    // Click to maximiize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.maximizeSelector()

    // Search
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.searchRecord('2008819')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.openRecordByText('2008819')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.open()

    // Accounts
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.openAccounts()

    // Click to maximiize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.maximizeSelector()

    // Search
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.searchRecord('1856645')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.openRecordByText('1856645')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.open()

    // Test Methods
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.openTestMethods()

    // Click to maximiize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.maximizeSelector()

    // Search
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.searchRecord('2303030')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.openRecordByText('2303030')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.open()

    // Specification
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.AllRecord.RelatedObjects.openSpecifications()

    // Click to maximiize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.maximizeSelector()

    // Toggle filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.All.toggleFilter()

    // Filtered
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.open()

    // Search
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.searchRecord('2274877')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.openRecordByText('2274877')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.FilteredRecord.RelatedObjects.open()

    // Batches
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.FilteredRecord.RelatedObjects.openBatches()

    // Click To Maximize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.maximizeSelector()

    // Toggle filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.toggleFilter()

    // Main Nonconfromances Tab
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.open()

    // Filtered
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.open()

    // Trackwise
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.viewTrackwise()

    // APR/PQR view
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.clickAPRPQRView()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.APRPQRView.toggleFilter()

    // Search Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.APRPQRView.searchRecord('99')

    // Download
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.APRPQRView.download()

    // open Record - Record Not available
    // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.selectRecordByText('2188029')
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.APRPQRView.searchRecord('2179299')

    // Open 
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.APRPQRView.openRecordByText('2179299')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.APRPQRView.APRPQRRecord.RelatedObjects.open()

    // Non conformances
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.APRPQRView.APRPQRRecord.RelatedObjects.openNonConformances()

    // Batches
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.APRPQRView.APRPQRRecord.RelatedObjects.openBatches()

    // Maximize selector
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.Filtered.maximizeSelector()

    // All
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.open()

    // Toggle filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.toggleFilter()

    // Search record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.searchRecord('601740')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.openRecordByText('601740')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.AllRecord.RelatedObjects.open()

    // Click to maximize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.maximizeSelector()

    // Search record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.searchRecord('1495202')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.openRecordByText('1495202')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.AllRecord.RelatedObjects.open()

    // // CAPA => Report to KS
    // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.AllRecord.RelatedObjects.openCAPA()

    // Click to maximize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.maximizeSelector()

    // Search record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.searchRecord('2052732')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.openRecordByText('2052732')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.AllRecord.RelatedObjects.open()

    // Accounts
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.AllRecord.RelatedObjects.openAccounts()

    // Click to maximize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.maximizeSelector()

    // Search record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.searchRecord('2139594')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.openRecordByText('2139594')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.AllRecord.RelatedObjects.open()

    // Escalation
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.AllRecord.RelatedObjects.openEscalations()

    // Click to maximize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.All.maximizeSelector()

    // Alias Rule
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.AliasRule.open()

    // Remove Inclusion Term
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.AliasRule.ClearInclusionTerm()

    // Type Inclusion Term
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.AliasRule.typeInclusionTermByText('APALUTAMIDE,ERLEADA,56021927')

    // Remove Exclusion Term
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.AliasRule.clearExclusionTerm()

    // Save
    cy.clickIfExists(
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.QualityEvents.AliasRule.save()
    )

    

    // CAPA Main tab
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()

    // Filtered
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.open()

    // Trackwise
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.viewTrackwise()

    // Aprpqr view
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.clickAPRPQRView()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.toggleFilter()
    
    // Search Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.searchRecord('99')

    // Download
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.download() 
      
    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.searchRecord('1968700')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.openRecordByText('1968700')

    // Related Object
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.APRPQRRecord.RelatedObjects.open()

    // Batches
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.APRPQRRecord.RelatedObjects.openBatches()

    // All
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.open()

    // Toggle filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.toggleFilter()

    // Search record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.searchRecord('280919')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.openRecordByText('280919')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.AllRecord.RelatedObjects.open()

    // Change Controls
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.AllRecord.RelatedObjects.openChangeControl()

    // NonConformances
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.AllRecord.RelatedObjects.openNonConformances()

    // CAPA
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.AllRecord.RelatedObjects.openCAPA()

    // Click to maximize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.maximizeSelector() 

    // Search record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.searchRecord('1588460')

    // Open Record
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.openRecordByText('1588460')

    // Related Objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.AllRecord.RelatedObjects.open()

    // Change Controls
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.AllRecord.RelatedObjects.openAudits()

    // Alias rule
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.AliasRule.open()

    // Remove Inclusion Term
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.AliasRule.ClearInclusionTerm()

    // Type Inclusion Term
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.AliasRule.typeInclusionTermByText('APALUTAMIDE,ERLEADA,56021927')

    // Remove Exclusion Term
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.AliasRule.clearExclusionTerm()

    // Save
    cy.clickIfExists(
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.AliasRule.save()
    )
  
    // Logout
    GQ.logout()



    })
})

}
