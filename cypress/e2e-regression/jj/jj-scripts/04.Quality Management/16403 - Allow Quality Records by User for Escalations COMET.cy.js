import { GQTest } from '../../jj-pages/GQTest'
describe('16403- Allow Quality Records by User for Escalations COMET', () => {
    it('16403- Allow Quality Records by User for Escalations COMET - Planet', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Arthur Caruso')

        // Escalations
        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.open()

        // Comet
        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.viewComet()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Current Level',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage',
            'Rationale Description Of Issue Change',
            'Additional Information',
            'Proposed Action/Plan',
            'Additional Sites Affected',
            'Related Product Info',
            'Related Batches',
            'User Comments'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.getColumnID()
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
        const namesList = ['Current Level',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Bookmarkrightclick()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.checkBookmarkFunationality()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Source of Issue').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Proposed Action/Plan').click()

        const formValues = [
            'Date Occurred:',
            'Date Identified:',
            'Quality Awareness Date:',
            'Escalation Lead Awareness Date:',
            'Escalation Created Date:',
            'Owner:',
            'Created By:',
            'Quality Head:',
            'J&J Employee/Contractor Contact:',
            'Other Key Contacts:',
            'Source:',
            'Source Details:',
            'Therapeutic Areas:',
            'Control Substances Related:',
            'Related to Clinical Trial:',
            'Customer Patient Impact:',
            'Site Type:',
            'Account:',
            'Site Category:',
            'Impacted Countries:',
            'GxP Scope:',
            'Proposed Action/Plan:'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.checkformsfields(formValues)
    })
    it('16403- Allow Quality Records by User for Escalations COMET - Product', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('My Family Test - Cypress')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.open()

                       GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.clickAPerson('Arthur Caruso')

         GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.openEscalations()
             // Comet
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.viewComet()
         

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.closeSideBar()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description of Issue',
            'Current Level',
            // 'Current State',
            'Owner',
            'Quality Head',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage',
            'Rationale Description Of Issue Change',
            'Additional Information',
            'Proposed Action/Plan',
            'Additional Sites Affected',
            'Related Product Info',
            'Related Batches',
            'User Comments'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.getColumnID()
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
        const namesList = ['Current Level',
            'Escalation Category',
            'Issue Meets Escalation Criteria',
            'Customer Patient Impact',
            'Status',
            'Stage'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.rightClickBookmark()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.checkBookmarkFunationality()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.openARecord()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Source of Issue').click()

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Proposed Action/Plan').click()

        const formValues = [
            'Date Occurred:',
            'Date Identified:',
            'Quality Awareness Date:',
            'Escalation Lead Awareness Date:',
            'Escalation Created Date:',
            'Owner:',
            'Created By:',
            'Quality Head:',
            'J&J Employee/Contractor Contact:',
            'Other Key Contacts:',
            'Source:',
            'Source Details:',
            'Therapeutic Areas:',
            'Control Substances Related:',
            'Related to Clinical Trial:',
            'Customer Patient Impact:',
            'Site Type:',
            'Account:',
            'Site Category:',
            'Impacted Countries:',
            'GxP Scope:',
            'Proposed Action/Plan:'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.checkformsfields(formValues)
    })
})