import { GQTest } from '../../jj-pages/GQTest';
// Sprint 17
require('cypress-xpath');

describe('Laboratory Information  Stability Studies', () => {
    const GQ = new GQTest();

    it('16404--Laboratory Information  Stability Studies', () => {
        // Step 1: User login
        GQ.login();

        // Step 2: Open Laboratory Information planet
        GQ.Planets.LaboratoryInformation.openLandingPage();

        // Step 3: Expand the Stability Studies record
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.openLandingPage()

        let expectedColumnQXD = [

            'Study ID',
            'Batch Number',
            'Material',
            'Sample ID',
            'Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Actual Pull Date',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumnQXD.length; i++) {
                    expect(availableCols).to.include(expectedColumnQXD[i])
                }
            })

        // Verify Multichoice picker
        const nameList = ['Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status']
        cy.get(3000);
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.checkMultiChoicePickerColumns(nameList)

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.predefinedfilters()



        GQ.logout()
    })

    it('Product planet > Product Family/Product selection > Laboratory Information > Stability Studies', () => {
        // Step 1: User login
        GQ.login();
        GQ.Planets.Product.openLandingPage();
        GQ.Planets.Product.ProductFamilies.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE-A');

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.StabilityData.openLandingPage()

        let expectedColumnQXD = [

            'Study ID',
            'Batch Number',
            'Material',
            'Sample ID',
            'Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Actual Pull Date',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.StabilityData.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumnQXD.length; i++) {
                    expect(availableCols).to.include(expectedColumnQXD[i])
                }
            })

        // Verify Multichoice picker
        const nameList = ['Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status']
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.StabilityData.checkMultiChoicePickerColumns(nameList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.StabilityData.predefinedfilters()


    })




    it('the Admin Binder & Linked content', () => {

        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE-A');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.open()



        let expectedColumnQXD = [

            'Study ID',
            'Batch Number',
            'Material',
            'Sample ID',
            'Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Actual Pull Date',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumnQXD.length; i++) {
                    expect(availableCols).to.include(expectedColumnQXD[i])
                }
            })

        // Verify Multichoice picker
        const nameList = ['Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status']
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns(nameList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.predefinedfilters()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.linkSibling(2)

        let expectedColumn = [

            'Study ID',
            'Batch Number',
            'Material',
            'Sample ID',
            'Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Actual Pull Date',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumn.length; i++) {
                    expect(availableCols).to.include(expectedColumn[i])
                }
            })

        // Verify Multichoice picker
        const nameLis = ['Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status']
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns(nameLis)

        GQ.logout()
    })



    it('user data binder & Linked content', () => {

        GQ.login()


        GQ.Planets.Product.openLandingPage()

        // Open product family 
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        //Open APALUTAMIDE        
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE-A')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the Admin binder -Smart Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.open()


        let expectedColumnQXD = [

            'Study ID',
            'Batch Number',
            'Material',
            'Sample ID',
            'Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Actual Pull Date',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumnQXD.length; i++) {
                    expect(availableCols).to.include(expectedColumnQXD[i])
                }
            })

        // Verify Multichoice picker
        const nameList = ['Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status']
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns(nameList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.predefinedfilters()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.productlinkedStabilityData.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.productlinkedStabilityData.linkSibling(2)

        let expectedColumn = [

            'Study ID',
            'Batch Number',
            'Material',
            'Sample ID',
            'Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Actual Pull Date',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.productlinkedStabilityData.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumn.length; i++) {
                    expect(availableCols).to.include(expectedColumn[i])
                }
            })

        // Verify Multichoice picker
        const nameLis = ['Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status']
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.productlinkedStabilityData.checkMultiChoicePickerColumns(nameLis)

        GQ.logout()
    })



    it('product specific & linked content', () => {
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');

        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE-A');

        // Refresh and select the linked binder
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.open()

        let expectedColumnQXD = [

            'Study ID',
            'Batch Number',
            'Material',
            'Sample ID',
            'Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Actual Pull Date',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumnQXD.length; i++) {
                    expect(availableCols).to.include(expectedColumnQXD[i])
                }
            })

        // Verify Multichoice picker
        const nameList = ['Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status']
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.checkMultiChoicePickerColumns(nameList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.StabilityData.predefinedfilters()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.productlinkedStabilityData.open()
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.productlinkedStabilityData.linkSibling(2)




        let expectedColumn = [

            'Study ID',
            'Batch Number',
            'Material',
            'Sample ID',
            'Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Actual Pull Date',
            'Display Result',
            'Entered Result',
            'Units',
            'Limit Type ID',
            'COA Limit',
            'Verification Status'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.productlinkedStabilityData.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumn.length; i++) {
                    expect(availableCols).to.include(expectedColumn[i])
                }
            })

        // Verify Multichoice picker
        const nameLis = ['Manufacture Site',
            'Stability Site',
            'Analysis',
            'Measurement',
            'Condition',
            'Time Point',
            'Limit Type ID',
            'Verification Status']
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.productlinkedStabilityData.checkMultiChoicePickerColumns(nameLis)

        GQ.logout()



    })
})