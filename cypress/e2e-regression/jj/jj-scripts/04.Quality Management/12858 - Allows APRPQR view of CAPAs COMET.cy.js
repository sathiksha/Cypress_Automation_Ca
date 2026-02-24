import { GQTest } from '../../jj-pages/GQTest'
// Sprint 4
describe('Sprint 6', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('Allows APR/PQR view of CAPAs (COMET)', () => {

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

        // Non Conformances
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()

        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.open()

        // APR/PQR view
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.clickAPRPQRView()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Related Nonconformances',
            'Name',
            'Created Date',
            'Site Name',
            'Status',
            'Stage',
            'CAPA Type',
            'Completed On',
            'Level 1 Cause',
            'Level 2 Cause',
            'Cause Sub-Category',
            'Material or Item',
            'Material Description',
            'Batch ID/Lot No',
            'Disposition Type',
            'Related CPA/Correction and State',
            'Related Effectiveness Review and Status'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.getColumnID()
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
        const namesList = ['Source', 'Issue Type', 'Site Name', 'Highest Risk Score', 'Status', 'Stage']
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.clickAPRPQRView()

        // Maximize selector
        GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

        // Login
        GQ.logout()

    })
})