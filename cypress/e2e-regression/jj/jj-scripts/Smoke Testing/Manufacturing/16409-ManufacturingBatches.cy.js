import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('16409-ManufacturingBatches', () => {
        const GQ = new GQTest();
    
        // Login
        GQ.login()

        // Open Manufacturing
        GQ.Planets.Manufacturing.openLandingPage()

        // Batches
        GQ.Planets.Manufacturing.Batches.open()

        //Open Predefined Filter
        GQ.Planets.Manufacturing.Batches.openAll()

        GQ.Planets.Manufacturing.Batches.openFinalApi()

        GQ.Planets.Manufacturing.Batches.openFinishedGoods()

        GQ.Planets.Manufacturing.Batches.openNonBatchMgd()


        let expectedColumns = [
            'Batch Code',
            'Localized Batch Code',
            'Product Code',
            'Process Order',
            'Supply Chain Node',
            'Plant Name',
            'Product Code Description',
            'Product Type',
            'Disposition Status',
            'GTIN Code',
            'Last Goods Receipt',
            'Packaging Date',
            'QA Release Date',
            'Date of Manufacture',
            'Shelf Life Expiry Date',
            'TECO Date',
            'Vendor Batch No',
            'Vendor Acct No',
            'Vendor Name'
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Manufacturing.Batches.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumns.length; i++) {
                expect(availableCols).to.include(expectedColumns[i])
            }
        })


        // Verify Multichoice picker
        const namesList = [
            'Plant Name',
            'Product Type',
            'Disposition Status',
        ]
        GQ.Planets.Manufacturing.Batches.checkMultiChoicePickerColumns(namesList)

        cy.wait(2000)
        
        //Refresh
        GQ.Planets.Manufacturing.Batches.refresh()

        GQ.logout()


    })
    it('16409-Manufacturing > Batches - Product Family', () => {
        // Login
        GQ.login()

        // Open Product
        GQ.Planets.Product.openLandingPage()

        //Open Product Planet
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Apalutamide
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Open Manufacturing
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()

        // Batches
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.open()

        //Open Predefined Filter

         GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.openFinalApi()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.openFinishedGoods()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.openNonBatchMgd()


        let expectedColumns = [
            'Batch Code',
            'Localized Batch Code',
            'Product Code',
            'Process Order',
            'Supply Chain Node',
            'Plant Name',
            'Product Code Description',
            'Product Type',
            'Disposition Status',
            'GTIN Code',
            'Last Goods Receipt',
            'Packaging Date',
            'QA Release Date',
            'Date of Manufacture',
            'Shelf Life Expiry Date',
            'TECO Date',
            'Vendor Batch No',
            'Vendor Acct No',
            'Vendor Name'
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumns.length; i++) {
                expect(availableCols).to.include(expectedColumns[i])
            }
        })


        // Verify Multichoice picker
        const namesList = [
            'Plant Name',
            'Product Type',
            'Disposition Status',
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.checkMultiChoicePickerColumns(namesList)

        cy.wait(2000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Batches.refresh();

        GQ.logout()
    })
   
})