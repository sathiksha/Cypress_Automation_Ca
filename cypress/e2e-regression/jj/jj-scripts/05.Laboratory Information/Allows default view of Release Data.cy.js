import { GQTest } from '../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('Allows default view of Release Data - Planet', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Laboratory Information
        GQ.Planets.LaboratoryInformation.openLandingPage()

        // Release Data
        GQ.Planets.LaboratoryInformation.ReleaseData.openLandingPage()

        let expectedColumnsQXD = [
            'Batch Number',
            'Material',
            'Product/Material Description',
            'Sample ID',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status',
            'SMD Reference',
            'Site',
            'Manufacture Site',
            'Manufacture Date',
            'Testing Date',
            'QC Release Date'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.LaboratoryInformation.ReleaseData.getColumnID()
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
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status',
            'Site',
            'Manufacture Site'
        ]


        GQ.Planets.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns(namesList)


        // Predefined Filtere - All
        GQ.Planets.LaboratoryInformation.ReleaseData.viewAll()

        // Verify and Report Predefined Filter
        GQ.Planets.LaboratoryInformation.ReleaseData.viewVerifyandReport()

        GQ.logout()
    })
    it('Allows default view of Release Data - Product', () => {
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

        //Laboratory Information
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

        //Release Data
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.open()

        let expectedColumnsQXD = [
            'Batch Number',
            'Material',
            'Product/Material Description',
            'Sample ID',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status',
            'SMD Reference',
            'Site',
            'Manufacture Site',
            'Manufacture Date',
            'Testing Date',
            'QC Release Date'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.getColumnID()
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
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status',
            'Site',
            'Manufacture Site'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.viewAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.viewVerifyandReport()

        GQ.logout()
    })
    it('Allows default view of Release Data  - Smart Content Admin Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.openLandingPage()

        let expectedColumnsQXD = [
            'Batch Number',
            'Material',
            'Product/Material Description',
            'Sample ID',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status',
            'SMD Reference',
            'Site',
            'Manufacture Site',
            'Manufacture Date',
            'Testing Date',
            'QC Release Date'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.getColumnID()
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
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status',
            'Site',
            'Manufacture Site'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns(namesList)

        //View All
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.viewAll()

        //Verify And Report
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.viewVerifyandReport()

        GQ.logout()
    })
    it('Allows default view of Release Data - Linked Content Admin Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.open()

        //Link Data
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.linkSibling(0)


        let expectedColumnsQXD = [
            'Batch Number',
            'Material',
            'Product/Material Description',
            'Sample ID',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status',
            'SMD Reference',
            'Site',
            'Manufacture Site',
            'Manufacture Date',
            'Testing Date',
            'QC Release Date'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.getColumnID()
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
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status',
            'Site',
            'Manufacture Site'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns(namesList)

        GQ.logout()
    })
    it('Allows default view of Release Data  - Smart Content User Binder', () => {

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
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        //Open Laboratory Information
        cy.contains('Laboratory Information').should('exist').click()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.ReleaseData.open()

        let expectedColumnsQXD = [
            'Batch Number',
            'Material',
            'Product/Material Description',
            'Sample ID',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status',
            'SMD Reference',
            'Site',
            'Manufacture Site',
            'Manufacture Date',
            'Testing Date',
            'QC Release Date'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.ReleaseData.getColumnID()
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
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status',
            'Site',
            'Manufacture Site'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.ReleaseData.checkMultiChoicePickerColumns(namesList)

        //View All
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.ReleaseData.viewAll()

        //Verify And Report
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.ReleaseData.viewVerifyandReport()

        GQ.logout()
    })
    it('Allows default view of Release Data - Linked Content User Binder', () => {

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
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        //Release Data
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.open()
   
        //Link Sibiling
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.linkSiblingItem(0)

        let expectedColumnsQXD = [
            'Batch Number',
            'Material',
            'Product/Material Description',
            'Sample ID',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status',
            'SMD Reference',
            'Site',
            'Manufacture Site',
            'Manufacture Date',
            'Testing Date',
            'QC Release Date'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.getHeaderID()
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
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status',
            'Site',
            'Manufacture Site'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.multiChoicePickerColumns(namesList)

        GQ.logout()
    })
    it('Allows default view of Release Data  - Smart Content Product Specific Binder', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
    
        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')


        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.ReleaseData.open()

        let expectedColumnsQXD = [
            'Batch Number',
            'Material',
            'Product/Material Description',
            'Sample ID',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status',
            'SMD Reference',
            'Site',
            'Manufacture Site',
            'Manufacture Date',
            'Testing Date',
            'QC Release Date'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.ReleaseData.getColumnID()
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
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status',
            'Site',
            'Manufacture Site'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.ReleaseData.checkMultiChoicePickerColumns(namesList)

        //Predefined FIlters
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.ReleaseData.viewAll()
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.ReleaseData.viewVerifyandReport()

        GQ.logout()

    })
    it('Allows default view of Release Data - Linked Content Product Specific Binder', () => {

        const GQ = new GQTest();
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
    
        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        //Release Data
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Laboratory_Information_2||scClass=VLayout||index=6||length=9||classIndex=0||classLength=1||scClassIndex=6||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=4||classIndex=2||classLength=4||roleIndex=2||roleLength=4||title=Release%20Data||scRole=button]/').click()

        //Link Sibiling
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.linkSiblingItem(0)

        let expectedColumnsQXD = [
            'Batch Number',
            'Material',
            'Product/Material Description',
            'Sample ID',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status',
            'SMD Reference',
            'Site',
            'Manufacture Site',
            'Manufacture Date',
            'Testing Date',
            'QC Release Date'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.getHeaderID()
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
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status',
            'Site',
            'Manufacture Site'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.multiChoicePickerColumns(namesList)

        GQ.logout()
    })
})