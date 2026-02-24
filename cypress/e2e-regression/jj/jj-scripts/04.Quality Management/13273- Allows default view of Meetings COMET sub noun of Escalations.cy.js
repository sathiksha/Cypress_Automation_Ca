import { GQTest } from '../../jj-pages/GQTest'
describe('04. Quality Management', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('13723 - Allows default view of Meetings COMET sub noun of Escalations - Planet', () => {
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
        GQ.Planets.QualityManagement.Escalations.Meetings.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Status',
            'Owner',
            'Meeting Date',
            'Initial or Follow Up Meeting',
            'Related Escalation',
            'Related Escalation Level',
            'Meeting  Attendees'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.Escalations.Meetings.getColumnID()
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
            'Status',
            'Initial or Follow Up Meeting',
            'Related Escalation Level'
        ]

        GQ.Planets.QualityManagement.Escalations.Meetings.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.QualityManagement.Escalations.Meetings.toggleFilterIcon()

        // Related to Me
        GQ.Planets.QualityManagement.Escalations.Meetings.viewRelatedToMe()

        // Related to Me And Open
        GQ.Planets.QualityManagement.Escalations.Meetings.viewRelatedToMeAndOpen()

        // View All
        GQ.Planets.QualityManagement.Escalations.Meetings.viewAll()

        // Refresh
        GQ.Planets.QualityManagement.Escalations.Meetings.refresh()

        //Chart Icon
        GQ.Planets.QualityManagement.Escalations.Meetings.clickChartIcon()

        // // Verify available tabs
        // const tabNames = [
        //     'Analytics',
        //     'Status',
        //     'Status/Owner'
        // ]
        // GQ.Planets.QualityManagement.Escalations.Meetings.checktabs(tabNames)

        GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.refresh()

        GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.facetPicker()

        GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.removeAllColumnAttributes()

        GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.removeAllRowAttributes()

        GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.addRowAttributeClick()

        const rowValues = [
            // 'Status',
            'Owner',
            'Initial or Follow up Meeting',
            'Related Escalation Level'
        ]
        GQ.Planets.QualityManagement.Escalations.Meetings.Analytics.checkRowValues(rowValues)

        GQ.Planets.QualityManagement.Escalations.Meetings.Status.open()

        GQ.Planets.QualityManagement.Escalations.Meetings.Status.checkChartVisibility()

        GQ.Planets.QualityManagement.Escalations.Meetings.StausorOwner.open()

        GQ.Planets.QualityManagement.Escalations.Meetings.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.QualityManagement.Escalations.Meetings.clickChartIcon()

        GQ.Planets.QualityManagement.Escalations.Meetings.rightClickBookmark()

        GQ.Planets.QualityManagement.Escalations.Meetings.checkBookmarkFunationality()

        GQ.Planets.QualityManagement.Escalations.Meetings.openARecord()

        const formValues = [
            'Objective',
            'Decisions',
            'Follow Up Meeting Required',
            'Further Escalation Required',
            'If No Field Action, Document Rationale',
            'Next Step(s)',
            'Facilitator',
            'Additional Information/Escalation Update',
            'Author of Minutes',
            'Initial Date Minutes Issued',
            'Final Date Minutes Issued'
        ]

        GQ.Planets.QualityManagement.Escalations.Comet.checkFormFields(formValues)
    })
    it('Allows default view of Meetings COMET sub noun of Escalations - Product', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.openEscalations()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.All()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Status',
            'Owner',
            'Meeting Date',
            'Initial or Follow Up Meeting',
            'Related Escalation',
            'Related Escalation Level',
            'Meeting  Attendees'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.getColumnID()
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
            'Status',
            'Initial or Follow Up Meeting',
            'Related Escalation Level'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.checkMultiChoicePicker(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.Analytics.addRowAttributeClick()

        const rowValues = [
            'Status',
            'Owner',
            'Initial or Follow up Meeting',
            'Related Escalation Level'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.StausorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.checkBookmarkFunationality()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.closeSidePane()

        const formValues = [
            'Objective',
            'Decisions',
            'Follow Up Meeting Required',
            'Further Escalation Required',
            'If No Field Action, Document Rationale',
            'Next Step(s)',
            'Facilitator',
            'Additional Information/Escalation Update',
            'Author of Minutes',
            'Initial Date Minutes Issued',
            'Final Date Minutes Issued'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Meetings.checkFormFields(formValues)
    })
    it('Allows default view of Meetings COMET sub noun of Escalations - Smart Content Admin Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.closeSideBar()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Status',
            'Owner',
            'Meeting Date',
            'Initial or Follow Up Meeting',
            'Related Escalation',
            'Related Escalation Level',
            'Meeting  Attendees'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.getColumnID()
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
            'Status',
            'Initial or Follow Up Meeting',
            'Related Escalation Level'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.addRowAttributeClick()

        const rowValues = [
            // 'Status',
            'Owner',
            'Initial or Follow up Meeting',
            'Related Escalation Level'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openARecord()
        
        const formValues = [
            'Objective',
            'Decisions',
            'Follow Up Meeting Required',
            'Further Escalation Required',
            'If No Field Action, Document Rationale',
            'Next Step(s)',
            'Facilitator',
            'Additional Information/Escalation Update',
            'Author of Minutes',
            'Initial Date Minutes Issued',
            'Final Date Minutes Issued'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkFormFields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkBookmarkFunationality()
    })
    it('Allows default view of Meetings COMET sub noun of Escalations - Linked Content Admin Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.linkAContent()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Status',
            'Owner',
            'Meeting Date',
            'Initial or Follow Up Meeting',
            'Related Escalation',
            'Related Escalation Level',
            'Meeting  Attendees'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.getColumnID()
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
            'Status',
            'Initial or Follow up Meeting',
            'Related Escalation Level'
        ]

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.addRowAttributeClick()

        const rowValues = [
            'Status',
            'Owner',
            'Initial or Follow up Meeting',
            'Related Escalation Level'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.StatusorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.StatusorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.openARecord()

        const formValues = [
            'Objective',
            'Decisions',
            'Follow Up Meeting Required',
            'Further Escalation Required',
            'If No Field Action, Document Rationale',
            'Next Step(s)',
            'Facilitator',
            'Additional Information/Escalation Update',
            'Author of Minutes',
            'Initial Date Minutes Issued',
            'Final Date Minutes Issued'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.checkformfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.checkBookmarkFunationality()
    })
    it('Allows default view of Meetings COMET sub noun of Escalations - Smart Content User Data Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.Meetings.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.closeSideBar()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Status',
            'Owner',
            'Meeting Date',
            'Initial or Follow Up Meeting',
            'Related Escalation',
            'Related Escalation Level',
            'Meeting  Attendees'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.getColumnID()
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
            'Status',
            'Initial or Follow Up Meeting',
            'Related Escalation Level'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.addRowAttributeClick()

        const rowValues = [
            // 'Status',
            'Owner',
            'Initial or Follow up Meeting',
            'Related Escalation Level'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openARecord()

        const formValues = [
            'Objective',
            'Decisions',
            'Follow Up Meeting Required',
            'Further Escalation Required',
            'If No Field Action, Document Rationale',
            'Next Step(s)',
            'Facilitator',
            'Additional Information/Escalation Update',
            'Author of Minutes',
            'Initial Date Minutes Issued',
            'Final Date Minutes Issued'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkformfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkBookmarkFunationality()
    })
    it('Allows default view of Meetings COMET sub noun of Escalations - Linked Content User Data Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.linkAContent()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Status',
            'Owner',
            'Meeting Date',
            'Initial or Follow Up Meeting',
            'Related Escalation',
            'Related Escalation Level',
            'Meeting  Attendees'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.getColumnID()
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
            'Status',
            'Initial or Follow up Meeting',
            'Related Escalation Level'
        ]

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.addRowAttributeClick()

        const rowValues = [
            // 'Status',
            'Owner',
            'Initial or Follow up Meeting',
            'Related Escalation Level'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.StatusorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.StatusorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.openARecord()

        const formValues = [
            'Objective',
            'Decisions',
            'Follow Up Meeting Required',
            'Further Escalation Required',
            'If No Field Action, Document Rationale',
            'Next Step(s)',
            'Facilitator',
            'Additional Information/Escalation Update',
            'Author of Minutes',
            'Initial Date Minutes Issued',
            'Final Date Minutes Issued'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.checkformfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.checkBookmarkFunationality()
    })
    it('Allows default view of Meetings COMET sub noun of Escalations - Smart Content Product Specific Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.closeSideBar()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Status',
            'Owner',
            'Meeting Date',
            'Initial or Follow Up Meeting',
            'Related Escalation',
            'Related Escalation Level',
            'Meeting  Attendees'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.getColumnID()
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
            'Status',
            'Initial or Follow Up Meeting',
            'Related Escalation Level'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.addRowAttributeClick()

        const rowValues = [
            // 'Status',
            'Owner',
            'Initial or Follow up Meeting',
            'Related Escalation Level'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.StausorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.openARecord()

        const formValues = [
            'Objective',
            'Decisions',
            'Follow Up Meeting Required',
            'Further Escalation Required',
            'If No Field Action, Document Rationale',
            'Next Step(s)',
            'Facilitator',
            'Additional Information/Escalation Update',
            'Author of Minutes',
            'Initial Date Minutes Issued',
            'Final Date Minutes Issued'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkformfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.Meetings.checkBookmarkFunationality()
    })
    it('Allows default view of Meetings COMET sub noun of Escalations - Linked Content Product Specific Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.linkAContent()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Status',
            'Owner',
            'Meeting Date',
            'Initial or Follow Up Meeting',
            'Related Escalation',
            'Related Escalation Level',
            'Meeting  Attendees'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.getColumnID()
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
            'Status',
            'Initial or Follow up Meeting',
            'Related Escalation Level'
        ]

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.addRowAttributeClick()

        const rowValues = [
            // 'Status',
            'Owner',
            'Initial or Follow up Meeting',
            'Related Escalation Level'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Analytics.checkRowValues(rowValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Status.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.Status.checkChartVisibility()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.StatusorOwner.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.StatusorOwner.refresh()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.openARecord()

        const formValues = [
            'Objective',
            'Decisions',
            'Follow Up Meeting Required',
            'Further Escalation Required',
            'If No Field Action, Document Rationale',
            'Next Step(s)',
            'Facilitator',
            'Additional Information/Escalation Update',
            'Author of Minutes',
            'Initial Date Minutes Issued',
            'Final Date Minutes Issued'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.checkformfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.minimizeSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.Meetings.checkBookmarkFunationality()
    })
})