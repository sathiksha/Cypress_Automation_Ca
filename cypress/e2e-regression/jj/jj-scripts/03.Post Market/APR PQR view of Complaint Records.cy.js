import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
describe('Sprint 3', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('Allows APR PQR view of Complaint Records', () => {

        // Login
        GQ.login()

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('My Family Test - Cypress')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        // Product Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.openLandingPage()

        // Complaints Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.openLandingPage()

        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.openLandingPage()

        // APR/PQR View
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.open()

        // Get Colum Names
        let expectedColumns = [
            '👁',
            'Tracking Number',
            'Product Name',
            'Lot/Control #',
            'Defect Category Level 1 Description',
            'Defect Category Level 2 Description',
            'Defect Category Level 3 Description',
            'Root Cause Level 1 Description',
            'Root Cause Level 2 Description',
            'Analysis Category Level 1 Description',
            'Analysis Category Level 2 Description',
            'Analysis Category Level 3 Description',
            'Disposition',
            'Investigation/CAPA Reference #',
            'Related CAPA and State',
            'Related Correction and State (ACT)',
            'Related Effectiveness Review and Status',
            'Category Manufacturing Adjusted Site',
            'Packaging Adjusted Site',
            'Date Entered in PQMS',
            'CMPL Investigation Title',
            'Product Family Name',
            'Region',
            'Issue Status',
            'Country',
            'Company',
            'Date Closed',
            'File Type',
            'From',
            'Potentially Reportable',
            'Regulatory Class',
            'Reopened Indicator',
            'Investigation Comment Title',
            'Seriousness'
        ]
        // Read column names
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.getColumnName()
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.closeSideBar()
        // Check Multi Choice picker
        const namesList = [
            'Defect Category Level 1 Description',
            'Defect Category Level 2 Description',
            'Defect Category Level 3 Description',
            'Root Cause Level 1 Description',
            'Root Cause Level 2 Description',
            'Analysis Category Level 1 Description',
            'Analysis Category Level 2 Description',
            'Analysis Category Level 3 Description',
            'Disposition',
            'Category Manufacturing Adjusted Site',
            'Packaging Adjusted Site',
            'Product Family Name',
            'Region',
            'Issue Status',
            'Country',
            'Seriousness',

        ];

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.checkMultiChoicePickerColumns(namesList);
        // Logout
        GQ.logout()


    })
})