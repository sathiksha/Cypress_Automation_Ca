import { GQTest } from "../../../jj-pages/GQTest";
describe('19331-Allows APR PQR view of CAPAs COMET', () => {
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

        // Quality Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        // CAPAs
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()

        // Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.open()

        // APR/PQR view
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.clickAPRPQRView()

        let expectedColumnsQXD = [
            '👁',
            'Number',
            'Related Nonconformances',
            'Name',
            'Description',
            'Status',
            'Stage',
            'Level 1 Cause',
            'Level 2 Cause',
            'Batch ID/Lot No',
            'Material or Item',
            'Disposition Type',
            'Related CPA/Correction and State',
            'Related CPA/Correction and Stage',
            'Title (ACT)',
            'Action Type (ACT)',
            'Related Effectiveness Plan Number',
            'Related Effectiveness Plan Status',
            'Related Effectiveness Plan Completion Date',
            'Related Effectiveness Review and Status',
            'Related Effectiveness Review Title',
            'Related Effectiveness Review Resolution',
            'Product Type',
            'Disposition Details',
            'Material Continuation Decision',
            'Created Date',
            'Site Name',
            'CAPA Type',
            'Completed On',
            'Cause Sub-Category',
            'Product Grouping',
            'Material Description'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(JSON.stringify(availableCols), typeof (availableCols))
            cy.log(expectedColumnsQXD.length, "expects columns length")

            // JSON.stringify(expectedColumnsQXD).forEach(i => {expect(JSON.stringify(availableCols)).to.include(i)})

            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                cy.log(expectedColumnsQXD[i], 'indentifier')
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }
        })

        cy.wait(2000)

        // close the selector screen on left
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/selectorButton/closeButton/icon').click()

       const columnNames = ['Status', 'Stage', 'Action Type (ACT)', 'Related Effectiveness Plan Status', 'Site Name']
 
    cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.gridId()).rightclick()
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
    
        cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.gridId()).rightclick()
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
        // Verify Multichoice picker
        const namesList = ['Status', 'Stage', 'Action Type (ACT)', 'Related Effectiveness Plan Status', 'Site Name']

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.APRPQRView.checkMultiChoicePickerColumns(namesList)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.Filtered.clickAPRPQRView()

        // Maximize selector
        GQ.Planets.Product.ProductFamilies.ProductFamily.maximizeSelector()

        // Logout
        GQ.logout()

    })
})