import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
if (!Cypress.env("onlyRunReadOnlyTests")) {
describe('Bug Tracking Tests', () => {
    it('9721-Issues with bookmarking in batch explorer view', () => {
        
        // Login 
        GQ.login()

        // Manufacturing Planet
        GQ.Planets.Manufacturing.openLandingPage()

        // Materials Tab
        GQ.Planets.Manufacturing.Materials.openLandingPage()

        // Tiggle filter
        GQ.Planets.Manufacturing.Materials.toggleFilter()

        // Open record
        GQ.Planets.Manufacturing.Materials.openMaterialByText('662280')

        // Click Hamburger icon
        GQ.Planets.Manufacturing.Materials.Material.Batch.openLandingPage()

        // open Record
        GQ.Planets.Manufacturing.Materials.Material.Batch.openBatchByIndex(0)

        // Batch explorer tab
        GQ.Planets.Manufacturing.Materials.Material.Batch.BatchExplorer.bookMarkRecord()

        // Click maximizde selector
        GQ.Planets.Manufacturing.Materials.Material.Batch.maximizeSelector()

        // Main Batch Tab
        GQ.Planets.Manufacturing.Batches.open()

        // Toogle filter
        GQ.Planets.Manufacturing.Batches.toggleFilter()

        // Open Record
        GQ.Planets.Manufacturing.Batches.openRecordByText('25BN41173')

        // Book Mark
        GQ.Planets.Manufacturing.Batches.bookMarkRecord()

        // Click To maximize
        GQ.Planets.Manufacturing.Batches.maximizeSelector()

        // Batch Flows
        GQ.Planets.Manufacturing.MaterialsAndBatchFlows.openLandingPage()

        // Open Record
        GQ.Planets.Manufacturing.MaterialsAndBatchFlows.selectBatchByText('NKB2B00')

        // Book Mark Record
        GQ.Planets.Manufacturing.MaterialsAndBatchFlows.bookMarkRecord()

        // Maximise selector
        GQ.Planets.Manufacturing.MaterialsAndBatchFlows.maximizeSelector()

        // Toggle filter
        GQ.Planets.Manufacturing.MaterialsAndBatchFlows.toggleFilter()

        // Book Marks
        GQ.NavBar.Bookmarks.openLandingPage()

        // Toggle Filter
        GQ.NavBar.Bookmarks.toggleFilter()

        // Open record
        GQ.NavBar.Bookmarks.selectRecordByText('NKB2B00')

        // Delete Record
        GQ.NavBar.Bookmarks.delete()

        // Toggle Filter
        GQ.NavBar.Bookmarks.toggleFilter()
        
        // Toggle Filter
        GQ.NavBar.Bookmarks.toggleFilter()

       

        // Toggle Filter
        GQ.NavBar.Bookmarks.toggleFilter()
        
        // Toggle Filter
        GQ.NavBar.Bookmarks.toggleFilter()

         // Open record
        GQ.NavBar.Bookmarks.selectRecordByText('25BN41173')

        // Delete Record
        GQ.NavBar.Bookmarks.delete()

        // Logout
        GQ.logout()
        
    })
})
}