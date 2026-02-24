import { GQTest } from '../../jj-pages/GQTest'
// Sprint 7
describe('Sprint 7', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('Allows APR/PQR view of Nonconformances (COMET)', () => {

        // Login
        GQ.login()

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.NonConformances()
        
         GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.APRPQRView.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.APRPQRView.open()

       


        // APR/PQR view
        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Name',
            'Source',
            'Created Date',
            'Issue Type',
            'Site Name',
            'Highest Risk Score',
            'Level 1 Immediate Cause',
            'Level 2 Immediate Cause',
            'Immediate Cause Sub Category',
            'Level 1 Root Cause',
            //'Level Root 2 Cause',
            'Root Cause Sub Category',
            'Status',
            'Stage',
            'Date Closed',
            //'Product Grouping',
            'Material or Item',
            'Material Description',
            'Batch ID/Lot No',
            'Disposition Type',
            'Related CAPA and State',
            'Related Correction and State',
            'Related Effectiveness Review and Status'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.APRPQRView.columnHeaderID()
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
        const namesList = ['Source', 'Issue Type', 'Site Name', 'Highest Risk Score', 'Status', 'Stage']

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.APRPQRView.checkMultiChoicePickerColumns(namesList)

        // Maximize selector
        GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

        // Login
        GQ.logout()

    })
})
