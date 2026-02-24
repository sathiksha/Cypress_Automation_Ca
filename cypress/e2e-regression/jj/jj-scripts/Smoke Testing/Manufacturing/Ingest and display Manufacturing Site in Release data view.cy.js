import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('Ingest and display Manufacturing Site in Release data view', () => {
        const GQ = new GQTest();
    
        // Login
        GQ.login()

        // Element Library
        GQ.NavBar.ElementLibrary.openLandingPage()

        // Interface Data
        GQ.NavBar.ElementLibrary.InterfaceData.open()

        // Interface Data
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.openLandingPage()

        // QXF
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.openLandingPage()

        // Release data
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.ReleaseData.openLandingPage()

        // Read column
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.ReleaseData.readColumn()
        // QXD
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.openLandingPage()

        // Release data
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.ReleaseData.openLandingPage()

        // Check Manufacture site
        cy.getColumnsAndTypes(
            GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.ReleaseData.batchNumberID()
        )
            .then(tableInfo => {
                let availableCols = []
                let expectedColumns = ['Manufacture Site']
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumns.length; i++) {
                    expect(availableCols).to.include(expectedColumns[i])
                }
            })

        // Logout
        GQ.logout()



    })
})