import { GQTest } from '../../jj-pages/GQTest'
// Sprint 6
require('cypress-xpath')
describe('Sprint 15', () => {
    const GQ = new GQTest();
    it('Automation Testing: Regulatory Affairs > Indications', () => {

        // Login 
        GQ.login()

        // Go to element library
        GQ.NavBar.ElementLibrary.openLandingPage()

        // Click Interface data
        GQ.NavBar.ElementLibrary.InterfaceData.open()

        // GRA Insight
        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.openLandingPage()

        // QXF should be visible
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXF.locator).should('be.visible')

        // QXD should be visible
        cy.getSC(GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.QXD.locator).should('be.visible')

        GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.regulatoryIndications()

        let expectedColumnsQXF = [
            'Product Family ID',
            'Application ID',
            'Product ID',
            'Packset Specification ID',
            'Product Detail Set ID',
            'Registration ID',
            'Approved For Pediatric Use',
            'Indication Intended Use Comments',
            'Indications Intended Use',
            'Labeled Indication English',
            'Labeled Indication Local Language If Other Than English',
            'Labeled Indication Comments',
            'Labeled Indication Status',
            'Pediatric Use Details',
            'Load Date'
        ];

        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.GRAInsight.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXF.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXF[i])
            }
        })
        GQ.logout()
    })

})
