import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Related Objects of Quality Management Planet sub nouns', () => {
    it('15601 - Allows Batches as Related Object of CAPA (COMET) - Planet', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Open CAPA
        GQ.Planets.QualityManagement.CAPAs.openLandingPage()

        //Toggle Filter
        GQ.Planets.QualityManagement.CAPAs.toggleFilter()

        GQ.Planets.QualityManagement.CAPAs.openRecordbyText('002912')

        //Open a Record
        GQ.Planets.QualityManagement.CAPAs.openFirstRecord()

        GQ.Planets.QualityManagement.CAPAs.CAPARecord.RelatedObjects.open()

        GQ.Planets.QualityManagement.CAPAs.openBatches()

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
            GQ.Planets.QualityManagement.CAPAs.batchesColumnID()
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

        GQ.Planets.QualityManagement.CAPAs.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.QualityManagement.CAPAs.openBatchesRecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.QualityManagement.CAPAs.checkBatchesTabs(tabNames)


        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of CAPA (COMET) - Quality Records by User', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Francesca Velluti')

        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.open()

        //Toggle Filter
        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.toggleFilter()

        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.openRecordbyText('000178')

        //Open a Record
        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.openFirstRecord()

        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.openRelatedObjects()

        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.openBatches()

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
            GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.batchesColumnID()
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


        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.openBatchesRecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.checkBatchesTabs(tabNames)

        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.minimizeARecord()

        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of CAPA (COMET) - Product', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openRecordbyText('002912')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.relatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.batchesColumnID()
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


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openBatchesRecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.checkBatchesTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.minimizeBatchesRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of CAPA (COMET) - by User', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Francesca Velluti')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.open()

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.openRecordbyText('000178')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.batchesColumnID()
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


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.openBatchesRecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.checkBatchesTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.minimizeBatchesRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of CAPA (COMET) - Admin Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.toggleFilter()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.openRecordbyText('002912')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of CAPA (COMET) - Admin Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.linkARecordByNumber('002912')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of CAPA (COMET) - User Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.openRecordbyText('002912')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of CAPA (COMET) - User Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.linkARecordByNumber('002912')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.rightClickBookmark()

        cy.checkBookmarkFunctionlity()


        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of CAPA (COMET) - Product Specific Binder Smart Content', () => {
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.toggleFilter()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')


        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.toggleFilter()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.openRecordbyText('002912')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of CAPA (COMET) - Product Specific Binder Linked Content', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.linkARecordByNumber('002912')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
})