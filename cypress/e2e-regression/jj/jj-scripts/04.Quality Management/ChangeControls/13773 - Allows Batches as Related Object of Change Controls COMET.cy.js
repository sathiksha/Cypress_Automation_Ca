import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Related Objects of Quality Management Planet sub nouns', () => {
    it('13773 -  Allows Batches as Related Object of Change Controls (COMET) - Planet', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Open CAPA
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        //Toggle Filter
        GQ.Planets.QualityManagement.ChangeControls.toggleFilter()

        GQ.Planets.QualityManagement.ChangeControls.openRecordbyText('008568')

        //Open a Record
        GQ.Planets.QualityManagement.ChangeControls.openFirstRecord()

        GQ.Planets.QualityManagement.ChangeControls.ChangeControlRecord.RelatedObjects.open()

        GQ.Planets.QualityManagement.ChangeControls.ChangeControlRecord.RelatedObjects.openBatches()

        let defaultTableColumns = [
            'Number',
            '👁',
            'Material Item',
            'Material Description',
            'Product Grouping',
            'Vendor Lot Number',
            'Batch ID/Lot Number',
            'Change',
            'Source System',
            'Quantity'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.ChangeControls.ChangeControlRecord.RelatedObjects.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < defaultTableColumns.length; i++) {
                expect(availableCols).to.include(defaultTableColumns[i])
            }
        })

        GQ.Planets.QualityManagement.ChangeControls.ChangeControlRecord.RelatedObjects.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.QualityManagement.ChangeControls.ChangeControlRecord.RelatedObjects.openARecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.QualityManagement.ChangeControls.ChangeControlRecord.RelatedObjects.checkTabs(tabNames)

        // Logout
        GQ.logout()

    })
    it('13773 -  Allows Batches as Related Object of Change Controls (COMET) - Quality Records by User', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('TIZIANA ROSSETTI')

        // GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.open()
        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.open()
        //Toggle Filter
        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.toggleFilter()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.openRecordbyText('007465')

        // Open a Record
        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.openRecordByIndex()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.relatedObjects()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.openBatches()

        let defaultTableColumns = [
            'Number',
            '👁',
            'Material Item',
            'Material Description',
            'Product Grouping',
            'Vendor Lot Number',
            'Batch ID/Lot Number',
            'Change',
            'Source System',
            'Quantity'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.batchesColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < defaultTableColumns.length; i++) {
                expect(availableCols).to.include(defaultTableColumns[i])
            }
        })
        GQ.Planets.QualityManagement.ChangeControls.rightClickBookmark()
        // GQ.Planets.QualityManagement.ChangeControls.checkBookmarkFunationality()



        // GQ.Planets.QualityManagement.ChangeControls.rightClickBookmark.checkBookmarkFunctionlity()


        cy.checkBookmarkFunctionlity()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.openARecord()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.checkTabs(tabNames)

        // Logout
        GQ.logout()

    })
    it('13773 - Allows Batches as Related Object of Change Controls (COMET) - Product', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.openRecordbyText('002937')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.openBatches()

        let defaultTableColumns = [
            'Number',
            '👁',
            'Material Item',
            'Material Description',
            'Product Grouping',
            'Vendor Lot Number',
            'Batch ID/Lot Number',
            'Change',
            'Source System',
            'Quantity'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.batchesColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < defaultTableColumns.length; i++) {
                expect(availableCols).to.include(defaultTableColumns[i])
            }
        })

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.checkTabs(tabNames)

        // Logout
        GQ.logout()

    })
    it('13773 -  Allows Batches as Related Object of Change Controls (COMET) - by User', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Christopher Case')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Changecontrols.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Changecontrols.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Changecontrols.openRecordbyText('027808')

        // //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Change.openFirstRecord()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.openRelatedObjects()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.openBatches()

        // let defaultTableColumns = [
        //     'Number',
        //     '👁',
        //     'Material Item',
        //     'Material Description',
        //     'Product Grouping',
        //     'Vendor Lot Number',
        //     'Batch ID/Lot Number',
        //     'Change',
        //     'Source System',
        //     'Quantity'
        // ]

        // // Read column
        // cy.getColumnsAndTypes(
        //     GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.batchesColumnID()
        // ).then(tableInfo => {
        //     let availableCols = []
        //     tableInfo.columns.map((obj) => {
        //         availableCols.push(obj.textContent)
        //     })
        //     cy.log(availableCols)
        //     for (let i = 0; i < defaultTableColumns.length; i++) {
        //         expect(availableCols).to.include(defaultTableColumns[i])
        //     }
        // })

        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.openBatchRecord()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.handlePopup()

        // let tabNames = [
        //     'Batch Explorer',
        //     'Batch Flow',
        //     'Material Flow',
        //     'Related Objects'
        // ]

        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.checkTabs(tabNames)

        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.minimizeARecord()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.rightClickBookmark()

        // cy.checkBookmarkFunctionlity()

        // // Logout
        // GQ.logout()

    })
    it('13773 -  Allows Batches as Related Object of Change Controls (COMET) - Admin Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('002937')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openBatches()

        let defaultTableColumns = [
            'Number',
            '👁',
            'Material Item',
            'Material Description',
            'Product Grouping',
            'Vendor Lot Number',
            'Batch ID/Lot Number',
            'Change',
            'Source System',
            'Quantity'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.batchesColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < defaultTableColumns.length; i++) {
                expect(availableCols).to.include(defaultTableColumns[i])
            }
        })
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('13773 -  Allows Batches as Related Object of Change Controls (COMET) - Admin Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.linkARecordByNumber('008568')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.openBatches()

        let defaultTableColumns = [
            'Number',
            '👁',
            'Material Item',
            'Material Description',
            'Product Grouping',
            'Vendor Lot Number',
            'Batch ID/Lot Number',
            'Change',
            'Source System',
            'Quantity'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.batchesColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < defaultTableColumns.length; i++) {
                expect(availableCols).to.include(defaultTableColumns[i])
            }
        })
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.rightClickBookmark()

        cy.checkBookmarkFunctionlity()


        // Logout
        GQ.logout()

    })
    it('13773 -  Allows Batches as Related Object of Change Controls (COMET) - User Data Binder Smart Content', () => {

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
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.filtered()
        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.filter()
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordby('002937')

        // //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.RelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openBatches()

        let defaultTableColumns = [
            'Number',
            '👁',
            'Material Item',
            'Material Description',
            'Product Grouping',
            'Vendor Lot Number',
            'Batch ID/Lot Number',
            'Change',
            'Source System',
            'Quantity'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.batchesColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < defaultTableColumns.length; i++) {
                expect(availableCols).to.include(defaultTableColumns[i])
            }
        })
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.minimizeRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('13773 -  Allows Batches as Related Object of Change Controls (COMET) - User Data Binder Linked Content', () => {

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
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.linkARecordByNumber('008568')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.openBatches()

        let defaultTableColumns = [
            'Number',
            '👁',
            'Material Item',
            'Material Description',
            'Product Grouping',
            'Vendor Lot Number',
            'Batch ID/Lot Number',
            'Change',
            'Source System',
            'Quantity'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.batchesColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < defaultTableColumns.length; i++) {
                expect(availableCols).to.include(defaultTableColumns[i])
            }
        })
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.rightClickBookmark()

        cy.checkBookmarkFunctionlity()
        // Logout
        GQ.logout()

    })
    it('13773 -  Allows Batches as Related Object of Change Controls (COMET) - Product Specific Binder Smart Content', () => {
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.toggleFilter()
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')


    //    GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconofBinder()

    //     cy.wait(5000)

    //     // GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')

    //    // GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('0')

    //     cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('002937')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openBatches()

        let defaultTableColumns = [
            'Number',
            '👁',
            'Material Item',
            'Material Description',
            'Product Grouping',
            'Vendor Lot Number',
            'Batch ID/Lot Number',
            'Change',
            'Source System',
            'Quantity'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.batchesColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < defaultTableColumns.length; i++) {
                expect(availableCols).to.include(defaultTableColumns[i])
            }
        })
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('13773 -  Allows Batches as Related Object of Change Controls (COMET) - Product Specific Binder Linked Content', () => {
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.toggleFilter()


        // cy.wait(5000)

        // GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconofBinder()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.openProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')


        cy.wait(5000)

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.linkARecordByNumber('002937')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.openBatches()

        let defaultTableColumns = [
            'Number',
            '👁',
            'Material Item',
            'Material Description',
            'Product Grouping',
            'Vendor Lot Number',
            'Batch ID/Lot Number',
            'Change',
            'Source System',
            'Quantity'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.batchesColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < defaultTableColumns.length; i++) {
                expect(availableCols).to.include(defaultTableColumns[i])
            }
        })
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
})