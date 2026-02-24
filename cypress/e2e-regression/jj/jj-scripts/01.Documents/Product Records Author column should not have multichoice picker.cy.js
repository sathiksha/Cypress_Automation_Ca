import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Bug Tracking Tests', () => {
    it('10034-Product Records Author column should not have multichoice picker', () => {
        
        // Login
        GQ.login()

        // Documents Tab
        GQ.Planets.Documents.openLandingPage()

        // Documents Table View Check
        cy.getColumnsAndTypes(
            GQ.Planets.Documents.Documents.headerID
        )
        .then(tableInfo => {
            let availableCols = []
            let expectedColumns = ['Author']
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumns.length; i++) {
                expect(availableCols).to.include(expectedColumns[i])
            }
        })

        // Test Text box
        cy.testTextBox(
            GQ.Planets.Documents.Documents.authorInputID,
            ['Mitch', 'Sanjiv']
        )

        // Logout
        GQ.logout()
    })
})