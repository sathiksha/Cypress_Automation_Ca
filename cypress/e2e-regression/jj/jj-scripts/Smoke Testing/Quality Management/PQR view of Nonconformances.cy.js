import { GQTest } from '../../../jj-pages/GQTest'
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.NonConformances()
  

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Name',
            'Created Date',
            'Site Name',
            'Status',
            'Stage',
            'Material or Item',
            'Material Description',
            'Batch ID/Lot No',
        ]
        // Read column
        cy.getColumnsAndTypes(
               GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.getColumnID()
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

     GQ.logout();
    })
})