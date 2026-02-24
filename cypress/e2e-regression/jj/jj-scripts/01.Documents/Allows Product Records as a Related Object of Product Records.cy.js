import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 3', () => {
    const GQ = new GQTest();
    it('Data from NC_Impacted_Product records where ISDELETED=true are included in UI', () => {

        // Login
        GQ.login()

        // Navigate to Documents planet 
        GQ.Planets.Documents.openLandingPage()

        // Open any record
        GQ.Planets.Documents.Documents.openRecordByIndex(0)

        // Navigate to Related Objects tab
        GQ.Planets.Documents.Documents.Document.RelatedObjects.open()

        // Expected Columns 
        let columns = [
            'Number',
            '👁',
            'Name',
            'Version',
            'Relationship Type',
            'Author',
            'Status',
            'Effective Date',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department',
            'Impacted Locations',
            'Legacy Document Number'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.Documents.Documents.Document.RelatedObjects.Documents.readRelationshipTypeColumn()
        ).then(tableInfo=>{
            let availableCols = []
            tableInfo.columns.map((obj)=>{
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
           for(let i=0;i<columns.length;i++){
            expect(availableCols).to.include(columns[i])
           }
        })

        cy.wait(2000)

        GQ.Planets.Documents.Documents.Document.RelatedObjects.Documents.toggleFilter()

        cy.wait(2000)

        cy.autoTestOnly(
            GQ.Planets.Documents.Documents.Document.RelatedObjects.Documents.readRelationshipTypeColumn()
            ,{
                'Status': [],
                'Document Type': [],
                'Document Sub-Type': [],
                'Owning Segments': [],
                'Owning Organization': [],
                'Owning Department': []
            }
        )

        // Click Product planet
        GQ.NavBar.navigateToProduct()

        //toggle filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open any record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        //    Navigate to Product Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.AllFilterOption()

        // Open Any Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.Filtered.ChildProductRecord.open()

        // Navigate to Related Objetcs tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.Filtered.ChildProductRecord.RelatedObjects.openLandingPage()
        cy.wait(15000)
        // Expected Columns 
        let columnsName = [
            'Number',
            '👁',
            'Name',
            'Version',
            'Relationship Type',
            'Author',
            'Status',
            'Effective Date',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department',
            'Impacted Locations',
            'Legacy Document Number'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.Filtered.ChildProductRecord.RelatedObjects.DocumentRelatedObjectHeaderID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < columnsName.length; i++) {
                expect(availableCols).to.include(columnsName[i])
            }
        })

        cy.wait(2000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.Filtered.ChildProductRecord.RelatedObjects.Documents.toggleFilter()

        cy.wait(2000)

        cy.autoTestOnly(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ProductRecords.Filtered.ChildProductRecord.RelatedObjects.Documents.headerID
            , {
                'Relationship Type': [],
                'Status': [],
                'Document Type': [],
                'Document Sub-Type': [],
                'Owning Segments': [],
                'Owning Organization': [],
                'Owning Department': []
            }
        )

      // Login out
        GQ.logout()

    })
})
