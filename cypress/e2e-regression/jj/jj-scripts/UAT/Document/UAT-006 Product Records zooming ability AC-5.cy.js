import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('UAT/5.0', () => {
    it('UAT-006 Product Records zooming ability AC-5', () => {

        // Login
        GQ.login()

        // Documents
        GQ.Planets.Documents.openLandingPage()

        // Open Columns
        GQ.Planets.Documents.Documents.openColumns()

        // Add Material Code Column
        GQ.Planets.Documents.Documents.addColumnToVisible('Material Code')

        // Apply and close
        GQ.Planets.Documents.Documents.applyAndCloseColumns()

        // Toggle Filter
        GQ.Planets.Documents.Documents.toggleFilter()

        // Filter in Material Code
        GQ.Planets.Documents.Documents.filterMaterialCode('482165')    
        
        // Open record
        GQ.Planets.Documents.Documents.openRecordByIndex(2)

        // Related object tabs
        GQ.Planets.Documents.Documents.Document.RelatedObjects.open()

        // //Product record tab
        // GQ.Planets.Documents.Documents.Document.RelatedObjects.ProductRecords.open()

        // //Open record
        // GQ.Planets.Records.TruVAULTRecords.TruVAULTRecords.Record.RelatedObjects.ProductRecords.openRecord('TV-VAL-119495')        

        // //Maximise selector
        // GQ.Planets.Records.TruVAULTRecords.TruVAULTRecords.Record.RelatedObjects.ProductRecords.clickMaximizeSelector()

        //Materials
        GQ.Planets.Documents.Documents.Document.RelatedObjects.Materials.open()

        // Toggle Filter
        GQ.Planets.Documents.Documents.Document.RelatedObjects.Materials.toggleFilter()

        //Open Code
        GQ.Planets.Documents.Documents.Document.RelatedObjects.Materials.openRecordByText('482165')

        //Click Maximize selector
        GQ.Planets.Documents.Documents.Document.RelatedObjects.Materials.maximizeSelector()

        //Details tab
        GQ.Planets.Documents.Documents.Document.Details.open()

        //Logout
        GQ.logout()

    })
})

}
