import { GQTest } from "../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('UAT/5.0', () => {
    it('UAT-004 Complaint Data APR-PQR view', () => {

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
    
    // Manufacturing records
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.openLandingPage()

    // Complaint Records
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.openLandingPage()

    // Alias Rule
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Aliasrule.open()

    // match all
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Aliasrule.checkMatchAll()

    // Save
    cy.clickIfExists(
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Aliasrule.saveIcon()
    )
    
    // Filtered tab
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.openLandingPage()

    // Apr/Pqr view
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.open()

    // All from Dropdown
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.clickToHideSelector()

    // Download
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.download()

    cy.deleteDownloadsFolder()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.toggleFilter()

    // Filter 90000296928
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.selectRecordByText('90000296928')

    // Related objects
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.ComplaintRecord.RelatedObjects.open()

    //  Materilas and Batch flow
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.ComplaintRecord.RelatedObjects.MaterialsAndBatchFlows.open()
    
    // maximise selector
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.ComplaintRecord.clickMaximizeSelector()

    // Select 90000299080
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.selectRecordByText('90000299080')

    // Related object
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.ComplaintRecord.RelatedObjects.open()

    // Nonconformances
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.ComplaintRecord.RelatedObjects.NonConformances.open()
    
    // View Trakwise
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.ComplaintRecord.RelatedObjects.NonConformances.viewTrakswise()

    // Click to Maximize
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.clickMaximizeSelector()

    // All
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.All.open()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.All.toggleFilter()

    // Select product
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.All.searchRecordInProductColumnBytext('SPRAVATO')

    // Search Tracking Numbr
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.All.searchRecordInTrackingNoColumnBytext('90000299431')
    
    // Related Object
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.All.RelatedObject.open()

    // CAPA
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.All.RelatedObject.CAPA.open()

    // Trakwise
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.All.RelatedObject.CAPA.viewTrackwise()

    // Post Market Planet
    GQ.NavBar.navigateToPostMarket()

    // Compliants planet
    GQ.Planets.PostMarket.Complaints.openLandingPage()

    // Complaints tab
    GQ.Planets.PostMarket.Complaints.Complaints.openLandingPage()

    // Toggle filter
    GQ.Planets.PostMarket.Complaints.Complaints.toggleFilter()

    // Open 90000340836
    GQ.Planets.PostMarket.Complaints.Complaints.openRecordByText('90000340836')

    // Related objects
    GQ.Planets.PostMarket.Complaints.Complaints.Complaint.RelatedObjects.open()

    // Maximize Selector
    GQ.Planets.PostMarket.Complaints.Complaints.Complaint.maximizeSelector()

    // Open 90000343400 
    GQ.Planets.PostMarket.Complaints.Complaints.openRecordByText('90000343400')

    // Related objects
    GQ.Planets.PostMarket.Complaints.Complaints.Complaint.RelatedObjects.open()

    // Non Coformances
    GQ.Planets.PostMarket.Complaints.Complaints.Complaint.RelatedObjects.NonConformances.open()

    // View Trackwise
    GQ.Planets.PostMarket.Complaints.Complaints.Complaint.RelatedObjects.NonConformances.viewTrakwise()

    // CAPA
    GQ.Planets.PostMarket.Complaints.Complaints.Complaint.RelatedObjects.CAPA.open()

    // View Trackwise
    GQ.Planets.PostMarket.Complaints.Complaints.Complaint.RelatedObjects.CAPA.viewTrakwise()

    // Click To Maximize
    GQ.Planets.PostMarket.Complaints.Complaints.Complaint.maximizeSelector()

    // Complaints Records tab
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.openLandingPage()

    // Toggle Filter
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.toggleFilter()

    // Open Record product Record
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.openRecordByProductName('SPRAVATO')

    // Open Record
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.openRecordByText('90000301680')

    // Complaint Record
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.openLandingPage()

    // Click to maximize
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.maximiseSelector()

    // Clear column
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.clearProductColumn()

    // Open Record
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.openRecordByText('90000293116')

    // Releated Objects
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.openLandingPage()

    // Manufaturing Records
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.openMaterialAndBatchFlow()

    // Click to maximize
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.maximiseSelector()

    // Open Record product Record
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.openRecordByProductName('SPRAVATO')

    // Open Record
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.openRecordByText('90000301680')

    // Releated Objects
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.openLandingPage()

    // Nonconformances
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.NonConformances.open()

    // View Trackwise
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.NonConformances.viewTrackwise()

    // View Comet
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.NonConformances.viewComet()

    // CAPA
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.CAPA.open()

    // View Trackwise
    GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.CAPA.viewTrackwise()


    // Logout
    GQ.logout()

    })
})

}
