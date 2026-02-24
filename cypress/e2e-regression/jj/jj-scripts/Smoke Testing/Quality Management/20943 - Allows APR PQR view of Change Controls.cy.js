import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Allows APR PQR view of Change Controls (COMET)', () => {
    it('20943 - Allows APR PQR view of Change Controls (COMET) - Product', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.viewComet()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.APRPQRView.open()

        let expectedColumnsQXD = [
            '👁',
            'Number',
            'Change Risk Level',
            'Title',
            'Change Category',
            'Reason for Change',
            'Status',
            'Stage',
            'Legacy Reference Number',
            'Change Plan Approval Date',
            'Impacted Site w/Child CC #',
            'J&J Site Name',
            'J&J Site Name (Impacted Organization)',
            'Site/Function Details',
            'Material Description',
            'Material Item',
            'Materials or Indirect Materials',
            'Batch ID/Lot Number',
            'Related Batches',
            'Trackwise Type Of Change',
            'Trackwise Source Of Change',
            'Impacted Equipment List',
            'Impacted Equipment Information'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.APRPQRView.getColumnID()
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
            'Change Risk Level',
            'Change Category',
            'Reason for Change',
            'Status',
            'Stage',
            'J&J Site Name',
            'J&J Site Name (Impacted Organization)',
            'Material Item'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.APRPQRView.checkMultiChoicePickerColumns(namesList)
        // Logout
        GQ.logout()

    })
     it('20943 - Allows Parent CC - Implementations view of Change Controls (COMET) - Product', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.viewComet()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.ParentCCImplementationsview.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Change Plan Approval Date',
            'J&J Site Name',
            'Overall Change Risk Level',
            'Title',
            'Change Category',
            'Reason for Change',
            'Status',
            'Stage',
            'Implementation',
            'Implementation J&J Site Name',
            'Implementation Status',
            'Implementation Stage',
            'Implementation Task Completion Date'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.ParentCCImplementationsview.getColumnID()
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
            'J&J Site Name',
            'Overall Change Risk Level',
            'Change Category',
            'Reason for Change',
            'Implementation Stage',
            'Implementation Status',
            'Status',
            'Stage',
            'Implementation J&J Site Name'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.ParentCCImplementationsview.checkMultiChoicePickerColumns(namesList)
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.ParentCCImplementationsview.refresh();
        // Logout
        GQ.logout()

    })
     it('20943 - Allows Child CC - Implementations view of Change Controls (COMET) - Product', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.viewComet()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.ChildCCImplementations.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Change Plan Approval Date',
            'J&J Site Name',
            'Overall Change Risk Level',
            'Title',
            'Change Category',
            'Reason for Change',
            'Status',
            'Stage',
            'Child Change Control',
            'Child CC: J&J Site Name',
            'Child CC: Implementation',
            'Child CC: Implementation J&J Site Name',
            'Child CC: Implementation Status',
            'Child CC: Implementation Stage',
            'Child CC: Implementation Task Completion Date'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.ChildCCImplementations.getColumnID()
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
            'J&J Site Name',
            'Overall Change Risk Level',
            'Change Category',
            'Reason for Change',
            'Status',
            'Stage',
            'Child CC: J&J Site Name',
            'Child CC: Implementation J&J Site Name',
            'Child CC: Implementation Status',
            'Child CC: Implementation Stage'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.ChildCCImplementations.checkMultiChoicePickerColumns(namesList)

        // Logout
        GQ.logout()

    })
})