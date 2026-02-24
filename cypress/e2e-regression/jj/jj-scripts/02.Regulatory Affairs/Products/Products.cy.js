import { GQTest } from '../../../jj-pages/GQTest'
const GQ = new GQTest();
describe('02. Regulatory Affairs', () => {
    it('Products in Planet', () => {
        // Login
        GQ.login();

        // Open Regulatory Affairs
        GQ.Planets.RegulatoryAffairs.openLandingPage()

        GQ.Planets.RegulatoryAffairs.Products.openLandingPage()

        let expectedColumns = [
            'Product ID',
            '👁',
            'Product Name',
            'Product Code / JNJ Number',
            'Product Status',
            'Intended Use',
            'Product Dose Form',
            'Family Name',
            'Family Code',
            'Therapeutic Area',
            'Associated Trade Names',
            'Active Ingredients',
            'Max Shelf Life - Climate Zone I',
            'Max Shelf Life - Climate Zone II',
            'Max Shelf Life - Climate Zone III',
            'Max Shelf Life - Climate Zone IVa',
            'Max Shelf Life - Climate Zone IVb',
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.RegulatoryAffairs.Products.getColumnID()
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


        // Verify Multichoice picker
        const namesList = [
            'Product Status',
            'Therapeutic Area'

        ]
        GQ.Planets.RegulatoryAffairs.Products.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.RegulatoryAffairs.Products.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.RegulatoryAffairs.Products.openARecord()

        const formValues = [
            'Product ID:',
            'Product Name:',
            'Product Code / JNJ Number:',
            'Product Status:',
            'Intended Use:',
            'Product Dose Form:',
            'Family Name:',
            'Family Code:',
            'Therapeutic Area:',
            'Associated Trade Names:',
            'Active Ingredients:',
            'Max Shelf Life - Climate Zone I:',
            'Max Shelf Life - Climate Zone II:',
            'Max Shelf Life - Climate Zone III:',
            'Max Shelf Life - Climate Zone IVa:',
            'Max Shelf Life - Climate Zone IVb:'
        ]

        GQ.Planets.RegulatoryAffairs.Products.checkformsfields(formValues)
        // Logout
        GQ.logout();
    })
    it('Products in Product Family', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.openLandingPage()


        let expectedColumns = [
            'Product ID',
            '👁',
            'Product Name',
            'Product Code / JNJ Number',
            'Product Status',
            'Intended Use',
            'Product Dose Form',
            'Family Name',
            'Family Code',
            'Therapeutic Area',
            'Associated Trade Names',
            'Active Ingredients',
            'Max Shelf Life - Climate Zone I',
            'Max Shelf Life - Climate Zone II',
            'Max Shelf Life - Climate Zone III',
            'Max Shelf Life - Climate Zone IVa',
            'Max Shelf Life - Climate Zone IVb',
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.getColumnID()
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


        // Verify Multichoice picker
        const namesList = [
            'Product Status',
            'Therapeutic Area'

        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.openARecord()

        const formValues = [
            'Product ID:',
            'Product Name:',
            'Product Code / JNJ Number:',
            'Product Status:',
            'Intended Use:',
            'Product Dose Form:',
            'Family Name:',
            'Family Code:',
            'Therapeutic Area:',
            'Associated Trade Names:',
            'Active Ingredients:',
            'Max Shelf Life - Climate Zone I:',
            'Max Shelf Life - Climate Zone II:',
            'Max Shelf Life - Climate Zone III:',
            'Max Shelf Life - Climate Zone IVa:',
            'Max Shelf Life - Climate Zone IVb:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.checkformsfields(formValues)
        // Logout
        GQ.logout();
    })
    it('Products in Smart Content - Admin Data Binder', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.openLandingPage()


        let expectedColumns = [
            'Product ID',
            '👁',
            'Product Name',
            'Product Code / JNJ Number',
            'Product Status',
            'Intended Use',
            'Product Dose Form',
            'Family Name',
            'Family Code',
            'Therapeutic Area',
            'Associated Trade Names',
            'Active Ingredients',
            'Max Shelf Life - Climate Zone I',
            'Max Shelf Life - Climate Zone II',
            'Max Shelf Life - Climate Zone III',
            'Max Shelf Life - Climate Zone IVa',
            'Max Shelf Life - Climate Zone IVb',
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.getColumnID()
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


        // Verify Multichoice picker
        const namesList = [
            'Product Status',
            'Therapeutic Area'

        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.openARecord()

        const formValues = [
            'Product ID:',
            'Product Name:',
            'Product Code / JNJ Number:',
            'Product Status:',
            'Intended Use:',
            'Product Dose Form:',
            'Family Name:',
            'Family Code:',
            'Therapeutic Area:',
            'Associated Trade Names:',
            'Active Ingredients:',
            'Max Shelf Life - Climate Zone I:',
            'Max Shelf Life - Climate Zone II:',
            'Max Shelf Life - Climate Zone III:',
            'Max Shelf Life - Climate Zone IVa:',
            'Max Shelf Life - Climate Zone IVb:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.minimiseRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout();
    })
    it('Products in Linked Content - Admin Data Binder', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderProductOpen()
        
        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.open()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.open()
 
        let expectedColumns = [
            'Product ID',
            '👁',
            'Product Name',
            'Product Code / JNJ Number',
            'Product Status',
            'Intended Use',
            'Product Dose Form',
            'Family Name',
            'Family Code',
            'Therapeutic Area',
            'Associated Trade Names',
            'Active Ingredients',
            'Max Shelf Life - Climate Zone I',
            'Max Shelf Life - Climate Zone II',
            'Max Shelf Life - Climate Zone III',
            'Max Shelf Life - Climate Zone IVa',
            'Max Shelf Life - Climate Zone IVb',
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.getColumnID()
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
      
       GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products. ProductBinderlinkSibling()

         // Verify Multichoice picker
        const namesList = [
            'Product Status',
            'Therapeutic Area'

        ]
       GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.formsFieldsValidation()
  
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.minimizeARecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout();
    })
    it('Products in Smart Content - User Data Binder', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.products.openLandingPage()


        let expectedColumns = [
            'Product ID',
            '👁',
            'Product Name',
            'Product Code / JNJ Number',
            'Product Status',
            'Intended Use',
            'Product Dose Form',
            'Family Name',
            'Family Code',
            'Therapeutic Area',
            'Associated Trade Names',
            'Active Ingredients',
            'Max Shelf Life - Climate Zone I',
            'Max Shelf Life - Climate Zone II',
            'Max Shelf Life - Climate Zone III',
            'Max Shelf Life - Climate Zone IVa',
            'Max Shelf Life - Climate Zone IVb',
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.products.getColumnID()
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


        // Verify Multichoice picker
        const namesList = [
            'Product Status',
            'Therapeutic Area'

        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.products.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.products.openARecord()

        const formValues = [
            'Product ID:',
            'Product Name:',
            'Product Code / JNJ Number:',
            'Product Status:',
            'Intended Use:',
            'Product Dose Form:',
            'Family Name:',
            'Family Code:',
            'Therapeutic Area:',
            'Associated Trade Names:',
            'Active Ingredients:',
            'Max Shelf Life - Climate Zone I:',
            'Max Shelf Life - Climate Zone II:',
            'Max Shelf Life - Climate Zone III:',
            'Max Shelf Life - Climate Zone IVa:',
            'Max Shelf Life - Climate Zone IVb:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.products.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.products.minimizeRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.products.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout();
    })
    it('Products in Linked Content - User Data Binder', () => {
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
         GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderProductOpen()
        
        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.open()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.open()

        let expectedColumns = [
            'Product ID',
            '👁',
            'Product Name',
            'Product Code / JNJ Number',
            'Product Status',
            'Intended Use',
            'Product Dose Form',
            'Family Name',
            'Family Code',
            'Therapeutic Area',
            'Associated Trade Names',
            'Active Ingredients',
            'Max Shelf Life - Climate Zone I',
            'Max Shelf Life - Climate Zone II',
            'Max Shelf Life - Climate Zone III',
            'Max Shelf Life - Climate Zone IVa',
            'Max Shelf Life - Climate Zone IVb',
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.getColumnID()
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

       
     GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products. UserBinderLinkSibling()

        // Verify Multichoice picker
        const namesList = [
            'Product Status',
            'Therapeutic Area'

        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.openARecord()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.UserBinderFormsFieldsValidation()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.minimizeARecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout();
    })
    it('Products in Smart Content - Product Specific Binder', () => {
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

        cy.get('td').contains('MSAT Product View - Cypress Test Admin Binder').parent('tr').within(() => {
            cy.get('span[style*="opener_closed"]').click()
        })
        // GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconofBinder()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')


        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Products.open()


        let expectedColumns = [
            'Product ID',
            '👁',
            'Product Name',
            'Product Code / JNJ Number',
            'Product Status',
            'Intended Use',
            'Product Dose Form',
            'Family Name',
            'Family Code',
            'Therapeutic Area',
            'Associated Trade Names',
            'Active Ingredients',
            'Max Shelf Life - Climate Zone I',
            'Max Shelf Life - Climate Zone II',
            'Max Shelf Life - Climate Zone III',
            'Max Shelf Life - Climate Zone IVa',
            'Max Shelf Life - Climate Zone IVb',
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Products.getColumnID()
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


        // Verify Multichoice picker
        const namesList = [
            'Product Status',
            'Therapeutic Area'

        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Products.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Products.openARecord()

        const formValues = [
            'Product ID:',
            'Product Name:',
            'Product Code / JNJ Number:',
            'Product Status:',
            'Intended Use:',
            'Product Dose Form:',
            'Family Name:',
            'Family Code:',
            'Therapeutic Area:',
            'Associated Trade Names:',
            'Active Ingredients:',
            'Max Shelf Life - Climate Zone I:',
            'Max Shelf Life - Climate Zone II:',
            'Max Shelf Life - Climate Zone III:',
            'Max Shelf Life - Climate Zone IVa:',
            'Max Shelf Life - Climate Zone IVb:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Products.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Products.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.RegulatoryAffairs.Products.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout();
    })
    it('Products in Linked Content - Product Specific Binder', () => {
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
         GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderProductOpen()
        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.open()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.open()

        let expectedColumns = [
            'Product ID',
            '👁',
            'Product Name',
            'Product Code / JNJ Number',
            'Product Status',
            'Intended Use',
            'Product Dose Form',
            'Family Name',
            'Family Code',
            'Therapeutic Area',
            'Associated Trade Names',
            'Active Ingredients',
            'Max Shelf Life - Climate Zone I',
            'Max Shelf Life - Climate Zone II',
            'Max Shelf Life - Climate Zone III',
            'Max Shelf Life - Climate Zone IVa',
            'Max Shelf Life - Climate Zone IVb',
        ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.getColumnID()
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


        // Verify Multichoice picker
        const namesList = [
            'Product Status',
            'Therapeutic Area'

        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.openARecord()

        const formValues = [
            'Product ID:',
            'Product Name:',
            'Product Code / JNJ Number:',
            'Product Status:',
            'Intended Use:',
            'Product Dose Form:',
            'Family Name:',
            'Family Code:',
            'Therapeutic Area:',
            'Associated Trade Names:',
            'Active Ingredients:',
            'Max Shelf Life - Climate Zone I:',
            'Max Shelf Life - Climate Zone II:',
            'Max Shelf Life - Climate Zone III:',
            'Max Shelf Life - Climate Zone IVa:',
            'Max Shelf Life - Climate Zone IVb:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.minimizeARecord()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.Products.rightClickBookmark()

        cy.checkBookmarkFunctionlity()

        // Logout
        GQ.logout();
    })

})