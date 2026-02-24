import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('16409-Manufacturing > Batches', () => {
    it('16409-Manufacturing > Batches - Planet', () => {
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
    it('16409-Manufacturing > Batches - Admin Data Binder - Smart  Content', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.open()

        // Open Manufacturing
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.ManufacturingRecords.open()

        // Batches
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.ManufacturingRecords.Batches.open()

        //Open Predefined Filter

          GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.ManufacturingRecords.Batches.openAll()

         GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.ManufacturingRecords.Batches.openFinalApi()

         GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.ManufacturingRecords.Batches.openFinishedGoods()

         GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.ManufacturingRecords.Batches.openNonBatchMgd()




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
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.ManufacturingRecords.Batches.getColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.ManufacturingRecords.Batches.checkMultiChoicePickerColumns(namesList)
        cy.wait(2000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.ManufacturingRecords.Batches.refresh();

        GQ.logout()
    })
    it('16409-Manufacturing > Batches - Admin Data Binder - Linked Content', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.open()

        // Open Manufacturing
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.open()

        // Batches
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.open()


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
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.getColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.checkMultiChoicePickerColumns(namesList)
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.Manufacturing.Batches.refresh()

        GQ.logout()
    })
    it('16409-Manufacturing > Batches - User Data Binder - Smart Content', () => {
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Data Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.open()

        // Open Manufacturing
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.Manufacturing.open()

        // Batches
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.open()

        //Open Predefined Filter
        
         GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.openFinalApi()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.openFinishedGoods()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.openNonBatchMgd()



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
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.getColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.checkMultiChoicePickerColumns(namesList)
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Batches.refresh();

        GQ.logout()
    })
    it('16409-Manufacturing > Batches - User Data Binder - Linked Content', () => {
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Data Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.open()

        // Open Manufacturing
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.ManufacturingRecords.open()

        // Batches
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.ManufacturingRecords.Batches.open()


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
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.ManufacturingRecords.Batches.getColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.ManufacturingRecords.Batches.checkMultiChoicePickerColumns(namesList)
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.ManufacturingRecords.Batches.refresh()
        GQ.logout()
    })
    it('16409-Manufacturing > Batches - Product Specific Binder - Smart Content', () => {
        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconofBinder()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.Manufacturing.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.Manufacturing.Batches.open()        
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.Manufacturing.Batches.openAll()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.Manufacturing.Batches.openFinalApi()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.Manufacturing.Batches.openFinishedGoods()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.Manufacturing.Batches.openNonBatchMgd()




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
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.Manufacturing.Batches.getColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.Manufacturing.Batches.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.Manufacturing.Batches.refresh();
        GQ.logout()
    })
    it('16409-Manufacturing > Batches - Product Specific Binder - Linked Content', () => {
        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconofBinder()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.Manufacturing.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.Manufacturing.Batches.open()


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
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.Manufacturing.Batches.getColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.Manufacturing.Batches.checkMultiChoicePickerColumns(namesList)
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.Manufacturing.Batches.refresh();

        GQ.logout()
    })
})