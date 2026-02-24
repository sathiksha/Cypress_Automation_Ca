import { GQTest } from '../../../jj-pages/GQTest'
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
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        // Product Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.openLandingPage()

        // Complaints Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.openLandingPage()

        // Complaints Records Sub Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.openLandingPage()

        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.openLandingPage()

        // APR/PQR View
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.open()

        // Get Colum Names
        let expectedColumns = [
            'Tracking Number',
            '👁',
            'Product Family Name',
            'Product Name',
            'Region',
            'Issue Status',
            'Disposition',
            'Date Entered PQMS',
            'Packaging Adjusted Site',
            'Country',
            'Category Manufacturing Adjusted Site',
            'Defect Category Level 1 Description',
            'Defect Category Level 2 Description',
            'Defect Category Level 3 Description',
            'Analysis Category Level 1 Description',
            'Analysis Category Level 2 Description',
            'Analysis Category Level 3 Description',
            'Company',
            'Date Closed',
            'File Type',
            'From',
            'Potentially Reportable',
            'Regulatory Class',
            'Reopened Indicator',
            'Lot/Control #',
            'Investigation/CAPA Reference #',
            'Investigation Comment Title',
            'Seriousness',
            'Root Cause Level 1 Description',
            'Root Cause Level 2 Description'
        ]
        // Read column names
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.getColumnName()
        ).then(tableInfo=>{
            let availableCols = []
            tableInfo.columns.map((obj)=>{
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
           for(let i=0;i<expectedColumns.length;i++){
            expect(availableCols).to.include(expectedColumns[i])
           }
        })

        // // Toggle Filter
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.toggleFilter()


        // Check Multi Choice picker
        
        const namesList = ['Product Family Name', 'Region', 'Issue Status', 'Disposition', 'Packaging Adjusted Site', 'Country', 'Category Manufacturing Adjusted Site', 'Defect Category Level 1 Description', 'Defect Category Level 2 Description',
            'Defect Category Level 3 Description', 'Analysis Category Level 1 Description', 'Analysis Category Level 2 Description', 'Analysis Category Level 3 Description', 'Seriousness', 'Root Cause Level 1 Description', 'Root Cause Level 2 Description'
        ];
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.checkMultiChoicePickerColumns(namesList);



    // Logout
    GQ.logout()


    })
})