import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Related Objects of Quality Management Planet sub nouns', () => {
    it('15601 - Allows Batches as Related Object of Nonconformances (COMET) - Planet', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Open CAPA
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        //Toggle Filter
        GQ.Planets.QualityManagement.NonConformances.toggleFilter()

        GQ.Planets.QualityManagement.NonConformances.openRecordbyText('008018')

        //Open a Record
        GQ.Planets.QualityManagement.NonConformances.openFirstRecord()

        GQ.Planets.QualityManagement.NonConformances.openRelatedObjects()

        GQ.Planets.QualityManagement.NonConformances.openBatches()

        let defaultTableColumns = [
            'Batch ID/Lot Number',
            'Source System',
            'Material/Item No',
            'Material  Description',
            'Quantity',
            'Quantity Unit of Measure',
            'Disposition Type',
            'Material Continuation Decision',
            'Release from Investigation',
            'Decision Date',
            'Disposition Details',
            'Disposition Justification'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.NonConformances.batchesColumnID()
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

        GQ.Planets.QualityManagement.NonConformances.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.QualityManagement.NonConformances.openBatchesRecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.QualityManagement.NonConformances.checkBatchesTabs(tabNames)

        GQ.Planets.QualityManagement.NonConformances.handlePopup()

        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Nonconformances (COMET) - Quality Records by User', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Ana Lopez')

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.open()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.toggleFilter()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.openRecordByText('021929')

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.openFirstRecord()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.relatedObject()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.openBatches()

        let defaultTableColumns = [
            'Batch ID/Lot Number',
            'Source System',
            'Material/Item No',
            'Material  Description',
            'Quantity',
            'Quantity Unit of Measure',
            'Disposition Type',
            'Material Continuation Decision',
            'Release from Investigation',
            'Decision Date',
            'Disposition Details',
            'Disposition Justification'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.batchesColumnID()
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

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.openBatchesRecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.checkBatchesTabs(tabNames)

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.handlePopup()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Nonconformances (COMET) - Product', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.openRecordbyText('008018')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.openBatches()

        let defaultTableColumns = [
            'Batch ID/Lot Number',
            'Source System',
            'Material/Item No',
            'Material  Description',
            'Quantity',
            'Quantity Unit of Measure',
            'Disposition Type',
            'Material Continuation Decision',
            'Release from Investigation',
            'Decision Date',
            'Disposition Details',
            'Disposition Justification'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.batchesColumnID()
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.openARecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.handlePopup()


        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Nonconformances (COMET) - by User', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Elena Shaykhullina')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.openRecordbyText('004675')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.openBatches()

        let defaultTableColumns = [
            'Batch ID/Lot Number',
            'Source System',
            'Material/Item No',
            'Material  Description',
            'Quantity',
            'Quantity Unit of Measure',
            'Disposition Type',
            'Material Continuation Decision',
            'Release from Investigation',
            'Decision Date',
            'Disposition Details',
            'Disposition Justification'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.batchesColumnID()
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.openBatchesRecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.checkBatchesTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.handlePopup()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.minimizeBatchesRecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Nonconformances (COMET) - Admin Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.openRecordbyText('007465')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.openBatches()

        let defaultTableColumns = [
            'Batch ID/Lot Number',
            'Source System',
            'Material/Item No',
            'Material  Description',
            'Quantity',
            'Quantity Unit of Measure',
            'Disposition Type',
            'Material Continuation Decision',
            'Release from Investigation',
            'Decision Date',
            'Disposition Details',
            'Disposition Justification'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Nonconformances (COMET) - Admin Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.linkARecordByNumber('007465')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.openBatches()

        let defaultTableColumns = [
            'Batch ID/Lot Number',
            'Source System',
            'Material/Item No',
            'Material  Description',
            'Quantity',
            'Quantity Unit of Measure',
            'Disposition Type',
            'Material Continuation Decision',
            'Release from Investigation',
            'Decision Date',
            'Disposition Details',
            'Disposition Justification'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Nonconformances (COMET) - User Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.open()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.openRecordbyText('007465')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.openBatches()

        let defaultTableColumns = [
            'Batch ID/Lot Number',
            'Source System',
            'Material/Item No',
            'Material  Description',
            'Quantity',
            'Quantity Unit of Measure',
            'Disposition Type',
            'Material Continuation Decision',
            'Release from Investigation',
            'Decision Date',
            'Disposition Details',
            'Disposition Justification'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Nonconformances (COMET) - User Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.open()

        
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.linkARecordByNumber('007465')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.openBatches()

        let defaultTableColumns = [
            'Batch ID/Lot Number',
            'Source System',
            'Material/Item No',
            'Material  Description',
            'Quantity',
            'Quantity Unit of Measure',
            'Disposition Type',
            'Material Continuation Decision',
            'Release from Investigation',
            'Decision Date',
            'Disposition Details',
            'Disposition Justification'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Nonconformances (COMET) - Product Specific Binder Smart Content', () => {
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')


        cy.wait(5000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderAllClick()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.openAll()

         GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.openRecordbyText('007465')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.openBatches()

        let defaultTableColumns = [
            'Batch ID/Lot Number',
            'Source System',
            'Material/Item No',
            'Material  Description',
            'Quantity',
            'Quantity Unit of Measure',
            'Disposition Type',
            'Material Continuation Decision',
            'Release from Investigation',
            'Decision Date',
            'Disposition Details',
            'Disposition Justification'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Nonconformances (COMET) - Product Specific Binder Linked Content', () => {
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


        cy.wait(5000)

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Nonconformances.open()

        
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.linkARecordByNumber('007465')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.openBatches()

        let defaultTableColumns = [
            'Batch ID/Lot Number',
            'Source System',
            'Material/Item No',
            'Material  Description',
            'Quantity',
            'Quantity Unit of Measure',
            'Disposition Type',
            'Material Continuation Decision',
            'Release from Investigation',
            'Decision Date',
            'Disposition Details',
            'Disposition Justification'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.rightClickBookmark()

        cy.checkBookmarkFunctionlity()


        // Logout
        GQ.logout()

    })
})

