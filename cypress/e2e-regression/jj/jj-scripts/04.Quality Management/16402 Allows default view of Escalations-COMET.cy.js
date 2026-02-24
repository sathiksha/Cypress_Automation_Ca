import { GQTest } from '../../jj-pages/GQTest'
describe('04. Quality Management', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('16402 Allows default view of Escalations-COMET - Planet', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Escalations
        GQ.Planets.QualityManagement.Escalations.openLandingPage()

        // Comet
        GQ.Planets.QualityManagement.Escalations.viewComet()

        // Refresh
        GQ.Planets.QualityManagement.Escalations.Comet.refresh()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage',
            'Rationale Description Of Issue Change',
            'Additional Information',
            'Proposed Action/Plan',
            'Additional Sites Affected',
            'Related Product Info',
            'Related Batches',
            'User Comments'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.Escalations.Comet.getColumnID()
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

        // Verify Multichoice picker
        const namesList = ['Current Level',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage'
        ]


        GQ.Planets.QualityManagement.Escalations.Comet.checkMultiChoicePickerColumns(namesList)


        // Related to Me
        GQ.Planets.QualityManagement.Escalations.Comet.viewRelatedToMe()

        // Related to Me And In Approval
        GQ.Planets.QualityManagement.Escalations.Comet.viewRelatedToMeAndInApproval()

        // Related to Me And Open
        GQ.Planets.QualityManagement.Escalations.Comet.viewRelatedToMeAndOpen()

        // View All
        GQ.Planets.QualityManagement.Escalations.Comet.viewAll()

        // Refresh
        GQ.Planets.QualityManagement.Escalations.Comet.refresh()

        //Chart Icon
        GQ.Planets.QualityManagement.Escalations.Comet.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics',
            'Status',
            'Status/Owner'
        ]
        GQ.Planets.QualityManagement.Escalations.Comet.checktabs(tabNames)

        GQ.Planets.QualityManagement.Escalations.Comet.Analytics.refresh()

        GQ.Planets.QualityManagement.Escalations.Comet.Analytics.facetPicker()

        GQ.Planets.QualityManagement.Escalations.Comet.Analytics.removeAllColumnAttributes()

        GQ.Planets.QualityManagement.Escalations.Comet.Analytics.removeAllRowAttributes()

        GQ.Planets.QualityManagement.Escalations.Comet.Analytics.addRowAttributeClick()

        const rowValues = [
            // 'Therapeutic Areas',
            'Source',
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage',
            'Created By',
            'J&J Employee/Contractor Contact',
            'Control Substances Related',
            'Related to Clinical Trial',
            'Site Type',
            'Account',
            'Site Category',
            'Impacted Countries',
            'GxP Scope'
        ]
        GQ.Planets.QualityManagement.Escalations.Comet.Analytics.checkRowValues(rowValues)

        GQ.Planets.QualityManagement.Escalations.Comet.Status.open()

        GQ.Planets.QualityManagement.Escalations.Comet.Status.checkChartVisibility()

        GQ.Planets.QualityManagement.Escalations.Comet.StausorOwner.open()

        GQ.Planets.QualityManagement.Escalations.Comet.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.QualityManagement.Escalations.Comet.clickChartIcon()

        GQ.Planets.QualityManagement.Escalations.Comet.rightClickBookmark()

        GQ.Planets.QualityManagement.Escalations.Comet.checkBookmarkFunationality()

        GQ.Planets.QualityManagement.Escalations.Comet.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Source of Issue').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Proposed Action/Plan').click()

        const formValues = [
            'Date Occurred:',
            'Date Identified:',
            'Quality Awareness Date:',
            'Escalation Lead Awareness Date:',
            'Escalation Created Date:',
            'Owner:',
            'Created By:',
            'Quality Head:',
            'J&J Employee/Contractor Contact:',
            'Other Key Contacts:',
            'Source:',
            'Source Details:',
            'Therapeutic Areas:',
            'Control Substances Related:',
            'Related to Clinical Trial:',
            'Customer Patient Impact:',
            'Site Type:',
            'Account:',
            'Site Category:',
            'Impacted Countries:',
            'GxP Scope:',
            'Proposed Action/Plan:'
        ]

        GQ.Planets.QualityManagement.Escalations.Comet.checkformsfields(formValues)
    })
    it('Allows default view of Escalations-COMET - Product', () => {
        const GQ = new GQTest();
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage',
            'Rationale Description Of Issue Change',
            'Additional Information',
            'Proposed Action/Plan',
            'Additional Sites Affected',
            'Related Product Info',
            'Related Batches',
            'User Comments'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.getColumnID()
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

        // Verify Multichoice picker
        const namesList = ['Current Level',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.Analytics.removeAllColumnAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.Analytics.removeAllRowAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.Analytics.addRowAttributeClick()

        const rowValues = [
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Source',
            'Stage',
            'Created By',
            'J&J Employee/Contractor Contact',
            'Control Substances Related',
            'Related to Clinical Trial',
            'Site Type',
            'Account',
            'Site Category',
            'Impacted Countries',
            'GxP Scope'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.StausorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.checkBookmarkFunationality()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Source of Issue').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Proposed Action/Plan').click()

        const formValues = [
            'Date Occurred:',
            'Date Identified:',
            'Quality Awareness Date:',
            'Escalation Lead Awareness Date:',
            'Escalation Created Date:',
            'Owner:',
            'Created By:',
            'Quality Head:',
            'J&J Employee/Contractor Contact:',
            'Other Key Contacts:',
            'Source:',
            'Source Details:',
            'Therapeutic Areas:',
            'Control Substances Related:',
            'Related to Clinical Trial:',
            'Customer Patient Impact:',
            'Site Type:',
            'Account:',
            'Site Category:',
            'Impacted Countries:',
            'GxP Scope:',
            'Proposed Action/Plan:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ProductEscalations.All.checkformsfields(formValues)
    })
    it('Allows default view of Escalations-COMET - Smart Content Admin Binder', () => {

        const GQ = new GQTest();
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.openAll()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.open()
        
        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage',
            'Rationale Description Of Issue Change',
            'Additional Information',
            'Proposed Action/Plan',
            'Additional Sites Affected',
            'Related Product Info',
            'Related Batches',
            'User Comments'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.getColumnID()
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

        // Verify Multichoice picker
        const namesList = ['Current Level',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Analytics.removeAllColumnAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Analytics.removeAllRowAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Analytics.addRowAttributeClick()

        const rowValues = [
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Source',
            'Stage',
            'Created By',
            'J&J Employee/Contractor Contact',
            'Control Substances Related',
            'Related to Clinical Trial',
            'Site Type',
            'Account',
            'Site Category',
            'Impacted Countries',
            'GxP Scope'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.StausorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Source of Issue').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Proposed Action/Plan').click()

        const formValues = [
            'Date Occurred:',
            'Date Identified:',
            'Quality Awareness Date:',
            'Escalation Lead Awareness Date:',
            'Escalation Created Date:',
            'Owner:',
            'Created By:',
            'Quality Head:',
            'J&J Employee/Contractor Contact:',
            'Other Key Contacts:',
            'Source:',
            'Source Details:',
            'Therapeutic Areas:',
            'Control Substances Related:',
            'Related to Clinical Trial:',
            'Customer Patient Impact:',
            'Site Type:',
            'Account:',
            'Site Category:',
            'Impacted Countries:',
            'GxP Scope:',
            'Proposed Action/Plan:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.minimiseSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.checkBookmarkFunationality()
    })
    it('Allows default view of Escalations-COMET - Linked Content Admin Binder', () => {

        const GQ = new GQTest();
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

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage',
            'Rationale Description Of Issue Change',
            'Additional Information',
            'Proposed Action/Plan',
            'Additional Sites Affected',
            'Related Product Info',
            'Related Batches',
            'User Comments'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.getColumnID()
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

        // Verify Multichoice picker
        const namesList = ['Current Level',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage'
        ]

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.clickChartIcon()


        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.refresh()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.facetPicker()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.removeAllColumnAttributes()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.removeAllRowAttributes()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.addRowAttributeClick()

        // const rowValues = [
        //     'Current Level',
        //     'Owner',
        //     'Quality Head',
        //     'Escalation Category',
        //     'Issue Meets Escalation Criteria',
        //     'Customer Patient Impact',
        //     'Source',
        //     'Stage',
        //     'Created By',
        //     'J&J Employee/Contractor Contact',
        //     'Control Substances Related',
        //     'Related to Clinical Trial',
        //     'Site Type',
        //     'Account',
        //     'Site Category',
        //     'Impacted Countries',
        //     'GxP Scope'
        // ]
        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.checkRowValues(rowValues)

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.statusTab.open()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.statusTab.checkChartVisibility()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.stausorOwner.open()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.stausorOwner.refresh()

        // //Chart Icon
        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Source of Issue').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Proposed Action/Plan').click()

        const formValues = [
            'Date Occurred:',
            'Date Identified:',
            'Quality Awareness Date:',
            'Escalation Lead Awareness Date:',
            'Escalation Created Date:',
            'Owner:',
            'Created By:',
            'Quality Head:',
            'J&J Employee/Contractor Contact:',
            'Other Key Contacts:',
            'Source:',
            'Source Details:',
            'Therapeutic Areas:',
            'Control Substances Related:',
            'Related to Clinical Trial:',
            'Customer Patient Impact:',
            'Site Type:',
            'Account:',
            'Site Category:',
            'Impacted Countries:',
            'GxP Scope:',
            'Proposed Action/Plan:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.minimiseSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.checkBookmarkFunationality()
    })
    it('Allows default view of Escalations-COMET - Smart Content User Data Binder', () => {

        const GQ = new GQTest();
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.openAll()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage',
            'Rationale Description Of Issue Change',
            'Additional Information',
            'Proposed Action/Plan',
            'Additional Sites Affected',
            'Related Product Info',
            'Related Batches',
            'User Comments'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.getColumnID()
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

        // Verify Multichoice picker
        const namesList = ['Current Level',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Analytics.removeAllColumnAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Analytics.removeAllRowAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Analytics.addRowAttributeClick()

        const rowValues = [
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Source',
            'Stage',
            'Created By',
            'J&J Employee/Contractor Contact',
            'Control Substances Related',
            'Related to Clinical Trial',
            'Site Type',
            'Account',
            'Site Category',
            'Impacted Countries',
            'GxP Scope'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.StausorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Source of Issue').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Proposed Action/Plan').click()

        const formValues = [
            'Date Occurred:',
            'Date Identified:',
            'Quality Awareness Date:',
            'Escalation Lead Awareness Date:',
            'Escalation Created Date:',
            'Owner:',
            'Created By:',
            'Quality Head:',
            'J&J Employee/Contractor Contact:',
            'Other Key Contacts:',
            'Source:',
            'Source Details:',
            'Therapeutic Areas:',
            'Control Substances Related:',
            'Related to Clinical Trial:',
            'Customer Patient Impact:',
            'Site Type:',
            'Account:',
            'Site Category:',
            'Impacted Countries:',
            'GxP Scope:',
            'Proposed Action/Plan:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.minimiseSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.checkBookmarkFunationality()
    })
    it('Allows default view of Escalations-COMET - Linked Content User Data Binder', () => {

        const GQ = new GQTest();
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

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage',
            'Rationale Description Of Issue Change',
            'Additional Information',
            'Proposed Action/Plan',
            'Additional Sites Affected',
            'Related Product Info',
            'Related Batches',
            'User Comments'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.getColumnID()
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

        // Verify Multichoice picker
        const namesList = ['Current Level',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage'
        ]

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.clickChartIcon()


        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.refresh()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.facetPicker()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.removeAllColumnAttributes()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.removeAllRowAttributes()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.addRowAttributeClick()

        // const rowValues = [
        //     'Current Level',
        //     'Owner',
        //     'Quality Head',
        //     'Escalation Category',
        //     'Issue Meets Escalation Criteria',
        //     'Customer Patient Impact',
        //     'Source',
        //     'Stage',
        //     'Created By',
        //     'J&J Employee/Contractor Contact',
        //     'Control Substances Related',
        //     'Related to Clinical Trial',
        //     'Site Type',
        //     'Account',
        //     'Site Category',
        //     'Impacted Countries',
        //     'GxP Scope'
        // ]
        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.analytics.checkRowValues(rowValues)

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.statusTab.open()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.statusTab.checkChartVisibility()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.stausorOwner.open()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.stausorOwner.refresh()

        // //Chart Icon
        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Source of Issue').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Proposed Action/Plan').click()

        const formValues = [
            'Date Occurred:',
            'Date Identified:',
            'Quality Awareness Date:',
            'Escalation Lead Awareness Date:',
            'Escalation Created Date:',
            'Owner:',
            'Created By:',
            'Quality Head:',
            'J&J Employee/Contractor Contact:',
            'Other Key Contacts:',
            'Source:',
            'Source Details:',
            'Therapeutic Areas:',
            'Control Substances Related:',
            'Related to Clinical Trial:',
            'Customer Patient Impact:',
            'Site Type:',
            'Account:',
            'Site Category:',
            'Impacted Countries:',
            'GxP Scope:',
            'Proposed Action/Plan:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.minimiseSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.checkBookmarkFunationality()
    })
    it('Allows default view of Escalations-COMET - Smart Content Product Specific Binder', () => {

        const GQ = new GQTest();
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.openAll()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage',
            'Rationale Description Of Issue Change',
            'Additional Information',
            'Proposed Action/Plan',
            'Additional Sites Affected',
            'Related Product Info',
            'Related Batches',
            'User Comments'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.getColumnID()
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

        // Verify Multichoice picker
        const namesList = ['Current Level',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.Analytics.removeAllColumnAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.Analytics.removeAllRowAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.Analytics.addRowAttributeClick()

        const rowValues = [
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Source',
            'Stage',
            'Created By',
            'J&J Employee/Contractor Contact',
            'Control Substances Related',
            'Related to Clinical Trial',
            'Site Type',
            'Account',
            'Site Category',
            'Impacted Countries',
            'GxP Scope'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.StausorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Source of Issue').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Proposed Action/Plan').click()

        const formValues = [
            'Date Occurred:',
            'Date Identified:',
            'Quality Awareness Date:',
            'Escalation Lead Awareness Date:',
            'Escalation Created Date:',
            'Owner:',
            'Created By:',
            'Quality Head:',
            'J&J Employee/Contractor Contact:',
            'Other Key Contacts:',
            'Source:',
            'Source Details:',
            'Therapeutic Areas:',
            'Control Substances Related:',
            'Related to Clinical Trial:',
            'Customer Patient Impact:',
            'Site Type:',
            'Account:',
            'Site Category:',
            'Impacted Countries:',
            'GxP Scope:',
            'Proposed Action/Plan:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.minimiseSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.checkBookmarkFunationality()
    })
    it('Allows default view of Escalations-COMET - Linked Content Product Specific Binder', () => {

         const GQ = new GQTest();
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.openEscalations()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage',
            'Rationale Description Of Issue Change',
            'Additional Information',
            'Proposed Action/Plan',
            'Additional Sites Affected',
            'Related Product Info',
            'Related Batches',
            'User Comments'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.getColumnID()
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

        // Verify Multichoice picker
        const namesList = ['Current Level',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage'
        ]

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.analyticsTab.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.analyticsTab.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.analyticsTab.removeAllColumnAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.analyticsTab.removeAllRowAttributes()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.analyticsTab.addRowAttributeClick()

        const rowValues = [
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Source',
            'Stage',
            'Created By',
            'J&J Employee/Contractor Contact',
            'Control Substances Related',
            'Related to Clinical Trial',
            'Site Type',
            'Account',
            'Site Category',
            'Impacted Countries',
            'GxP Scope'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.analyticsTab.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.statustab.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.statustab.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.stausorOwnerTab.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.stausorOwnerTab.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Source of Issue').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Proposed Action/Plan').click()

        const formValues = [
            'Date Occurred:',
            'Date Identified:',
            'Quality Awareness Date:',
            'Escalation Lead Awareness Date:',
            'Escalation Created Date:',
            'Owner:',
            'Created By:',
            'Quality Head:',
            'J&J Employee/Contractor Contact:',
            'Other Key Contacts:',
            'Source:',
            'Source Details:',
            'Therapeutic Areas:',
            'Control Substances Related:',
            'Related to Clinical Trial:',
            'Customer Patient Impact:',
            'Site Type:',
            'Account:',
            'Site Category:',
            'Impacted Countries:',
            'GxP Scope:',
            'Proposed Action/Plan:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.minimiseSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.checkBookmarkFunationality()
    })


})