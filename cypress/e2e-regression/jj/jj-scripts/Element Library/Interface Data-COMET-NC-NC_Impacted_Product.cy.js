import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 3', () => {
    const GQ = new GQTest();
    it('Data from NC_Impacted_Product records where ISDELETED=true are included in UI', () => {

        // Login 
        GQ.login()

        // Go to element library
        GQ.NavBar.ElementLibrary.openLandingPage()

        // Click Interface data
        GQ.NavBar.ElementLibrary.InterfaceData.open()

        // Navigate to Comet tab
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.openLandingPage()

        // Click QXF tab
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.openLandingPage()

        // Click NC tab
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.openLandingPage()

        // Click NC Impacted Product tab
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.openLandingPage()

        // Toggle filter
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.toggleFilter()
        
        cy.filterTextField(
            GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.SQXNonConformanceInputID,
            'NC-002366'
        )

        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.openColumns()
        
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.moveAllVisibleToAvailable()

        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.addColumnToVisible('ISDELETED')
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.addColumnToVisible('PART_NUMBER')
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.addColumnToVisible('SQX_NONCONFORMANCE_NUMBER')
        
        GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.applyAndCloseColumns()

        cy.getSC(
            GQ.NavBar.ElementLibrary.InterfaceData.COMET.QXF.NC.NC_Impacted_Product.partNumberFirstRowValue
        ).invoke('text').then(expectedPartNumber => {
            
        cy.wait(5000)
        // Home page
        GQ.NavBar.Home.openLandingPage()

        // Navigate to Quality management planet
        GQ.Planets.QualityManagement.openLandingPage()

        // Navigate to Nonconformances tab
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        // Click Comet from the dropdown
        GQ.Planets.QualityManagement.NonConformances.viewComet()

        // Toggle Filter
        GQ.Planets.QualityManagement.NonConformances.Comet.toggleFilter()


        cy.filterTextField(
            GQ.Planets.QualityManagement.NonConformances.Comet.NumberInputID,
            'NC-002366'
        )

        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.Comet.materialOrItemFirstRowValue
        ).invoke('text').then(actualPartNumber => {
            expect(actualPartNumber).to.equal(expectedPartNumber)
        })
        })

    

        // Logout
        GQ.logout()

    })
})
