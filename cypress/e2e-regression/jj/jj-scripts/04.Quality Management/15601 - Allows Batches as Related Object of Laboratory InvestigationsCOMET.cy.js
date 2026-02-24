import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Related Objects of Quality Management Planet sub nouns', () => {
    it('15601 - Allows Batches as Related Object of Laboratory Investigations (COMET) - Planet', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Open CAPA
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        //Laboratory Investigations
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.openLandingPage()

        //Toggle Filter
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.toggleFilter()

        //Open Record
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.openRecordbyText('0000010916')

        //Open a Record
        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.openFirstRecord()

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.openRelatedObjects()

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.openBatches()

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
            GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.batchesColumnID()
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

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.openBatchesRecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.checkBatchesTabs(tabNames)

        GQ.Planets.QualityManagement.NonConformances.LaboratoryInvestigations.handlePopup()

        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Laboratory Investigations (COMET) - Quality Records by User', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Elena SHAYKHULLINA')

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.open()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.open()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.toggleFilter()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.openRecordByText('0000003683')

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.openFirstRecord()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.relatedObject()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.openBatches()

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
            GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.batchesColumnID()
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

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.openBatchesRecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.checkBatchesTabs(tabNames)

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.LaboratoryInvestigations.handlePopup()
        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Laboratory Investigations (COMET) - Product', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.openRecordByText('0000003683')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.relatedObject()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.batchesColumnID()
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.openBatchesRecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.checkBatchesTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Nonconformances.LaboratoryInvestigations.handlePopup()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Laboratory Investigations (COMET) - by User', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Elena SHAYKHULLINA')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.openRecordByText('LIR-0000003683')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.relatedObject()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.batchesColumnID()
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.openBatchesRecord()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.checkBatchesTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.handlePopup()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.minimizeARecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.LaboratoryInvestigations.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Laboratory Investigations (COMET) - Admin Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openRecordByText('0000003683')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.relatedObject()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openBatchesRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.checkBatchesTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Laboratory Investigations (COMET) - Admin Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.LaboratoryInvestigations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.LaboratoryInvestigations.linkARecordByNumber('0000003683')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.LaboratoryInvestigations.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.LaboratoryInvestigations.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.LaboratoryInvestigations.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.LaboratoryInvestigations.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.LaboratoryInvestigations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.LaboratoryInvestigations.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.LaboratoryInvestigations.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.LaboratoryInvestigations.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.LaboratoryInvestigations.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Laboratory Investigations (COMET) - User Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openRecordByText('0000003683')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.relatedObject()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openBatchesRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.checkBatchesTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Laboratory Investigations (COMET) - User Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.open()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.linkARecordByNumber('0000003683')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Laboratory Investigations (COMET) - Product Specific Binder Smart Content', () => {
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderAllClick()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openRecordByText('0000003683')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.relatedObject()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openBatchesRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.checkBatchesTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.LaboratoryInvestigations.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout()

    })
    it('15601 - Allows Batches as Related Object of Laboratory Investigations (COMET) - Product Specific Binder Linked Content', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.linkARecordByNumber('0000003683')

        //Open a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openRelatedObjects()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openBatches()

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
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.batchesColumnID()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.handlePopup()

        let tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Material Flow',
            'Related Objects'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.checkTabs(tabNames)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.LaboratoryInvestigations.rightClickBookmark()

        cy.checkBookmarkFunctionlity()


        // Logout
        GQ.logout()

    })

})