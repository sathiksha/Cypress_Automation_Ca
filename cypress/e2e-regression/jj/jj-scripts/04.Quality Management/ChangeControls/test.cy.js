import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Related Objects of Quality Management Planet sub nouns', () => {
    it('19000 - Allows default view  of Change Controls (COMET) - Planet', () => {

        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // ChangeControls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        // Comet
        GQ.Planets.QualityManagement.ChangeControls.viewComet()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Current State',
            'Future State',
            'Change Type',
            'Lifecycle Stage',
            'Regulatory Signal',
            'Change Category',
            'Stability Indicating',
            'Reason for Change',
            'Owner',
            'Change Risk Level',
            'Overall Change Risk Level',
            'Status',
            'Stage',
            'Workflow Status',
            'Implementation Status',
            'Implementation Check Outcome',
            'Overall Implementation Check Outcome',
            'Legacy Reference Number',
            'Legacy CC Level',
            'Impacted Organizations',
            'Impacted Material Item',
            'Impacted Material Description',
            'Impacted Batch No.',
            'Impacted Products',
            'Impacted Documents',
            'Impacted Equipments',
            'Impacted Site w/ Child CC#',
            'User Comments'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.ChangeControls.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }

        })

        GQ.Planets.QualityManagement.ChangeControls.checkChangeDueDate()

        // Verify Multichoice picker
        const namesList = [
            'Change Type',
            'Lifecycle Stage',
            'Regulatory Signal',
            'Change Category',
            'Stability Indicating',
            'Reason for Change',
            'Change Risk Level',
            'Overall Change Risk Level',
            'Status',
            'Stage',
            'Workflow Status',
            'Implementation Status',
        ]


        GQ.Planets.QualityManagement.ChangeControls.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.QualityManagement.ChangeControls.checkLegacyCcLevel()

        // Related to Me
        GQ.Planets.QualityManagement.ChangeControls.viewRelatedToMe()

        // Related to Me And In Approval
        GQ.Planets.QualityManagement.ChangeControls.viewRelatedToMeAndInApproval()

        // Related to Me And Open
        GQ.Planets.QualityManagement.ChangeControls.viewRelatedToMeAndOpen()

        // View All
        GQ.Planets.QualityManagement.ChangeControls.viewAll()

        // Refresh
        GQ.Planets.QualityManagement.ChangeControls.refresh()

        //Chart Icon
        GQ.Planets.QualityManagement.ChangeControls.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics',
            'Status',
            'Status/Owner'
        ]
        GQ.Planets.QualityManagement.ChangeControls.checktabs(tabNames)

        GQ.Planets.QualityManagement.ChangeControls.Analytics.refresh()

        GQ.Planets.QualityManagement.ChangeControls.Analytics.facetPicker()

        const charts = [
            'Change Category',
            'Change Risk Level',
            'Status'
        ]

        GQ.Planets.QualityManagement.ChangeControls.Analytics.checkDefinedPivotChart(charts)

        GQ.Planets.QualityManagement.ChangeControls.Analytics.removeAllColumnAttributes()

        GQ.Planets.QualityManagement.ChangeControls.Analytics.removeAllRowAttributes()

        GQ.Planets.QualityManagement.ChangeControls.Analytics.addRowAttributeClick()

        const rowValues = [
            'Change Type',
            'Lifecycle Stage',
            'Regulatory Signal',
            'Change Category',
            'Reason for Change',
            'Owner',
            'Change Risk Level',
            'Overall Change Risk Level',
            'Status',
            'Stage',
            'Workflow Status',
            'Implementation Status',
            'Legacy CC Level',
            'J&J Segment',
            'J&J Org Visibility',
            'J&J Business Unit',
            'J&J Site Name',
            'J&J Functional Area',
            'J&J Functional Area 1',
            'J&J Functional Area 2',
            'Reporting Organization',
            'Products',
            'Materials',
            'Documents',
            'Equipment',
            'Regulatory',
            'Buildings & Facilities or Utilities',
            'Manufacturing Process',
            'Equipment Cleaning/Sterilization',
            'Materials or Indirect Materials',
            'Equipment or Computerized Systems',
            'Laboratory Testing & Specification',
            'Storage and Distribution',
            'Stability',
            'Combination Product',
            'Controlled Substance',
            'EHS Process',
            'Artwork'
        ]
        GQ.Planets.QualityManagement.ChangeControls.Analytics.checkRowValues(rowValues)

        GQ.Planets.QualityManagement.ChangeControls.Status.open()

        GQ.Planets.QualityManagement.ChangeControls.Status.checkChartVisibility()

        GQ.Planets.QualityManagement.ChangeControls.StausorOwner.open()

        GQ.Planets.QualityManagement.ChangeControls.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.QualityManagement.ChangeControls.clickChartIcon()

        GQ.Planets.QualityManagement.ChangeControls.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.QualityManagement.ChangeControls.openFirstRecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Change Description').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Ownership').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Impacted').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Product Release Strategy').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Due Dates').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Preliminary Risk Assessment of Potential Impact').click({ force: true })


        const formValues = [
            'Number:',
            'Title:',
            'Change Type:',
            'Lifecycle Stage:',
            'Regulatory Signal:',
            'Change Category:',
            'Reason for Change:',
            'Change Due Date:',
            'Change Risk Level:',
            'Overall Change Risk Level:',
            'Status:',
            'Stage:',
            'Workflow Status:',
            'Implementation Status:',
            'Implementation Check Outcome:',
            'Overall Implementation Check Outcome:',
            'Legacy Reference Number:',
            'Legacy CC Level:',
            'Impacted Organizations:',
            'Impacted Material Item:',
            'Impacted Material Description:',
            'Impacted Batch No.:',
            'Impacted Products:',
            'Impacted Documents:',
            'Impacted Equipments:',
            'Impacted Site w/ Child CC#:',
            'Current State:',
            'Future State:',
            'Justification:',
            'Change Strategy:',
            'Site/Function Details:',
            'J&J Segment:',
            'J&J Org Visibility:',
            'J&J Business Unit:',
            'J&J Site Name:',
            'J&J Functional Area:',
            'J&J Functional Area 1:',
            'J&J Functional Area 2:',
            'Reporting Organization:',
            'Owner:',
            'Products:',
            'Materials:',
            'Documents:',
            'Equipment:',
            'Product Release Strategy Details:',
            'Assessment Stage Start Date:',
            'Change Plan Approval Due Date:',
            'Change Plan Approval Date:',
            'Implementation Date:',
            'Change Closure Date:',
            'Regulatory:',
            'Buildings & Facilities or Utilities:',
            'Manufacturing Process:',
            'Equipment Cleaning/Sterilization:',
            'Materials or Indirect Materials:',
            'Equipment or Computerized Systems:',
            'Laboratory Testing & Specification:',
            'Storage and Distribution:',
            'Stability:',
            // 'Combination  Product:',
            'Controlled Substance:',
            'EHS Process:',
            'Artwork:'

        ]

        GQ.Planets.QualityManagement.ChangeControls.checkformsfields(formValues)

    })
    it('19000 - Allows default view  of Change Controls (COMET) - Admin Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.viewComet()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openAll()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Current State',
            'Future State',
            'Change Type',
            'Lifecycle Stage',
            'Regulatory Signal',
            'Change Category',
            'Stability Indicating',
            'Reason for Change',
            'Owner',
            'Change Risk Level',
            'Overall Change Risk Level',
            'Status',
            'Stage',
            'Workflow Status',
            'Implementation Status',
            'Implementation Check Outcome',
            'Overall Implementation Check Outcome',
            'Legacy Reference Number',
            'Legacy CC Level',
            'Impacted Organizations',
            'Impacted Material Item',
            'Impacted Material Description',
            'Impacted Batch No.',
            'Impacted Products',
            'Impacted Documents',
            'Impacted Equipments',
            'Impacted Site w/ Child CC#',
            'User Comments'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }

        })

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.checkChangeDueDate()

        // Verify Multichoice picker
        const namesList = [
            'Change Type',
            'Lifecycle Stage',
            'Regulatory Signal',
            'Change Category',
            'Stability Indicating',
            'Reason for Change',
            'Change Risk Level',
            'Overall Change Risk Level',
            'Status',
            'Stage',
            'Workflow Status',
            'Implementation Status',
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.checkLegacyCcLevel()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openAll()

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Analytics.facetPicker()

        const charts = [
            'Change Category',
            'Change Risk Level',
            'Status'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Analytics.checkDefinedPivotChart(charts)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Analytics.removeAllColumnAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Analytics.removeAllRowAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Analytics.addRowAttributeClick()

        const rowValues = [
            'Change Type',
            'Lifecycle Stage',
            'Regulatory Signal',
            'Change Category',
            'Reason for Change',
            'Owner',
            'Change Risk Level',
            'Overall Change Risk Level',
            'Status',
            'Stage',
            'Workflow Status',
            'Implementation Status',
            'Legacy CC Level',
            'J&J Segment',
            'J&J Org Visibility',
            'J&J Business Unit',
            'J&J Site Name',
            'J&J Functional Area',
            'J&J Functional Area 1',
            'J&J Functional Area 2',
            'Reporting Organization',
            'Products',
            'Materials',
            'Documents',
            'Equipment',
            'Regulatory',
            'Buildings & Facilities or Utilities',
            'Manufacturing Process',
            'Equipment Cleaning/Sterilization',
            'Materials or Indirect Materials',
            'Equipment or Computerized Systems',
            'Laboratory Testing & Specification',
            'Storage and Distribution',
            'Stability',
            'Combination Product',
            'Controlled Substance',
            'EHS Process',
            'Artwork'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.StausorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.rightclickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.closeSideBar()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openFirstRecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Change Description').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Ownership').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Impacted').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Product Release Strategy').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Due Dates').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Preliminary Risk Assessment of Potential Impact').click({ force: true })


        const formValues = [
            'Number:',
            'Title:',
            'Change Type:',
            'Lifecycle Stage:',
            'Regulatory Signal:',
            'Change Category:',
            'Reason for Change:',
            'Change Due Date:',
            'Change Risk Level:',
            'Overall Change Risk Level:',
            'Status:',
            'Stage:',
            'Workflow Status:',
            'Implementation Status:',
            'Implementation Check Outcome:',
            'Overall Implementation Check Outcome:',
            'Legacy Reference Number:',
            'Legacy CC Level:',
            'Impacted Organizations:',
            'Impacted Material Item:',
            'Impacted Material Description:',
            'Impacted Batch No.:',
            'Impacted Products:',
            'Impacted Documents:',
            'Impacted Equipments:',
            'Impacted Site w/ Child CC#:',
            'Current State:',
            'Future State:',
            'Justification:',
            'Change Strategy:',
            'Site/Function Details:',
            'J&J Segment:',
            'J&J Org Visibility:',
            'J&J Business Unit:',
            'J&J Site Name:',
            'J&J Functional Area:',
            'J&J Functional Area 1:',
            'J&J Functional Area 2:',
            'Reporting Organization:',
            'Owner:',
            'Products:',
            'Materials:',
            'Documents:',
            'Equipment:',
            'Product Release Strategy Details:',
            'Assessment Stage Start Date:',
            'Change Plan Approval Due Date:',
            'Change Plan Approval Date:',
            'Implementation Date:',
            'Change Closure Date:',
            'Regulatory:',
            'Buildings & Facilities or Utilities:',
            'Manufacturing Process:',
            'Equipment Cleaning/Sterilization:',
            'Materials or Indirect Materials:',
            'Equipment or Computerized Systems:',
            'Laboratory Testing & Specification:',
            'Storage and Distribution:',
            'Stability:',
            // 'Combination  Product:',
            'Controlled Substance:',
            'EHS Process:',
            'Artwork:'

        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.checkformsfields(formValues)

        // Logout
        GQ.logout()

    })
    it('19000 - Allows default view  of Change Controls (COMET) - Admin Data Binder Linked Content', () => {

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

        // Comet
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.linkARecordByNumber('0')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.closeSideBar()


        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Current State',
            'Future State',
            'Change Type',
            'Lifecycle Stage',
            'Regulatory Signal',
            'Change Category',
            'Stability Indicating',
            'Reason for Change',
            'Owner',
            'Change Risk Level',
            'Overall Change Risk Level',
            'Status',
            'Stage',
            'Workflow Status',
            'Implementation Status',
            'Implementation Check Outcome',
            'Overall Implementation Check Outcome',
            'Legacy Reference Number',
            'Legacy CC Level',
            'Impacted Organizations',
            'Impacted Material Item',
            'Impacted Material Description',
            'Impacted Batch No.',
            'Impacted Products',
            'Impacted Documents',
            'Impacted Equipments',
            'Impacted Site w/ Child CC#',
            'User Comments'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }

        })

        //    GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.checkChangeDueDate()

        //     // Verify Multichoice picker
        //     const namesList = [
        //         'Change Type',
        //         'Lifecycle Stage',
        //         'Regulatory Signal',
        //         'Change Category',
        //         'Stability Indicating',
        //         'Reason for Change',
        //         'Change Risk Level',
        //         'Overall Change Risk Level',
        //         'Status',
        //         'Stage',
        //         'Workflow Status',
        //         'Implementation Status',
        //     ]


        //    GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Analytics.facetPicker()

        const charts = [
            'Change Category',
            'Change Risk Level',
            'Status'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Analytics.checkDefinedPivotChart(charts)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Analytics.removeAllColumnAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Analytics.removeAllRowAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Analytics.addRowAttributeClick()

        const rowValues = [
            'Change Type',
            'Lifecycle Stage',
            'Regulatory Signal',
            'Change Category',
            'Reason for Change',
            'Owner',
            'Change Risk Level',
            'Overall Change Risk Level',
            'Status',
            'Stage',
            'Workflow Status',
            'Implementation Status',
            'Legacy CC Level',
            'J&J Segment',
            'J&J Org Visibility',
            'J&J Business Unit',
            'J&J Site Name',
            'J&J Functional Area',
            'J&J Functional Area 1',
            'J&J Functional Area 2',
            'Reporting Organization',
            'Products',
            'Materials',
            'Documents',
            'Equipment',
            'Regulatory',
            'Buildings & Facilities or Utilities',
            'Manufacturing Process',
            'Equipment Cleaning/Sterilization',
            'Materials or Indirect Materials',
            'Equipment or Computerized Systems',
            'Laboratory Testing & Specification',
            'Storage and Distribution',
            'Stability',
            'Combination Product',
            'Controlled Substance',
            'EHS Process',
            'Artwork'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.StausorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.rightclickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.closeSideBar()


        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.openFirstRecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Change Description').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Ownership').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Impacted').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Product Release Strategy').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Due Dates').click({ force: true })

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Preliminary Risk Assessment of Potential Impact').click({ force: true })


        const formValues = [
            'Number:',
            'Title:',
            'Change Type:',
            'Lifecycle Stage:',
            'Regulatory Signal:',
            'Change Category:',
            'Reason for Change:',
            'Change Due Date:',
            'Change Risk Level:',
            'Overall Change Risk Level:',
            'Status:',
            'Stage:',
            'Workflow Status:',
            'Implementation Status:',
            'Implementation Check Outcome:',
            'Overall Implementation Check Outcome:',
            'Legacy Reference Number:',
            'Legacy CC Level:',
            'Impacted Organizations:',
            'Impacted Material Item:',
            'Impacted Material Description:',
            'Impacted Batch No.:',
            'Impacted Products:',
            'Impacted Documents:',
            'Impacted Equipments:',
            'Impacted Site w/ Child CC#:',
            'Current State:',
            'Future State:',
            'Justification:',
            'Change Strategy:',
            'Site/Function Details:',
            'J&J Segment:',
            'J&J Org Visibility:',
            'J&J Business Unit:',
            'J&J Site Name:',
            'J&J Functional Area:',
            'J&J Functional Area 1:',
            'J&J Functional Area 2:',
            'Reporting Organization:',
            'Owner:',
            'Products:',
            'Materials:',
            'Documents:',
            'Equipment:',
            'Product Release Strategy Details:',
            'Assessment Stage Start Date:',
            'Change Plan Approval Due Date:',
            'Change Plan Approval Date:',
            'Implementation Date:',
            'Change Closure Date:',
            'Regulatory:',
            'Buildings & Facilities or Utilities:',
            'Manufacturing Process:',
            'Equipment Cleaning/Sterilization:',
            'Materials or Indirect Materials:',
            'Equipment or Computerized Systems:',
            'Laboratory Testing & Specification:',
            'Storage and Distribution:',
            'Stability:',
            // 'Combination  Product:',
            'Controlled Substance:',
            'EHS Process:',
            'Artwork:'

        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.checkformsfields(formValues)

        // Logout
        GQ.logout()

    })
})