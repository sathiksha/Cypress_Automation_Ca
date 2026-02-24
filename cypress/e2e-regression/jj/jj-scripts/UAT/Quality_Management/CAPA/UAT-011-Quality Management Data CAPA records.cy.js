import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
describe('UAT/5.0', () => {
    it('UAT-011-Quality Management Data CAPA records', () => {

    // Login
    GQ.login('PQM360 General User')

    // Quality Management planet
    GQ.Planets.QualityManagement.openLandingPage()
    
    // Capa
    GQ.Planets.QualityManagement.CAPAs.openLandingPage()

    // Trackwise
    GQ.Planets.QualityManagement.CAPAs.viewTrackwise()

    // Comet
    GQ.Planets.QualityManagement.CAPAs.viewComet()

    // Open Record
    GQ.Planets.QualityManagement.CAPAs.openRecordByIndex(0)

    // Related objects
    GQ.Planets.QualityManagement.CAPAs.CAPARecord.RelatedObjects.open()


    // Logout
    GQ.logout()

    })
})


