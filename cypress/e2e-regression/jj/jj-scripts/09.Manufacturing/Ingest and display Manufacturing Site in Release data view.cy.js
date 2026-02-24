import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
describe('Bug Tracking Test', () => {
    it('8077-Ingest and display Manufacturing Site in Release data view', () => {
        const GQ = new GQTest()
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
        cy.get('div[style="display:inline-block;max-width:100%;text-align:left;vertical-align:middle"]').then(($headers) => {
            let tableInfo = { columns: [] };
            let expectedColumn = 'MANUFACTURINGSITE'
            $headers.each((index, header) => {
                if (header && header.textContent) {
                    tableInfo.columns.push(header.textContent.trim());
                }
            });
            cy.log("Extracted Column Headers:", JSON.stringify(tableInfo.columns));
            if (tableInfo.columns.includes(expectedColumn)) {
                cy.log(`Column "${expectedColumn}" is available.`);
            } else {
                cy.log(`Column "${expectedColumn}" is NOT available.`);
                throw new Error(`Column "${expectedColumn}" is missing!`);
            }
        });
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