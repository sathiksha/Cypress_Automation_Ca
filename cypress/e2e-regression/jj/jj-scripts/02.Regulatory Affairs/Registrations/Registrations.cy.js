import { GQTest } from '../../../jj-pages/GQTest'
describe('02. Regulatory Affairs', () => {
    const GQ = new GQTest();
    Cypress.config('defaultCommandTimeout', 180000);
    it('Registrations in Planet', () => {
        // Login
        GQ.login();

        // Open Regulatory Affairs
        GQ.Planets.RegulatoryAffairs.openLandingPage()

        // RIMDocs Records - Parent Tab Name
        GQ.Planets.RegulatoryAffairs.Registrations.openLandingPage()

        GQ.Planets.RegulatoryAffairs.Registrations.refresh()

        GQ.Planets.RegulatoryAffairs.Registrations.defaultPredefinedFilter('Current')

        GQ.Planets.RegulatoryAffairs.Registrations.toggleFilter()

        GQ.Planets.RegulatoryAffairs.Registrations.assertDefaultPrefinedFilter()

        let expectedColumns = [
            'Authorization Number',
            '👁',
            'Authorization Status',
            'Authorization Status Date',
            'Application Name',
            'Application Status',
            'Initial/Original Authorization Date',
            'Reviewing Country',
            'PDS Country',
            'Country Trade Name',
            'Product Family Name',
            'Product Family Code',
            'Therapeutic Area',
            'Package Set Name',
            'Package Set Status',
            'Authorizing Health Authority',
            'Application Type',
            'Currently Marketed Registration Package Set Country'
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.RegulatoryAffairs.Registrations.getColumnID()
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
        cy.addColumn(GQ.Planets.RegulatoryAffairs.Registrations.getColumnID(), ['Renewal Required'])

        // Verify Multichoice picker
        const namesList = [
            'Renewal Required',
            'Authorization Status',
            'Application Status',
            'Reviewing Country',
            'PDS Country',
            'Country Trade Name',
            'Therapeutic Area',
            'Package Set Status',
            'Application Type',
            'Currently Marketed Registration Package Set Country'
        ]

        GQ.Planets.RegulatoryAffairs.Registrations.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.RegulatoryAffairs.Registrations.refresh()

        GQ.Planets.RegulatoryAffairs.Registrations.toggleFilter()

        GQ.Planets.RegulatoryAffairs.Registrations.openARecord()

        GQ.Planets.RegulatoryAffairs.Registrations.expandFormField('Renewal Information')

        GQ.Planets.RegulatoryAffairs.Registrations.expandFormField('Marketing Information')

        GQ.Planets.RegulatoryAffairs.Registrations.expandFormField('Registration Status')

        GQ.Planets.RegulatoryAffairs.Registrations.expandFormField('ATC Code Information')


        const formValues = [
            'Authorization Number:',
            'Initial Authorization Date:',
            'Expiration Date/Authorization Valid Until:',
            'MAH:',
            'MAH Last Updated:',
            'Authorizing Health Authority:',
            'Registration Description',
            'Renewal Required:',
            'Next Renewal Submission Deadline Date:',
            'Last Renewal Date:',
            'First Package Set Marketed Date:',
            'Last Package Set Removed From the Market Date:',
            'Authorization Status:',
            'Authorization Status Date:',
            'ATC Code(s):',
            'ATC Code(s) Last Updated:'
        ]

        GQ.Planets.RegulatoryAffairs.Registrations.checkformsfields(formValues)

        GQ.Planets.RegulatoryAffairs.Registrations.minimizeRecord()

        GQ.Planets.RegulatoryAffairs.Registrations.openpredefinedFilterAll()

        // Logout
        GQ.logout();
    })
    it('Registrations in Product Family', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.defaultPredefinedFilter('Current')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.assertDefaultPrefinedFilter()


        let expectedColumns = [
            'Authorization Number',
            '👁',
            'Authorization Status',
            'Authorization Status Date',
            'Application Name',
            'Application Status',
            'Initial/Original Authorization Date',
            'Reviewing Country',
            'PDS Country',
            'Country Trade Name',
            'Product Family Name',
            'Product Family Code',
            'Therapeutic Area',
            'Package Set Name',
            'Package Set Status',
            'Authorizing Health Authority',
            'Application Type',
            'Currently Marketed Registration Package Set Country'
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.getColumnID()
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
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.getColumnID(), ['Renewal Required'])

        // Verify Multichoice picker
        const namesList = [
            'Renewal Required',
            'Authorization Status',
            'Application Status',
            'Reviewing Country',
            'PDS Country',
            'Country Trade Name',
            'Therapeutic Area',
            'Package Set Status',
            'Application Type',
            'Currently Marketed Registration Package Set Country'

        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.expandFormField('Renewal Information')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.expandFormField('Marketing Information')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.expandFormField('Registration Status')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.expandFormField('ATC Code Information')

        const formValues = [
            'Authorization Number:',
            'Initial Authorization Date:',
            'Expiration Date/Authorization Valid Until:',
            'MAH:',
            'MAH Last Updated:',
            'Authorizing Health Authority:',
            'Registration Description',
            'Renewal Required:',
            'Next Renewal Submission Deadline Date:',
            'Last Renewal Date:',
            'First Package Set Marketed Date:',
            'Last Package Set Removed From the Market Date:',
            'Authorization Status:',
            'Authorization Status Date:',
            'ATC Code(s):',
            'ATC Code(s) Last Updated:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.minimizeRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.Registrations.openpredefinedFilterAll()

        // Logout
        GQ.logout();
    })
    it('Registrations in Smart Content - Admin Data Binder', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.defaultPredefinedFilter('Current')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.assertDefaultPrefinedFilter()

        let expectedColumns = [
            'Authorization Number',
            '👁',
            'Authorization Status',
            'Authorization Status Date',
            'Application Name',
            'Application Status',
            'Initial/Original Authorization Date',
            'Reviewing Country',
            'PDS Country',
            'Country Trade Name',
            'Product Family Name',
            'Product Family Code',
            'Therapeutic Area',
            'Package Set Name',
            'Package Set Status',
            'Authorizing Health Authority',
            'Application Type',
            'Currently Marketed Registration Package Set Country'
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.getColumnID()
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
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.getColumnID(), ['Renewal Required'])

        // Verify Multichoice picker
        const namesList = [
            'Renewal Required',
            'Authorization Status',
            'Application Status',
            'Reviewing Country',
            'PDS Country',
            'Country Trade Name',
            'Therapeutic Area',
            'Package Set Status',
            'Application Type',
            'Currently Marketed Registration Package Set Country'

        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.expandFormField('Renewal Information')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.expandFormField('Marketing Information')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.expandFormField('Registration Status')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.expandFormField('ATC Code Information')

        const formValues = [
            'Authorization Number:',
            'Initial Authorization Date:',
            'Expiration Date/Authorization Valid Until:',
            'MAH:',
            'MAH Last Updated:',
            'Authorizing Health Authority:',
            'Registration Description',
            'Renewal Required:',
            'Next Renewal Submission Deadline Date:',
            'Last Renewal Date:',
            'First Package Set Marketed Date:',
            'Last Package Set Removed From the Market Date:',
            'Authorization Status:',
            'Authorization Status Date:',
            'ATC Code(s):',
            'ATC Code(s) Last Updated:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.minimizeRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Registrations.openpredefinedFilterAll()

        // Logout
        GQ.logout();
    })
    it('Registrations in Smart Content - User Data Binder', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.defaultPredefinedFilter('Current')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.assertDefaultPrefinedFilter()

        let expectedColumns = [
            'Authorization Number',
            '👁',
            'Authorization Status',
            'Authorization Status Date',
            'Application Name',
            'Application Status',
            'Initial/Original Authorization Date',
            'Reviewing Country',
            'PDS Country',
            'Country Trade Name',
            'Product Family Name',
            'Product Family Code',
            'Therapeutic Area',
            'Package Set Name',
            'Package Set Status',
            'Authorizing Health Authority',
            'Application Type',
            'Currently Marketed Registration Package Set Country'
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.getColumnID()
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
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.getColumnID(), ['Renewal Required'])

        // Verify Multichoice picker
        const namesList = [
            'Renewal Required',
            'Authorization Status',
            'Application Status',
            'Reviewing Country',
            'PDS Country',
            'Country Trade Name',
            'Therapeutic Area',
            'Package Set Status',
            'Application Type',
            'Currently Marketed Registration Package Set Country'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.expandFormField('Renewal Information')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.expandFormField('Marketing Information')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.expandFormField('Registration Status')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.expandFormField('ATC Code Information')

        const formValues = [
            'Authorization Number:',
            'Initial Authorization Date:',
            'Expiration Date/Authorization Valid Until:',
            'MAH:',
            'MAH Last Updated:',
            'Authorizing Health Authority:',
            'Registration Description',
            'Renewal Required:',
            'Next Renewal Submission Deadline Date:',
            'Last Renewal Date:',
            'First Package Set Marketed Date:',
            'Last Package Set Removed From the Market Date:',
            'Authorization Status:',
            'Authorization Status Date:',
            'ATC Code(s):',
            'ATC Code(s) Last Updated:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.minimizeRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.Registrations.openpredefinedFilterAll()

        // Logout
        GQ.logout();
    })
    it('Registrations in Smart Content - Product Specific Binder', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconofBinder()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.defaultPredefinedFilter('Current')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.assertDefaultPrefinedFilter()

        let expectedColumns = [
            'Authorization Number',
            '👁',
            'Authorization Status',
            'Authorization Status Date',
            'Application Name',
            'Application Status',
            'Initial/Original Authorization Date',
            'Reviewing Country',
            'PDS Country',
            'Country Trade Name',
            'Product Family Name',
            'Product Family Code',
            'Therapeutic Area',
            'Package Set Name',
            'Package Set Status',
            'Authorizing Health Authority',
            'Application Type',
            'Currently Marketed Registration Package Set Country'
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.getColumnID()
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
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.getColumnID(), ['Renewal Required'])

        // Verify Multichoice picker
        const namesList = [
            'Renewal Required',
            'Authorization Status',
            'Application Status',
            'Reviewing Country',
            'PDS Country',
            'Country Trade Name',
            'Therapeutic Area',
            'Package Set Status',
            'Application Type',
            'Currently Marketed Registration Package Set Country'

        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.expandFormField('Renewal Information')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.expandFormField('Marketing Information')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.expandFormField('Registration Status')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.expandFormField('ATC Code Information')

        const formValues = [
            'Authorization Number:',
            'Initial Authorization Date:',
            'Expiration Date/Authorization Valid Until:',
            'MAH:',
            'MAH Last Updated:',
            'Authorizing Health Authority:',
            'Registration Description',
            'Renewal Required:',
            'Next Renewal Submission Deadline Date:',
            'Last Renewal Date:',
            'First Package Set Marketed Date:',
            'Last Package Set Removed From the Market Date:',
            'Authorization Status:',
            'Authorization Status Date:',
            'ATC Code(s):',
            'ATC Code(s) Last Updated:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.minimizeRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Registrations.openpredefinedFilterAll()

        // Logout
        GQ.logout();
    })
    it('LOC Product List in Registrations', () => {
        // Login
        GQ.login();

        // Open Regulatory Affairs
        GQ.Planets.RegulatoryAffairs.openLandingPage()

        GQ.Planets.RegulatoryAffairs.Registrations.openLandingPage()

        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.open()

        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.simpleView()

        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.openDropdown()

        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.refresh()
        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.toggleFilter()
        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.advancedView()

        let advancedExpectedColumns = [
            'SKU Code (LLM)',
            'Country Trade Name',
            'Product',
            'Package Set Name',
            'Country',
            'Shelf-Life',
            'Shelf-Life (Months)',
            'Shelf-Life Status',
            'Shelf-Life QC Status',
            'Currently Marketed (Registration Package Set Country)',
            'Registration Package Set On Market Date',
            'Registration Package Set Off Market Date',
            'Marketing Company',
            'Authorization Status',
            'Storage Conditions (Drug Product)',
            'MAH',
            'Active Ingredients',
            'Procedure Type',
            'Authorization Number',
            'Procedure Identifier'
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.advancedColumnName()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < advancedExpectedColumns.length; i++) {
                expect(availableCols).to.include(advancedExpectedColumns[i])
            }
        })
        // Verify Multichoice picker
        const advancedNamesList = [
            'Country Trade Name',
            'Country',
            'Shelf-Life',
            'Shelf-Life (Months)',
            'Shelf-Life Status',
            'Shelf-Life QC Status',
            'Currently Marketed (Registration Package Set Country)',
            'Marketing Company',
            'Authorization Status',
            'MAH',
            'Procedure Type'
        ]
        //  GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.FilterOpen()

        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.checkMultiChoicePickerColumns(advancedNamesList)

        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.refresh()

        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.toggleFilter()

        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.simpleView()

        let simpleExpectedColumns = [
            'SKU Code (LLM)',
            'Country Trade Name',
            'Product',
            'Package Set Name',
            'Country',
            'Shelf-Life',
            'Shelf-Life (Months)',
            'Shelf-Life Status',
            'Shelf-Life QC Status',
            'Currently Marketed (Registration Package Set Country)',
            'Registration Package Set On Market Date',
            'Registration Package Set Off Market Date',
            'Marketing Company',
            'Authorization Status'
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.columnName()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < simpleExpectedColumns.length; i++) {
                expect(availableCols).to.include(simpleExpectedColumns[i])
            }
        })

        // Verify Multichoice picker
        const namesList = [
            'Country Trade Name',
            'Country',
            'Shelf-Life',
            'Shelf-Life (Months)',
            'Shelf-Life Status',
            'Shelf-Life QC Status',
            'Currently Marketed (Registration Package Set Country)',
            'Marketing Company',
            'Authorization Status'
        ]

        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.refresh()

        GQ.Planets.RegulatoryAffairs.Registrations.LOCProductList.toggleFilter()
        // Logout
        GQ.logout();
    })

})

