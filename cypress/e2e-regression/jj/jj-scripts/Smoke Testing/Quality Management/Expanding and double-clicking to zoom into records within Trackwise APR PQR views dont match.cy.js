import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Expanding and double-clicking to zoom into records within Trackwise APR PQR views dont match', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

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
            
            //Opening Trackwise
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.selectTrackwise()

            // Filtered
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.open()


            // APPR/PQR view
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.APQRView.open()
            
            


            // Expand Record
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.APQRView.openARecord()

            // Related objects
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.APQRView.FilteredRecord.RelatedObjects.open()

            // Click Batches
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.APQRView.FilteredRecord.RelatedObjects.openBatches()

            // GetRows and Column
            cy.getColumnsAndTypes(
                GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.APQRView.FilteredRecord.RelatedObjects.batchID()
            )
                .then(tableInfo => {
                    let availableCols = []
                    let expectedColumns = ['Batch Code','Localized Batch Code','Product Code','Supply Chain Node','Plant Name', 'Product Code Description','Product Type','Disposition Status','GTIN Code','Last Goods Receipt','Packaging Date','QA Release Date','Date of Manufacture','Shelf Life Expiry Date','TECO Date','Vendor Batch No','Vendor Acct No','Vendor Name']
                    tableInfo.columns.map((obj) => {
                        availableCols.push(obj.textContent)
                    })
                    cy.log(availableCols)
                    for (let i = 0; i < expectedColumns.length; i++) {
                        expect(availableCols).to.include(expectedColumns[i])
                    }
                })

            // Logout
            GQ.logout()


    })
})
