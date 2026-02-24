import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Bug Tracking Tests', () => {
    it('8816- Excel or CSV Download Record limit of 25k is not enforced in QXF and QXD pages of systems under Interface Management', () => {
        // Login
        GQ.login('PQM360 General User')

        // Delete
        cy.deleteDownloadsFolder()

        // Element Lib
        GQ.NavBar.ElementLibrary.openLandingPage()

        // Interface Data
        GQ.NavBar.ElementLibrary.InterfaceData.open()

        // Trackwise
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.openLandingPage()

        // QXF
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackWiseQXF.openLandingPage()

        // QXD
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.openLandingPage()

        // PR
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDPR.openLandingPage()

        // Download
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDPR.download()

        // Click X
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDPR.clickX()

        // Refresh
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDPR.refresh()

        // Toggle Filtter
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDPR.toggleFilter()

        // Filter for Sample text - may change if new data has come
        cy.getSC(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDPR.nameID()
        ).clear().type('CAPA{enter}')

        
        cy.wait(2000)
        cy.waitForSCDone()
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDPR.download()

        cy.getRowCount(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDPR.getRowCount()
          ).then((num)=>{
            if (Number(num) <= 25000) {
                // Verify it is downloaded
                cy.verifyDownload('Results.xlsx', { timeout: 60000 });
            }
        })

        // Logout
        GQ.logout()
    })
})

