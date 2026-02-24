import { GQTest } from '../../jj-pages/GQTest'
describe('17447-Quality Management', () => {
    const GQ = new GQTest();
    Cypress.config('defaultCommandTimeout', 180000);
    it('17447-Allows default view of Assessment -COMET sub noun of Escalations - Planet', () => {

        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // ChangeControls
        GQ.Planets.QualityManagement.Escalations.openLandingPage()

        // Assessment Executions
        GQ.Planets.QualityManagement.Escalations.Assessments.open()

        // Refresh
        GQ.Planets.QualityManagement.Escalations.Assessments.refresh()


        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Key Phrase',
            'Created By',
            'Escalation Criteria',
            'Related Escalation',
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By',
            'Event',
            'Event ID'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.Escalations.Assessments.getColumnID()
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
        const namesList = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type'
        ]


        GQ.Planets.QualityManagement.Escalations.Assessments.checkMultiChoicePickerColumns(namesList)

        // Related to Me
        GQ.Planets.QualityManagement.Escalations.Assessments.viewRelatedToMe()

        // View All
        GQ.Planets.QualityManagement.Escalations.Assessments.viewAll()

        // Refresh
        GQ.Planets.QualityManagement.Escalations.Assessments.refresh()

        //Chart Icon
        GQ.Planets.QualityManagement.Escalations.Assessments.clickChartIcon()

        GQ.Planets.QualityManagement.Escalations.Assessments.Analytics.refresh()

        GQ.Planets.QualityManagement.Escalations.Assessments.Analytics.facetPicker()

        GQ.Planets.QualityManagement.Escalations.Assessments.Analytics.addRowAttributeClick()

        const rowValues = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By'

        ]
        GQ.Planets.QualityManagement.Escalations.Assessments.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.QualityManagement.Escalations.Assessments.clickChartIcon()

        GQ.Planets.QualityManagement.Escalations.Assessments.rightClickBookmark()

        GQ.Planets.QualityManagement.Escalations.Assessments.checkBookmarkFunationality()

        GQ.Planets.QualityManagement.Escalations.Assessments.openARecord()

        const formValues = [
            'Number:',
            'Key Phrase:',
            'Escalation Criteria:',
            'Created By:',
            'Related Escalation:',
            'Related Escalation Level:',
            'Product Quality Issue:',
            'Regulatory Compliance Issue:',
            'Non-GMP Issue:',
            'Issue Type:',
            'Event:',
            'Event ID:'
        ]

        GQ.Planets.QualityManagement.Escalations.Assessments.checkformsfields(formValues)
    })
    it('Allows default view of Assessment COMET sub noun of Escalations - Product', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.openEscalations()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.openAll()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Key Phrase',
            'Created By',
            'Escalation Criteria',
            'Related Escalation',
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By',
            'Event',
            'Event ID'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.getColumnID()
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
        const namesList = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.Analytics.addRowAttributeClick()

        const rowValues = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.openARecord()

        const formValues = [
            'Number:',
            'Key Phrase:',
            'Escalation Criteria:',
            'Created By:',
            'Related Escalation:',
            'Related Escalation Level:',
            'Product Quality Issue:',
            'Regulatory Compliance Issue:',
            'Non-GMP Issue:',
            'Issue Type:',
            'Event:',
            'Event ID:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Assessments.checkBookmarkFunationality()
    })
    it('Allows default view of Assessment COMET sub noun of Escalations - Smart Content Admin Binder', () => {


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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.closeSideBar()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Key Phrase',
            'Created By',
            'Escalation Criteria',
            'Related Escalation',
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By',
            'Event',
            'Event ID'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.getColumnID()
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
        const namesList = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type'
        ]


        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.addRowAttributeClick()

        const rowValues = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.checkRowValues(rowValues)
        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.openARecord()

        const formValues = [
            'Number:',
            'Key Phrase:',
            'Escalation Criteria:',
            'Created By:',
            'Related Escalation:',
            'Related Escalation Level:',
            'Product Quality Issue:',
            'Regulatory Compliance Issue:',
            'Non-GMP Issue:',
            'Issue Type:',
            'Event:',
            'Event ID:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.checkformfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Assessments.checkBookmarkFunationality()
    })
    it('Allows default view of Assessment COMET sub noun of Escalations - Linked Content Admin Binder', () => {


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

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.linkARecord()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Key Phrase',
            'Created By',
            'Escalation Criteria',
            'Related Escalation',
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By',
            'Event',
            'Event ID'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.getColumnID()
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
        const namesList = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type'
        ]

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.Analytics.addRowAttributeClick()

        const rowValues = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.openARecord()

        const formValues = [
            'Number:',
            'Key Phrase:',
            'Escalation Criteria:',
            'Created By:',
            'Related Escalation:',
            'Related Escalation Level:',
            'Product Quality Issue:',
            'Regulatory Compliance Issue:',
            'Non-GMP Issue:',
            'Issue Type:',
            'Event:',
            'Event ID:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.checkformfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Assessments.checkBookmarkFunationality()
    })
    it('Allows default view of Assessment COMET sub noun of Escalations - Smart Content User Data Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.closeSideBar()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Key Phrase',
            'Created By',
            'Escalation Criteria',
            'Related Escalation',
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By',
            'Event',
            'Event ID'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.getColumnID()
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
        const namesList = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.addRowAttributeClick()

        const rowValues = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.openARecord()

        const formValues = [
            'Number:',
            'Key Phrase:',
            'Escalation Criteria:',
            'Created By:',
            'Related Escalation:',
            'Related Escalation Level:',
            'Product Quality Issue:',
            'Regulatory Compliance Issue:',
            'Non-GMP Issue:',
            'Issue Type:',
            'Event:',
            'Event ID:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.checkformfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Assessments.checkBookmarkFunationality()
    })
    it('Allows default view of Assessment COMET sub noun of Escalations - Linked Content User Data Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.linkARecord()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Key Phrase',
            'Created By',
            'Escalation Criteria',
            'Related Escalation',
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By',
            'Event',
            'Event ID'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.getColumnID()
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
        const namesList = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type'
        ]

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.Analytics.addRowAttributeClick()

        const rowValues = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.openARecord()

        const formValues = [
            'Number:',
            'Key Phrase:',
            'Escalation Criteria:',
            'Created By:',
            'Related Escalation:',
            'Related Escalation Level:',
            'Product Quality Issue:',
            'Regulatory Compliance Issue:',
            'Non-GMP Issue:',
            'Issue Type:',
            'Event:',
            'Event ID:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.checkformfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Escalations.Assessments.checkBookmarkFunationality()
    })
    it('Allows default view of Assessment COMET sub noun of Escalations - Smart Content Product Specific Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.openAll()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Key Phrase',
            'Created By',
            'Escalation Criteria',
            'Related Escalation',
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By',
            'Event',
            'Event ID'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.getColumnID()
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
        const namesList = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.addRowAttributeClick()

        const rowValues = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.openARecord()

        const formValues = [
            'Number:',
            'Key Phrase:',
            'Escalation Criteria:',
            'Created By:',
            'Related Escalation:',
            'Related Escalation Level:',
            'Product Quality Issue:',
            'Regulatory Compliance Issue:',
            'Non-GMP Issue:',
            'Issue Type:',
            'Event:',
            'Event ID:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.checkformfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Escalations.Assessments.checkBookmarkFunationality()
    })
    it('Allows default view of Assessment COMET sub noun of Escalations - Linked Content Product Specific Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.openlandingpage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.linkARecord()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Key Phrase',
            'Created By',
            'Escalation Criteria',
            'Related Escalation',
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By',
            'Event',
            'Event ID'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.getColumnID()
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
        const namesList = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type'
        ]


        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        //  GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.Analytics.addRowAttributeClick()

        const rowValues = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.openARecord()

        const formValues = [
            'Number:',
            'Key Phrase:',
            'Escalation Criteria:',
            'Created By:',
            'Related Escalation:',
            'Related Escalation Level:',
            'Product Quality Issue:',
            'Regulatory Compliance Issue:',
            'Non-GMP Issue:',
            'Issue Type:',
            'Event:',
            'Event ID:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.checkformfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Escalations.Assessments.checkBookmarkFunationality()
    })
    it('Allows Quality Records by User Assessment COMET sub noun of Escalations - Planet', () => {

        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.toggleFilter()

        GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Anne Brisson')

        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.open()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Assessments.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Key Phrase',
            'Created By',
            'Escalation Criteria',
            'Related Escalation',
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By',
            'Event',
            'Event ID'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Assessments.getColumnID()
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
        const namesList = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type'
        ]


        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Assessments.checkMultiChoicePickerColumns(namesList)
        // Refresh
        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Assessments.refresh()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Assessments.openARecord()

        const formValues = [
            'Number:',
            'Key Phrase:',
            'Escalation Criteria:',
            'Created By:',
            'Related Escalation:',
            'Related Escalation Level:',
            'Product Quality Issue:',
            'Regulatory Compliance Issue:',
            'Non-GMP Issue:',
            'Issue Type:',
            'Event:',
            'Event ID:'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Assessments.checkformsfields(formValues)

        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Assessments.minimizeRecord()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Assessments.rightClickBookmark()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Assessments.checkBookmarkFunationality()
    })
    it('Allows Quality Records by User Assessment COMET sub noun of Escalations - Product', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('NoAliasRules - Streamer Test')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.clickAPerson('TIZIANA ROSSETTI')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.open()
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.Assessments.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Key Phrase',
            'Created By',
            'Escalation Criteria',
            'Related Escalation',
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type',
            'Created By',
            'Event',
            'Event ID'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.Assessments.getColumnID()
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
        const namesList = [
            'Related Escalation Level',
            'Product Quality Issue',
            'Regulatory Compliance Issue',
            'Non-GMP Issue',
            'Issue Type'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.Assessments.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.Assessments.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.Assessments.toggleFilter()


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.Assessments.openARecord()

        const formValues = [
            'Number:',
            'Key Phrase:',
            'Escalation Criteria:',
            'Created By:',
            'Related Escalation:',
            'Related Escalation Level:',
            'Product Quality Issue:',
            'Regulatory Compliance Issue:',
            'Non-GMP Issue:',
            'Issue Type:',
            'Event:',
            'Event ID:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.Assessments.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.Assessments.minimizeRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.Assessments.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Escalations.Assessments.checkBookmarkFunationality()
    })
})