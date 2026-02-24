import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Bug Tracking Tests', () => {
    it('9129-Investigate Why Quality Management Planet Comet CAPA is taking 15 seconds to load the selector', () => {
            // Login 
            GQ.login()

            // Quality Management
            GQ.Planets.QualityManagement.openLandingPage()

            // Capa
            GQ.Planets.QualityManagement.CAPAs.openLandingPage()

            // Refresh
            GQ.Planets.QualityManagement.CAPAs.refresh()

            // Logout
            GQ.logout()


    })
})
