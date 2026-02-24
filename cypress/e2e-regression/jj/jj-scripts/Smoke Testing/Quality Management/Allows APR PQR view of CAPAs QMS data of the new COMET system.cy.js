import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Allows APR PQR view of CAPAS', () => {
    it('Allows APR PQR view of CAPAs QMS data of the new COMET system', () => {

        // Login
        GQ.login();

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

        // Product Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.openLandingPage()

        // Quality Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        // CAPAs
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()

        // APR PQR view
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.clickAPRPQRView()

        // Get Colum Names
        let expectedColumns = [
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
            'Related CPA/Correction and State'
        ]


        // Read column names
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent.trim())
            })

            cy.log(JSON.stringify(availableCols))
            for (let i = 0; i < expectedColumns.length; i++) {
                expect(availableCols).to.include(expectedColumns[i])
            }
        })

        cy.wait(2000)

        const namesList = ['Site Name', 'Status', 'Stage', 'CAPA Type'];

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.checkMultiChoicePickerColumns(namesList);

        // Logout
        GQ.logout()


    })
})