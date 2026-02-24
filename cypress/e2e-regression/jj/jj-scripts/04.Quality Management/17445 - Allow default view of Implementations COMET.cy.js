import { GQTest } from '../../jj-pages/GQTest'
import productPage from '../../jj-pages/productPage';
describe('17445-Quality Management', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('17445-Allows default view of Implementations-COMET - Planet', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Escalations
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        // cy.get('body').then((body) => {
        //     if (body.find('div[eventproxy="isc_globalWarn_body"][class="windowBody"]').length > 0) {
        //         cy.get('td.button').click()
        //     }
        // })


        // Implementations
        GQ.Planets.QualityManagement.ChangeControls.Implementations.open()

        // Refresh
        GQ.Planets.QualityManagement.ChangeControls.Implementations.refresh()


        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description',
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Due Date',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
            'Task Results',
            'Related Change',
            'Related Nonconformance',
            'Task Completion Date',
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.ChangeControls.Implementations.getColumnID()
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
            'Task Type',
            'Task Subtype',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]


        GQ.Planets.QualityManagement.ChangeControls.Implementations.checkMultiChoicePickerColumns(namesList)


        // Related to Me
        GQ.Planets.QualityManagement.ChangeControls.Implementations.viewRelatedToMe()

        // Related to Me And In Approval
        GQ.Planets.QualityManagement.ChangeControls.Implementations.viewRelatedToMeAndInApproval()

        // Related to Me And Open
        GQ.Planets.QualityManagement.ChangeControls.Implementations.viewRelatedToMeAndOpen()

        // View All
        GQ.Planets.QualityManagement.ChangeControls.Implementations.viewAll()

        // Refresh
        GQ.Planets.QualityManagement.ChangeControls.Implementations.refresh()

        //Chart Icon
        GQ.Planets.QualityManagement.ChangeControls.Implementations.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics',
            'Status',
            'Status/Assignee'
        ]
        GQ.Planets.QualityManagement.ChangeControls.Implementations.checktabs(tabNames)

        GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

        GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.facetPicker()

        GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributeClick()

        const rowValues = [
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]
        GQ.Planets.QualityManagement.ChangeControls.Implementations.Analytics.checkRowValues(rowValues)

        GQ.Planets.QualityManagement.ChangeControls.Implementations.Status.open()

        GQ.Planets.QualityManagement.ChangeControls.Implementations.Status.checkChartVisibility()

        GQ.Planets.QualityManagement.ChangeControls.Implementations.StatusorAssignee.open()

        GQ.Planets.QualityManagement.ChangeControls.Implementations.StatusorAssignee.refresh()

        //Chart Icon
        GQ.Planets.QualityManagement.ChangeControls.Implementations.clickChartIcon()

        GQ.Planets.QualityManagement.ChangeControls.Implementations.rightClickBookmark()

        GQ.Planets.QualityManagement.ChangeControls.Implementations.checkBookmarkFunationality()

        GQ.Planets.QualityManagement.ChangeControls.Implementations.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Organizational Information').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Description').click()

        const formValues = [
            'Change Order:',
            'Title:',
            'Task Type:',
            'Task Subtype:',
            'Assignee:',
            'Due Date:',
            'Status:',
            'J&J Site Name:',
            'Functional Area:',
            'Functional Area 1:',
            'Functional Area 2:',
            'Description:',
            'Task Results:',
            'Related Nonconformance:',
            'Task Completion Date:'
        ]

        GQ.Planets.QualityManagement.ChangeControls.Implementations.checkformsfields(formValues)
    })
    it('17445-Allows default view of Implementations-COMET - Product', () => {
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
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        cy.get('body').then((body) => {
            if (body.find('div[eventproxy="isc_globalWarn_body"][class="windowBody"]').length > 0) {
                cy.get('td.button').click()
            }
        })

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.open()

        cy.get('body').then((body) => {
            if (body.find('div[eventproxy="isc_globalWarn_body"][class="windowBody"]').length > 0) {
                cy.get('td.button').click()
            }
        })

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description',
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Due Date',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
            'Task Results',
            'Related Change',
            'Related Nonconformance',
            'Task Completion Date',
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.getColumnID()
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
            'Task Type',
            'Task Subtype',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributeClick()

        const rowValues = [
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.StatusorAssignee.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.StatusorAssignee.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.checkBookmarkFunationality()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Organizational Information').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Description').click()

        const formValues = [
            'Change Order:',
            'Title:',
            'Task Type:',
            'Task Subtype:',
            'Assignee:',
            'Due Date:',
            'Status:',
            'J&J Site Name:',
            'Functional Area:',
            'Functional Area 1:',
            'Functional Area 2:',
            'Description:',
            'Task Results:',
            'Related Nonconformance:',
            'Task Completion Date:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.checkformsfields(formValues)
    })
    it('17445-Allows default view of Implementations-COMET - Smart Content Admin Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.open()

        cy.wait(2000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description',
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Due Date',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
            'Task Results',
            'Related Change',
            'Related Nonconformance',
            'Task Completion Date',
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.getColumnID()
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
        cy.wait(2000)
        // Verify Multichoice picker
        const namesList = ['Task Type',
            'Task Subtype',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributeClick()

        const rowValues = [
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.StatusorAssignee.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.StatusorAssignee.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Organizational Information').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Description').click()

        const formValues = [
            'Change Order:',
            'Title:',
            'Task Type:',
            'Task Subtype:',
            'Assignee:',
            'Due Date:',
            'Status:',
            'J&J Site Name:',
            'Functional Area:',
            'Functional Area 1:',
            'Functional Area 2:',
            'Description:',
            'Task Results:',
            'Related Nonconformance:',
            'Task Completion Date:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.minimiseSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkBookmarkFunationality()
    })
    it('17445-Allows default view of Implementations-COMET - Linked Content Admin Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.Implementations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.Implementations.linkAContent()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description',
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Due Date',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
            'Task Results',
            'Related Change',
            'Related Nonconformance',
            'Task Completion Date',
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.getColumnID()
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
        const namesList = ['Task Type',
            'Task Subtype',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.clickChartIcon()


        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.Analytics.refresh()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.Analytics.facetPicker()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.Analytics.addRowAttributeClick()

        // const rowValues = [
        //     'Task Type',
        //     'Task Subtype',
        //     'Assignee',
        //     'Status',
        //     'J&J Site Name',
        //     'Functional Area',
        //     'Functional Area 1',
        //     'Functional Area 2',
        // ]
        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.Analytics.checkRowValues(rowValues)

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.Status.open()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.Status.checkChartVisibility()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.StatusorAssignee.open()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.StatusorAssignee.refresh()

        // //Chart Icon
        // GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Organizational Information').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Description').click()

        const formValues = [
            'Change Order:',
            'Title:',
            'Task Type:',
            'Task Subtype:',
            'Assignee:',
            'Due Date:',
            'Status:',
            'J&J Site Name:',
            'Functional Area:',
            'Functional Area 1:',
            'Functional Area 2:',
            'Description:',
            'Task Results:',
            'Related Nonconformance:',
            'Task Completion Date:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.minimiseSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.checkBookmarkFunationality()
    })
    it('17445-Allows default view of Implementations-COMET - Smart Content User Data Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.open()


        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description',
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Due Date',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
            'Task Results',
            'Related Change',
            'Related Nonconformance',
            'Task Completion Date',
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.getColumnID()
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
        //  GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.getColumnID()
        // Verify Multichoice picker
        const namesList = ['Task Type',
            'Task Subtype',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]


        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkMultiChoicePickerColumns(namesList)

        // //Chart Icon
        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()


        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.facetPicker()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributeClick()

        // const rowValues = [
        //     'Task Type',
        //     'Task Subtype',
        //     'Assignee',
        //     'Status',
        //     'J&J Site Name',
        //     'Functional Area',
        //     'Functional Area 1',
        //     'Functional Area 2',
        // ]
        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.checkRowValues(rowValues)

        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.open()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.checkChartVisibility()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.StatusorAssignee.open()

        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.StatusorAssignee.refresh()

        // //Chart Icon
        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Organizational Information').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Description').click()

        const formValues = [
            'Change Order:',
            'Title:',
            'Task Type:',
            'Task Subtype:',
            'Assignee:',
            'Due Date:',
            'Status:',
            'J&J Site Name:',
            'Functional Area:',
            'Functional Area 1:',
            'Functional Area 2:',
            'Description:',
            'Task Results:',
            'Related Nonconformance:',
            'Task Completion Date:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.minimiseSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkBookmarkFunationality()
    })
    it('17445-Allows default view of Implementations-COMET - Linked Content User Data Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description',
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Due Date',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
            'Task Results',
            'Related Change',
            'Related Nonconformance',
            'Task Completion Date',
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.getColumnID()
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
        const namesList = ['Task Type',
            'Task Subtype',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ChangeControls.Implementations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        //  GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()


        //   GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

        //   GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Analytics.facetPicker()

        //   GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributeClick()

        // const rowValues = [
        //     'Task Type',
        //     'Task Subtype',
        //     'Assignee',
        //     'Status',
        //     'J&J Site Name',
        //     'Functional Area',
        //     'Functional Area 1',
        //     'Functional Area 2',
        // ]
        //   GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Analytics.checkRowValues(rowValues)

        //   GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Status.open()

        //   GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Status.checkChartVisibility()

        //   GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.StatusorAssignee.open()

        //   GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.StatusorAssignee.refresh()

        // //Chart Icon
        //   GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()
        

          GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Organizational Information').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Description').click()

        const formValues = [
            'Change Order:',
            'Title:',
            'Task Type:',
            'Task Subtype:',
            'Assignee:',
            'Due Date:',
            'Status:',
            'J&J Site Name:',
            'Functional Area:',
            'Functional Area 1:',
            'Functional Area 2:',
            'Description:',
            'Task Results:',
            'Related Nonconformance:',
            'Task Completion Date:'
        ]

          GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkformsfields(formValues)

          GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.minimiseSelector()

          GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.rightClickBookmark()

          GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkBookmarkFunationality()
    })
    it('17445-Allows default view of Implementations-COMET - Smart Content Product Specific Binder', () => {

        const GQ = new GQTest();
         const productTab = new productPage()
        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
            GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');

        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectqualitymanagement();
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

             // Open linked content
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.openlandingpage();

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description',
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Due Date',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
            'Task Results',
            'Related Change',
            'Related Nonconformance',
            'Task Completion Date',
        ]
        // Read column
        cy.getColumnsAndTypes(
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.getColumnID()
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
        const namesList = ['Task Type',
            'Task Subtype',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]


       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()


       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.facetPicker()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributeClick()

        const rowValues = [
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]
       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Analytics.checkRowValues(rowValues)

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.open()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.Status.checkChartVisibility()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.StatusorAssignee.open()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.StatusorAssignee.refresh()

        //Chart Icon
       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Organizational Information').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Description').click()

        const formValues = [
            'Change Order:',
            'Title:',
            'Task Type:',
            'Task Subtype:',
            'Assignee:',
            'Due Date:',
            'Status:',
            'J&J Site Name:',
            'Functional Area:',
            'Functional Area 1:',
            'Functional Area 2:',
            'Description:',
            'Task Results:',
            'Related Nonconformance:',
            'Task Completion Date:'
        ]

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkformsfields(formValues)

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.minimiseSelector()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.rightClickBookmark()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkBookmarkFunationality()
    })
    it('17445-Allows default view of Implementations-COMET - Linked Content Product Specific Binder', () => {

        const GQ = new GQTest();
        const productTab = new productPage()
        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');

        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectqualitymanagement();
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        // GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.expandrecord(1);
        // Open linked content
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.openlandingpage();
        

        // // Refresh and select the linked binder
        // GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

        // cy.wait(5000)

        // GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconofBinder()

        // cy.wait(5000)

        // GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')


        // cy.wait(5000)

        //Open Linked Content
        // GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.linkAContent()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description',
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Due Date',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
            'Task Results',
            'Related Change',
            'Related Nonconformance',
            'Task Completion Date',
        ]
        // Read column
        // cy.getColumnsAndTypes(
        //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.getColumnID()
        // ).then(tableInfo => {
        //     let availableCols = []
        //     tableInfo.columns.map((obj) => {
        //         availableCols.push(obj.textContent)
        //     })
        //     cy.log(availableCols)
        //     for (let i = 0; i < expectedColumnsQXD.length; i++) {
        //         expect(availableCols).to.include(expectedColumnsQXD[i])
        //     }
        // })

        // Verify Multichoice picker
        const namesList = ['Task Type',
            'Task Subtype',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ChangeControls.Implementations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
    //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()


    //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Analytics.refresh()

    //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Analytics.facetPicker()

    //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Analytics.addRowAttributeClick()

    //     const rowValues = [
    //         'Task Type',
    //         'Task Subtype',
    //         'Assignee',
    //         'Status',
    //         'J&J Site Name',
    //         'Functional Area',
    //         'Functional Area 1',
    //         'Functional Area 2',
    //     ]
    //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Analytics.checkRowValues(rowValues)

    //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Status.open()

    //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.Status.checkChartVisibility()

    //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.StatusorAssignee.open()

    //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.StatusorAssignee.refresh()

    //     //Chart Icon
    //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.clickChartIcon()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Organizational Information').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Description').click()

        const formValues = [
            'Change Order:',
            'Title:',
            'Task Type:',
            'Task Subtype:',
            'Assignee:',
            'Due Date:',
            'Status:',
            'J&J Site Name:',
            'Functional Area:',
            'Functional Area 1:',
            'Functional Area 2:',
            'Description:',
            'Task Results:',
            'Related Nonconformance:',
            'Task Completion Date:'
        ]

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkformsfields(formValues)

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.minimiseSelector()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.rightClickBookmark()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkBookmarkFunationality()
    })
    
})