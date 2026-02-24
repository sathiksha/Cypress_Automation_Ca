import { GQTest } from "../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('UAT/5.0', () => {
        it('UAT-017-Stage 4 Accuracy of Data between TVV and IM360', () => {

            // Login
            GQ.login('PQM360 General User')

            // Documents planet
            // GQ.Planets.Records.openLandingPage()
            GQ.Planets.Documents.openLandingPage()

            // TruVault
            // GQ.Planets.Records.TruVAULTRecords.openLandingPage()
            GQ.Planets.Documents.Documents.openLandingPage()

            // TruVault
            // GQ.Planets.Records.TruVAULTRecords.TruVAULTRecords.openLandingPage()

            // Toggle Filter
            GQ.Planets.Documents.Documents.toggleFilter()

            // Filter Records
            GQ.Planets.Documents.Documents.filterRecord('TV-VAL-113568')

            GQ.Planets.Documents.Documents.filterRecord('TV-TEC-267688')

            GQ.Planets.Documents.Documents.filterRecord('TV-VAL-198871')

            GQ.Planets.Documents.Documents.filterRecord('TV-REF-118112')



            // Logout
            GQ.logout()



        })
    })

}
