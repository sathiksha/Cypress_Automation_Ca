import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
require('cypress-xpath')
describe('Element Library', () => {
    it('Batches as Related Object of COMET Nonconformances isnt returning correct results', () => {
        // Login
        GQ.login()

        // Click main menu
        GQ.NavBar.ElementLibrary.InterfaceData.open()

        // COMET
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.openLandingPage()

        // QXF
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.openLandingPage()

        // Verify NC sub tab is visible 
        cy.contains('NC').should('be.visible')

        // Click on NC TAB
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.openLandingPage()

        // Click on NC_Impacted_Product
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.openLandingPage()

        // Verify NC_Impacted_Product sub tab is visible 
        cy.contains('NC_Impacted_Product').should('be.visible')

        // Toggle Filter
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.toggleFilter()

        // Filter SQXNonConformance
        cy.filterTextField(
            GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.SQXNonConformanceInputID,
            'NC-001871'
        )

        // Read the Row Count
        cy.getRowCount(
            GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.rowCountID
        ).then((firstCount) => {

            // Item Repository
            GQ.NavBar.openItemRepository()
            // Logout
            GQ.logout();

            GQ.login()
            // Open Quality management 
            GQ.Planets.QualityManagement.openLandingPage()

            // Open Nonconformance sub-tab
            GQ.Planets.QualityManagement.NonConformances.openLandingPage()

            // COMET should be selected by default
            cy.contains('COMET').should('be.visible')

            //Open NonConformances
            GQ.Planets.QualityManagement.NonConformances.Comet.toggleFilter()

            // Filter for the string
            cy.filterTextField(
                GQ.Planets.QualityManagement.NonConformances.Comet.NumberInputID,
                'NC-001871'
            )

            // Open Record
            GQ.Planets.QualityManagement.NonConformances.Comet.selectRecordByIndex(0)

            // Open Related Objects
            GQ.Planets.QualityManagement.NonConformances.Comet.CometRecord.RelatedObjects.open()

            // Open Batches
            GQ.Planets.QualityManagement.NonConformances.Comet.CometRecord.RelatedObjects.Batches.open()

            // Get Row Count
            cy.getRowCount(
                GQ.Planets.QualityManagement.NonConformances.Comet.CometRecord.RelatedObjects.Batches.rowCountID
            ).then((secondCount) => {
                expect(secondCount).to.equal(firstCount)
            })
        })

        // Logout
        GQ.logout();

    })
})