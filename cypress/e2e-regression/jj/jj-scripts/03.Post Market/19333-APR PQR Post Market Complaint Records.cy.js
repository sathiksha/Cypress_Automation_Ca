import { GQTest } from '../../jj-pages/GQTest'

describe('19333-APR PQR Post Market Complaint Records', () => {
    const GQ = new GQTest();
    Cypress.config('defaultCommandTimeout', 180000);
    it('Planet and Product Family', () => {

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

        cy.wait(2000)

        // close the selector screen on left
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/selectorButton/closeButton/icon').click()


        // Check Multi Choice picker

        const namesList = ['Defect Category Level 1 Description', 'Defect Category Level 2 Description', 'Defect Category Level 3 Description', 'Root Cause Level 1 Description',
            'Root Cause Level 2 Description', 'Analysis Category Level 1 Description', 'Analysis Category Level 2 Description', 'Analysis Category Level 3 Description'];

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.checkMultiChoicePickerColumns(namesList);

        const columnNames = ['Category Manufacturing Adjusted Site', 'Packaging Adjusted Site', 'Product Family Name', 'Region', 'Issue Status', 'Country', 'Seriousness']

        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.gridId()).rightclick()
        cy.contains('Columns...').click({ force: true })
        columnNames.forEach((columnName) => {
            cy.get('div[eventproxy*="currentView"][class="normal"]').within(() => {
                cy.get('input.textItemLite').clear().type(columnName + '{enter}')
            })
            cy.wait(3000)
            cy.get('div[eventproxy*="fieldPickerWindow_body"][class="windowBody"]').within(() => {
                cy.contains(columnName).click()
                cy.get('img[src*="left.png"]').click()
            })
        })
        cy.get('td.button').contains('Apply').click()

        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.gridId()).rightclick()
        cy.contains('Columns...').click({ force: true })
        columnNames.forEach((columnName) => {
            cy.get('div[eventproxy*="availableView"][class="normal"]').within(() => {
                cy.get('input.textItemLite').clear().type(columnName + '{enter}')
            })
            cy.wait(3000)
            cy.get('div[eventproxy*="fieldPickerWindow_body"][class="windowBody"]').within(() => {
                cy.contains(columnName).click()
                cy.get('img[src*="right.png"]').click()
                cy.get('img[src*="up_first.png"]').click()
            })
        })
        cy.get('td.button').contains('Apply').click()

        // Check Multi Choice picker
        const namesList2 = ['Category Manufacturing Adjusted Site', 'Packaging Adjusted Site', 'Product Family Name', 'Region', 'Issue Status', 'Country', 'Seriousness', 'Disposition']

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.Filtered.APRPQRView.checkMultiChoicePickerColumns(namesList2);

        // Logout
        GQ.logout()


    })
})