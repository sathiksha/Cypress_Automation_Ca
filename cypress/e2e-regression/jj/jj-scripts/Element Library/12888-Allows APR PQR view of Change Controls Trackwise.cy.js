import { GQTest } from '../../jj-pages/GQTest'
// Sprint 6
describe('Sprint 6', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('Allows APR/PQR view of Change Controls (Trackwise)', () => {

        // Login
        GQ.login("PQM360 System Administrator")

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        // Quality Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        // Change controls
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.selectTrackwise()
        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.open()

        // APR/PQR view
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.APQRView.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Name',
            'CC Approval Date',
            'Site Name',
            'Change Type',
            'CC Level',
            'Type Of Change',
            'State',
            'Source of Change',
            'Creation Date',
            'Date Closed',
            'Product Grouping',
            'Material or Item',
            'Material Description',
            'Batch ID/Lot Number'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.APQRView.columnID()
        )
            .then(tableInfo => {
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
        const namesList = ['Site Name', 'Change Type', 'CC Level', 'Type Of Change', 'State']
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.ChangeControls.Filtered.APQRView.checkMultiChoicePickerColumns(namesList)

        // Maximize selector
        GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

        // Login 
        GQ.logout()

    })
})