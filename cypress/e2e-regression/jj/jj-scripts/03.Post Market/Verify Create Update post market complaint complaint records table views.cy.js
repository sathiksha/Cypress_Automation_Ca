import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Bug Tracking Test', () => {
    it('8680- Verify Create Update post market complaint,complaint records table views', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Post Market
        GQ.Planets.PostMarket.openLandingPage()

        // Complaints tab
        GQ.Planets.PostMarket.Complaints.openLandingPage()

        // Compliants tab
        GQ.Planets.PostMarket.Complaints.Complaints.openLandingPage()

        let expectedColumns = [
            'Tracking Number',
            '👁',
            'Product Name',
            'Product Family Name',
            'Lot Number',
            'Company',
            'Region',
            'Issue Status',
            'JnJ Awareness Date',
            'Issue Entered GCC',
            'Issue Entered PQMS',
            'Issue Closed Date'
        ]
        // Read column names
        cy.getColumnsAndTypes(
            GQ.Planets.PostMarket.Complaints.Complaints.getColumnNames()
        ).then(tableInfo=>{
            let availableCols = []
            tableInfo.columns.map((obj)=>{
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
           for(let i=0;i<expectedColumns.length;i++){
            expect(availableCols).to.include(expectedColumns[i])
           }
        })
        
        // Navigate to Compalints Records Link
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.openLandingPage()

        // Expected Columns
        let columns = [
            'Tracking Number',
            '👁',
            'Product Family Name',
            'Product Name',
            'Lot Number',
            'CMPL Investigation Title',
            'Seriousness',
            'Aware Date',
            'Issue Status',
            'Category Level 1 Description',
            'Category Level 2 Description',
            'Category Level 3 Description',
            'Product Manufacturing',
            'Product Manufacturing Group',
            'Root Cause Level 1 Description',
            'Root Cause Level 2 Description'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.PostMarket.Complaints.ComplaintRecords.getColumnNames()
        ).then(tableInfo=>{
            let availableCols = []
            tableInfo.columns.map((obj)=>{
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
           for(let i=0;i<columns.length;i++){
            expect(availableCols).to.include(columns[i])
           }
        })




    })
})
}