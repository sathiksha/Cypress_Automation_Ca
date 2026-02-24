import { GQTest } from '../../jj-pages/GQTest';
// Sprint 4
require('cypress-xpath');

describe('16404--Laboratory Information  Stability Studies', () => {
    const GQ = new GQTest();

    it('16404-Laboratory Information  Stability Studies', () => {
        // Step 1: User login
        GQ.login();

        // Step 2: Open Laboratory Information planet
        GQ.Planets.LaboratoryInformation.openLandingPage();

        // Step 3: Expand the Stability Studies record
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.recordExpand()
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.Forecasts.open()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.Forecasts.Forecasts()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.Forecasts.toggleFilter()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.Forecasts.multichoicepicker()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.Inventories.open()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.Inventories.readInventories()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.Inventories.toggleFilter()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.Inventories.multichoicepicker()

        GQ.logout()
    })

    it('Laboratory Information > Stability Studies - Product', () => {
        // Step 1: User login
        GQ.login();

        GQ.Planets.Product.openLandingPage();

        GQ.Planets.Product.ProductFamilies.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Forecasts.open()

        let expectedColumnsQXD = [
            'Stability Site',
            'Study ID',
            'Product/Material Description',
            'Batch Number',
            'Storage Condition',
            'Date In Chamber',
            'Time Point',
            'Scheduled Pull Date',
            'Stability Protocol',
            'Packaging Site',
            'Manufacture Location',
            'Initiated Site'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Forecasts.columnHeaderID()
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
        const namesList = ['Stability Site', 'Storage Condition', 'Time Point', 'Packaging Site', 'Manufacture Location', 'Initiated Site']

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Forecasts.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Inventories.open()

        let expectedColumnQXD = [
            'Study ID',
            'Batch No.',
            'Material ID',
            'Product/Material Description',
            'Stability Site',
            'Condition',
            'Storage Unit',
            'Location',
            'Initial Quantity',
            'Future Quantity Required',
            'Current Quantity'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Inventories.columnHeaderID()
        ).then(tableInfo => {
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
        const nameList = ['Stability Site', 'Condition', 'Storage Unit', 'Location']

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Inventories.checkMultiChoicePickerColumns(nameList)


        GQ.logout()

    })

    it('Laboratory Information > Stability Studies - Admin Binder Smart content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.forecast.open()

        let expectedColumQXD = [
            'Stability Site',
            'Study ID',
            'Product/Material Description',
            'Batch Number',
            'Storage Condition',
            'Date In Chamber',
            'Time Point',
            'Scheduled Pull Date',
            'Stability Protocol',
            'Packaging Site',
            'Manufacture Location',
            'Initiated Site'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.forecast.columnHeaderID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumQXD.length; i++) {
                expect(availableCols).to.include(expectedColumQXD[i])
            }
        })

        // Verify Multichoice picker
        const namesList = ['Stability Site', 'Storage Condition', 'Time Point', 'Packaging Site', 'Manufacture Location', 'Initiated Site']

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.forecast.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.Inventories.open()

        let expectedColuQXD = [
            'Study ID',
            'Batch No.',
            'Material ID',
            'Product/Material Description',
            'Stability Site',
            'Condition',
            'Storage Unit',
            'Location',
            'Initial Quantity',
            'Future Quantity Required',
            'Current Quantity'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.Inventories.columnHeaderID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColuQXD.length; i++) {
                expect(availableCols).to.include(expectedColuQXD[i])
            }
        })

        // Verify Multichoice picker
        const nameList = ['Stability Site', 'Condition', 'Storage Unit', 'Location']

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.Inventories.checkMultiChoicePickerColumns(nameList)

        GQ.logout()
    })

    it('Laboratory Information > Stability Studies - Admin Binder Linked Content ', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.linkSibling(1)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.open()

        let expectedColumQXD = [
            'Stability Site',
            'Study ID',
            'Product/Material Description',
            'Batch Number',
            'Storage Condition',
            'Date In Chamber',
            'Time Point',
            'Scheduled Pull Date',
            'Stability Protocol',
            'Packaging Site',
            'Manufacture Location',
            'Initiated Site'



        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.columnHeaderID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumQXD.length; i++) {
                expect(availableCols).to.include(expectedColumQXD[i])
            }
        })

        // Verify Multichoice picker
        const namesList = ['Stability Site', 'Storage Condition', 'Time Point', 'Packaging Site', 'Manufacture Location', 'Initiated Site']

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.linkSibling(1)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.open()

        let expectedColuQXD = [
            'Study ID',
            'Batch No.',
            'Material ID',
            'Product/Material Description',
            'Stability Site',
            'Condition',
            'Storage Unit',
            'Location',
            'Initial Quantity',
            'Future Quantity Required',
            'Current Quantity'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.columnHeaderID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColuQXD.length; i++) {
                expect(availableCols).to.include(expectedColuQXD[i])
            }
        })

        // Verify Multichoice picker
        const nameList = ['Stability Site', 'Condition', 'Storage Unit', 'Location']

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.checkMultiChoicePickerColumns(nameList)

        GQ.logout()
    })

    it('Laboratory Information > Stability Studies - User Data Binder Smart Content', () => {

        GQ.login()


        GQ.Planets.Product.openLandingPage()

        // Open product family 
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        //Open APALUTAMIDE        
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the User binder -Smart Content



        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.stabilityStudy.open()
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.stabilityStudy.forecast.open()

        let expectedColumQXD = [
            'Stability Site',
            'Study ID',
            'Product/Material Description',
            'Batch Number',
            'Storage Condition',
            'Date In Chamber',
            'Time Point',
            'Scheduled Pull Date',
            'Stability Protocol',
            'Packaging Site',
            'Manufacture Location',
            'Initiated Site'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.stabilityStudy.forecast.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumQXD.length; i++) {
                    expect(availableCols).to.include(expectedColumQXD[i])
                }
            })

        // Verify Multichoice picker
        const namesList = ['Stability Site', 'Storage Condition', 'Time Point', 'Packaging Site', 'Manufacture Location', 'Initiated Site']

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.stabilityStudy.forecast.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.stabilityStudy.Inventories.open()

        let expectedColuQXD = [
            'Study ID',
            'Batch No.',
            'Material ID',
            'Product/Material Description',
            'Stability Site',
            'Condition',
            'Storage Unit',
            'Location',
            'Initial Quantity',
            'Future Quantity Required',
            'Current Quantity'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.stabilityStudy.Inventories.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColuQXD.length; i++) {
                    expect(availableCols).to.include(expectedColuQXD[i])
                }
            })

        // Verify Multichoice picker
        const nameList = ['Stability Site', 'Condition', 'Storage Unit', 'Location']

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.stabilityStudy.Inventories.checkMultiChoicePickerColumns(nameList)

        GQ.logout()
    })

    it('Laboratory Information > Stability Studies - User Data Binder Linked Content', () => {

        GQ.login()

        GQ.Planets.Product.openLandingPage()

        // Open product family 
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        //Open APALUTAMIDE        
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the Admin binder -Smart Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder');

        // Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.linkSibling(1)

        let expectedColumQXD = [
            'Stability Site',
            'Study ID',
            'Product/Material Description',
            'Batch Number',
            'Storage Condition',
            'Date In Chamber',
            'Time Point',
            'Scheduled Pull Date',
            'Stability Protocol',
            'Packaging Site',
            'Manufacture Location',
            'Initiated Site'



        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumQXD.length; i++) {
                    expect(availableCols).to.include(expectedColumQXD[i])
                }
            })

        // Verify Multichoice picker
        const namesList = ['Stability Site', 'Storage Condition', 'Time Point', 'Packaging Site', 'Manufacture Location', 'Initiated Site']

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.openLandingPage()




        let expectedColuQXD = [
            'Study ID',
            'Batch No.',
            'Material ID',
            'Product/Material Description',
            'Stability Site',
            'Condition',
            'Storage Unit',
            'Location',
            'Initial Quantity',
            'Future Quantity Required'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColuQXD.length; i++) {
                    expect(availableCols).to.include(expectedColuQXD[i])
                }
            })

        // Verify Multichoice picker
        const nameList = ['Stability Site', 'Condition', 'Storage Unit', 'Location']

        //Linked Content has Multichoice Picker issue
        // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.checkMultiChoicePickerColumns(nameList)

        GQ.logout()
    })

    it('Laboratory Information > Stability Studies - Product Specific Binder Smart content', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconForBinder()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.LaboratoryInformation.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.LaboratoryInformation.StabilityStudies.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.LaboratoryInformation.StabilityStudies.forecast.open()

        let expectedColumQXD = [
            'Stability Site',
            'Study ID',
            'Product/Material Description',
            'Batch Number',
            'Storage Condition',
            'Date In Chamber',
            'Time Point',
            'Scheduled Pull Date',
            'Stability Protocol',
            'Packaging Site',
            'Manufacture Location',
            'Initiated Site'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.forecast.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumQXD.length; i++) {
                    expect(availableCols).to.include(expectedColumQXD[i])
                }
            })

        // Verify Multichoice picker
        const namesList = ['Stability Site', 'Storage Condition', 'Time Point', 'Packaging Site', 'Manufacture Location', 'Initiated Site']

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.forecast.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.Inventories.open()

        let expectedColuQXD = [
            'Study ID',
            'Batch No.',
            'Material ID',
            'Product/Material Description',
            'Stability Site',
            'Condition',
            'Storage Unit',
            'Location',
            'Initial Quantity',
            'Future Quantity Required',
            'Current Quantity'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.Inventories.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColuQXD.length; i++) {
                    expect(availableCols).to.include(expectedColuQXD[i])
                }
            })

        // Verify Multichoice picker
        const nameList = ['Stability Site', 'Condition', 'Storage Unit', 'Location']

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.LaboratoryInformation.stabilityStudies.Inventories.checkMultiChoicePickerColumns(nameList)

        GQ.logout()
    })

    it('Laboratory Information > Stability Studies - Product Specific Binder Linked content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconForBinder()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')

        cy.wait(5000)

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.linkSibling(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.open()

        let expectedColumQXD = [
            'Stability Site',
            'Study ID',
            'Product/Material Description',
            'Batch Number',
            'Storage Condition',
            'Date In Chamber',
            'Time Point',
            'Scheduled Pull Date',
            'Stability Protocol',
            'Packaging Site',
            'Manufacture Location',
            'Initiated Site'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumQXD.length; i++) {
                    expect(availableCols).to.include(expectedColumQXD[i])
                }
            })

        // Verify Multichoice picker
        const namesList = ['Stability Site', 'Storage Condition', 'Time Point', 'Packaging Site', 'Manufacture Location', 'Initiated Site']

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.forecast.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.linkSiblingItem(1)


        let expectedColuQXD = [
            'Study ID',
            'Batch No.',
            'Material ID',
            'Product/Material Description',
            'Stability Site',
            'Condition',
            'Storage Unit',
            'Location',
            'Initial Quantity',
            'Future Quantity Required',
            'Current Quantity'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColuQXD.length; i++) {
                    expect(availableCols).to.include(expectedColuQXD[i])
                }
            })

        // Verify Multichoice picker
        const nameList = ['Stability Site', 'Condition', 'Storage Unit', 'Location']

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.checkMultiChoicePickerColumns(nameList)

        GQ.logout()

    })
})